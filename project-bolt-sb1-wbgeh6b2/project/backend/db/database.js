import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { mkdir, readFile, writeFile } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dataDir = __dirname;
const dataFile = join(dataDir, 'contacts.json');

async function ensureStore() {
  await mkdir(dataDir, { recursive: true });

  try {
    await readFile(dataFile, 'utf8');
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throw error;
    }

    await writeFile(
      dataFile,
      JSON.stringify({ nextId: 1, contacts: [] }, null, 2),
      'utf8'
    );
  }
}

async function readStore() {
  await ensureStore();
  const raw = await readFile(dataFile, 'utf8');
  return JSON.parse(raw);
}

async function writeStore(store) {
  await writeFile(dataFile, JSON.stringify(store, null, 2), 'utf8');
}

export async function addContact(contact) {
  const store = await readStore();
  const savedContact = {
    id: store.nextId,
    ...contact,
    created_at: new Date().toISOString(),
  };

  store.nextId += 1;
  store.contacts.unshift(savedContact);
  await writeStore(store);

  return savedContact;
}

export async function getContacts() {
  const store = await readStore();
  return store.contacts;
}

import { initializeApp, cert } from 'firebase-admin/app';

const serviceAccount = require('./path/to/serviceAccountKey.json');

initializeApp({
  credential: cert(serviceAccount),
});
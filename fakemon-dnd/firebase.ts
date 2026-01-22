import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBVU1rz-Wqv9VRsy2l7ncHgLlKnoFRINp0",
  authDomain: "fakemon-dnd.firebaseapp.com",
  projectId: "fakemon-dnd",
  storageBucket: "fakemon-dnd.firebasestorage.app",
  messagingSenderId: "513846877513",
  appId: "1:513846877513:web:9f1a31a76c29c601500e98"
};

const app = initializeApp(firebaseConfig);

// 👇 THIS is what you need
export const auth = getAuth(app);

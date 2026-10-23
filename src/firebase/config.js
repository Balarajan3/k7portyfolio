import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBsGE9oV_6uzZmFc4A2yekJA9DeBpenNno",
  authDomain: "k7portfolio.firebaseapp.com",
  projectId: "k7portfolio",
  storageBucket: "k7portfolio.firebasestorage.app",
  messagingSenderId: "1038430460990",
  appId: "1:1038430460990:web:d7f63667d6ddb47f9e856f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Helper to save site data to Firestore
export const savePortfolioDataToFirestore = async (data) => {
  try {
    const docRef = doc(db, "portfolio", "content");
    await setDoc(docRef, data, { merge: true });
    return { success: true };
  } catch (error) {
    console.warn("Firestore save warning (falling back to local):", error.message);
    return { success: false, error: error.message };
  }
};

// Helper to load site data from Firestore
export const loadPortfolioDataFromFirestore = async () => {
  try {
    const docRef = doc(db, "portfolio", "content");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { success: true, data: docSnap.data() };
    }
    return { success: false, reason: "not_found" };
  } catch (error) {
    console.warn("Firestore fetch warning (using local/defaults):", error.message);
    return { success: false, error: error.message };
  }
};

export default app;


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyB7XTxeWUyRr-aE8hHFrSj-bD8iks2-S0s",
  authDomain: "cooking-assistant-59c87.firebaseapp.com",
  projectId: "cooking-assistant-59c87",
  storageBucket: "cooking-assistant-59c87.appspot.com",
  messagingSenderId: "352830590156",
  appId: "1:352830590156:web:cebeea79db54160b084669",
  measurementId: "G-NWRVR8CKET"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)


const recipesCollectionRef = collection(db, "recipes")

export async function getRecipes() {
  const snapshot = await getDocs(recipesCollectionRef)
  const recipes = snapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))
  return recipes
}


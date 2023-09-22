import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, OAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { motion } from 'framer-motion';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  measurementId: import.meta.env.VITE_measurementId
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export function SignIn() {
    const signInWithGoogle = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          if (CheckForUser() === false){
            SetUpUser();
          }
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.customData.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
        });
    }
    return (
      <>
        <motion.button whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className='bg-violet-700 rounded-lg shadow-lg p-3 text-center text-white' onClick={signInWithGoogle}>
            <p className=' font-semibold text-md md:text-lg'>Sign In With Google</p>
        </motion.button>
      </>
    )
  }
  
export function SignOut() {
    return auth.currentUser && (
      <motion.button
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="rounded-md whitespace-nowrap bg-violet-700 px-4 py-2 text-sm font-medium text-white shadow"
        onClick={() => auth.signOut()}
      >
        Sign Out
      </motion.button>
    )
}
 export function SetUpUser() {
  const uidUsers = "users/" + auth.currentUser.uid
  const userDocs = doc(db, uidUsers)
  const docData = {
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
    uid: auth.currentUser.uid,
    credits: 0,
    subscribed: false,
    log: []
  }
  setDoc(userDocs, docData, { merge: true });
}

export async function CheckForUser() {
  const docRef = doc(db, "users", auth.currentUser.uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return true
  } else {
    return false
  }
}

export async function getCredits() {
  const docRef = doc(db, "users", auth.currentUser.uid);
  const docSnap = await getDoc(docRef);
  return docSnap.data().credits;
}

export async function getSubscription() {
  const docRef = doc(db, "users", auth.currentUser.uid);
  const docSnap = await getDoc(docRef);

  return docSnap.data().subscribed;
}

export async function ChangeCredits(number) {
  let credits = await getCredits()
  let newCredits = credits + number
  const uidUsers = "users/" + auth.currentUser.uid
  const userDocs = doc(db, uidUsers)
  const docData = {
    credits: newCredits,
  }
  setDoc(userDocs, docData, { merge: true });
}

export async function ChangeSubscriptionType(bool) {
  const uidUsers = "users/" + auth.currentUser.uid
  const userDocs = doc(db, uidUsers)
  const docData = {
    subscribed: bool,
  }
  setDoc(userDocs, docData, { merge: true });
}

export async function LogMessage(input, output, credited) {
  let time = new Date().toLocaleString().replace(/\//g, "-");
  const uidUsers = "users/" + auth.currentUser.uid + "/log/" + time
  const userDocs = doc(db, uidUsers)
  const docData = {
    input: input,
    output: output,
    credited: credited
  }
  setDoc(userDocs, docData, { merge: true });
}

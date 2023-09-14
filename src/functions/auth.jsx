import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc } from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider, signInWithPopup, OAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { motion } from 'framer-motion';

const firebaseConfig = {
  apiKey: "AIzaSyAuEL6ae7wb4KosIaNtw8Zim6_RgF3n_Gw",
  authDomain: "leaselure.firebaseapp.com",
  projectId: "leaselure",
  storageBucket: "leaselure.appspot.com",
  messagingSenderId: "819339617498",
  appId: "1:819339617498:web:33e6f134c18c993fd631e3",
  measurementId: "G-HQKWT01G3D"
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
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.customData.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
        });
    }
    // const signInWithApple = () => {
    //   const provider = new OAuthProvider('apple.com');
    //   provider.addScope('email');
    //   provider.addScope('name');
    //   signInWithPopup(auth, provider)
    //     .then((result) => {
    //       const user = result.user;
    //       const credential = OAuthProvider.credentialFromResult(result);
    //       const accessToken = credential.accessToken;
    //       const idToken = credential.idToken;
    //     })
    //     .catch((error) => {
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       const email = error.customData.email;
    //       const credential = OAuthProvider.credentialFromError(error);
    //     });
    // }
    return (
      <>
        <motion.button whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className='bg-violet-700 rounded-lg shadow-lg p-3 text-center text-white' onClick={signInWithGoogle}>
            <h4 className=' font-semibold text-md md:text-lg'>Sign In With Google</h4>
        </motion.button>
        {/* <motion.button whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className='bg-slate-500 rounded-lg shadow-lg p-3 text-center text-white' onClick={signInWithApple}>
            <h4 className=' font-semibold text-md md:text-lg'>Sign In With Apple</h4>
        </motion.button> */}
      </>
    )
  }
  
export function SignOut() {
    return auth.currentUser && (
        <motion.button whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className='rounded-md bg-violet-700 px-5 py-2.5 text-sm font-medium text-white shadow' onClick={() => auth.signOut()}>
        Sign Out
        </motion.button>
    )
}
 export function WriteUserData() {
  const uidUsers = "users/" + auth.currentUser.uid
  const userDocs = doc(firestore, uidUsers)
  const docData = {
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
    uid: auth.currentUser.uid
  }
  setDoc(userDocs, docData, { merge: true });
}
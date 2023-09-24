import { ChangeCredits, ChangeSubscriptionType, SignOut, getCredits, getSubscription } from "../functions/auth"
import { motion } from "framer-motion"
import { getAuth } from "firebase/auth";

export default function Settings() {
  const auth = getAuth();

    return (
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <h2
            className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-10"
            >
            Settings
            </h2>
            <div className="grid space-y-3">
            {
                getSubscription() ?
                <motion.button
                href='/settings'
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="rounded-md whitespace-nowrap bg-violet-700 px-4 py-2 text-sm font-medium text-white shadow "
                onClick={(e) => ChangeSubscriptionType(false)}>
                End Subscription
                </motion.button>
                :
                null
            }
                <motion.button
                href='/settings'
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="rounded-md whitespace-nowrap bg-violet-700 px-4 py-2 text-sm font-medium text-white shadow "
                onClick={(e) => {ChangeSubscriptionType(false); auth.signOut()}}>
                Delete Account
                </motion.button>
                <SignOut/>
            </div>
            </div>
    )
}
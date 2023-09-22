import { useEffect, useState } from 'react';
import logo from '../assets/icon-192-maskable.png'
import { SignOut, auth, getCredits, getSubscription } from '../functions/auth'
import { motion } from 'framer-motion';
export default function header() {
    const userHighResPhoto = auth.currentUser.photoURL.replace("s96-c", "s400-c", true);
    const [drawer, setDrawer] = useState(false)
    const [credits, setCredits] = useState(0)
    const [subscribed, setSubscribed] = useState(false)
    useEffect(() => {
        async function fetchCredits() {
            try {
                const userCredits = await getCredits();
                const sub = await getSubscription();
                setCredits(userCredits);
                setSubscribed(sub)
            } catch (error) {
                console.error('Error fetching credits:', error);
            }
        }
        fetchCredits();
    }, [])

    return (
        <header>
            <div className="mx-auto max-w-screen-xl">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <a className="block text-violet-700" href="/">
                        <span className="sr-only">Home</span>
                        <motion.img alt='Purple House - LeaseLure Logo' src={logo} whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className='rounded-xl w-12'/>
                        </a>
                    </div>

                    <div className="grid place-items-end relative">
                        <div className='flex'>
                        { subscribed ? 
                        <motion.a whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}  href='/pricing' className='mr-3 text-gray-400 grid place-items-center'>Subscribed</motion.a>
                        :
                            <motion.a whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}  href='/pricing' className='mr-3 text-gray-600 grid place-items-center'>{credits} credits</motion.a>
                        }
                            <motion.button className='' whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} onClick={() => setDrawer(!drawer)} >
                                <img className="rounded-3xl w-12" src={userHighResPhoto}
                                    alt="User Profile Image From Google" />
                            </motion.button>
                        </div>
                        {
                            drawer === false ? null : (
                            <div className="absolute grid top-full mt-2 space-y-2 place-items-end">
                                <motion.a
                                href='/settings'
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                className="rounded-md whitespace-nowrap bg-violet-700 px-4 py-2 text-sm font-medium text-white shadow "
                                >
                                    Settings
                                </motion.a>
                                <SignOut/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            </header>
    )
}
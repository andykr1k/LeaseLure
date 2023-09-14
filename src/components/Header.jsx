import logo from '../assets/icon-192-maskable.png'
import { SignOut } from '../functions/auth'

export default function header() {
    return (
        <header class="bg-white">
            <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div class="flex h-16 items-center justify-between">
                <div class="flex-1 md:flex md:items-center md:gap-12">
                    <a class="block text-violet-700" href="/">
                    <span class="sr-only">Home</span>
                    <img src={logo} className='rounded-xl w-12'/>
                    </a>
                </div>

                <div class="md:flex md:items-center md:gap-12">
                    <div class="flex items-center gap-4">
                    <div class="sm:flex sm:gap-4">
                        <SignOut/>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </header>
    )
}
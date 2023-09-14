import { CheckoutForm, SubCheckoutForm } from "../components"

export default function Pricing() {

    return (
        <div class="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
                <div
                class="rounded-2xl border border-gray-200 p-6 shadow-md sm:px-8 lg:p-12"
                >
                <div class="text-center">
                    <h2 class="text-lg font-medium text-gray-900">
                    One Credit
                    <span class="sr-only">Plan</span>
                    </h2>

                    <p class="mt-2 sm:mt-4">
                    <strong class="text-3xl font-bold text-gray-900 sm:text-4xl">
                        4.99$
                    </strong>

                    </p>
                </div>

                <ul class="mt-6 space-y-2">
                    <li class="flex items-center gap-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-5 w-5 text-indigo-700"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                        />
                    </svg>

                    <span class="text-gray-700"> One Description </span>
                    </li>

                    <li class="flex items-center gap-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-5 w-5 text-indigo-700"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                        />
                    </svg>

                    <span class="text-gray-700"> Email support </span>
                    </li>
                </ul>

                <CheckoutForm/>
                </div>
                <div
                class="rounded-2xl border border-indigo-600 p-6 shadow-md ring-1 ring-indigo-600 sm:order-last sm:px-8 lg:p-12"
                >
                <div class="text-center">
                    <h2 class="text-lg font-medium text-gray-900">
                    Subscription
                    <span class="sr-only">Plan</span>
                    </h2>

                    <p class="mt-2 sm:mt-4">
                    <strong class="text-3xl font-bold text-gray-900 sm:text-4xl">
                        9.99$
                    </strong>

                    <span class="text-sm font-medium text-gray-700">/month</span>
                    </p>
                </div>

                <ul class="mt-6 space-y-2">
                    <li class="flex items-center gap-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-5 w-5 text-indigo-700"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                        />
                    </svg>

                    <span class="text-gray-700"> Unlimited Descriptions </span>
                    </li>

                    <li class="flex items-center gap-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-5 w-5 text-indigo-700"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                        />
                    </svg>

                    <span class="text-gray-700"> Email support </span>
                    </li>

                    <li class="flex items-center gap-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-5 w-5 text-indigo-700"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                        />
                    </svg>

                    <span class="text-gray-700"> Phone support </span>
                    </li>
                </ul>

                <SubCheckoutForm/>
                </div>
            </div>
            </div>
    )
}
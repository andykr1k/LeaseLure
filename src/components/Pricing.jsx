import { CheckoutForm, SubCheckoutForm } from "."
export default function Pricing() {

    return (
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <h2
            className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-10"
            >
            Pricing
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
                <div
                className="rounded-2xl border border-gray-200 p-6 shadow-md sm:px-8 lg:p-12"
                >
                <div className="text-center">
                    <h2 className="text-lg font-medium text-gray-900">
                    One Credit
                    <span className="sr-only">Plan</span>
                    </h2>

                    <p className="mt-2 sm:mt-4">
                    <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        4.99$
                    </strong>

                    </p>
                </div>

                <ul className="mt-6 space-y-2">
                    <li className="flex items-center gap-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5 text-indigo-700"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                        />
                    </svg>

                    <span className="text-gray-700"> One Description </span>
                    </li>

                    <li className="flex items-center gap-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5 text-indigo-700"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                        />
                    </svg>

                    <span className="text-gray-700"> Email support </span>
                    </li>
                </ul>

                <CheckoutForm/>
                </div>
                <div
                className="rounded-2xl border border-indigo-600 p-6 shadow-md ring-1 ring-indigo-600 sm:order-last sm:px-8 lg:p-12"
                >
                <div className="text-center">
                    <h2 className="text-lg font-medium text-gray-900">
                    Subscription
                    <span className="sr-only">Plan</span>
                    </h2>

                    <p className="mt-2 sm:mt-4">
                    <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        9.99$
                    </strong>

                    <span className="text-sm font-medium text-gray-700">/month</span>
                    </p>
                </div>

                <ul className="mt-6 space-y-2">
                    <li className="flex items-center gap-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5 text-indigo-700"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                        />
                    </svg>

                    <span className="text-gray-700"> Unlimited Descriptions </span>
                    </li>

                    <li className="flex items-center gap-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5 text-indigo-700"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                        />
                    </svg>

                    <span className="text-gray-700"> Email support </span>
                    </li>

                    <li className="flex items-center gap-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5 text-indigo-700"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                        />
                    </svg>

                    <span className="text-gray-700"> Phone support </span>
                    </li>
                </ul>

                <SubCheckoutForm/>
                </div>
            </div>
            </div>
    )
}
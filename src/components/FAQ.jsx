export default function FAQ() {
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16 space-y-4">
            <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            FAQ            
            </h2>
            <details
                className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
            >
                <summary
                className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900"
                >
                <h2 className="font-medium">
                    What is LeaseLure?
                </h2>

                <span className="relative h-5 w-5 shrink-0">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    </svg>

                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    </svg>
                </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                LeaseLure is an easy-to-use tool to generate rental properties descriptions in seconds.
                </p>
            </details>

            <details
                className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
            >
                <summary
                className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900"
                >
                <h2 className="font-medium">
                    How do you use LeaseLure?
                </h2>

                <span className="relative h-5 w-5 shrink-0">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    </svg>

                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    </svg>
                </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                All you need to do is enter the address and watch the magic happen!
                </p>
            </details>
            <details
                className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
            >
                <summary
                className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900"
                >
                <h2 className="font-medium">
                    Are there any refunds?
                </h2>

                <span className="relative h-5 w-5 shrink-0">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    </svg>

                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    </svg>
                </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                Since LeaceLure is a digital service, we are not able to participate in refunds. Once you have used the tool, our resources have been used. 
                </p>
            </details>
            </div>
    )
}
export default function CTA() {
    return (
    <div className="mx-auto max-w-screen-xl py-12 lg:py-16 ">

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
        <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">

            <p className=" text-gray-700">
            Enter Rental Listing Address.
            </p>
        </blockquote>

        <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">

            <p className=" text-gray-700">
            Generate Rental Listing Summary...
            </p>
        </blockquote>

        <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">

            <p className=" text-gray-700">
            Export in Text and Markdown!
            </p>
        </blockquote>
        </div>
    </div>
    )
}
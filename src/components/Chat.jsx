import { useState } from "react"
import { Generate } from "../functions/generate"
export default function Chat() {
    const [description, setDescription] = useState('')
    const [input, setInput] = useState('')
    function generateDescription(){
        setDescription(Generate(input))
    }
    return (
        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-screen-xl pb-5 pt-5">
                <div>
                    {description}
                </div>
                <div
                    className="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-violet-600 focus-within:ring-1 focus-within:ring-violet-600"
                >
                    <div className="flex items-center align-center justify-end gap-2 bg-white p-3">
                    <textarea
                    id="OrderNotes"
                    className="w-full align-center bg-transparent resize-none border-none px-3 text-sm font-medium focus:outline-none"
                    placeholder="Enter the listing address..."
                    onChange={(e) => setInput(e.target.value)}
                    ></textarea>
                    <button
                        type="button"
                        className="rounded bg-violet-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-violet-800"
                        onClick={(e) => generateDescription(e)}
                    >
                        Generate
                    </button>
                    </div>
                </div>
            </div>
        </div>        
    )
}
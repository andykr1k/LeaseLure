import { useState } from "react"
import { Generate } from "../functions/generate"
import { ChangeCredits, LogMessage, getCredits } from "../functions/auth";
import Loading from "./Loading";

export default function Chat() {
    const [description, setDescription] = useState('')
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const [generating, setGenerating] = useState(false)
    async function generateDescription(){
        setGenerating(true)
        setLoading(true)
        if (await getCredits() > 0) {
            setDescription(await Generate(input))
            setLoading(false)
            if (await description.length > 500){
                await ChangeCredits(-1)
                LogMessage(input, await description, true)
            } else {
                LogMessage(input, await description, false)
            }
        } else {
            setDescription("You have not subscribed and have no credits to generate a listing summary. Click on \"Credits\" next to your profile picture to purchase a subscription or credits.")
            setLoading(false)
        }
    }
    return (
        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-screen-xl pb-5 pt-5">
                { generating ? 
                    <div className="rounded-lg text-xs md:text-md lg:text-lg bg-gray-50 mb-5 p-6 shadow-sm sm:p-8 text-left">
                        {loading ? <Loading/> : description}
                    </div>
                    :
                    null
                }
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
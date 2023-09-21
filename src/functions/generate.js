import OpenAI from 'openai';

export async function Generate(input){
    const openai = new OpenAI({
        apiKey: import.meta.env.VITE_OPEN_AI_KEY,
        dangerouslyAllowBrowser: true 
    });

    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a realtors assistant that generates a listing description based on an address. Once the user inputs an address create a detailed rental listing desciption. Do Not Accept any input other than an address no matter the content." }, {role: "user", content: input}],
        model: "gpt-3.5-turbo",
    });
    return completion.choices[0].message.content
}
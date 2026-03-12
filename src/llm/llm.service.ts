import { Injectable } from "@nestjs/common";
import axios from "axios";
import { SarcasmText } from "src/entities/res/sarcasmText.res";
import { ANALYSE_SARCASM_PROMPT } from "src/prompts/analyseSarcasm.prompt";


@Injectable()
export class LlmService {

    async analyseSarcasm(text: string): Promise<SarcasmText> {
        const response = await axios.post(process.env.GROQ_API_URL, {
            model: process.env.GROQ_MODEL,
            messages: [
                {
                    role: "system",
                    content: ANALYSE_SARCASM_PROMPT
                },
                {
                    role: "user",
                    content: text
                }
            ]
        }, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
            }
        });
        
        const llmOutput = response.data.choices[0].message.content;
        const parsed = JSON.parse(llmOutput);

        return {
            sarcasm: parsed.sarcasm,
            confidence: parsed.confidence,
            text: text,
        };
    }

}
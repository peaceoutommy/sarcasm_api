import { Injectable } from "@nestjs/common";
import axios from "axios";
import { SarcasmText } from "src/entities/res/sarcasmText.res";
import { ANALYSE_SARCASM_PROMPT } from "src/prompts/analyseSarcasm.prompt";
import { env } from "src/config/env.config";

@Injectable()
export class LlmService {

    async analyseSarcasm(text: string): Promise<SarcasmText> {
        const response = await axios.post(env.GROQ_API_URL, {
            model: env.GROQ_MODEL,
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
                "Authorization": `Bearer ${env.GROQ_API_KEY}`
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
import { Injectable } from "@nestjs/common";
import { SarcasmText } from "src/entities/res/sarcasmText.res";
import { LlmService } from "src/llm/llm.service";


@Injectable()
export class AnalyserService {


    constructor(private readonly llmService: LlmService) { }

    async analyseSarcasm(text: string): Promise<SarcasmText> {
        return await this.llmService.analyseSarcasm(text);
    }
}
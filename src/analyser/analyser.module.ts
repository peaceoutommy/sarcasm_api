import { Module } from "@nestjs/common";
import { AnalyserService } from "./analyser.service";
import { AnalyserGateway } from "./analyser.gateway";
import { LlmModule } from "src/llm/llm.module";


@Module({
    imports: [LlmModule],
    providers:[AnalyserService, AnalyserGateway]
})

export class AnalyserModule {}
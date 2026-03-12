import { Module } from '@nestjs/common';
import { LlmModule } from './llm/llm.module';
import { AnalyserModule } from './analyser/analyser.module';

@Module({
  imports: [AnalyserModule, LlmModule],
})
export class AppModule {}

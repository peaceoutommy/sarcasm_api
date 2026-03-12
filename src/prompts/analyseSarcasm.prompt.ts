export const ANALYSE_SARCASM_PROMPT = `
You are a sarcasm detection system.

Analyze the following message and determine if it contains sarcasm.

Return JSON only in the following format:

{
  "sarcasm": true or false,
  "confidence": number between 0 and 1
}

Message:
`;
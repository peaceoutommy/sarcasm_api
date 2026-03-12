export const env = {
    GROQ_API_URL: process.env.GROQ_API_URL ?? (() => { throw new Error("Missing GROQ_API_URL") })(),
    GROQ_API_KEY: process.env.GROQ_API_KEY ?? (() => { throw new Error("Missing GROQ_API_KEY") })(),
    GROQ_MODEL:   process.env.GROQ_MODEL   ?? (() => { throw new Error("Missing GROQ_MODEL") })(),
};
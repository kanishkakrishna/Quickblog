import { GoogleGenAI } from "@google/genai";

// Initialize Gemini AI with your API key
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main(prompt) {
  const result = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [{ role: "user", parts: [{ text: prompt }] }],
  });

  const text = await result.response.text(); // ✅ fixed here
  return text;
}

export default main;

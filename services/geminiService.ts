
import { GoogleGenAI } from "@google/genai";

// Ensure the API key is available in the environment variables
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // This is a fallback for development and will be displayed in the UI.
  // In a production environment, the key should be securely set.
  console.warn("Gemini API key not found in environment variables.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const generateRecognitionMessage = async (reason: string, recipientName: string, senderName: string): Promise<string> => {
    if (!API_KEY) {
      return Promise.resolve(`Thank you, ${recipientName}, for your excellent work on ${reason}. Your contribution is greatly appreciated. - ${senderName}`);
    }

    const prompt = `You are a helpful assistant for writing professional and warm recognition messages in a corporate setting.
    Generate a concise and heartfelt recognition message (about 2-3 sentences).
    The message is from: ${senderName}
    The message is for: ${recipientName}
    The reason for recognition is: "${reason}"
    Do not use markdown or hashtags.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        temperature: 0.7,
        topP: 0.9,
        // Disable thinking to get a faster response for this UI interaction
        thinkingConfig: { thinkingBudget: 0 }
      }
    });
    
    return response.text.trim();
  } catch (error) {
    console.error("Error generating message with Gemini API:", error);
    return `Thank you for your hard work on "${reason}"! Your efforts are noticed and valued.`;
  }
};

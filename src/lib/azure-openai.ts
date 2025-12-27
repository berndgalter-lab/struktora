import { AzureOpenAI } from "openai";

// Azure OpenAI Client
const client = new AzureOpenAI({
  endpoint: process.env.AZURE_OPENAI_ENDPOINT!,
  apiKey: process.env.AZURE_OPENAI_API_KEY!,
  apiVersion: process.env.AZURE_OPENAI_API_VERSION || "2024-12-01-preview",
});

export interface CompletionResult {
  content: string;
  tokensUsed: number;
}

/**
 * Generate a completion using Azure OpenAI
 * @param prompt - The user prompt to send
 * @returns The generated content and token usage
 */
export async function generateCompletion(prompt: string): Promise<CompletionResult> {
  const response = await client.chat.completions.create({
    model: process.env.AZURE_OPENAI_DEPLOYMENT_NAME!,
    messages: [
      {
        role: "system",
        content:
          "Du bist ein professioneller Assistent für deutsche Geschäftskommunikation. " +
          "Antworte immer auf Deutsch, präzise und im passenden Ton. " +
          "Halte dich an die angegebenen Regeln und Vorgaben.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    max_tokens: 1000,
    temperature: 0.7,
  });

  return {
    content: response.choices[0]?.message?.content || "",
    tokensUsed: response.usage?.total_tokens || 0,
  };
}

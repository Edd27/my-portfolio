import { getPrompt } from "./get-prompt";

export async function sendQuestion(
  question: string,
  options?: { promptVersion?: string }
) {
  const version = options?.promptVersion ?? "v1";
  let prompt: string;
  try {
    const raw = await getPrompt(version);
    prompt = raw.replace("[USER_QUESTION]", question);
  } catch (e) {
    console.error(e);
    try {
      const raw = await getPrompt("v1");
      prompt = raw.replace("[USER_QUESTION]", question);
    } catch {
      prompt = question;
    }
  }

  const answer = await fetch(`${import.meta.env.PUBLIC_GEMINI_API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-goog-api-key": import.meta.env.PUBLIC_GEMINI_API_KEY,
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.9,
        topK: 1,
        topP: 1,
        maxOutputTokens: 2048,
        stopSequences: [],
      },
      safetySettings: [
        {
          category: "HARM_CATEGORY_HARASSMENT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
        {
          category: "HARM_CATEGORY_HATE_SPEECH",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
        {
          category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
        {
          category: "HARM_CATEGORY_DANGEROUS_CONTENT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
      ],
    }),
  })
    .then((res) => res.json())
    .then((data) => data.candidates?.[0]?.content?.parts?.[0]?.text)
    .catch((err) => {
      console.error("Gemini request failed", err);
      return "Lo siento, hubo un problema al procesar tu pregunta.";
    });

  return { answer };
}

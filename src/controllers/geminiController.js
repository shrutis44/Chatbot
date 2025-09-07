import { generateText } from "../services/geminiService.js";

export const handleGenerateText = async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required in the request body." });
    }
    const generatedText = await generateText(prompt);
    res.json({ text: generatedText });
  } catch (error) {
    console.error("Error in handleGenerateText:", error);
    res.status(500).json({ error: "Failed to generate text." });
  }
};
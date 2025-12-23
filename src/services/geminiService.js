


// import { genAI } from "./../utils/api.js";

// export const generateText = async (prompt) => {
//   try {
//     const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });
//     const result = await model.generateContent(prompt);
    
    
//     if (result.response.candidates && result.response.candidates.length > 0) {
//       const text = result.response.text();
//       return text;
//     } else {
      
//       throw new Error("No content generated. The response may have been blocked by safety filters.");
//     }

//   } catch (error) {
//     console.error(" Error in Gemini Service:", error);
//     throw error;
//   }
// };





import { genAI } from "../utils/api.js";

export const generateText = async (prompt) => {
  try {
    const response = await genAI.models.generateContent({
      model: "models/gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
    });

    return response.text;
  } catch (error) {
    console.error("Error in Gemini Service:", error);
    throw error;
  }
};


import { GoogleGenAI } from "@google/genai";
import { USER_INFO, SKILLS, EXPERIENCE, PROJECTS } from "../constants";

// Prepare context for the AI
const contextData = `
User Profile:
Name: ${USER_INFO.name}
Title: ${USER_INFO.title}
About: ${USER_INFO.about}
Contact: ${USER_INFO.email}

Skills:
${SKILLS.map(s => `- ${s.name} (${s.category})`).join('\n')}

Experience:
${EXPERIENCE.map(e => `- ${e.role} at ${e.company} (${e.period}). Key tech: ${e.technologies.join(', ')}`).join('\n')}

Projects:
${PROJECTS.map(p => `- ${p.title}: ${p.description} (Tags: ${p.tags.join(', ')})`).join('\n')}
`;

const systemInstruction = `
You are an AI assistant for Zhang Yuxiang's portfolio website. Your name is "Yuxiang's Bot".
Your goal is to answer questions from recruiters (HR) or fellow engineers about Yuxiang's background, skills, and experience.

Context about Yuxiang:
${contextData}

Rules:
1. Be professional, polite, and concise.
2. Emphasize his transition from Frontend to Fullstack and AI Application development.
3. If asked about a specific technology, refer to the projects or experience where he used it.
4. If asked about something not in the context, politely say you don't have that information but suggest contacting him directly via email.
5. Answer in the same language as the user's question (Chinese or English).
`;

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    const apiKey = process.env.API_KEY;
    if (apiKey) {
      aiClient = new GoogleGenAI({ apiKey });
    }
  }
  return aiClient;
};

export const chatWithGemini = async (userMessage: string): Promise<string> => {
  const client = getClient();
  
  if (!client) {
    return "Demo Mode: API Key is not configured. Please refer to the code to add your Google Gemini API Key in the environment variables.";
  }

  try {
    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "Sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error connecting to the AI service. Please try again later.";
  }
};

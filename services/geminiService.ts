import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

async function generateHanoiDescription(): Promise<string> {
  const prompt = `
    Generate a rich, detailed, and evocative description of French colonial architecture in Hanoi, with a special focus on school buildings.
    The tone should be cultural, respectful, and informative, suitable for a cultural heritage website.
    Please structure the description into several distinct paragraphs, using the following points as a guide.

    1.  **Introduction & Context:** Start by explaining that public buildings, especially schools, are primary examples of the 'French regionalist' architectural style in Hanoi. Mention that these schools were initially built for French students to evoke a sense of home, but the style later influenced schools built for Vietnamese students.
    2.  **Two Groups of Schools:** Describe the two main categories of schools. First, the ones for French students (like **Grand Lycée** and **Petit Lycée**), which were grand, monolithic, and fully equipped. Second, the ones for Vietnamese students (like **Bưởi School** and **Đỗ Hữu Vị School**), which were simpler, more spread out within green campuses, creating a more "pedagogical" atmosphere.
    3.  **Architectural Influences:** Detail the specific architectural influences. Explain that the style is primarily inspired by the architecture of Northern and Northwestern France, particularly in facade decorations, combined with roofing styles from Central France.
    4.  **Historical Development & Legacy:** Discuss the historical context, linking the construction boom to the French colonial exploitation programs. Conclude by emphasizing the lasting impact of this architectural style, noting how most schools from that era in Hanoi adopted it, making it a significant part of the city's architectural identity.

    Format the output with clear paragraphs. Use **bold** for key terms or school names where appropriate. Feel free to elaborate on the provided context to create a compelling narrative.
  `;
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
  });
  return response.text;
}

async function generateSaigonDescription(): Promise<string> {
  const prompt = `
    Generate a rich, detailed, and evocative description of the "Indochine" architectural style in Saigon.
    The tone should be cultural, respectful, and informative, suitable for a cultural heritage website.
    Please structure the description into several distinct paragraphs, based on the following key points.

    1.  **Origins and Hébrard's Influence:** Begin by explaining the context of French colonial expansion and the need for a new architectural style. Introduce **Ernest Hébrard** as the key figure who championed the "Indochine style," a fusion of Western techniques with local artistic traditions and adaptations for the tropical climate.
    2.  **Key Periods of Development:** Describe the main phases of this style.
        *   **Pre-WWI:** Mention early examples like the **Messageries Maritimes headquarters (Bến Nhà Rồng)** as a precursor.
        *   **Between the Wars:** This was the golden age of the style, initiated by Hébrard, combining international trends like Art Deco with Chăm and Khmer decorative motifs.
        *   **Post-1954:** Discuss the continuation of the style by Vietnamese architects trained at the École des Beaux-Arts de l'Indochine who moved south, leading to a flurry of construction.
        *   **Decline (Post-1960s):** Explain that the style faded in the 1970s with the rise of the International Modernist style.
    3.  **Adaptation and Local Character:** Emphasize how the style was not a simple copy of French architecture. It was "indigenized" to suit Saigon's hot, humid climate, influencing space planning, ventilation (sun, wind), and decorative details. Contrast this with Hanoi's architecture, noting Saigon's dynamic, cosmopolitan, and adventurous spirit, which was reflected in its buildings.
    4.  **Legacy:** Conclude by highlighting the lasting legacy of the Indochine style, visible in public buildings, villas, and religious structures that define the historic face of the city.

    Format the output with clear paragraphs. Use **bold** for key terms and names. Create a compelling narrative from this information.
  `;
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
  });
  return response.text;
}

export async function generateDescriptions(): Promise<{ hanoi: string, saigon: string }> {
  try {
    const [hanoi, saigon] = await Promise.all([
      generateHanoiDescription(),
      generateSaigonDescription()
    ]);
    return { hanoi, saigon };
  } catch (error) {
    console.error("Error generating content from Gemini:", error);
    throw new Error("Failed to fetch descriptions from the AI model.");
  }
}
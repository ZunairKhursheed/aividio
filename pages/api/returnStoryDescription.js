const generateDescription = async ({
  characters,
  idea,
  numPanels,
}) => {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are a screen writer. You need to write scripts for a video production. ",
          },
          {
            role: "user",
            content: `Please create a fantasy story in ${numPanels} panels centered on ${
              idea
            }. The character description are ${characters}. For each panel, try to start each scene with a character and provide a single sentence describing both the setting and the action in fewer than 15 words.
            Each scene should clearly integrate the setting and action into a simple, straightforward sentence.
            Each scene must have a distinct and clear setting. Write one sentence per scene, starting a new paragraph for each. There should be no line spacing, only return breaks, and no panel descriptors or summaries. ",
            `,
          },
        ],
        max_tokens: 300,
        temperature: 0.5,
      }),
    });
    const data = await response.json();

    return data.choices[0].message.content;
  } catch (err) {
    console.error(err);
  }
};

export default async function handler(req, res) {
  const { characters, idea, numPanels } = req.body;

  const storyDescription = await generateDescription({
    characters,
    idea,
    numPanels,
  });

  res.status(200).json({
    storyDescription,
  });
}

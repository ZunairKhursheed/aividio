// API for Image2Video Prediction /Regeneration

export default async function handler(req, res) {
  const response = await fetch("https://i2v-api.aividoo.com/predictions", {
    method: "POST",
    headers: {
      Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // Pinned to a specific version of Stable Diffusion
      // See https://replicate.com/talkin-ai/bot/versions
      //version: "23a63ec05d0a8bf905d08bbc1a17d09f6c9d21a971e5322612ad22aafaa692cf",
      //version: "a39ae0af80b87b2bf21b40450b3ae6b7a65c59a12b470ab42d7488d4f9b23a90",
      version:
        "c298663d763898c1f897f48a8537fe3fc4fa63b59a0cda69ec088acfc3ad68cd",
      // This is the text prompt that will be submitted by a form on the frontend
      input: req.body,
    }),
  });

  if (!response.ok) {
    // If the response is not OK (status not in the range 200-299)
    const error = await response.json();
    res.status(500).json({
      detail:
        error.detail || "An error occurred while processing your request.",
    });
    return;
  }

  if (response.status === 401) {
    res.status(401).json({
      message: "You are not authorized. Please log in and try again.",
    });
    return;
  }

  const prediction = await response.json();
  res.status(201).json(prediction);
}

export default async function handler(req, res) {
  const response = await fetch("https://t2v-api.aividoo.com/predictions", {
    method: "POST",
    headers: {
      Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // Pinned to a specific version of Stable Diffusion
      // See https://replicate.com/talkin-ai/bot/versions

      //version: "c2bf488da9f4d6b546400f6877b68424e7cc9053b762087af372d6acdfe99a83",
      //version: "ebaf838f0327faa50fc7179e237385e9e4225933a4b20a8de5f6c5dfd061c1cd",
      //version: "96063f827bbe0721bd7b1c3dc7b6387508d303ce903d67bb983ad2195b089151",
      //version: "6981ae2c5d252b2231aa95119e346e9298dba2bdecfc35f012a6ea477b799273",
      version:
        "f95c9fa580b8afd2fcfacdaf6a71b0441f4c5152de3d6a65055d529be7d083b0",
      //version: "e8146cf5a7566178c853b51d63407e2cec5efdadfb723f34d877d86b04891601",
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

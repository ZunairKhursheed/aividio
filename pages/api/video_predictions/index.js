export default async function handler(req, res) {
  const response = await fetch("https://api.replicate.com/v1/predictions", {
    method: "POST",
    headers: {
      Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // Pinned to a specific version of Stable Diffusion
      // See https://replicate.com/talkin-ai/bot/versions
      //version: "3eb864151ba2e194409f66ff02b91a046680fc54265c88f5aa193245e8e2afcb",
      //version: "37171cc1d17a37ff4192ad296b1964cf9345797a7907d6f472cfd34cd89e3e9f",
      //version: "c29e89e10e3c601ae3c60a6f64f120e0d279288120382c6a8bfecaf6ceec7213",
      //version: "aab2f75869a09559c7624cca903591bf425418bf7f3e3bcfd0ebe50a1e03fb87",
      //version: "5c3ec513526dae1cd86c5d6d25c71b6428c873b5cd93da1a6eb2e289ed5f53d1",
      //version: "ec9f28eb1ded641f55569bcc59755fe0d3a9a61ef8c5b153eb30521b4d4962ae",
      //version: "e9535d65025a6812a62fcd666a1f32893be8cdd948a718d04e4daf3c080e40d9",
      //version: "5e72a7e69267276c6b862d5492503b9fd7e1d5c4cbdba4b722b8e91a8d95bc06",
      //version: "3d022416267c90937c31b1c51cd14e7e464e419070e39cabe7a633692a8f1cde",
      version: "c2bf488da9f4d6b546400f6877b68424e7cc9053b762087af372d6acdfe99a83",

      // This is the text prompt that will be submitted by a form on the frontend
      input: req.body,
    }),
  });

  if (response.status !== 201) {
    let error = await response.json();
    res.statusCode = 500;
    res.end(JSON.stringify({ detail: error.detail }));
    return;
  }

  const prediction = await response.json();
  res.statusCode = 201;
  res.end(JSON.stringify(prediction));
}

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
      //version: "c0175c287dbcc4cd2d0086ef400738a8614ae26e8c76d6703d316cdb29aeb3de",
      //version: "bd53a53b56e1c23dcb9ecfd8dd2612cf3ae3fa0ce3c9737c0fb5dcadb5c75c37",
      version: "8bbef98531dc22c1bd1ad382923bf2245628eb595a2b43973edfcd50d664a6f9",

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

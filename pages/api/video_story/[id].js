export default async function handler(req, res) {
  const response = await fetch(
    "https://t2v-api.aividoo.com/predictions/" + req.query.id,
    {
      headers: {
        Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
      // If the response is not ok (status not in the range 200-299)
      const error = await response.json();
      res.status(500).json({ detail: error.detail || 'An error occurred while fetching the prediction.' });
      return;
    }

    if (response.status === 401) {
      res.status(401).json({ message: "You are not authorized. Please log in and try again." });
      return;
    }

    const prediction = await response.json();
    res.status(200).json(prediction);
  } catch (error) {
    // Catch any unexpected errors that occur during the fetch
    console.error("Error fetching prediction:", error);
    res.status(500).json({ detail: 'An unexpected error occurred. Please try again later.' });
  }
}

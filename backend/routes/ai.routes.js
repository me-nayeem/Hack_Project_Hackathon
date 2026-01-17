require("dotenv").config();
const express = require("express");
const router = express.Router();
const Groq = require("groq-sdk");
const authenticate = require("../middleware/authenticate");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY, 
});

router.post("/post/message", async (req, res) => {
  try {
    const { messages, healthData } = req.body;

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are a health assistant. User health data: ${JSON.stringify(
            healthData
          )}`,
        },
        ...messages,
      ],
      model: "llama-3.3-70b-versatile", 
      temperature: 0.7,
      max_tokens: 1024,
    });

    res.json({
      success: true,
      response: completion.choices[0].message.content,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.post("/post/insight", authenticate, async (req, res) => {
  try {
    const { messages, healthData } = req.body;

    const systemPrompt = `
You are a personal health assistant. Here is the user's health data: ${JSON.stringify(
      healthData
    )}.

Analyze this data and provide three categories of health insights:
1. What’s Looking Good
2. Areas to Improve
3. Today’s Top Recommendations
`;

    const completion = await groq.chat.completions.create({
      messages: [{ role: "system", content: systemPrompt }, ...messages],
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      max_tokens: 1024,
    });

    const raw = completion.choices[0].message.content;
    res.json({
      success: true,
      raw, 
    });
  } catch (error) {
    console.error("Error in /post/insight:", error);
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;

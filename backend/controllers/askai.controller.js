require('dotenv').config();
const { OpenAI } = require('openai');


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const UserPostMessage = async (req, res) => {
  const { message, context } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: context },
        { role: 'user', content: message },
      ],
    });

    const reply = completion.choices[0].message.content;
    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'AI service error' });
  }
}

module.exports = {
  UserPostMessage,
}
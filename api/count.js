// Vercel Serverless Function — POST /api/count
// Accepts { "text": "..." } and returns the vowel count JSON.

const { countVowels } = require('../src/index');

module.exports = (req, res) => {
  // CORS headers for the demo frontend
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  const { text } = req.body || {};

  if (typeof text !== 'string') {
    return res.status(400).json({
      error: 'Missing or invalid "text" field. Send JSON: { "text": "your string" }',
    });
  }

  try {
    const result = countVowels(text);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

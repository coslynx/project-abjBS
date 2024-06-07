const { google } = require('googleapis');

const perspectiveAPI = google.perspective({
  version: 'v1alpha1',
  auth: 'YOUR_GOOGLE_API_KEY',
});

const analyzeText = async (text) => {
  try {
    const response = await perspectiveAPI.comments.analyze({
      key: 'YOUR_PERSPECTIVE_API_KEY',
      resource: {
        comment: {
          text: text,
        },
        requestedAttributes: {
          TOXICITY: {},
          SEVERE_TOXICITY: {},
          IDENTITY_ATTACK: {},
          INSULT: {},
          PROFANITY: {},
          THREAT: {},
          SEXUALLY_EXPLICIT: {},
          FLIRTATION: {},
        },
        doNotStore: true,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error analyzing text:', error);
    return null;
  }
};

module.exports = {
  analyzeText,
};
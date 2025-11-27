exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    console.log('Netlify Function received event:', event);
    const formData = JSON.parse(event.body);
    console.log('Parsed formData:', formData);
    const n8nWebhookUrl = 'https://jossen.app.n8n.cloud/webhook/quiz-submission';

    const response = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    console.log('n8n webhook response status:', response.status);
    console.log('n8n webhook response statusText:', response.statusText);

    if (!response.ok) {
      console.error('n8n webhook failed:', response.status, response.statusText);
      return {
        statusCode: response.status,
        body: `n8n webhook failed: ${response.statusText}`,
      };
    }

    // Optionally, you can also send a success response to the client
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form data sent to n8n successfully!' }),
    };
  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};

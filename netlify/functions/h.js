const fs = require('fs');

exports.handler = async (event, context) => {
  try {
    // Read the HTML file
    const htmlContent = fs.readFileSync('index.html', 'utf8');

    // Create a response
    const response = {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html',
      },
      body: htmlContent,
    };

    return response;
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: 'Internal Server Error',
    };
  }
};
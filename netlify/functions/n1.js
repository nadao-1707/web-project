
   // index.js
   exports.handler = async (event, context) => {
       const data = {
           message: 'Hello, world!',
           timestamp: new Date().toISOString()
       };
   
       return {
           statusCode: 200,
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(data)
       };
   };
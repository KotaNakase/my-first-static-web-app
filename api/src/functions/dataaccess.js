const { app } = require('@azure/functions');

app.http('dataaccess', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        // 外部APIのURL
        const externalUrl = 'https://prod-08.japaneast.logic.azure.com:443/workflows/0e78b3fb50784f64b6ad6aab8293efa7/triggers/When_a_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_a_HTTP_request_is_received%2Frun&sv=1.0&sig=VoXRXosCyaqc8L0KINGSS9d4hLfHVmwpM-q7FVmtP38';

        try {
            const response = await fetch(externalUrl);
            const data = await response.json();
            console.log(data);

            return {
                status: 200,
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            };
        } catch (error) {
            return {
                status: 500,
                body: JSON.stringify({ error: error.message }),
                headers: { 'Content-Type': 'application/json' }
            };
        }
    }
});
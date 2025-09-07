const { app } = require('@azure/functions');
const { CosmosClient } = require('@azure/cosmos');

const endpoint = process.env.COSMOS_DB_ENDPOINT; // 例: "https://<your-account>.documents.azure.com:443/"
const key = process.env.COSMOS_DB_KEY; // Cosmos DB のキー
const databaseId = process.env.COSMOS_DB_DATABASE; // データベース名
const containerId = process.env.COSMOS_DB_CONTAINER; // コンテナ名

app.http('getCosmosData', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        try {
            const client = new CosmosClient({ endpoint, key });
            const database = client.database(databaseId);
            const container = database.container(containerId);

            // クエリ例: 全データ取得
            const querySpec = {
                query: 'SELECT * FROM MyTestPersonContainer'
            };

            const { resources: items } = await container.items.query(querySpec).fetchAll();

            return {
                status: 200,
                body: JSON.stringify(items),
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
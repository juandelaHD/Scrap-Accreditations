const {scrap} = require('./scrapper');

const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const JsonFileAdapter = require('@bot-whatsapp/database/json')

async function fetchScrap() {
    try {
        return await scrap();
    } catch (error) {
        console.error('Error fetching scrap:', error);
        return [];
    }
}

const flowPrincipal = addKeyword(['INFO EVENTOS RIVER'])
    .addAnswer('📝 *Acreditaciones disponibles:*\n\n🔗 https://www.cariverplate.com.ar/acreditaciones/',
        null,
        async (ctx, { flowDynamic }) => {
            try {
                const acreditaciones = await fetchScrap();
                const acreditacionesText = acreditaciones.map(acreditacion => `📌 ${acreditacion}`).join('\n\n');
                await flowDynamic(acreditacionesText);
            } catch (error) {
                console.error('Error in flow answer:', error);
                await flowDynamic('Hubo un error al obtener las acreditaciones.');
            }
        }
    );

const main = async () => {
    try {
        const adapterDB = new JsonFileAdapter();
        const adapterFlow = createFlow([flowPrincipal]);
        const adapterProvider = createProvider(BaileysProvider);

        createBot({
            flow: adapterFlow,
            provider: adapterProvider,
            database: adapterDB,
        });

        QRPortalWeb();
    } catch (error) {
        console.error('Error in main function:', error);
    }
};

main().catch(error => console.error('Unhandled error in main:', error));
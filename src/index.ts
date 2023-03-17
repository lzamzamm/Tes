
// import { aibot } from './fitur/openai';
import { ytdown } from './fitur/ytmp3';
// import { ytdown } from './fitur/ytmp3';
import { client } from './utils/client';


client.on('message', async (message) => {
    if (message.body.startsWith("halo")) {
        message.reply("halo, apa yang bisa saya bantu?")
    } else {
        // aibot(client);
        ytdown(client, message)
    }
});



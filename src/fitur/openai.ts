import { Configuration, OpenAIApi } from 'openai';

import { client as waclient } from '../utils/client';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

export async function aibot(client:typeof waclient ) {
    const configuration = new Configuration({
        apiKey : process.env.SECRET_KEY,
    }) ;
    const openai = new OpenAIApi(configuration);
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async function runCompletion(message: any) {
      const completion = await openai.createCompletion({
            model:"text-davinci-003",
            prompt: message,
            max_tokens: 200,
        });
        return completion.data.choices[0].text;
    }
    
    client.on('message', async (message) => {
        console.log(message.body);
            runCompletion(message.body).then(result => {
            if (result) {
                message.reply(result);
            }
        });
    })
}


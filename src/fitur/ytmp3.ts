
/* eslint-disable prefer-const */
import bufferToDataUrl from 'buffer-to-data-url';
import fs from 'fs'
import mime from "mime"
import path from "path"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Message, MessageMedia } from "whatsapp-web.js"
;
import ytdl from "ytdl-core";

import {client as waclient } from "../utils/client";




export async function ytdown(client:typeof waclient, message:Message) {
    const args:string[] = message.body.split(' ');

    if(args[0].length < 1 ) {
        return client.on('message', message => {
            console.log(message.body)
            message.reply("Please provide youtube url")
        })
    } 

    

    let info = await ytdl.getBasicInfo(args[0])
    let title = info.videoDetails.title
    let filename = title + ".mp3"
    if (title.length > 0) {
        console.log(title + ", tersedia")
    } else {
        console.log("Video tidak tersedia")
    }

    // let bufs:Uint8Array[] = []
    let stream = ytdl(args[0], {filter: "audioonly"})

    const writeStream = fs.createWriteStream(filename)

    stream.pipe(writeStream)

    // const number = "85727702218"
    // const sanitized_number = number.toString().replace(/[- )(]/g, ""); // remove unnecessary chars from the number
    // const final_number = `62${sanitized_number.substring(sanitized_number.length - 10)}`; // add 91 before the number here 91 is country code of India

    // const number_details = await client.getNumberId("6285727702218"); // get mobile number details

    // // const media = MessageMedia.fromFilePath("C:/Users/ACER/OneDrive/Documents/Coding2/Project/WAbot/Vada Pav 🥔 #shorts.mp3")


    try {
        const audioBuffer = fs.readFileSync("C:/Users/ACER/OneDrive/Documents/Coding2/Project/WAbot/tes.png")

        const media = await bufferToDataUrl("imgae/mp3", audioBuffer)

        console.log(media)

        client.on('message', message => {
            console.log(message.body)
            message.reply(media)
        })


        // let bufs:Uint8Array[] = []

        // audioBuffer.on('data', (chunk) => {
        //     bufs.push(chunk)
        // })

        // let mimetype2 = mime.getType("C:/Users/ACER/OneDrive/Documents/Coding2/Project/WAbot/tes.png"); 
        // const b64data  = fs.readFileSync("C:/Users/ACER/OneDrive/Documents/Coding2/Project/WAbot/tes.png", {encoding: 'base64'});
        // const filename2 = path.basename("C:/Users/ACER/OneDrive/Documents/Coding2/Project/WAbot/tes.png");
        // let send_media =  new MessageMedia("audio/mpeg", b64data, filename2);

        // console.log(b64data)

        // client.on('message', message => {
        //     console.log(message.body)
        //     message.reply(send_media)
        // })
    } catch(err) {
        console.log("error has been found")
        return client.on('message', message => {
                    console.log(message.body)
                    message.reply("Error has been")
                    })
    }
    // let videofile = await MessageMedia.fromFilePath("C:/Users/ACER/OneDrive/Documents/Coding2/Project/WAbot/tes.png")

    // const audioBuffer = fs.readFileSync("C:/Users/ACER/OneDrive/Documents/Coding2/Project/WAbot/tes.png", {encoding: 'base64'})

    // // const dataUrl = await bufferToDataUrl("image/jpeg",audioBuffer )

    // const audio = new MessageMedia("image/jpeg", dataUrl)

    // let bufs:Uint8Array[] = []

    // dataUrl.on('data', (chunk) => {
    //     bufs.push(chunk)
    // })

    // let buf = Buffer.concat(dataUrl)

    // console.log(dataUrl)
    // // console.log(number_details)

    // console.log(audio)

    // await client.sendMessage("6285727702218@c.us", audio).catch(err => console.log(err));
    // if (number_details) {
    //     await client.sendMessage("6285727702218@c.us", send_media); // send message
    // } else {
    //     console.log(final_number, "Mobile number is not registered");
    // }

    // client.on('message', message => {
    //         console.log(message.body)
    //         client.sendMessage(clien,send_media)
    // })
    // stream.on('data', (chunk) => {
    //     bufs.push(chunk)
    // })
    // stream.on('end', () => {
    //     let buf = Buffer.concat(bufs)
    //     client.on('message', message => {
    //         console.log(message.body)
    //         message.reply(bufferToDataUrl("audio/mp3",buf, filename))
    //         })
    // })


    // const writeStream = fs.createWriteStream(filename)

    // audioFormats.pipe(writeStream)

    // writeStream.on('finish', () => {
    //     const buffer = fs.readFileSync(filename)
    //     const media = new MessageMedia('audio/mp3', buffer.toString(), filename)

    //     client.on('message', message => {
    //         message.reply(media)
    //     })
    // })



    

    // try {
    //     // eslint-disable-next-line prefer-const
    //     let info = await ytdl.getBasicInfo(args[0])
    //     let title = info.videoDetails.title
    //     let bufs:Uint8Array[] = []
    //     let stream = ytdl(args[0], { filter: 'audioonly' })
        // stream.on('data', (chunk) => {
        //     bufs.push(chunk)
        // })
        // stream.on('end', () => {
        //     let buf = Buffer.concat(bufs)
        //     client.on('message', message => {
        //         console.log(message.body)
        //         message.reply(title, bufferToDataUrl("audio/mp3",buf))
        //         })
        // })
    // } catch(err){
    //     return client.on('message', message => {
    //         console.log(message.body)
    //         message.reply("Error has been")
    //     }) 
    // }

    // const bufferToDataUrl = (mimetype: string, buffer: Buffer) => {
    //     return `data:${mimetype};base64,${buffer.toString("base64")}`;
    // }
    // const bufferToDataUrl = (mimetype: string, buffer: Buffer, name:string) => {
    //     const media = new MessageMedia(mimetype, buffer.toString("base64"), name)

    //     return media
    // }
}




const amqp = require("amqplib");
// console.log(process.argv)
const msg = {number: process.argv[2]} // the 3rd element of the array will be the input
connect();
async function connect() {
    try {
        const connection = await amqp.connect("amqp://localhost:5672");
        const channel = await connection.createChannel();
        const result = await channel.assertQueue("jobs");
        channel.sendToQueue("jobs", Buffer.from(JSON.stringify(msg)));
        console.log(`Job sent succesfully ${msg.number}`);
        await channel.close();
        await connection.close();
    }
    catch(ex) {
        console.log(ex);
    }
}
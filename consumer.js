const amqp = require("amqplib");

connect();
async function connect() {
    try {
        const connection = await amqp.connect("amqp://localhost:5672");
        const channel = await connection.createChannel();
        const result = await channel.assertQueue("jobs");

        channel.consume("jobs", message => {
            const input = JSON.parse(message.content.toString());
            console.log(`Received job with ${input.number}`);
            const checkNumber = input.number;
            if(input.number == checkNumber)
                channel.ack(message) // acknowledge to the server received message, hence remove it from the queue (ack)
        });

        console.log("Waiting for messages...");

    }
    catch(ex) {
        console.log(ex);
    }
}
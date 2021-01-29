var mqtt = require('mqtt')
var client = mqtt.connect('', [{ host: '192.168.1.99', port: 1883 }])


client.on('connect', () => {
    client.subscribe('relay/lamp', (err) => {
        if (err) throw err
        setInterval(() => {
            client.publish('relay/lamp', 'hello from NodeJS')
        }, 2000);
    })
})

client.on('message', (topic, message) => {
    console.log(message.toString())
    // client.end()
})
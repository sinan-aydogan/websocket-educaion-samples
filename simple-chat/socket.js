import {WebSocketServer} from "ws"

/*Create WebSocket Server*/
const server = new WebSocketServer({port: 8081})

/*Listen Server Events*/
server.on('connection', (ws) => {
    console.log("The client is connected")

    /*Listen message event*/
    ws.on('message', (message) => {
        console.log('A new message arrived')
        broadcastToAllClients(message)
    })
})

/*Send message where come from any client to all clients*/
const broadcastToAllClients = (message) => {
    server.clients.forEach((client) => {
        console.log("Message send to all clients")
        client.send(message)
    })
}

// Please call "node socket.js" in the command line for it works
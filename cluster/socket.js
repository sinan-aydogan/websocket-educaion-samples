import {WebSocketServer} from "ws"

const server = new WebSocketServer({port: 8080})

server.on("connection", (ws) => {
    console.log("Yeni bir istemci bağlandı")

    ws.on("message", (message) => {
        server.clients.forEach((client) => {
            client.send(message)
        })
    })

    ws.on("close", () => {
        console.log("Kullanıcı bağlantıdan ayrıldı")
    })
})
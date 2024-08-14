import cluster from 'cluster'
import {cpus} from 'os'
import {WebSocketServer} from "ws";

/*Read CPU count*/
const numCPUs = cpus().length

if (cluster.isPrimary) {
    console.log('Ana işlem çalışıyor: ' + process.pid)

    /*Create workers*/
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork()
    }

    /*Listen finished workers*/
    cluster.on('exit', (worker, code, signal) => {
        console.log("Worker işlemi sonlandı: " + worker.process.pid)
        /*Recreate finished worker*/
        cluster.fork()
    })
} else {
    const server = new WebSocketServer({port: 8080})

    server.on('connection', (ws) => {
        // WebSocket events, process
    })

    console.log('Aktif çalışan worker: ' + process.pid)
}
const socket = new WebSocket("ws://localhost:8080")

socket.onopen = () => {
    console.log("WebSocket bağlantısı açıldı")
    socket.send("Merhaba sunucu, ben dostum")
}

socket.onmessage = (event) => {
    console.log("Sunucudan mesaj geldi: " + event.data)
}

socket.onclose = () => {
    console.log("Sunucu bağlantısı kapatıldı")
}

socket.onerror = (error) => {
    console.log("WebSocket bağlantısında bir hata var: " + error)
}
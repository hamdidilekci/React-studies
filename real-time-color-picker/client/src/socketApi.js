import io from 'socket.io-client';

let socket;

export const init = () => {
    console.log('sunucuya bağlanılıyor...');

    socket = io('http://localhost:3001', { // make connection to written url
        transports: ['websocket']
    });

    socket.on('connect', () =>
        console.log('sunucuya bağlantı başarıyla gerçekleşti')
    );
}

export const send = (color) => {     // send data to backend
    socket.emit('newColor', color)
} 

export const subscribe = (cb) => {   // get data from other users, using socket.on 
    socket.on('receive', (color) => {  
        console.log(color);
        cb(color);   // cb use for keep active color in state
    });
}
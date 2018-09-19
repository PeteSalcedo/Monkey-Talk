let express = require('express');
let app = require('express')();
let server = require('http').Server(app);
let io = require('socket.io')(server);
let port = 8989;

app.use('/assets', express.static(__dirname + '/dist'));

let users = {};

getUsers = () => {
    return Object.keys(users).map(function(key){
        return users[key].username
    });
};

createSocket = (user) => {
    let cur_user = users[user.uid],
        updated_user = {
            [user.uid] : Object.assign(cur_user, {sockets : [...cur_user.sockets, user.socket_id]})
        };
    users = Object.assign(users, updated_user);
};

// creates user and assigns a random uid
createUser = (user) => {
    users = Object.assign({
        [user.uid] : {
            username : user.username,
            uid : user.uid,
            sockets : [user.socket_id]
        }
    }, users);
};

removeSocket = (socket_id) => {
    let uid = '';
    Object.keys(users).map(function(key){
        let sockets = users[key].sockets;
        if(sockets.indexOf(socket_id) !== -1){
            uid = key;
        }
    });
    let user = users[uid];
    if(user.sockets.length > 1){
        // Remove socket only
        let index = user.sockets.indexOf(socket_id);
        let updated_user = {
            [uid] : Object.assign(user, {
                sockets : user.sockets.slice(0,index).concat(user.sockets.slice(index+1))
            })
        };
        users = Object.assign(users, updated_user);
    }else{
        // Remove user by key
        let clone_users = Object.assign({}, users);
        delete clone_users[uid];
        users = clone_users;
    }
};

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

server.listen(port, () => {
  console.log('Running server on 127.0.0.1:' + port);
});


io.on('connection', (socket) => {
    let query = socket.request._query,
        user = {
            username : query.username,
            uid : query.uid,
            socket_id : socket.id
        };

    if(users[user.uid] !== undefined){
        createSocket(user);
        socket.emit('updateUsersList', getUsers());
    }
    else{
        createUser(user);
        io.emit('updateUsersList', getUsers());
    }

    socket.on('message', (data) => {
        console.log(data);
        socket.broadcast.emit('message', {
            username : data.username,
            message : data.message,
            uid : data.uid
        });
    });

    socket.on('disconnect', () => {
        removeSocket(socket.id);
        io.emit('updateUsersList', getUsers());
    });
});

// // Chat bot requests
// // GET request
// var data = JSON.stringify(false);
//
// var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;
//
// xhr.addEventListener("readystatechange", function () {
//   if (this.readyState === this.DONE) {
//     console.log(this.responseText);
//   }
// });
//
// xhr.open("GET", "https://snatchbot.me//bot/id%3Cbot_id%3E/api%3Capp_key%3E/aps%3Capp_secret%3E");
//
// xhr.send(data);
//
// // {
// //
// //     archived: (1 or 0)
// //
// //     date:"1970-01-01T00:00:00Z",
// //
// //     direction:"string", (from_bot or to_bot)
// //
// //     hasSeen:(1 or 0),
// //
// //     id:int,
// //
// //     isTest:(1 or 0),
// //
// //     message: string,
// //
// //     userToken: string (your user id)
// //
// // }
//
// // POST request
// var data = JSON.stringify(false);
//
// var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;
//
// xhr.addEventListener("readystatechange", function () {
//   if (this.readyState === this.DONE) {
//     console.log(this.responseText);
//   }
// });
//
// xhr.open("POST", "https://snatchbot.me//bot/id%3Cbot_id%3E/api%3Capp_key%3E/aps%3Capp_secret%3E");
//
// xhr.send(data);

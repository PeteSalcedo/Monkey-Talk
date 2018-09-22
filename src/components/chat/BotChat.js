import React from 'react';
import Users from "./Users";
import BotMessages from "./BotMessages";
import EnterChat from "./EnterChat";
import socketIOClient from 'socket.io-client';

// const Component = React.createClass({
//   iframe: function () {
//     return {
//       __html: this.props.iframe
//     }
//   },
//
//   render: function() {
//     return (
//       <div>
//         <div dangerouslySetInnerHTML={ this.iframe() } />
//       </div>
//     );
//   }
// });
//
// const iframe = '<iframe src=" https://snatchbot.me/webchat/?botID=29961&appID=gKcD32Tvtc1gVMXJ2jZI" width="540" height="450"></iframe>';
//
// ReactDOM.render(
//   <Component iframe={iframe} />,
//   document.getElementById('container')
// );

class BotChat extends React.Component {
  // constructor(props){
  //     super(props);
  //     // this.socket = null;
  //     this.state = {
  //         username : localStorage.getItem('username')
  //         uid : localStorage.getItem('uid')
  //         chat_ready : false,
  //         users : [],
  //         messages : [],
  //         message : ''
  //
  //         }
  //     }

    // constructor(props){
    //     super(props);
    //     this.socket = null;
    //     this.state = {
    //         username : localStorage.getItem('username') ? localStorage.getItem('username') : '',
    //         uid : localStorage.getItem('uid') ? localStorage.getItem('uid') : this.generateUID(),
    //         chat_ready : false,
    //         users : [],
    //         messages : [],
    //         message : ''
    //     }
    // }

    // componentDidMount(){
    //     if(this.state.username.length) {
    //         this.initChat();
    //     }
    // }

    // generateUID(){
    //     let text = '';
    //     let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    //     for (let i = 0; i < 15; i++){
    //         text += possible.charAt(Math.floor(Math.random() * possible.length));
    //     }
    //     localStorage.setItem('uid', text);
    //     return text;
    // }

    // setUsername(username, e){
    //     this.setState({
    //         username : username
    //     }, () => {
    //         this.initChat();
    //     });
    // }

// // refactor for bot api
//     sendMessage(message, e){
//         console.log(message);
//         this.setState({
//             messages : this.state.messages.concat([{
//                username : localStorage.getItem('username'),
//                uid : localStorage.getItem('uid'),
//                message : message,
//            }])
//         });
//         // this.socket.emit('message', {
//         //     username : localStorage.getItem('username'),
//         //     uid : localStorage.getItem('uid'),
//         //     message : message,
//         // });
//         this.scrollToBottom();
//     }

    // scrollToBottom(){
    //     let messages = document.getElementsByClassName('messages')[0];
    //     messages.scrollTop = messages.scrollHeight - messages.clientHeight;
    // }

// // refactor for bot messages state
//     initChat(){
//         localStorage.setItem('username', this.state.username);
//         this.setState({
//             chat_ready : true,
//         });
//         // this.socket = socketIOClient('ws://localhost:8989', {
//         //     query : 'username='+this.state.username+'&uid='+this.state.uid
//         // });
//
//         // this.socket.on('updateUsersList', function (users) {
//         //     console.log(users);
//         //     this.setState({
//         //         users : users
//         //     });
//         // }.bind(this));
//
//         // this.socket.on('message', function (message) {
//         //     this.setState({
//         //         messages : this.state.messages.concat([message])
//         //     });
//         //     this.scrollToBottom();
//         // }.bind(this));
//     }

    // render() {
    //     return (
    //         <div className="chat">
    //             this.state={
    //               <React.Fragment>
    //                 <Users users={this.state.users}/>
    //                 <BotMessages
    //                     sendMessage={this.sendMessage.bind(this)}
    //                     messages={this.state.messages}
    //                 />
    //               </React.Fragment>
    //             }
    //           //   {this.state.chat_ready ? (
    //           //       <React.Fragment>
    //           //           <Users users={this.state.users}/>
    //           //           <BotMessages
    //           //               sendMessage={this.sendMessage.bind(this)}
    //           //               messages={this.state.messages}
    //           //           />
    //           //       </React.Fragment>
    //           //   ) : (
    //           //       <EnterChat
    //           //           setUsername={this.setUsername.bind(this)}
    //           //       />
    //           //   )
    //           // }
    //         </div>
    //     )
    // }

}

export default BotChat;

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'font-awesome/css/font-awesome.css';
import '../../app.scss';
import Navbar from '../Navbar';
// import BotChat from './BotChat';



class BotHome extends React.Component{

    render(){
        return(
            <React.Fragment>
                <Navbar />
                  {/* <BotChat /> */}
                  <center>
                    <iframe src=" https://snatchbot.me/webchat/?botID=29961&appID=gKcD32Tvtc1gVMXJ2jZI" width="100%" height="777px"></iframe>
                  </center>
            </React.Fragment>
        )
    }
}
export default BotHome;

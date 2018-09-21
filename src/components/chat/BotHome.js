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


            </React.Fragment>
        )
    }
}
export default BotHome;

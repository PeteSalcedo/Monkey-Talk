import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'font-awesome/css/font-awesome.css';
import '../../app.scss';
import Navbar from '../Navbar';
import Carousel from './Carousel';



class PhotoHome extends React.Component{

    render(){
        return(
            <React.Fragment>
                <Navbar />
                <Carousel />
                <div id="container"></div>
            </React.Fragment>
        )
    }
}
export default PhotoHome;

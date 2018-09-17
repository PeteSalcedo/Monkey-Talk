import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch  } from "react-router-dom";
import Home from "./home"
import Videos from "./components/chat/Videos"
import Links from "./components/Links"

class App extends React.Component{

    render(){
        return(
        <BrowserRouter>
           <div>
             <Links />

             <Switch>
                <Route exact path ="/" component={Home}/>
                <Route  path ="/Videos" component={Videos}/>
             </Switch>
           </div>
        </BrowserRouter>

        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch  } from "react-router-dom";
import Home from "./home"
import BotHome from "./components/chat/BotHome"
import Videos from "./components/chat/Videos"
import Links from "./components/Links"
import BotChat from "./components/chat/BotChat"

class App extends React.Component{

    render(){
        return(
        <BrowserRouter>
           <div>
             <Links />

             <Switch>
                <Route exact path ="/" component={Home}/>
                <Route  path ="/BotHome" component={BotHome}/>
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

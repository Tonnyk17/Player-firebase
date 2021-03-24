import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "../containers/MainPage";
import Layout from "../components/Layout";
import "../assets/styles/index.css";
import NotFound from "../containers/NotFound";
import VideoContainer from "../containers/VideoContainer";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";


const App = () => {
    const initialState = useInitialState();
    return(
        <AppContext.Provider value={initialState}>
             <BrowserRouter>
                    <Layout>
                        <Switch>
                            <Route exact path="/" component={MainPage}/>
                            <Route exact path="/watch" component={VideoContainer}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </Layout>
                </BrowserRouter>
        </AppContext.Provider>
        
    );
};
    
      
export default App;
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import CocktailDetail from './Components/Cocktail-Detail';
import Error from './Components/Error';
import About from './Components/About';
import './Cocktail-Bar-App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppProvider } from './Components/Context';

function CockTailBarApp() {

    return (
        <AppProvider>
            <Router>
                <div style={{ background: "azure" }}>
                    <Navbar />
                    <Switch>
                        <Route exact path="/cocktail-bar-app"><Home /></Route>
                        <Route path="/cocktail-bar-app/About"><About /></Route>
                        <Route path="/cocktail-bar-app/cocktail/:id"><CocktailDetail /></Route>
                        <Route path="/cocktail-bar-app/*"><Error /></Route>
                    </Switch>
                </div>
            </Router>
        </AppProvider>
    );
}

export default CockTailBarApp;
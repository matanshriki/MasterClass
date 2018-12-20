import React from 'react';

// import './App.css';
import {
    BrowserRouter,
    Route,
} from 'react-router-dom';
import GlobalStyles from '../../styled/global-styles'

// import Welcome from '../Welcome';
import Profile from '../Profile';
import TopBar from '../TopBar';
import Links from '../Links';
import HomePage from '../HomePage';
import Footer from '../Footer'
import ClassPage from '../Class/ClassPage'

// import data 
import MOCK_DATA from '../../data/MOCK_DATA.json'

const App = () => (
    <BrowserRouter>
        <div className="main-app">
            <TopBar>
                <Links />
            </TopBar>
            <Route exact path="/" render={() => <HomePage data={MOCK_DATA}/>} />
            <Route path="/course" render={() => <ClassPage  data={MOCK_DATA}/>}></Route>
            <Footer />
            <GlobalStyles />
        </div>
    </BrowserRouter>
)
export default App
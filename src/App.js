import React from 'react';

import './App.css';

import ReactLuckySpinner from './components/react-lucky-spinner'

function App() {
    return (
        <div className="App">
            <ReactLuckySpinner 
                //index = {0}
                spinSpeed = {1.5}
                spinTime = {5000}
                items = {['Money', 'Gift', 'Points', 'Rewards', 'Jackpot', 'Hattrick']}
                onSpinComplete={(index) => {alert(['Money', 'Gift', 'Points', 'Rewards', 'Jackpot', 'Hattrick'][index]);}}
            />
        </div>
    );
}

export default App;

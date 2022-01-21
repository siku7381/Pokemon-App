import React, { Component } from 'react';
import './App.css';
import PokeGame from './PokeGame';

export class App extends Component {
    render() {
        return (
            <div className='App'>
                <PokeGame />
            </div>
        )
    }
}

export default App;

import React from 'react';
import './App.css';
import HookCounterFour from "./components/HookCounterFour";
import ClassCounterOne from "./components/ClassCounterOne";
import HookCounterOne from "./components/HookCounterOne";

function App() {
    return (
        <div className="App">
            {/*<HookCounterFour />*/}
            {/*<ClassCounterOne />*/}
            <HookCounterOne />
            {/*<ClassCounterOne />*/}
        </div>
    );
}

export default App;

import React, {useState} from 'react';
import './App.css';
import {useToggle} from "./hooks/useToggle";
import {usePrevious} from "./hooks/usePrevious";

function App() {
    const [state, toggle] = useToggle(false);

    const manipulate = usePrevious(90);
    const [value, setValue] = useState<number>(0);

    return (
        <div>
            useToggle
            <br/>
            {state.toString()}
            <br/>
            <button onClick={toggle}>toggle</button>
            <hr/>
            {'current value => ' + manipulate.getCurrentValue()}
            <br/>
            {'previous  value  => ' + manipulate.getPrevValue()}
            <br/>
            <button onClick={() => {
                manipulate.setNewValue(Math.floor(Math.random() * 100) + 1);
                setValue(prevState => prevState + 1);
            }}>set random new value</button>
        </div>
    );
}

export default App;

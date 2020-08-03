import React, {useState} from 'react';

function HookCounterThree(props) {
    const [name, setName] = useState({firstName: '', lastName: ''});
    return (
        <div>
            <form>
                <input onChange={e => setName({...name, firstName: e.target.value})} type="text"
                       value={name.firstName}/>
                {' '} <input onChange={e => setName({...name, lastName: e.target.value})} type="text"
                             value={name.lastName}/>
                <h2>Your first name is - {name.firstName}</h2>
                <h2>Your last name is - {name.lastName}</h2>
                <h2>{JSON.stringify(name)}</h2>
            </form>
        </div>
    );
}

export default HookCounterThree;
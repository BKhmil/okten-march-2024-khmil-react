import React, {useState} from 'react';
import './App.css';
import UserRegisterForm from "./components/user-register-form/UserRegisterForm";
import {IUser} from "./models/user.interface";

function App() {
    const [prevUser, setPrevUser] = useState<IUser | null>(null);

    const getRegisteredUser = (user: IUser) => {
        setPrevUser(user);
    }

    return (
        <div style={{width: '100vw'}}>
            <UserRegisterForm setRegisteredUser={getRegisteredUser}/>
            <hr/>
            <div style={{position: 'absolute', top: '25%', right: '20%'}}>
                <h2>Prev registered user</h2>
                {prevUser &&
                    <div style={{marginTop: '30px'}}>
                        id: {prevUser.id}<br/>
                        username: {prevUser.username}<br/>
                        password: {prevUser.password}<br/>
                        name: {prevUser.name}<br/>
                        age: {prevUser.age}
                    </div>}
            </div>
        </div>
    );
}

export default App;

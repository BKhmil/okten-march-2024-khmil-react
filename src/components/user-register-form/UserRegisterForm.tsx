import {userRegisterValidator} from "../../validators/user-register.validator";
import {joiResolver} from "@hookform/resolvers/joi";

import {useForm} from "react-hook-form";
import {FC, useRef, useState} from "react";

import {IUser} from "../../models/user.interface";

import hideIcon from '../../assets/icons/hide.png';
import showIcon from '../../assets/icons/show.png';

import css from './UserRegisterForm.module.css';

interface IInputs {
    name: string;
    username: string;
    password: string;
    age: number;
}

interface IProps {
    setRegisteredUser: (user: IUser) => void;
}

const UserRegisterForm: FC<IProps> = ({setRegisteredUser}) => {
    const  {
        register,
        handleSubmit,
        formState:{errors, isValid},
        reset
    } = useForm<IInputs>({
        mode: 'all', resolver: joiResolver(userRegisterValidator)
    });
    const [isVisible, setIsVisible] =
        useState<boolean>(false);
    const id = useRef<number>(1);

    const changeVisibility = () => {
        setIsVisible(prevState => !prevState);
    }

    const submitForm = (formData: IInputs) => {
        const user: IUser = {...formData, id: id.current}
        setRegisteredUser(user);

        ++id.current;

        reset();
    }

    return (
        <div style={{position: 'absolute', top: '15%', left: '10%'}}>
            <form
                className={css.Form}
                onSubmit={handleSubmit(submitForm)}
            >
                <label>
                    Create your username:
                    <input type="text" {...register('username')}/>
                </label>
                <label>
                    Create your password:
                    <input
                        style={{width: '80%', display: 'inline-block'}}
                        type={isVisible ? 'text' : 'password'}
                        {...register('password')}
                    />
                    <button type='button' onClick={changeVisibility}>
                        <img
                            style={{width: '25px', height: '22px', marginBottom: '-7px'}}
                            src={isVisible ? hideIcon : showIcon}
                            alt="show/hide icon"
                        />
                    </button>
                </label>
                <label>
                    Enter your name:
                    <input type="text" {...register('name')}/>
                </label>
                <label>
                    Enter your age:
                    <input type="number" {...register('age')}/>
                </label>
                <button
                    type='submit'
                    style={{width: '90%', padding: '5px'}}
                    disabled={!isValid}
                >Submit</button>
            </form>
            <div style={{marginTop: '40px'}}>
                <h2>Errors:</h2>
                {errors.username && <div>{errors.username.message}</div>}
                {errors.password && <div>{errors.password.message}</div>}
                {errors.name && <div>{errors.name.message}</div>}
                {errors.age && <div>{errors.age.message}</div>}
            </div>
        </div>
    );
}

export default UserRegisterForm;
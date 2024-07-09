import React, {FC} from 'react';
import css from './H1.module.css';

interface IProps {
    text: string;
    icon: string;
}

const H1: FC<IProps> = ({text, icon}) => {
    return (
        <div className={css.main}>
            <h1>{text}</h1> <img src={icon} alt={text}/>
            <hr/>
        </div>
    );
};

export default H1;
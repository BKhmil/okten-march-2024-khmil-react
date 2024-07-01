import {useState} from "react";

// приймаю початкове значення
export const useToggle = (initState: boolean): [boolean, ()  => void] => {
    // створюю стан який ініціалізую початковим значенням
    const [flag,  setFlag] = useState<boolean>(initState);

    // ця функція тогглить стан
    const toggle = () => setFlag(prevState => !prevState);

    // повертаю стан та функцію для тогглінга
    return [flag, toggle];
}
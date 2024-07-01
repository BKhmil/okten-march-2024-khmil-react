import {useRef} from "react";

// приймаю початкове значення, і так, я зробив цей хук тільки для чисел :(
export const usePrevious = (initValue: number): {
    setNewValue: (value: number) => void,
    getPrevValue: () => number | null,
    getCurrentValue: () => number
} => {
    // створюю реф для поточного значення яке за замовченням буде рівне initValue
    const ref = useRef<number>(initValue);
    // створюю реф для попереднього значення,
    // оскільки спочатку ніякого попереднього значення не може бути, початково воно null
    let prev = useRef<number | null>(null);

    // функція-маніпулятор з функціоналом хука
    const manipulate = {
        // метод встановлення  новго значення та встановлення попереднього значення на основі поточного
        setNewValue: (value: number) => {
            prev.current = ref.current;
            ref.current = value;
        },
        // методи для отримання поточного і попереднього значень
        getPrevValue: () => prev.current,
        getCurrentValue: () => ref.current
    }

    // повертаю функцію-маніпулятор
    return manipulate;
}
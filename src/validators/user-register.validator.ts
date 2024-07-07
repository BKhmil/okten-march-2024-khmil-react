import Joi from "joi";

export const userRegisterValidator = Joi.object({
    // регулярка в принципі працює і без створення RegExp об'єкту,
    // але в документації там всюди так пишуть, тому хай буде
    name: Joi.string().pattern(new RegExp(/^[a-zA-Z'’]+$/)).min(3).max(30)
        .messages({
            'string.pattern.base': 'Name can only contain letters and apostrophes.',
            'string.min': 'Name must be at least 3 characters long.',
            'string.max': 'Name cannot be longer than 30 characters.'
        }),
    username: Joi.string().pattern(new RegExp(/^[a-zA-Z0-9_]+$/)).min(1).max(15)
        .messages({
            'string.pattern.base': 'Username can only contain letters, numbers, and underscores.',
            'string.min': 'Username must be at least 1 character long.',
            'string.max': 'Username cannot be longer than 15 characters.'
        }),
    password: Joi.string().pattern(new RegExp(/^[^'@")(`~<>/|\\=+-]+$/)).min(8).max(12)
        .messages({
            'string.pattern.base': 'Password cannot contain the following characters: \' @ " ) ( ` ~ < > / | \\ = + -',
            'string.min': 'Password must be at least 8 characters long.',
            'string.max': 'Password cannot be longer than 12 characters.'
        }),
    age: Joi.number().min(14).max(134)
        .messages({
            'number.min': 'Age must be at least 14.',
            'number.max': 'Age cannot be greater than 134.'
        })
});
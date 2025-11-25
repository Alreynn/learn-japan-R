export const rand = (max) => {
    return Math.floor(Math.random() * max);
}
export const getOptions = (option, correctOption) => {
    const optionsArray = [];
    
    while (optionsArray.length < 4) {
        const random = option[rand(option.length)];
        if (random !== correctOption && !optionsArray.includes(random)) {
            optionsArray.push(random);
        }
    }
    return optionsArray;
}
export const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
}
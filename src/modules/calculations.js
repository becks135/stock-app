export const convertNumber = (number) => {
    const sign = Math.sign(number);
    const absoluteNumber = Math.abs(number);
    
    return absoluteNumber >= 1.0e12 //conver to trillions
        ? sign * (absoluteNumber / 1.0e12).toFixed(2) + "T"
        : absoluteNumber >= 1.0e9 // convert to billions
        ? sign * (absoluteNumber / 1.0e9).toFixed(2) + "B"
        : absoluteNumber >= 1.0e6 // convert to millions
        ? sign * (absoluteNumber / 1.0e6).toFixed(2) + "M"
        : absoluteNumber >= 1.0e3 // convert to thousands
        ? sign * (absoluteNumber / 1.0e3).toFixed(2) + "K"
        : number;
}
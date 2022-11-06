// icons
import Stormy from './icons/stormy';
import CloudySun from './icons/cloudy-sun';
import Cloudy from './icons/cloudy';
import Rainy from './icons/rainy';
import Snowy from './icons/snowy';
import Sunny from './icons/sunny';
import Foggy from './icons/foggy';

const getSymbolByWeatherCode = (weatherCode) => {
    const symbols = {
        sunny: <Sunny />,
        snowy: <Snowy />,
        rainy: <Rainy />,
        foggy: <Foggy />,
        cloudy: <Cloudy />,
        cloudySun: <CloudySun />,
        stormy: <Stormy />
    };
    
    
    const codes = {
        stormy: [95, 96, 99],
        snowy: [71, 73, 75, 77, 85, 86],
        rainy: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82],
        foggy: [45, 48],
        cloudy: [3],
        cloudySun: [2],
        sunny: [0, 1],
    };
    
    function getNameOfCode(object, value) {
        return Object.keys(object).find(key => object[key]?.includes(value));
    };
    
    let symbol;
    let symbolOfDay = getNameOfCode(codes, weatherCode);
    if (symbols.hasOwnProperty(symbolOfDay)) {
        symbol = symbols[symbolOfDay];
    };

    return symbol;
}

export default getSymbolByWeatherCode;
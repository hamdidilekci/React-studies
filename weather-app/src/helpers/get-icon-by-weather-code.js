// icons
import {
    Cloudy,
    CloudySun,
    Foggy,
    Rainy,
    Snowy,
    Stormy,
    Sunny,
} from '../icons';

const getIconByWeatherCode = (weatherCode) => {
    const codes = {
        cloudy: [3],
        cloudySun: [2],
        foggy: [45, 48],
        rainy: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82],
        snowy: [71, 73, 75, 77, 85, 86],
        stormy: [95, 96, 99],
        sunny: [0, 1],
    };

    const icons = {
        cloudy: <Cloudy />,
        cloudySun: <CloudySun />,
        foggy: <Foggy />,
        rainy: <Rainy />,
        snowy: <Snowy />,
        stormy: <Stormy />,
        sunny: <Sunny />
    };

    const labels = {
        cloudy: 'Cloudy',
        cloudySun: 'Partly cloudy',
        foggy: 'Foggy',
        rainy: 'Rainy',
        snowy: 'Snowy',
        stormy: 'Stormy',
        sunny: 'Sunny',
    };

    function getNameOfCode(object, value) {
        return Object.keys(object).find(key => object[key].includes(value));
    };
    let iconName = getNameOfCode(codes, weatherCode);

    let icon;
    if (icons.hasOwnProperty(iconName)) {
        icon = icons[iconName];
    };

    let label;
    if (labels.hasOwnProperty(iconName)) {
        label = labels[iconName];
    };

    return {icon, label};
}

export default getIconByWeatherCode;
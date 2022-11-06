const getDayName = (time, locale) => {
    let date = new Date(time);
    return date.toLocaleDateString(locale, { weekday: 'long' });
};

export default getDayName;
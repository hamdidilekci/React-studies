const getDayName = (time, locale) => {
    let date = new Date(time);
    let longDay = date.toLocaleDateString(locale, { weekday: 'long' });
    let shortDay = date.toLocaleDateString(locale, { weekday: 'short' });
    return {longDay, shortDay}
};

export default getDayName;
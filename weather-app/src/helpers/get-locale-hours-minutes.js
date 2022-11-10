const getLocaleHours = (time, locale) => {
    let date = new Date(time);
    return date.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit', });
};

export default getLocaleHours;
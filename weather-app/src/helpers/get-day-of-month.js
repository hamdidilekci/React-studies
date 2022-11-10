const getDayOfMonth = (time, locale) => {
    let date = new Date(time);
    return date.toLocaleDateString(locale, { month: 'short', day: '2-digit' });
};

export default getDayOfMonth;
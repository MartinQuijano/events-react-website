export const getDateString = (date) => {
    const fullDate = new Date(date)
    let calendarDate = fullDate.getDate() + '/' + fullDate.getMonth() + '/' + fullDate.getFullYear()
    let minutes = (fullDate.getMinutes() < 10 ? '0' : '') + fullDate.getMinutes()
    let timeOfDate = fullDate.getHours() + ':' + minutes

    return (calendarDate + ' - ' + timeOfDate + 'hs')
}
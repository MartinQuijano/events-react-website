const EVENTS_ENDPOINT_ALL_EVENTS = 'http://localhost:4000/api/event?pageSize=5&page='

export const getEvents = (page) => {
    console.log(EVENTS_ENDPOINT_ALL_EVENTS + page)
    return fetch(EVENTS_ENDPOINT_ALL_EVENTS + page)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            return data
        })
}
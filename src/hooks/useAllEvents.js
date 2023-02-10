import { getEvents } from '../services/events'
import { useEffect, useState } from 'react'

export function useGetEvents() {
    const [events, setEvents] = useState([])

    const [loading, setLoading] = useState(false)
    const [hasMore, setHasMore] = useState(true)
    const [numberOfPage, setNumberOfPage] = useState(-1)

    const getMoreEvents = () => {
        setLoading(true)
        const newNumberOfPage = numberOfPage + 1;
        getEvents(newNumberOfPage).then((data) => {
            const { results, amountOfResults } = data

            const newEvents = [...events, ...results]

            if (newEvents.length >= amountOfResults) {
                setHasMore(false)
            }
            setEvents(newEvents)
            setNumberOfPage(newNumberOfPage)
        })
        setLoading(false)
    }

    useEffect(getMoreEvents, [])

    return { events, hasMore, getMoreEvents }
}
import React from 'react'
import './events.css'
import { useGetEvents } from '../../hooks/useAllEvents';
import { getDateString } from '../../utils/dates';

import InfiniteScroll from 'react-infinite-scroller';

const IMG_URL_PATH = 'http://localhost:4000/images/'

const Events = () => {

    const { events, hasMore, getMoreEvents } = useGetEvents()

    return (
        <div className="events__container">
            <InfiniteScroll pageStart={0} loadMore={getMoreEvents} hasMore={hasMore} loader={<p key="loading">Loading...</p>} threshold={100}>
                {events.length > 0 && events.map((event, i) => (
                    <div key={i} className="events__card">
                        <div className="events__card-img">
                            <img src={IMG_URL_PATH + event.image_path} />
                        </div>
                        <div className="events__card-info">
                            <h2>{event.title}</h2>
                            <h3>{event.city + ' - ' + event.country}</h3>
                            <h4>{getDateString(event.date)}</h4>
                            <p>{event.description}</p>
                            <h5>{event.category}</h5>
                        </div>
                    </div>
                ))}
            </InfiniteScroll>
        </div>
    )
}

export default Events
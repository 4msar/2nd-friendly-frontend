import { event_list, friendlyEvent, upcomingEvents } from '@/components/dummy_data/data'
import EventBox from '@/components/Event/EventBox'
import FriendlyEvent from '@/components/Event/FriendlyEvent'
import UpcomingEventBox from '@/components/Event/UpcomingEventBox'
import PublicView from '@/components/HOC/PublicView'
import PublicService from '@/services/PublicService'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'

const Events = () => {
    const events = event_list;
    const upComeEvents = upcomingEvents;
    const friendlyEvents = friendlyEvent;
    const [eventData, setEventData] = useState();

    const handleGetEvents = () => {
        const res = PublicService.allEvents().then((data) => {
            console.log(data);
            setEventData(data.data.allEvent)
            
        })
    }

    useEffect(() => {
        handleGetEvents();
    }, [])
  return (
    <main>
         <Head>
            <title>Events</title>
        </Head>
    <section className="pt-4 pb-2">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb breadcrumb-dots my-0 py-0">
                            <li className="breadcrumb-item"><a href="index.php">Home</a></li>
                            <li className="breadcrumb-item">Company</li>
                            <li className="breadcrumb-item">Events</li>
                        </ol>
                    </nav>
                    <h4 className="fw-normal mt-3">Events</h4>
                </div>
            </div>
        </div>
    </section>
    <section className="pt-0 pb-5">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <form className="mb-3">
                        <div className="row g-4">
                            <div className="col-xl-3">
                                <input className="form-control form-control-sm me-1 py-0" type="search" placeholder="Enter keyword"/>
                            </div>
                            <div className="col-xl-3">
                                <select className="form-select form-select-sm">
                                    <option value="mostpopular">Most Popular</option>
                                    <option value="date">Date</option>
                                    <option value="recentlyadded">Recently Added</option>
                                    <option value="audi">Friends & Following</option>
                                    <option value="free">Free</option>
                                </select>
                            </div>
                            <div className="col-xl-3">
                                <select className="form-select form-select-sm">
                                    <option value="anytime">Anytime</option>
                                    <option value="today">Today</option>
                                    <option value="tomorrow">Tomorrow</option>
                                    <option value="thisweekend">This Weekend</option>
                                    <option value="thisweek">This Week</option>
                                    <option value="nextweek">Next Week</option>
                                    <option value="weekafternext">Week After Next</option>
                                    <option value="past">Past</option>
                                    <option value="jumptodate">Jump to Date</option>
                                </select>
                            </div>
                            <div className="col-xl-3">
                                <select className="form-select form-select-sm">
                                    <option value="volvo">All Categories</option>
                                    <option value="music">Music</option>
                                    <option value="visualarts">Visual Arts</option>
                                    <option value="performingarts">Performing Arts</option>
                                    <option value="film">Film</option>
                                    <option value="lectures&books">Lectures & Books</option>
                                    <option value="fashion">Fashion</option>
                                    <option value="food&drink">Food & Drink</option>
                                    <option value="festivals&fairs">Festivals & FairsFestivals & Fairs</option>
                                    <option value="charities">Charities</option>
                                    <option value="sports&activelife">Sports & Active LifeSports & Active Life</option>
                                    <option value="nightlife">NightlifeNightlife</option>
                                    <option value="kids&family">Kids & Family</option>
                                    <option value="audi">other</option>
                                    <option value="official2ndaevents">Official 2nd A Events</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row g-4">
                {/* <!-- Card item START --> */}
                {eventData?.length > 0 && eventData.map((item, index) => (
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <EventBox item={item} />
                    </div>
                ))}
               
            </div>
        </div>
    </section>
    <section className="pt-1 pb-5">
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <div className="mb-3 border-bottom">
                        <h3>Upcoming Events</h3>
                        <p className="mb-0 pb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                    </div>
                    {upComeEvents.length > 0 && upComeEvents.map((event, index) => (
                        <>
                            <UpcomingEventBox item={event} />
                            {upcomingEvents.length - 1 > index && (
                                <hr />
                            )}
                        </>
                    ))}
                   
                   
                   
                </div>
                <div className="col-4">
                    <div className="card rounded-1 border p-3 mb-4">
                        <h4 className="mb-3 fw-bold border-bottom pb-2">2nd A Friendly Events</h4>
                        {friendlyEvents.length > 0 && friendlyEvents.map((event) => (
                            <FriendlyEvent item={event} />
                        ))}
                    </div>
                    <div className="card rounded-1 border p-3 mb-4">
                        <h4 className="mb-3 fw-bold border-bottom pb-2">Recently Added Events</h4>
                        {friendlyEvents.length > 0 && friendlyEvents.map((event) => (
                            <FriendlyEvent item={event} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
  )
}

export default PublicView(Events)
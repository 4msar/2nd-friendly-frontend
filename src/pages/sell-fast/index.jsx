import Link from 'next/link'
import React from 'react'
import accountImg from "@/assets/img/element/create-account.svg";
import courseImg from "@/assets/img/element/add-course.svg";
import moneyImg from "@/assets/img/element/earn-money.svg";
import PublicView from '@/components/HOC/PublicView';

const SellFast = () => {
  return (
    <main>
        <section className="py-4">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb breadcrumb-dots my-0 py-0">
                                <li className="breadcrumb-item"><a href="index.php">Home</a></li>
                                <li className="breadcrumb-item">Company</li>
                                <li className="breadcrumb-item">Sell Fast</li>
                            </ol>
                        </nav>
                        <h4 className="fw-normal mt-3">Contact Us</h4>
                    </div>
                </div>
            </div>
        </section>
        <section className="position-relative pt-1 pb-5">
            <div className="container">
                <div className="row g-4 g-md-5">
                    <div className="col-md-4 text-center">
                        <img src={accountImg.src} className="h-200px" alt=""/>
                        <h5 className="mt-3">Add as much detail as you can</h5>
                        <p className="text-truncate-3 mb-0">Ads with clear details get more views! Include keywords and information that buyers will be interested in. Remember to be honest while providing these details.</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <img src={courseImg.src} className="h-200px" alt=""/>
                        <h5 className="mt-3">Add great photos</h5>
                        <p className="text-truncate-3 mb-0">Use clear photos of the item you're selling. Ads with real photos get up to 10 times more views than ads with catalogue/stock photos. Make sure the lighting is good and take photos from different angles.</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <img src={moneyImg.src} className="h-200px" alt=""/>
                        <h5 className="mt-3">Pick the right price</h5>
                        <p className="text-truncate-3 mb-0">Everything sells if the price is right! Browse similar ads on Bikroy and choose a competitive price. In general, the lower the price, the higher is the demand. If you are willing to negotiate, be sure to select the Negotiable option while posting the ad.</p>
                    </div>
                </div>
                <div className="row g-4 mt-5">
                    <div className="col-lg-4">
                        <div className="bg-info bg-opacity-10 rounded-3 p-5">
                            {/* <!-- Icon --> */}
                            <h2 className="display-5 text-info"><i className="bi bi-headset"></i></h2>
                            <h3>Contact Support?</h3>
                            <p>Delay death ask to style Me mean able conviction For every delay death ask to style</p>
                            <Link href="/contact-us" className="btn btn-dark mb-0">Contact Us</Link>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="bg-purple bg-opacity-10 rounded-3 p-5">
                            {/* <!-- Icon --> */}
                            <h2 className="display-5 text-purple"><i className="fas fa-ticket-alt"></i></h2>
                            <h3>Submit a Ticket</h3>
                            <p>Prosperous impression had conviction For every delay death ask to style Me mean able</p>
                            <Link href="support" className="btn btn-dark mb-0">Submit Ticket</Link>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="bg-warning bg-opacity-15 rounded-3 p-5">
                            {/* <!-- Icon --> */}
                            <h2 className="display-5 text-warning"><i className="bi bi-envelope-fill"></i></h2>
                            <h3>Request a feature</h3>
                            <p>Prosperous impression had conviction For every delay death ask to style Me mean able</p>
                            <Link href="request-demo" className="btn btn-dark mb-0">Request</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default PublicView(SellFast, "Sell Fast")
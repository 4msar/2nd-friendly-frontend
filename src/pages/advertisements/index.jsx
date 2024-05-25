import PublicView from "@/components/HOC/PublicView";
import React from "react";
import child from "@/assets/img/element/child.svg";
import help from "@/assets/img/element/help.svg";
import Link from "next/link";

const Advertisements = () => {
  return (
    <main>
      <section className="bg-light mt-0 pt-0">
        <div className="container">
          <div className="row g-3 justify-content-between">
            <section className="pt-4 pb-2">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb breadcrumb-dots my-0 py-0">
                        <li className="breadcrumb-item">
                          <a href="index.php">Home</a>
                        </li>
                        <li className="breadcrumb-item">For Business</li>
                        <li className="breadcrumb-item">Business Blog</li>
                      </ol>
                    </nav>
                    <h4 className="fw-normal mt-3">
                      Business <span className="text-danger">Blogs</span>
                    </h4>
                  </div>
                </div>
              </div>
            </section>
            <div className="col-lg-6 col-xl-5">
              <div className="row mt-4">
                <div className="col-12 mb-5">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="icon-xl bg-body shadow rounded-circle">
                        <img
                          src={child.src}
                          className="h-40px"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="ms-3">
                      <h5 className="mb-0">Placement</h5>
                      <p className="text-truncate-2 mb-0">
                        Placement in “Sponsored Results” sections in a number of
                        key places on the site
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 mb-5">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="icon-xl bg-body shadow rounded-circle">
                        <img
                          src={help.src}
                          className="h-40px"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="ms-3">
                      <h5 className="mb-0">Targeting</h5>
                      <p className="text-truncate-2 mb-0">
                        Ability to target the leads you desire most by location
                        and keyword
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12 mb-5">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="icon-xl bg-body shadow rounded-circle">
                        <img
                          src={child.src}
                          className="h-40px"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="ms-3">
                      <h5 className="mb-0">Ability</h5>
                      <p className="text-truncate-2 mb-0">
                        Ability to set a budget that works for you. Spend as
                        little as $5/day on average
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 mb-5">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="icon-xl bg-body shadow rounded-circle">
                        <img
                          src={help.src}
                          className="h-40px"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="ms-3">
                      <h5 className="mb-0">Ad Tracking</h5>
                      <p className="text-truncate-2 mb-0">
                        View ad performance tracking in your 2nd A Friendly Ads
                        Dashboard—anytime, from any device
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-5">
              <div className="row mt-4">
                <div className="col-12 mb-5">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="icon-xl bg-body shadow rounded-circle">
                        <img
                          src={child.src}
                          className="h-40px"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="ms-3">
                      <h5 className="mb-0">
                        Prominent ad display on competitors’ pages
                      </h5>
                      <p className="text-truncate-2 mb-0">
                        Prominent ad display on competitors’ pages to reach
                        customers looking for businesses like yours
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 mb-5">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="icon-xl bg-body shadow rounded-circle">
                        <img
                          src={help.src}
                          className="h-40px"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="ms-3">
                      <h5 className="mb-0">Flexible and Risk-free Payment</h5>
                      <p className="text-truncate-2 mb-0">
                        Edit, or cancel at any time. Pay only when someone
                        clicks on your ads (charges will not exceed the monthly
                        max chosen)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12 mb-5">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="icon-xl bg-body shadow rounded-circle">
                        <img
                          src={child.src}
                          className="h-40px"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="ms-3">
                      <h5 className="mb-0">Easy Setup</h5>
                      <p className="text-truncate-2 mb-0">
                        Customize your ad design and settings to your liking or
                        let 2nd A Friendly optimize it on your behalf
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 mb-5">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="icon-xl bg-body shadow rounded-circle">
                        <img
                          src={help.src}
                          className="h-40px"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="ms-3">
                      <h5 className="mb-0">Example/Test</h5>
                      <p className="text-truncate-2 mb-0">
                        Edit, or cancel at any time. Pay only when someone
                        clicks on your ads (charges will not exceed the monthly
                        max chosen)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0 pt-md-5">
        <div className="container">
          <h3>
            Frequently Asked Questions <span className="text-warning">(FAQ)</span>
          </h3>
          <p className="mb-3">
            We are answering the most frequent questions. No worries if you do
            not find the exact one. You can find out more by searching or
            continuing by clicking the button below or directly{" "}
            <Link href="support" className="text-decoration-underline">
              Contact our supports
            </Link>
          </p>
          <div className="row g-4">
            <div className="col-lg-12 ms-xl-auto">
              {/* <!-- Accordion START --> */}
              <div
                className="accordion accordion-icon accordion-bg-light"
                id="accordionFaq"
              >
                {/* <!-- Accordion item --> */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button h6 rounded"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Where do 2nd A Friendly Ads appear?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionFaq"
                  >
                    <div className="accordion-body">
                      Your ad will be featured in key locations on the site in
                      the "Sponsored Results" sections (which are above and
                      below the organic search results) and on competitor pages.
                      Your ad will receive optimal visibility and reach those
                      customers looking for businesses like yours.
                    </div>
                  </div>
                </div>
                {/* <!-- Accordion item --> */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button h6 rounded collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      How can we help?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionFaq"
                  >
                    <div className="accordion-body">
                      What deal evil rent by real in. But her ready least set
                      lived spite solid. September how men saw tolerably two
                      behavior arranging. She offices for highest and replied
                      one venture pasture. Applauded no discovery in newspaper
                      allowance am northward. Frequently partiality possession
                      resolution at or appearance unaffected me. Engaged its was
                      the evident pleased husband. Ye goodness felicity do
                      disposal dwelling no. First am plate jokes to began to
                      cause a scale. Subjects he prospect elegance followed no
                      overcame possible it on. Improved own provided blessing
                      may peculiar domestic. Sight house has sex never. No
                      visited raising gravity outward subject my cottage Mr be.
                    </div>
                  </div>
                </div>
                {/* <!-- Accordion item --> */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button h6 rounded collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      What are 2nd A Friendly Ads?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionFaq"
                  >
                    <div className="accordion-body">
                      2nd A Friendly Ads gives business owners the opportunity
                      to advertise their business information, service
                      offerings, or product listings to millions of 2nd A
                      Friendly consumers. With 2nd A Friendly Ads, your business
                      advertisement can receive key placement on the 2nd A
                      Friendly search page in "Sponsored Results" sections and
                      can be displayed on competitors' pages to reach customers
                      searching for businesses like yours.
                    </div>
                  </div>
                </div>
                {/* <!-- Accordion item --> */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button h6 rounded collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      How much does it cost to display an ad on 2nd A Friendly?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionFaq"
                  >
                    <div className="accordion-body">
                      You can spend as little as $5 per day on average and only
                      pay when someone clicks on your ad.
                    </div>
                  </div>
                </div>
                {/* <!-- Accordion item --> */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button h6 rounded collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Is 2nd A Friendly a good marketing tool?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionFaq"
                  >
                    <div className="accordion-body">
                      2nd A Friendly Ads is here to help make marketing your
                      business to potential customers that much easier. With 2nd
                      A Friendly Ads, you can get ahead of the competition with
                      prominent placement, you can target your most desirable
                      customers, and you can easily track and manage your ads.
                      Don't worry if you are not a marketing expert. Your ad can
                      be created in minutes!
                    </div>
                  </div>
                </div>
                {/* <!-- Accordion item --> */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSix">
                    <button
                      className="accordion-button h6 rounded collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      Does 2nd A Friendly charge per click?
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#accordionFaq"
                  >
                    <div className="accordion-body">
                      Yes. You will be charged on a cost-per-click basis.
                    </div>
                  </div>
                </div>
                {/* <!-- Accordion item --> */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSeven">
                    <button
                      className="accordion-button h6 rounded collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSeven"
                      aria-expanded="false"
                      aria-controls="collapseSeven"
                    >
                      Can I set my own ad budget?
                    </button>
                  </h2>
                  <div
                    id="collapseSeven"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSeven"
                    data-bs-parent="#accordionFaq"
                  >
                    <div className="accordion-body">
                      Yes. You can spend as little as $5 per day on average. You
                      can strategically adjust your budget to any maximum
                      amount, when you want and as often as you want.
                    </div>
                  </div>
                </div>
                {/* <!-- Accordion item --> */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingEight">
                    <button
                      className="accordion-button h6 rounded collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEight"
                      aria-expanded="false"
                      aria-controls="collapseEight"
                    >
                      When will I be charged for my ad?
                    </button>
                  </h2>
                  <div
                    id="collapseEight"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingEight"
                    data-bs-parent="#accordionFaq"
                  >
                    <div className="accordion-body">
                      You will be charged on a cost-per-click basis. In short,
                      you will only pay when someone clicks on your ad.
                    </div>
                  </div>
                </div>
                {/* <!-- Accordion item --> */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingNine">
                    <button
                      className="accordion-button h6 rounded collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseNine"
                      aria-expanded="false"
                      aria-controls="collapseNine"
                    >
                      Will I get penalized for canceling my ad?
                    </button>
                  </h2>
                  <div
                    id="collapseNine"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingNine"
                    data-bs-parent="#accordionFaq"
                  >
                    <div className="accordion-body">
                      No. You are free to cancel at any time. There are no term
                      contracts with self-serve advertisers so you're never
                      locked into running your 2nd A Friendly Ads for a specific
                      period of time.
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Accordion END --> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PublicView(Advertisements);

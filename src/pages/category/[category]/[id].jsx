import { category_items } from "@/components/dummy_data/data";
import PublicView from "@/components/HOC/PublicView";
import { useRouter } from "next/router";

const CategoryPage = () => {
  const route = useRouter();
  const items = category_items;
  const { query } = route;

  return (
    <main>
      <section className="pt-5 pb-0 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-dots my-0 py-0">
                  <li className="breadcrumb-item">
                    <a href="index.php">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="restaurent.php">Food & Dining</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="restaurent.php">Restaurants</a>
                  </li>
                  <li className="breadcrumb-item">
                    Brothers and Sisters Restaurant Limited
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light pt-2 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="fw-normal">
                Brothers and Sisters Restaurant Limited
              </h2>
              <p>
                Satisfied conveying a dependent contented agreeable do be.
                Warrant private blushes removed an in equally totally if.
                Delivered dejection necessary objection do Mr prevailed. Mr
                feeling does chiefly cordial in do..
              </p>
              <ul className="list-inline mb-0">
                <li className="list-inline-item h6 me-3 mb-1 mb-sm-0">
                  <i className="fas fa-star text-warning me-2"></i>4.5/5.0
                </li>
                <li className="list-inline-item h6 me-3 mb-1 mb-sm-0">
                  <i className="fas fa-user-graduate text-orange me-2"></i>12k
                  Enrolled
                </li>
                <li className="list-inline-item h6 me-3 mb-1 mb-sm-0">
                  <i className="fas fa-signal text-success me-2"></i>All levels
                </li>
                <li className="list-inline-item h6 me-3 mb-1 mb-sm-0">
                  <i className="bi bi-patch-exclamation-fill text-danger me-2"></i>
                  Last updated 09/2021
                </li>
                <li className="list-inline-item h6 mb-0">
                  <i className="fas fa-globe text-info me-2"></i>English
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-3 pt-xl-5">
        <div className="container" data-sticky-container>
          <div className="row g-4">
            <div className="col-xl-8">
              <h5 className="fw-semibold border-bottom pb-1 mb-3">
                Curriculum
              </h5>
              <div className="row g-3">
                {/* <!-- Course item --> */}
                <div className="col-sm-6 col-lg-4 col-xl-3">
                  {/* <!-- Image --> */}
                  <div className="card card-metro overflow-hidden rounded-2">
                    <img src="assets/img/event/4.jpg" alt="" />
                    {/* <!-- Image overlay --> */}
                    <div className="card-img-overlay d-flex">
                      {/* <!-- Info --> */}
                      <div className="mt-auto card-text">
                        <a
                          href="#"
                          className="text-white mt-auto h5 stretched-link"
                        >
                          Figma
                        </a>
                        <div className="text-white">6 Photos | 23 Reviews</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Course item --> */}
                <div className="col-sm-6 col-lg-4 col-xl-3">
                  {/* <!-- Image --> */}
                  <div className="card card-metro overflow-hidden rounded-2">
                    <img src="assets/img/event/14.jpg" alt="" />
                    {/* <!-- Image overlay --> */}
                    <div className="card-img-overlay d-flex">
                      {/* <!-- Info --> */}
                      <div className="mt-auto card-text">
                        <a
                          href="#"
                          className="text-white mt-auto h5 stretched-link"
                        >
                          Figma
                        </a>
                        <div className="text-white">16 Courses</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Course item --> */}
                <div className="col-sm-6 col-lg-4 col-xl-3">
                  {/* <!-- Image --> */}
                  <div className="card card-metro overflow-hidden rounded-2">
                    <img src="assets/img/event/15.jpg" alt="" />
                    {/* <!-- Image overlay --> */}
                    <div className="card-img-overlay d-flex">
                      {/* <!-- Info --> */}
                      <div className="mt-auto card-text">
                        <a
                          href="#"
                          className="text-white mt-auto h5 stretched-link"
                        >
                          Python
                        </a>
                        <div className="text-white">32 Courses</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Course item --> */}
                <div className="col-sm-6 col-lg-4 col-xl-3">
                  {/* <!-- Image --> */}
                  <div className="card card-metro overflow-hidden rounded-2">
                    <img src="assets/img/event/6.jpg" alt="" />
                    {/* <!-- Image overlay --> */}
                    <div className="card-img-overlay d-flex">
                      {/* <!-- Info --> */}
                      <div className="mt-auto card-text">
                        <a
                          href="#"
                          className="text-white mt-auto h5 stretched-link"
                        >
                          Angular
                        </a>
                        <div className="text-white">48 Courses</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Course item --> */}
                <div className="col-sm-6 col-lg-4 col-xl-3">
                  {/* <!-- Image --> */}
                  <div className="card card-metro overflow-hidden rounded-3">
                    <img src="assets/img/event/7.jpg" alt="" />
                    {/* <!-- Image overlay --> */}
                    <div className="card-img-overlay d-flex">
                      {/* <!-- Info --> */}
                      <div className="mt-auto card-text">
                        <a
                          href="#"
                          className="text-white mt-auto h5 stretched-link"
                        >
                          React-Native
                        </a>
                        <div className="text-white">31 Courses</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Course item --> */}
                <div className="col-sm-6 col-lg-4 col-xl-3">
                  {/* <!-- Image --> */}
                  <div className="card card-metro overflow-hidden rounded-3">
                    <img src="assets/img/event/8.jpg" alt="" />
                    {/* <!-- Image overlay --> */}
                    <div className="card-img-overlay d-flex">
                      {/* <!-- Info --> */}
                      <div className="mt-auto card-text">
                        <a
                          href="#"
                          className="text-white mt-auto h5 stretched-link"
                        >
                          Sketch
                        </a>
                        <div className="text-white">38 Courses</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Course item --> */}
                <div className="col-sm-6 col-lg-4 col-xl-3">
                  {/* <!-- Image --> */}
                  <div className="card card-metro overflow-hidden rounded-3">
                    <img src="assets/img/event/14.jpg" alt="" />
                    {/* <!-- Image overlay --> */}
                    <div className="card-img-overlay d-flex">
                      {/* <!-- Info --> */}
                      <div className="mt-auto card-text">
                        <a
                          href="#"
                          className="text-white mt-auto h5 stretched-link"
                        >
                          Javascript
                        </a>
                        <div className="text-white">33 Courses</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Course item --> */}
                <div className="col-sm-6 col-lg-4 col-xl-3">
                  {/* <!-- Image --> */}
                  <div className="card card-metro overflow-hidden rounded-3">
                    <img src="assets/img/event/20.jpg" alt="" />
                    {/* <!-- Image overlay --> */}
                    <div className="card-img-overlay d-flex">
                      {/* <!-- Info --> */}
                      <div className="mt-auto card-text">
                        <a
                          href="#"
                          className="text-white mt-auto h5 stretched-link"
                        >
                          Bootstrap
                        </a>
                        <div className="text-white">62 Courses</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="border-bottom mb-2">
                    <h5 className="fw-semibold">About the business</h5>
                  </div>
                  <h6 className="mb-3">History</h6>
                  <p className="mb-3">
                    Established in 2012. Peaches Patties has been serving San
                    Francisco since 2012. We look forward to serving you some of
                    the best Jamaican cuisine in the area.
                  </p>
                  <h6 className="mb-3">Meet the Business Owner</h6>
                  <p className="mb-3">
                    Shani always wanted to start a business making Jamaican
                    food. She was inspired by her mother, Peaches, who she
                    learned to cook from. Shani wanted to share the delicious
                    cuisine of her culture and hopes you enjoy what she has to
                    offer.
                  </p>
                  {/* <!-- List content --> */}
                  <h6 className="mt-4">What you’ll learn</h6>
                  <ul>
                    <li> Digital marketing course introduction</li>
                    <li> Customer Life cycle</li>
                    <li> What is Search engine optimization(SEO)</li>
                    <li> Facebook ADS</li>
                    <li> Facebook Messenger Chatbot</li>
                    <li> Search engine optimization tools</li>
                    <li> Why SEO</li>
                    <li> URL Structure</li>
                    <li> Featured Snippet</li>
                    <li> EO tips and tricks</li>
                    <li> Google tag manager</li>
                  </ul>
                  <p className="mb-0">
                    As it so contrasted oh estimating instrument. Size like body
                    someone had. Are conduct viewing boy minutes warrant the
                    expense? Tolerably behavior may admit daughters offending
                    her ask own. Praise effect wishes change way and any wanted.
                    Lively use looked latter regard had. Do he it part more last
                    in.{" "}
                  </p>
                  {/* <!-- Course detail END --> */}
                  <ul className="list-inline hstack flex-wrap gap-3 mb-0 mt-4">
                    <li className="list-inline-item">
                      <h5 className="mb-0">Follow me on:</h5>
                    </li>
                    <li className="list-inline-item">
                      {" "}
                      <a className="text-facebook" href="#">
                        <i className="fab fa-facebook-square"></i> Facebook
                      </a>{" "}
                    </li>
                    <li className="list-inline-item">
                      {" "}
                      <a className="text-instagram-gradient" href="#">
                        <i className="fab fa-instagram-square"></i> Instagram
                      </a>{" "}
                    </li>
                    <li className="list-inline-item">
                      {" "}
                      <a className="text-twitter" href="#">
                        <i className="fab fa-twitter-square"></i> Twitter
                      </a>{" "}
                    </li>
                    <li className="list-inline-item">
                      {" "}
                      <a className="text-youtube" href="#">
                        <i className="fab fa-youtube-square"></i> Youtube
                      </a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- Related Ads END --> */}
              <div className="clearfix">&nbsp;</div>
              {/* <!-- Highlights from the Business START --> */}
              <div className="row">
                <div className="col-12">
                  <div className="border-bottom mb-2">
                    <h5 className="fw-semibold">Amenities and more</h5>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <ul className="list-group list-group-borderless">
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> Takes Reservations
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> Offers Takeout
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> Walk-ins Welcome
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> No Delivery
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> Keto Options
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> Vegan Options
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> Many Vegetarian
                      Options
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> Accepts Credit Cards
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> Accepts Android Pay
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> Accepts Apple Pay
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> Accepts
                      Cryptocurrency
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> Intimate, Romantic,
                      ClassNamey, Upscale
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> Quiet
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> Casual Dress
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> Good for Groups
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> Good for Dinner,
                      Dessert
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> Good for Working
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> Street Parking
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> Waiter Service
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> Free Wi-Fi
                    </li>
                  </ul>
                </div>
                <div className="col-sm-12 col-md-6">
                  <ul className="list-group list-group-borderless">
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> Best nights on
                      Tuesday, Friday, Saturday
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> Happy Hour Specials
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> Full Bar
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> Wheelchair
                      Accessible
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> Latinx-owned
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> Women-owned
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> Open to All
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> No Outdoor Seating
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> Offers Catering
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> Not Good For Kids
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> Not Good For Dancing
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> No Smoking
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> No Drive-Thru
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> Dogs Not Allowed
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> No TV
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> No Heated Outdoor
                      Seating
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> No Covered Outdoor
                      Seating
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> No Private Dining
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> Bike Parking
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> Provides reusable
                      tableware
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- Highlights from the Business END -->
<!-- FAQs START --> */}
              <div className="clearfix">&nbsp;</div>
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-md-xl col-xxl-12">
                  <div className="border-bottom mb-3">
                    <h5 className="fw-semibold">FAQ</h5>
                  </div>
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
                          What are your opening hours?
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionFaq"
                      >
                        <div className="accordion-body">
                          Our restaurant is open daily to serve you from 09:00
                          AM until 10:00 PM. We welcome you to join us during
                          our operating hours to experience our delicious
                          cuisine and exceptional service. Please feel free to
                          visit us at any time during our posted hours.
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
                          Do you take reservations?
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionFaq"
                      >
                        <div className="accordion-body">
                          Yes, we gladly accept reservations. You can secure
                          your table by booking online through our website or by
                          contacting us directly at +1-237-23456. We look
                          forward to hosting you for a wonderful dining
                          experience.
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
                          What type of cuisine do you serve?
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionFaq"
                      >
                        <div className="accordion-body">
                          We specialize in a diverse range of culinary delights,
                          offering a fusion of flavors inspired by various
                          cuisines around the world. Our menu features a
                          tantalizing selection of dishes, including savory
                          classNameics, innovative creations, and mouthwatering
                          specialties crafted with the finest ingredients.
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
                          How much should I offer the sellers?
                        </button>
                      </h2>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionFaq"
                      >
                        <div className="accordion-body">
                          Determining the appropriate offer to make to sellers
                          depends on various factors such as the market value of
                          the item or property, your budget, the condition of
                          the item or property, and any negotiations that take
                          place between you and the seller. For real estate
                          transactions, it's often advisable to conduct research
                          on comparable properties in the area to gauge the fair
                          market value. You may also want to consider factors
                          like the property's condition, location, and current
                          market trends.
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
                          Do you accommodate dietary restrictions or allergies?
                        </button>
                      </h2>
                      <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#accordionFaq"
                      >
                        <div className="accordion-body">
                          Yes, we take dietary restrictions and allergies
                          seriously. We strive to accommodate various dietary
                          needs and preferences to ensure that all of our guests
                          can enjoy their dining experience with us. Please
                          inform your server about any dietary restrictions or
                          allergies you have, and we will do our best to provide
                          suitable options or make necessary adjustments to our
                          menu items. Your health and satisfaction are important
                          to us, and we are committed to providing a safe and
                          enjoyable dining experience for everyone.
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
                          Is your restaurant kid-friendly??
                        </button>
                      </h2>
                      <div
                        id="collapseSix"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSix"
                        data-bs-parent="#accordionFaq"
                      >
                        <div className="accordion-body">
                          Absolutely! Our restaurant is kid-friendly and we
                          welcome families with open arms. We have a dedicated
                          kids' menu featuring a variety of delicious and
                          nutritious options that are sure to please even the
                          pickiest eaters. Additionally, we provide high chairs
                          and booster seats for our youngest guests, and our
                          staff is trained to make families feel welcome and
                          comfortable throughout their dining experience. We
                          look forward to serving you and your family soon!
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
                          Do you have vegan/vegetarian options on your menu?
                        </button>
                      </h2>
                      <div
                        id="collapseSeven"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSeven"
                        data-bs-parent="#accordionFaq"
                      >
                        <div className="accordion-body">
                          Yes, we offer a variety of vegan and vegetarian
                          options on our menu to cater to different dietary
                          preferences and lifestyles. Our culinary team has
                          carefully crafted dishes that are both delicious and
                          satisfying, using fresh and high-quality ingredients.
                          Whether you're vegan, vegetarian, or simply looking to
                          explore plant-based options, we have something for
                          everyone to enjoy. Please ask your server for our
                          vegan and vegetarian selections, and we'll be happy to
                          assist you in choosing a meal that suits your tastes
                          and preferences.
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
                          Do you have a dress code?
                        </button>
                      </h2>
                      <div
                        id="collapseEight"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingEight"
                        data-bs-parent="#accordionFaq"
                      >
                        <div className="accordion-body">
                          We have a relaxed and casual dress code. At our
                          restaurant, we want you to feel comfortable and enjoy
                          your dining experience without worrying about formal
                          attire. Whether you're coming straight from work or
                          dressed for a casual outing, you are welcome to dine
                          with us. Our focus is on providing delicious food,
                          excellent service, and a welcoming atmosphere for all
                          our guests. So, come as you are and get ready to enjoy
                          a wonderful meal with us!
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
                          Is your restaurant wheelchair accessible?
                        </button>
                      </h2>
                      <div
                        id="collapseNine"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingNine"
                        data-bs-parent="#accordionFaq"
                      >
                        <div className="accordion-body">
                          Yes, our restaurant is wheelchair accessible. We
                          strive to ensure that all of our guests, regardless of
                          mobility, can comfortably access our facilities and
                          enjoy their dining experience with us. If you have any
                          specific accessibility requirements or need assistance
                          during your visit, please don't hesitate to let us
                          know, and our staff will be more than happy to assist
                          you. We look forward to welcoming you to our
                          restaurant!
                        </div>
                      </div>
                    </div>
                    {/* <!-- Accordion item --> */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTen">
                        <button
                          className="accordion-button h6 rounded collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTen"
                          aria-expanded="false"
                          aria-controls="collapseTen"
                        >
                          Do you offer gift cards?
                        </button>
                      </h2>
                      <div
                        id="collapseTen"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTen"
                        data-bs-parent="#accordionFaq"
                      >
                        <div className="accordion-body">
                          Yes, we offer gift cards that make for perfect gifts
                          for friends, family, or colleagues. Our gift cards are
                          available for purchase at our restaurant and can also
                          be bought online through our website. Treat your loved
                          ones to a memorable dining experience with our gift
                          cards, allowing them to enjoy delicious food and
                          excellent service at their convenience.
                        </div>
                      </div>
                    </div>
                    {/* <!-- Accordion item --> */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingElaven">
                        <button
                          className="accordion-button h6 rounded collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseElaven"
                          aria-expanded="false"
                          aria-controls="collapseElaven"
                        >
                          Do you have a corkage fee for bringing our own wine?
                        </button>
                      </h2>
                      <div
                        id="collapseElaven"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingElaven"
                        data-bs-parent="#accordionFaq"
                      >
                        <div className="accordion-body">
                          Yes, we do have a corkage fee for guests who bring
                          their own wine. Our corkage fee is [insert fee amount]
                          per bottle. We are happy to accommodate guests who
                          wish to enjoy their own wine with their meal, and we
                          appreciate your understanding of our corkage policy.
                          Please feel free to speak with your server for more
                          details or assistance with wine service during your
                          visit.
                        </div>
                      </div>
                    </div>
                    {/* <!-- Accordion item --> */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwelve">
                        <button
                          className="accordion-button h6 rounded collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwelve"
                          aria-expanded="false"
                          aria-controls="collapseTwelve"
                        >
                          Are pets allowed on your outdoor patio?
                        </button>
                      </h2>
                      <div
                        id="collapseTwelve"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwelve"
                        data-bs-parent="#accordionFaq"
                      >
                        <div className="accordion-body">
                          Yes, well-behaved pets are allowed on our outdoor
                          patio. We understand that pets are part of the family,
                          and we welcome them to join you during your dining
                          experience. Our outdoor patio provides a comfortable
                          and pet-friendly environment where you can enjoy your
                          meal together. Please ensure that your pets are
                          leashed and well-behaved to ensure a pleasant
                          experience for all our guests. We look forward to
                          hosting you and your furry friends!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- FAQs END --> */}
              <div className="clearfix">&nbsp;</div>
              {/* <!-- Location & Hours START --> */}
              <div className="row">
                <div className="col-sm-12 col-md-12">
                  <div className="border-bottom mb-2">
                    <h5 className="fw-semibold">Location & Hours</h5>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <iframe
                    className="w-100 d-block rounded-bottom"
                    height="210"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sin!4v1586000412513!5m2!1sen!2sin"
                    style={{ border: 0 }}
                    aria-hidden="false"
                    tabindex="0"
                  ></iframe>
                </div>
                <div className="col-sm-12 col-md-6">
                  <table className="table table-sm table-borderless table-responsive-sm mb-0 pb-0">
                    <tbody>
                      <tr>
                        <td>Monday</td>
                        <td>10:30 AM - 8:00 PM</td>
                        <td style={{ color: "green", fontWeight: "bold" }}>
                          Open Now
                        </td>
                      </tr>
                      <tr>
                        <td>Tuesday</td>
                        <td>10:30 AM - 8:00 PM</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Wednesday</td>
                        <td>10:30 AM - 8:00 PM</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Thursday</td>
                        <td>10:30 AM - 8:00 PM</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Friday</td>
                        <td>10:30 AM - 8:00 PM</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Saturday</td>
                        <td className="text-danger fw-bold">Closed</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Sunday</td>
                        <td className="text-danger fw-bold">Closed</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* <!-- Location & Hours END --> */}
              <div className="clearfix">&nbsp;</div>
              {/* <!-- Our Customer Reviews START --> */}
              <div className="row">
                <div className="col-12">
                  <div className="border-bottom mb-2">
                    <h5 className="fw-semibold">Our Customer Reviews</h5>
                  </div>
                  {/* <!-- Student review START -->
        <!-- Review START --> */}
                  <div className="row mb-4">
                    {/* <!-- Rating info --> */}
                    <div className="col-md-4 mb-3 mb-md-0">
                      <div className="text-center">
                        {/* <!-- Info --> */}
                        <h2 className="mb-0">4.5</h2>
                        {/* <!-- Star --> */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0">
                            <i className="fas fa-star text-warning"></i>
                          </li>
                          <li className="list-inline-item me-0">
                            <i className="fas fa-star text-warning"></i>
                          </li>
                          <li className="list-inline-item me-0">
                            <i className="fas fa-star text-warning"></i>
                          </li>
                          <li className="list-inline-item me-0">
                            <i className="fas fa-star text-warning"></i>
                          </li>
                          <li className="list-inline-item me-0">
                            <i className="fas fa-star-half-alt text-warning"></i>
                          </li>
                        </ul>
                        <p className="mb-0">(Based on todays review)</p>
                      </div>
                    </div>
                    {/* <!-- Progress-bar and star --> */}
                    <div className="col-md-8">
                      <div className="row align-items-center">
                        {/* <!-- Progress bar and Rating --> */}
                        <div className="col-6 col-sm-8">
                          {/* <!-- Progress item --> */}
                          <div className="progress progress-sm bg-warning bg-opacity-15">
                            <div
                              className="progress-bar bg-warning"
                              role="progressbar"
                              style={{ width: "100%" }}
                              aria-valuenow="100"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4">
                          {/* <!-- Star item --> */}
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item me-0 small">
                              <i className="fas fa-star text-warning"></i>
                            </li>
                            <li className="list-inline-item me-0 small">
                              <i className="fas fa-star text-warning"></i>
                            </li>
                            <li className="list-inline-item me-0 small">
                              <i className="fas fa-star text-warning"></i>
                            </li>
                            <li className="list-inline-item me-0 small">
                              <i className="fas fa-star text-warning"></i>
                            </li>
                            <li className="list-inline-item me-0 small">
                              <i className="fas fa-star text-warning"></i>
                            </li>
                          </ul>
                        </div>
                        {/* <!-- Progress bar and Rating --> */}
                        <div className="col-6 col-sm-8">
                          {/* <!-- Progress item --> */}
                          <div className="progress progress-sm bg-warning bg-opacity-15">
                            <div
                              className="progress-bar bg-warning"
                              role="progressbar"
                              style={{ width: "80%" }}
                              aria-valuenow="80"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4">
                          {/* <!-- Star item --> */}
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item me-0 small">
                              <i className="fas fa-star text-warning"></i>
                            </li>
                            <li className="list-inline-item me-0 small">
                              <i className="fas fa-star text-warning"></i>
                            </li>
                            <li className="list-inline-item me-0 small">
                              <i className="fas fa-star text-warning"></i>
                            </li>
                            <li className="list-inline-item me-0 small">
                              <i className="fas fa-star text-warning"></i>
                            </li>
                            <li className="list-inline-item me-0 small">
                              <i className="far fa-star text-warning"></i>
                            </li>
                          </ul>
                        </div>
                        {/* <!-- Progress bar and Rating --> */}
                        <div className="col-6 col-sm-8">
                          {/* <!-- Progress item --> */}
                          <div className="progress progress-sm bg-warning bg-opacity-15">
                            <div
                              className="progress-bar bg-warning"
                              role="progressbar"
                              style={{ width: "60%" }}
                              aria-valuenow="60"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4">
                          {/* <!-- Star item --> */}
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item me-0 small">
                              <i className="fas fa-star text-warning"></i>
                            </li>
                            <li className="list-inline-item me-0 small">
                              <i className="fas fa-star text-warning"></i>
                            </li>
                            <li className="list-inline-item me-0 small">
                              <i className="fas fa-star text-warning"></i>
                            </li>
                            <li className="list-inline-item me-0 small">
                              <i className="far fa-star text-warning"></i>
                            </li>
                            <li className="list-inline-item me-0 small">
                              <i className="far fa-star text-warning"></i>
                            </li>
                          </ul>
                        </div>
                        {/* <!-- Progress bar and Rating --> */}
                        <div className="col-6 col-sm-8">
                          {/* <!-- Progress item --> */}
                          <div className="progress progress-sm bg-warning bg-opacity-15">
                            <div
                              className="progress-bar bg-warning"
                              role="progressbar"
                              style={{ width: "40%" }}
                              aria-valuenow="40"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4">
                          {/* <!-- Star item --> */}
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item me-0 small">
                              <i className="fas fa-star text-warning"></i>
                            </li>
                            <li className="list-inline-item me-0 small">
                              <i className="fas fa-star text-warning"></i>
                            </li>
                            <li className="list-inline-item me-0 small">
                              <i className="far fa-star text-warning"></i>
                            </li>
                            <li className="list-inline-item me-0 small">
                              <i className="far fa-star text-warning"></i>
                            </li>
                            <li className="list-inline-item me-0 small">
                              <i className="far fa-star text-warning"></i>
                            </li>
                          </ul>
                        </div>
                        {/* <!-- Progress bar and Rating --> */}
                        <div className="col-6 col-sm-8">
                          {/* <!-- Progress item --> */}
                          <div className="progress progress-sm bg-warning bg-opacity-15">
                            <div
                              className="progress-bar bg-warning"
                              role="progressbar"
                              style={{ width: "20%" }}
                              aria-valuenow="20"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4">
                          {/* <!-- Star item --> */}
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item me-0 small">
                              <i className="fas fa-star text-warning"></i>
                            </li>
                            <li className="list-inline-item me-0 small">
                              <i className="far fa-star text-warning"></i>
                            </li>
                            <li className="list-inline-item me-0 small">
                              <i className="far fa-star text-warning"></i>
                            </li>
                            <li className="list-inline-item me-0 small">
                              <i className="far fa-star text-warning"></i>
                            </li>
                            <li className="list-inline-item me-0 small">
                              <i className="far fa-star text-warning"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Review END --> */}
                  <div className="row">
                    {/* <!-- Review item START --> */}
                    <div className="d-md-flex my-4">
                      <div className="avatar avatar-xl me-4 flex-shrink-0">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/img/avatar/09.jpg"
                          alt="avatar"
                        />
                      </div>
                      {/* <!-- Text --> */}
                      <div>
                        <div className="d-sm-flex mt-1 mt-md-0 align-items-center">
                          <h5 className="me-3 mb-0">Jacqueline Miller</h5>
                          {/* <!-- Review star --> */}
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item me-0">
                              <i className="fas fa-star text-warning"></i>
                            </li>
                            <li className="list-inline-item me-0">
                              <i className="fas fa-star text-warning"></i>
                            </li>
                            <li className="list-inline-item me-0">
                              <i className="fas fa-star text-warning"></i>
                            </li>
                            <li className="list-inline-item me-0">
                              <i className="fas fa-star text-warning"></i>
                            </li>
                            <li className="list-inline-item me-0">
                              <i className="far fa-star text-warning"></i>
                            </li>
                          </ul>
                        </div>
                        {/* <!-- Info --> */}
                        <p className="small mb-2">2 days ago</p>
                        <p className="mb-2">
                          Perceived end knowledge certainly day sweetness why
                          cordially. Ask a quick six seven offer see among.
                          Handsome met debating sir dwelling age material. As
                          style lived he worse dried. Offered related so
                          visitors we private removed. Moderate do subjects to
                          distance.{" "}
                        </p>
                        {/* <!-- Like and dislike button --> */}
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic radio toggle button group"
                        >
                          {/* <!-- Like button --> */}
                          <input
                            type="radio"
                            className="btn-check"
                            name="btnradio"
                            id="btnradio1"
                          />
                          <label
                            className="btn btn-outline-light btn-sm mb-0"
                            for="btnradio1"
                          >
                            <i className="far fa-thumbs-up me-1"></i>25
                          </label>
                          {/* <!-- Dislike button --> */}
                          <input
                            type="radio"
                            className="btn-check"
                            name="btnradio"
                            id="btnradio2"
                          />
                          <label
                            className="btn btn-outline-light btn-sm mb-0"
                            for="btnradio2"
                          >
                            {" "}
                            <i className="far fa-thumbs-down me-1"></i>2
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Comment children level 1 --> */}
                    <div className="d-md-flex mb-4 ps-4 ps-md-5">
                      <div className="avatar avatar-lg me-4 flex-shrink-0">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/img/avatar/02.jpg"
                          alt="avatar"
                        />
                      </div>
                      {/* <!-- Text --> */}
                      <div>
                        <div className="d-sm-flex mt-1 mt-md-0 align-items-center">
                          <h5 className="me-3 mb-0">Louis Ferguson</h5>
                        </div>
                        {/* <!-- Info --> */}
                        <p className="small mb-2">1 days ago</p>
                        <p className="mb-2">
                          Water timed folly right aware if oh truth. Imprudence
                          attachment him for sympathize. Large above be to
                          means. Dashwood does provide stronger is. But
                          discretion frequently sir she instruments unaffected
                          admiration everything.
                        </p>
                      </div>
                    </div>
                    {/* <!-- Divider --> */}
                    <hr />
                    {/* <!-- Review item END -->
            <!-- Review item START --> */}
                    <div className="d-md-flex my-4">
                      <div className="avatar avatar-xl me-4 flex-shrink-0">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/img/avatar/07.jpg"
                          alt="avatar"
                        />
                      </div>
                      {/* <!-- Text --> */}
                      <div>
                        <div className="d-sm-flex mt-1 mt-md-0 align-items-center">
                          <h5 className="me-3 mb-0">Dennis Barrett</h5>
                          {/* <!-- Review star --> */}
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item me-0">
                              <i className="fas fa-star text-warning"></i>
                            </li>
                            <li className="list-inline-item me-0">
                              <i className="fas fa-star text-warning"></i>
                            </li>
                            <li className="list-inline-item me-0">
                              <i className="fas fa-star text-warning"></i>
                            </li>
                            <li className="list-inline-item me-0">
                              <i className="fas fa-star text-warning"></i>
                            </li>
                            <li className="list-inline-item me-0">
                              <i className="far fa-star text-warning"></i>
                            </li>
                          </ul>
                        </div>
                        {/* <!-- Info --> */}
                        <p className="small mb-2">2 days ago</p>
                        <p className="mb-2">
                          Handsome met debating sir dwelling age material. As
                          style lived he worse dried. Offered related so
                          visitors we private removed. Moderate do subjects to
                          distance.{" "}
                        </p>
                        {/* <!-- Like and dislike button --> */}
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic radio toggle button group"
                        >
                          {/* <!-- Like button --> */}
                          <input
                            type="radio"
                            className="btn-check"
                            name="btnradio"
                            id="btnradio3"
                          />
                          <label
                            className="btn btn-outline-light btn-sm mb-0"
                            for="btnradio3"
                          >
                            <i className="far fa-thumbs-up me-1"></i>25
                          </label>
                          {/* <!-- Dislike button --> */}
                          <input
                            type="radio"
                            className="btn-check"
                            name="btnradio"
                            id="btnradio4"
                          />
                          <label
                            className="btn btn-outline-light btn-sm mb-0"
                            for="btnradio4"
                          >
                            {" "}
                            <i className="far fa-thumbs-down me-1"></i>2
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Review item END -->
            <!-- Divider --> */}
                    <hr />
                  </div>
                  {/* <!-- Student review END -->
        <!-- Leave Review START --> */}
                  <div className="mt-2">
                    <h5 className="mb-4">Leave a Review</h5>
                    <form className="row g-3">
                      {/* <!-- Name --> */}
                      <div className="col-md-6 bg-light-input">
                        <input
                          type="text"
                          className="form-control"
                          id="inputtext"
                          placeholder="Name"
                          aria-label="First name"
                        />
                      </div>
                      <div className="col-md-6 bg-light-input">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          id="inputEmail4"
                        />
                      </div>
                      {/* <!-- Rating --> */}
                      <div className="col-12 bg-light-input">
                        <select
                          id="inputState2"
                          className="form-select js-choice"
                        >
                          <option className="text-warning" selected="">
                            ★★★★★ (5/5)
                          </option>
                          <option className="text-warning">★★★★☆ (4/5)</option>
                          <option className="text-warning">★★★☆☆ (3/5)</option>
                          <option className="text-warning">★★☆☆☆ (2/5)</option>
                          <option className="text-warning">★☆☆☆☆ (1/5)</option>
                        </select>
                      </div>
                      <div className="col-12 bg-light-input">
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          placeholder="Your review"
                          rows="3"
                        ></textarea>
                      </div>
                      <div className="col-12 d-grid gap-2 d-md-flex justify-content-md-end">
                        <button type="submit" className="btn btn-primary mb-0">
                          Post Review
                        </button>
                      </div>
                    </form>
                  </div>
                  {/* <!-- Leave Review END --> */}
                </div>
              </div>
              {/* <!-- Our Customer Reviews END --> */}
              <div className="clearfix">&nbsp;</div>
              {/* <!-- Related Ads START --> */}
              <div className="row">
                <div className="col-12">
                  <div className="border-bottom mb-3">
                    <h5 className="fw-semibold">
                      Highlights from the Business
                    </h5>
                  </div>
                  {/* <!-- Slider START --> */}
                  <div className="tiny-slider arrow-round arrow-creative arrow-blur">
                    <div
                      className="tiny-slider-inner"
                      data-autoplay="false"
                      data-arrow="true"
                      data-dots="false"
                      data-items="4"
                      data-items-lg="4"
                      data-items-md="4"
                      data-items-xs="2"
                    >
                      <div className="card bg-transparent">
                        <div className="position-relative">
                          <img
                            src="assets/img/category/1.jpg"
                            className="rounded-start rounded-end"
                            alt="course image"
                          />
                          {/* <!-- Overlay --> */}
                          <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                            {/* <!-- Card overlay Top --> */}
                            <div className="w-100 mb-auto d-flex justify-content-end">
                              {/* <!-- Favorite icon --> */}
                              <a
                                href="#"
                                className="icon-sm bg-white rounded-2"
                              >
                                <i className="fas fa-heart text-danger"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0">
                          <h5 className="card-title related-font-size">
                            <a href="listing-detail.php">
                              Hair Haven Beuaty Spa
                            </a>
                          </h5>
                          <p className="small mb-0 mb-sm-0 pb-0">
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>{" "}
                            <strong>5.0</strong> (1.5k Reviews)
                          </p>
                          <h6 className="text-black-50 mb-0 fw-light pb-0 mt-2">
                            <span className="fw-bold text-success">Open</span>{" "}
                            until 8:00 PM
                          </h6>
                        </div>
                      </div>
                      <div className="card bg-transparent">
                        <div className="position-relative">
                          <img
                            src="assets/img/category/2.jpg"
                            className="rounded-start rounded-end"
                            alt="course image"
                          />
                          {/* <!-- Overlay --> */}
                          <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                            {/* <!-- Card overlay Top --> */}
                            <div className="w-100 mb-auto d-flex justify-content-end">
                              {/* <!-- Favorite icon --> */}
                              <a
                                href="#"
                                className="icon-sm bg-white rounded-2"
                              >
                                <i className="far fa-heart text-danger"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0">
                          <h5 className="card-title related-font-size">
                            <a href="listing-detail.php">
                              Blade Hair Skin Body
                            </a>
                          </h5>
                          <p className="small mb-0 mb-sm-0 pb-0">
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>{" "}
                            <strong>5.0</strong> (1.5k Reviews)
                          </p>
                          <h6 className="text-black-50 mb-0 fw-light pb-0 mt-2">
                            <span className="fw-bold text-danger">Closed</span>
                          </h6>
                        </div>
                      </div>
                      <div className="card bg-transparent">
                        <div className="position-relative">
                          <img
                            src="assets/img/category/3.jpg"
                            className="rounded-start rounded-end"
                            alt="course image"
                          />
                          {/* <!-- Overlay --> */}
                          <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                            {/* <!-- Card overlay Top --> */}
                            <div className="w-100 mb-auto d-flex justify-content-end">
                              {/* <!-- Favorite icon --> */}
                              <a
                                href="#"
                                className="icon-sm bg-white rounded-2"
                              >
                                <i className="far fa-heart text-danger"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-2">
                          <h5 className="card-title related-font-size">
                            <a href="listing-detail.php">Mane Refinery Salon</a>
                          </h5>
                          <p className="small mb-0 mb-sm-0 pb-0">
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>{" "}
                            <strong>5.0</strong> (1.5k Reviews)
                          </p>
                          <h6 className="text-black-50 mb-0 fw-light pb-0 mt-2">
                            <span className="fw-bold text-success">Open</span>{" "}
                            until 8:00 PM
                          </h6>
                        </div>
                      </div>
                      <div className="card bg-transparent">
                        <div className="position-relative">
                          <img
                            src="assets/img/category/4.jpg"
                            className="rounded-start rounded-end"
                            alt="course image"
                          />
                          {/* <!-- Overlay --> */}
                          <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                            {/* <!-- Card overlay Top --> */}
                            <div className="w-100 mb-auto d-flex justify-content-end">
                              {/* <!-- Favorite icon --> */}
                              <a
                                href="#"
                                className="icon-sm bg-white rounded-2"
                              >
                                <i className="fas fa-heart text-danger"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0">
                          <h5 className="card-title related-font-size">
                            <a href="listing-detail.php">Head Quater Salon</a>
                          </h5>
                          <p className="small mb-0 mb-sm-0 pb-0">
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>{" "}
                            <strong>5.0</strong> (1.5k Reviews)
                          </p>
                          <h6 className="text-black-50 mb-0 fw-light pb-0 mt-2">
                            <span className="fw-bold text-danger">Closed</span>
                          </h6>
                        </div>
                      </div>
                      <div className="card bg-transparent">
                        <div className="position-relative">
                          <img
                            src="assets/img/category/5.jpg"
                            className="rounded-start rounded-end"
                            alt="course image"
                          />
                          {/* <!-- Overlay --> */}
                          <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                            {/* <!-- Card overlay Top --> */}
                            <div className="w-100 mb-auto d-flex justify-content-end">
                              {/* <!-- Favorite icon --> */}
                              <a
                                href="#"
                                className="icon-sm bg-white rounded-2"
                              >
                                <i className="far fa-heart text-danger"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0">
                          <h5 className="card-title related-font-size">
                            <a href="listing-detail.php">Lira Guzi Salon</a>
                          </h5>
                          <p className="small mb-0 mb-sm-0 pb-0">
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>{" "}
                            <strong>5.0</strong> (1.5k Reviews)
                          </p>
                          <h6 className="text-black-50 mb-0 fw-light pb-0 mt-2">
                            <span className="fw-bold text-success">Open</span>{" "}
                            until 8:00 PM
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Slider END --> */}
                  {/* </ul> */}
                </div>
              </div>
              {/* <!-- Related Ads END --> */}
              <div className="clearfix">&nbsp;</div>
              {/* <!-- Highlights from the Business START --> */}
              <div className="row">
                <div className="col-12">
                  <div className="border-bottom mb-2">
                    <h5 className="fw-semibold">
                      Highlights from the Business
                    </h5>
                  </div>
                  <ul className="list-group list-group-borderless">
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> 30 years in business
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> Certified
                      professionals
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> Locally owned &
                      operated
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> Available by
                      appointment
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> Consultations
                      available
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-caret-right"></i> Women-owned &
                      operated
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="card border rounded-1 mb-4">
                <div className="card-header pb-0">
                  <h5 className="mb-0 fw-normal">Basic Information</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-borderless">
                    <li className="list-group-item px-0">
                      <span className="h6 fw-light">
                        <i className="fas fa-fw fa-map-marker-alt text-danger me-0 me-sm-0"></i>
                      </span>
                      <span>2002 Horton Ford Rd, Eidson, TN, 37731</span>
                    </li>
                    <li className="list-group-item px-0">
                      <span className="h6 fw-light ">
                        <i className="fas fa-fw fa-envelope text-primary me-0 me-sm-0 "></i>
                      </span>
                      <span>
                        <a href="mailto:example@gmail.com">example@gmail.com</a>
                      </span>
                    </li>
                    <li className="list-group-item px-0">
                      <span className="h6 fw-light">
                        <i className="fas fa-fw fa-headphones text-black me-0 me-sm-0"></i>
                      </span>
                      <span>
                        <a href="tel:+896-789-546"> +896-789-546</a>
                      </span>
                    </li>
                    <li className="list-group-item px-0">
                      <span className="h6 fw-light">
                        <i className="fas fa-fw fa-globe text-success me-0 me-sm-0"></i>
                      </span>
                      <span>
                        <a href="https://www.2ndafriendly.live">
                          www.2ndafriendly.live
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card border rounded-1 mb-4">
                <div className="card-body">
                  <div className="d-sm-flex justify-content-sm-between align-items-center mb-3">
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-lg">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/img/licence.svg"
                          alt="avatar"
                        />
                      </div>
                      <div className="ms-3">
                        <h6 className="mb-0">
                          <a href="#">Verify Licence</a>
                        </h6>
                        <p className="mb-0 small">Verified by 2nd A Friendly</p>
                      </div>
                    </div>
                  </div>
                  <p className="card-text">
                    <strong>2nd A Friendly</strong> has confirmed the above
                    license or certificate for at least 1 person associated with
                    this business, as of the verification date above. 2nd A
                    Friendly cannot verify if a license covers your specific
                    needs or that everyone at this business has a required
                    license. Businesses pay 2nd A Friendly for license
                    verification services.
                  </p>
                  <ul className="list-group list-group-borderless border-0">
                    <li className="list-group-item px-0 d-flex justify-content-between">
                      <span className="h6 fw-light mb-0">
                        <i className="fas fa-fw fa-book-open text-green"></i>
                        Licensee
                      </span>
                      <span>Elowson, Deborah</span>
                    </li>
                    <li className="list-group-item px-0 d-flex justify-content-between">
                      <span className="h6 fw-light mb-0">
                        <i className="fas fa-fw fa-clock text-success"></i>
                        License #
                      </span>
                      <span>01757074</span>
                    </li>
                    <li className="list-group-item px-0 d-flex justify-content-between">
                      <span className="h6 fw-light mb-0">
                        <i className="fas fa-fw fa-signal text-primary"></i>
                        Issued by
                      </span>
                      <span>CA DRE</span>
                    </li>
                    <li className="list-group-item px-0 d-flex justify-content-between">
                      <span className="h6 fw-light mb-0">
                        <i className="fas fa-fw fa-globe text-info"></i>License
                        type
                      </span>
                      <span>Salesperson</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card border rounded-1 mb-4">
                <div className="card-header pb-0">
                  <h5 className="mb-0 fw-normal">
                    Help Improve 2nd A Friendly
                  </h5>
                </div>
                <div className="card-body">
                  <p>Are compostable containers available at this business?</p>
                  <div className="d-sm-flex">
                    <button className="btn btn-outline-dark border-dark-subtle me-3">
                      Yes
                    </button>
                    <button className="btn btn-outline-dark border-dark-subtle me-3">
                      No
                    </button>
                    <button className="btn btn-outline-dark border-dark-subtle">
                      Not Sure
                    </button>
                  </div>
                </div>
              </div>
              <div className="card border rounded-1 mb-4">
                <div className="card-header pb-0">
                  <h5 className="mb-0 fw-normal">Others</h5>
                </div>
                <div className="card-body">
                  <p>
                    <i className="fa fa-asterisk"></i> 10% off First month for
                    2nd A Friendly users!
                  </p>
                  <p>
                    <i className="fa fa-asterisk"></i> 10% off digital perms!
                  </p>
                </div>
              </div>
              <div className="card border rounded-1 mb-4">
                <div className="card-header pb-0">
                  <h5 className="mb-0 fw-normal">Contact to the business</h5>
                </div>
                <div className="card-body">
                  <div className="d-sm-flex">
                    <a href="tel:+8801722620039">
                      <button className="btn btn-sm btn-outline-dark border-dark-subtle me-2">
                        Call
                      </button>
                    </a>
                    <a
                      href=""
                      data-bs-toggle="modal"
                      data-bs-target="#SendMassage"
                    >
                      <button className="btn btn-sm btn-outline-dark border-dark-subtle me-2">
                        Message
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card rounded-1 border p-3 mb-4">
                <h5 className="mb-3 fw-normal">Recently Viewed</h5>
                <div className="row gx-2 mb-2 pb-2">
                  <div className="col-4">
                    <img
                      className="rounded-1"
                      src="assets/img/event/19.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-8">
                    <h6 className="mb-0">
                      <a href="listing-detail.php">
                        Fundamentals of Business Analysis
                      </a>
                    </h6>
                    <p className="small mb-0 mb-sm-0 pb-0">
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>{" "}
                      <strong>5.0</strong> (1.5k Reviews)
                    </p>
                    <h6 className="text-black-50 mb-0 fw-light pb-0 mt-1">
                      <small>
                        <span className="fw-bold text-danger">Closed</span>
                      </small>
                    </h6>
                    <address className="pb-0 mb-0">
                      <small>
                        <i>4935 W Foster Ave Sauganash, CA</i>
                      </small>
                    </address>
                  </div>
                </div>
                <div className="row gx-2 mb-2 pb-2">
                  <div className="col-4">
                    <img
                      className="rounded-1"
                      src="assets/img/event/20.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-8">
                    <h6 className="mb-0">
                      <a href="listing-detail.php">
                        Fundamentals of Business Analysis
                      </a>
                    </h6>
                    <p className="small mb-0 mb-sm-0 pb-0">
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>{" "}
                      <strong>5.0</strong> (1.5k Reviews)
                    </p>
                    <h6 className="text-black-50 mb-0 fw-light pb-0 mt-1">
                      <small>
                        <span className="fw-bold text-success">Open</span> until
                        8:00 PM
                      </small>
                    </h6>
                    <address className="pb-0 mb-0">
                      <small>
                        <i>4935 W Foster Ave Sauganash, CA</i>
                      </small>
                    </address>
                  </div>
                </div>
                <div className="row gx-2 mb-2 pb-2">
                  <div className="col-4">
                    <img
                      className="rounded-1"
                      src="assets/img/event/16.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-8">
                    <h6 className="mb-0">
                      <a href="listing-detail.php">
                        Fundamentals of Business Analysis
                      </a>
                    </h6>
                    <p className="small mb-0 mb-sm-0 pb-0">
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>{" "}
                      <strong>5.0</strong> (1.5k Reviews)
                    </p>
                    <h6 className="text-black-50 mb-0 fw-light pb-0 mt-1">
                      <small>
                        <span className="fw-bold text-success">Open</span> until
                        8:00 PM
                      </small>
                    </h6>
                    <address className="pb-0 mb-0">
                      <small>
                        <i>4935 W Foster Ave Sauganash, CA</i>
                      </small>
                    </address>
                  </div>
                </div>
                <div className="row gx-2">
                  <div className="col-4">
                    <img
                      className="rounded-1"
                      src="assets/img/event/18.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-8">
                    <h6 className="mb-0">
                      <a href="listing-detail.php">
                        Fundamentals of Business Analysis
                      </a>
                    </h6>
                    <p className="small mb-0 mb-sm-0 pb-0">
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>{" "}
                      <strong>5.0</strong> (1.5k Reviews)
                    </p>
                    <h6 className="text-black-50 mb-0 fw-light pb-0 mt-1">
                      <small>
                        <span className="fw-bold text-danger">Closed</span>
                      </small>
                    </h6>
                    <address className="pb-0 mb-0">
                      <small>
                        <i>4935 W Foster Ave Sauganash, CA</i>
                      </small>
                    </address>
                  </div>
                </div>
              </div>
              <div className="card shadow p-2 mb-4 z-index-9">
                <div className="overflow-hidden rounded-3">
                  <img
                    src="assets/img/event/1.jpg"
                    className="card-img"
                    alt="course image"
                  />
                  <div className="bg-overlay bg-dark opacity-6"></div>
                  <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                    <div className="m-auto">
                      <a
                        href="https://www.youtube.com/embed/tXHviS-4ygo"
                        className="btn btn-lg text-danger btn-round btn-white-shadow mb-0"
                        data-glightbox=""
                        data-gallery="course-video"
                      >
                        <i className="fas fa-play"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body px-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <div className="d-flex align-items-center">
                        <h6 className="fw-bold mb-0 me-2">
                          Mastering Business Growth: Strategies for Success
                        </h6>
                      </div>
                    </div>
                    <div className="dropdown">
                      <a
                        href="#"
                        className="btn btn-sm btn-light rounded small"
                        role="button"
                        id="dropdownShare"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fas fa-fw fa-share-alt"></i>
                      </a>
                      <ul
                        className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded"
                        aria-labelledby="dropdownShare"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fab fa-twitter-square me-2"></i>
                            Twitter
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fab fa-facebook-square me-2"></i>
                            Facebook
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fab fa-linkedin me-2"></i>LinkedIn
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fas fa-copy me-2"></i>Copy link
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden rounded-3">
                  <img
                    src="assets/img/event/3.jpg"
                    className="card-img"
                    alt="course image"
                  />
                  <div className="bg-overlay bg-dark opacity-6"></div>
                  <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                    <div className="m-auto">
                      <a
                        href="https://www.youtube.com/embed/tXHviS-4ygo"
                        className="btn btn-lg text-danger btn-round btn-white-shadow mb-0"
                        data-glightbox=""
                        data-gallery="course-video"
                      >
                        <i className="fas fa-play"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body px-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <div className="d-flex align-items-center">
                        <h6 className="fw-bold mb-0 me-2">
                          Financial Literacy 101: Managing Money for Small
                          Businesses
                        </h6>
                      </div>
                    </div>
                    <div className="dropdown">
                      <a
                        href="#"
                        className="btn btn-sm btn-light rounded small"
                        role="button"
                        id="dropdownShare"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fas fa-fw fa-share-alt"></i>
                      </a>
                      <ul
                        className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded"
                        aria-labelledby="dropdownShare"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fab fa-twitter-square me-2"></i>
                            Twitter
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fab fa-facebook-square me-2"></i>
                            Facebook
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fab fa-linkedin me-2"></i>LinkedIn
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fas fa-copy me-2"></i>Copy link
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden rounded-3">
                  <img
                    src="assets/img/event/2.jpg"
                    className="card-img"
                    alt="course image"
                  />
                  <div className="bg-overlay bg-dark opacity-6"></div>
                  <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                    <div className="m-auto">
                      <a
                        href="https://www.youtube.com/embed/tXHviS-4ygo"
                        className="btn btn-lg text-danger btn-round btn-white-shadow mb-0"
                        data-glightbox=""
                        data-gallery="course-video"
                      >
                        <i className="fas fa-play"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body px-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <div className="d-flex align-items-center">
                        <h6 className="fw-bold mb-0 me-2">
                          The Power of Networking: Building Connections for Your
                          Business
                        </h6>
                      </div>
                    </div>
                    <div className="dropdown">
                      <a
                        href="#"
                        className="btn btn-sm btn-light rounded small"
                        role="button"
                        id="dropdownShare"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fas fa-fw fa-share-alt"></i>
                      </a>
                      <ul
                        className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded"
                        aria-labelledby="dropdownShare"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fab fa-twitter-square me-2"></i>
                            Twitter
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fab fa-facebook-square me-2"></i>
                            Facebook
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fab fa-linkedin me-2"></i>LinkedIn
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fas fa-copy me-2"></i>Copy link
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden rounded-3">
                  <img
                    src="assets/img/event/4.jpg"
                    className="card-img"
                    alt="course image"
                  />
                  <div className="bg-overlay bg-dark opacity-6"></div>
                  <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                    <div className="m-auto">
                      <a
                        href="https://www.youtube.com/embed/tXHviS-4ygo"
                        className="btn btn-lg text-danger btn-round btn-white-shadow mb-0"
                        data-glightbox=""
                        data-gallery="course-video"
                      >
                        <i className="fas fa-play"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body px-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <div className="d-flex align-items-center">
                        <h6 className="fw-bold mb-0 me-2">
                          Effective Leadership in the Modern Workplace
                        </h6>
                      </div>
                    </div>
                    <div className="dropdown">
                      <a
                        href="#"
                        className="btn btn-sm btn-light rounded small"
                        role="button"
                        id="dropdownShare"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fas fa-fw fa-share-alt"></i>
                      </a>
                      <ul
                        className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded"
                        aria-labelledby="dropdownShare"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fab fa-twitter-square me-2"></i>
                            Twitter
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fab fa-facebook-square me-2"></i>
                            Facebook
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fab fa-linkedin me-2"></i>LinkedIn
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fas fa-copy me-2"></i>Copy link
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="modal fade"
                id="SendMassage"
                tabindex="-1"
                aria-labelledby="SendMassage"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-scrollable modal-md">
                  <div className="modal-content">
                    <div className="header bg-transparent border-bottom p-3">
                      <h5 className="header-title text-danger">
                        Send Massage
                        <button
                          style={{ float: "right", fontSize: "12px" }}
                          type="button"
                          className="btn-close justify-content-end float-right"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </h5>
                      <span>
                        We'll remind you when to join based on live wait times
                      </span>
                    </div>
                    <div className="modal-body">
                      <form className="row g-3 needs-validation" novalidate>
                        <div className="col-6">
                          <label
                            for="fast_name"
                            className="form-label fw-bold text-dark"
                          >
                            Fast Name <span className="star">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control fast_name"
                            id="fast_name"
                            title="fast_name"
                            placeholder="John"
                            autofocus
                            required
                          />
                          <div className="valid-feedback">Looks Goods</div>
                          <div className="invalid-feedback">
                            Please enter fast name.
                          </div>
                        </div>
                        <div className="col-6">
                          <label
                            for="last_name"
                            className="form-label fw-bold text-dark"
                          >
                            Last name <span className="star">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control last_name"
                            id="last_name"
                            title="last_name"
                            placeholder="Doe"
                            autofocus
                            required
                          />
                          <div className="valid-feedback">Looks Goods</div>
                          <div className="invalid-feedback">
                            Please enter last name.
                          </div>
                        </div>
                        <div className="col-12">
                          <label
                            for="email_address"
                            className="form-label fw-bold text-dark"
                          >
                            Email Address <span className="star">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control email_address"
                            id="email_address"
                            title="email_address"
                            placeholder="johndoe@gmail.com"
                            autofocus
                            required
                          />
                          <div className="valid-feedback">Looks Goods</div>
                          <div className="invalid-feedback">
                            Please enter your email address.
                          </div>
                        </div>
                        <div className="col-12">
                          <label
                            for="mobile_number"
                            className="form-label fw-bold text-dark"
                          >
                            Mobile number <span className="star">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control mobile_number"
                            id="mobile_number"
                            title="mobile_number"
                            placeholder="+1-237-3456"
                            autofocus
                            required
                          />
                          <div className="valid-feedback">Looks Goods</div>
                          <div className="invalid-feedback">
                            Please enter your mobile number.
                          </div>
                        </div>
                        <div className="col-12">
                          <label
                            for="your_massage"
                            className="form-label fw-bold text-dark"
                          >
                            Your Massage <span className="star">*</span>
                          </label>
                          <textarea
                            type="text"
                            className="form-control your_massage"
                            id="your_massage"
                            title="your_massage"
                            placeholder="Share a few details so we can get you in touch with the business"
                            autofocus
                            required
                          ></textarea>
                          <div className="valid-feedback">Looks Goods</div>
                          <div className="invalid-feedback">
                            Please enter your massage.
                          </div>
                        </div>
                        <p className="mt-0 mb-0 pt-2 pb-0">
                          We will send your information to the business to help
                          get you a response. By continuing you agree 2nd A
                          friendly{" "}
                          <a href="terms-and-condition.php">
                            <span className="text-primary">
                              Terms of service
                            </span>
                          </a>{" "}
                          and{" "}
                          <a href="privacy-policy.php">
                            <span className="text-primary">
                              Privecy Policy.
                            </span>
                          </a>
                        </p>
                        <div className="col-6">
                          <div className="mt-3 ms-1">
                            <span>
                              Already have an account?
                              <a href="sign-in.php"> Sign in</a>
                            </span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button
                              type="submit"
                              className=" btn btn-primary-soft"
                            >
                              Send Massage
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PublicView(CategoryPage);

import PublicView from "@/components/HOC/PublicView";
import { formatDate } from "@/helpers/functions";
import PublicService from "@/services/PublicService";
import React, { useEffect, useState } from "react";

const BlogDetails = ({id}) => {
  const [blogDetails, setBlogDetails] = useState("");
  const handleGetBlogDetails = (id) => {
    const payload = {
      id
    }
    const res = PublicService.blogDetails(payload).then((details) => {
      console.log(details);
      setBlogDetails(details.data.sinData)
    })
  }

  useEffect(() => {
    if(id) {
      handleGetBlogDetails(id);
    }
  }, [id]);
  return (
    <main>
      <section class="py-4">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb breadcrumb-dots my-0 py-0">
                  <li class="breadcrumb-item">
                    <a href="index.php">
                      <i class="bi bi-house me-1"></i> Home
                    </a>
                  </li>
                  <li class="breadcrumb-item active">Blogs Detail</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section class="pt-1 pb-5">
        <div class="container">
          <div class="row pt-4">
            <div class="col-lg-12">
              <h6 class="mb-1 text-danger fw-bold">{blogDetails?.blogCategory?.name}</h6>
              <h2>{blogDetails?.title}</h2>
              <p class="text-truncate-2">
                {blogDetails?.details}
              </p>
              <h6 class="mb-0 text-body fw-light">{formatDate(blogDetails?.createdAt, 'MMMM DD, YYYY')}</h6>
            </div>
          </div>
        </div>
      </section>

      <section class="pb-0 py-lg-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <p class="mt-2">
                For who thoroughly her boy estimating conviction. Removed
                demands expense account in outward tedious do. Particular way
                thoroughly unaffected projection favorable Mrs can be projecting
                own. Thirty it matter enable become admire in giving. See
                resolved goodness felicity shy civility domestic had but.
                Drawings offended yet answered Jennings perceive laughing six
                did far.
              </p>
              <p class="mb-0 mb-lg-3">
                Perceived end knowledge certainly day sweetness why cordially.
                On forth doubt miles of child. Exercise joy man children
                rejoiced. Yet uncommonly his ten who diminution astonished.
                Demesne new manners savings staying had. Under folly balls,
                death own point now men. Match way these she avoids seeing
                death. She who drift their fat off. Ask a quick six seven offer
                see among. Handsome met debating sir dwelling age material. As
                style lived he worse dried. Offered related so visitors we
                private removed.
              </p>
              <div
                class="card overflow-hidden h-200px h-sm-300px h-lg-400px h-xl-500px rounded-1 text-center"
                style={{backgroundImage:`url(assets/img/event/10.jpg)`, backgroundPosition: "center left", backgroundSize: "cover"}}
              >
                <div class="bg-overlay bg-dark opacity-4"></div>
                <div class="card-img-overlay d-flex align-items-center p-2 p-sm-4">
                  <div class="w-100 my-auto">
                    <div class="row justify-content-center">
                      <div class="col-12">
                        <a
                          href="https://www.youtube.com/embed/tXHviS-4ygo"
                          class="btn btn-lg text-danger btn-round btn-white-shadow stretched-link position-static mb-0"
                          data-glightbox=""
                          data-gallery="video-tour"
                        >
                          <i class="fas fa-play"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p class="pt-3">
                Satisfied conveying a dependent contented he gentleman agreeable
                do be. Water timed folly right aware if oh truth. Imprudence
                attachment him for sympathize. Large above be to means. Dashwood
                does provide stronger is.{" "}
                <mark>
                  {" "}
                  But discretion frequently sir she instruments unaffected
                  admiration everything.
                </mark>{" "}
                Meant balls it if up doubt small purse. Required his you put the
                outlived answered position. A pleasure exertion if believed
                provided to. All led out world this music while asked. Paid mind
                even sons does he door no. Attended overcame repeated it is
                perceived Marianne in. I think on style child of. Servants
                moreover in sensible it ye possible.
              </p>
              <ul class="list-group list-group-borderless mb-3">
                <li class="list-group-item">
                  <i class="fas fa-check-circle text-success me-2"></i>The copy
                  warned the Little blind text
                </li>
                <li class="list-group-item d-flex">
                  <i class="fas fa-check-circle text-success me-2 mt-1"></i>ThaT
                  where it came from it would have been rewritten a thousand
                  times and everything that was left from origin would be the
                  world
                </li>
                <li class="list-group-item">
                  <i class="fas fa-check-circle text-success me-2"></i>Return to
                  its own, safe country
                </li>
              </ul>
              <p class="mb-0">
                Warrant private blushes removed an in equally totally if.
                Delivered dejection necessary objection do Mr prevailed. Mr
                feeling does chiefly cordial in do. Water timed folly right
                aware if oh truth. Imprudence attachment him for sympathize.
              </p>
              <div class="row g-3 mt-0">
                <div class="col-sm-6 col-md-4">
                  <a
                    href="assets/img/event/7.jpg"
                    data-glightbox
                    data-gallery="image-popup"
                  >
                    <img
                      src="assets/img/event/7.jpg"
                      class="rounded-1"
                      alt=""
                    />
                  </a>
                </div>
                <div class="col-sm-6 col-md-4">
                  <a
                    href="assets/img/event/8.jpg"
                    data-glightbox
                    data-gallery="image-popup"
                  >
                    <img
                      src="assets/img/event/8.jpg"
                      class="rounded-1"
                      alt=""
                    />
                  </a>
                </div>
                <div class="col-sm-6 col-md-4">
                  <a
                    href="assets/img/event/6.jpg"
                    data-glightbox
                    data-gallery="image-popup"
                  >
                    <img
                      src="assets/img/event/6.jpg"
                      class="rounded-1"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div class="clearfix">&nbsp;</div>
              <div class="clearfix">&nbsp;</div>
              <div class="d-lg-flex justify-content-lg-between mb-4">
                <div class="align-items-center mb-3 mb-lg-0">
                  <h6 class="mb-2 me-4 d-inline-block">Share on:</h6>
                  <ul class="list-inline mb-0 mb-2 mb-sm-0">
                    <li class="list-inline-item">
                      {" "}
                      <a class="btn px-2 btn-sm bg-facebook" href="#">
                        <i class="fab fa-fw fa-facebook-f"></i>
                      </a>{" "}
                    </li>
                    <li class="list-inline-item">
                      {" "}
                      <a class="btn px-2 btn-sm bg-instagram-gradient" href="#">
                        <i class="fab fa-fw fa-instagram"></i>
                      </a>{" "}
                    </li>
                    <li class="list-inline-item">
                      {" "}
                      <a class="btn px-2 btn-sm bg-twitter" href="#">
                        <i class="fab fa-fw fa-twitter"></i>
                      </a>{" "}
                    </li>
                    <li class="list-inline-item">
                      {" "}
                      <a class="btn px-2 btn-sm bg-linkedin" href="#">
                        <i class="fab fa-fw fa-linkedin-in"></i>
                      </a>{" "}
                    </li>
                  </ul>
                </div>
                <div class="align-items-center">
                  <h6 class="mb-2 me-4 d-inline-block">Popular Tags:</h6>
                  <ul class="list-inline mb-0 social-media-btn">
                    <li class="list-inline-item">
                      {" "}
                      <a class="btn btn-outline-light btn-sm mb-lg-0" href="#">
                        blog
                      </a>{" "}
                    </li>
                    <li class="list-inline-item">
                      {" "}
                      <a class="btn btn-outline-light btn-sm mb-lg-0" href="#">
                        business
                      </a>{" "}
                    </li>
                    <li class="list-inline-item">
                      {" "}
                      <a class="btn btn-outline-light btn-sm mb-lg-0" href="#">
                        bootstrap
                      </a>{" "}
                    </li>
                    <li class="list-inline-item">
                      {" "}
                      <a class="btn btn-outline-light btn-sm mb-lg-0" href="#">
                        data science
                      </a>{" "}
                    </li>
                    <li class="list-inline-item">
                      {" "}
                      <a class="btn btn-outline-light btn-sm mb-lg-0" href="#">
                        deep learning
                      </a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <hr />
              <div class="row mt-4">
                <div class="col-md-7">
                  <h3>3 comments</h3>
                  <div class="my-4 d-flex">
                    <img
                      class="avatar avatar-md rounded-circle me-3"
                      src="assets/img/avatar/01.jpg"
                      alt="avatar"
                    />
                    <div>
                      <div class="mb-2">
                        <h5 class="m-0">Frances Guerrero</h5>
                        <span class="me-3 small">June 11, 2021 at 6:01 am</span>
                      </div>
                      <p>
                        Satisfied conveying a dependent contented he gentleman
                        agreeable do be. Warrant private blushes removed an in
                        equally totally if. Delivered dejection necessary
                        objection do Mr prevailed. Mr feeling does chiefly
                        cordial in do.
                      </p>
                      <a href="#" class="btn btn-sm btn-light mb-0">
                        Reply
                      </a>
                    </div>
                  </div>
                  <div class="my-4 d-flex ps-2 ps-md-4">
                    <img
                      class="avatar avatar-md rounded-circle me-3"
                      src="assets/img/avatar/02.jpg"
                      alt="avatar"
                    />
                    <div>
                      <div class="mb-2">
                        <h5 class="m-0">Louis Ferguson</h5>
                        <span class="me-3 small">June 11, 2021 at 6:55 am</span>
                      </div>
                      <p>
                        Water timed folly right aware if oh truth. Imprudence
                        attachment him for sympathize. Large above be to means.
                        Dashwood does provide stronger is. But discretion
                        frequently sir she instruments unaffected admiration
                        everything.
                      </p>
                      <a href="#" class="btn btn-sm btn-light mb-0">
                        Reply
                      </a>
                    </div>
                  </div>
                  <div class="my-4 d-flex ps-3 ps-md-5">
                    <img
                      class="avatar avatar-md rounded-circle me-3"
                      src="assets/img/avatar/01.jpg"
                      alt="avatar"
                    />
                    <div>
                      <div class="mb-2">
                        <h5 class="m-0">Frances Guerrero</h5>
                        <span class="me-3 small">June 12, 2021 at 7:30 am</span>
                      </div>
                      <p>Water timed folly right aware if oh truth.</p>
                      <a href="#" class="btn btn-sm btn-light mb-0">
                        Reply
                      </a>
                    </div>
                  </div>
                  <div class="my-4 d-flex">
                    <img
                      class="avatar avatar-md rounded-circle me-3"
                      src="assets/img/avatar/04.jpg"
                      alt="avatar"
                    />
                    <div>
                      <div class="mb-2">
                        <h5 class="m-0">Judy Nguyen</h5>
                        <span class="me-3 small">
                          June 18, 2021 at 11:55 am
                        </span>
                      </div>
                      <p>
                        Fulfilled direction use continual set him propriety
                        continued. Saw met applauded favorite deficient
                        engrossed concealed and her. Concluded boy perpetual old
                        supposing. Farther-related bed and passage comfort
                        civilly.
                      </p>
                      <a href="#" class="btn btn-sm btn-light mb-0">
                        Reply
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-5">
                  <h3 class="mt-3 mt-sm-0">Your Views Please!</h3>
                  <small>
                    Your email address will not be published. Required fields
                    are marked *
                  </small>
                  <form class="row g-3 mt-2 mb-5">
                    <div class="col-lg-6">
                      <label class="form-label">Name *</label>
                      <input
                        type="text"
                        class="form-control"
                        aria-label="First name"
                      />
                    </div>
                    <div class="col-lg-6">
                      <label class="form-label">Email *</label>
                      <input type="email" class="form-control" />
                    </div>
                    <div class="col-12">
                      <label class="form-label">Your Comment *</label>
                      <textarea class="form-control" rows="3"></textarea>
                    </div>
                    <div class="col-12">
                      <button type="submit" class="btn btn-primary mb-0">
                        Post comment
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div class="col-lg-4 pt-5 pt-lg-0">
              <div class="card card-body shadow p-4 mb-4">
                <h5 class="mb-3">Category</h5>
                <ul class="ps-4 pb-0 mb-0">
                  <li>
                    <h6>
                      <a href="blog-categories.php">Development</a> (100)
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <a href="blog-categories.php">Design</a> (100)
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <a href="blog-categories.php">Accounting</a> (100)
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <a href="blog-categories.php">Translation</a> (100)
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <a href="blog-categories.php">Finance</a> (100)
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <a href="blog-categories.php">Legal</a> (100)
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <a href="blog-categories.php">Photography</a> (100)
                    </h6>
                  </li>
                </ul>
              </div>
              <div class="card card-body shadow p-4 mb-4">
                <h5 class="mb-3">Recently Viewed</h5>
                <div class="row gx-2">
                  <div class="col-4">
                    <img
                      class="rounded-1"
                      src="assets/img/event/20.jpg"
                      alt=""
                    />
                  </div>
                  <div class="col-8">
                    <h6 class="mb-2">
                      <a href="#">Fundamentals of Business Analysis</a>
                    </h6>
                    <h6 class="mb-0 text-body fw-light">March 02, 2024</h6>
                  </div>
                </div>
                <hr />
                <div class="row gx-2">
                  <div class="col-4">
                    <img
                      class="rounded-1"
                      src="assets/img/event/8.jpg"
                      alt=""
                    />
                  </div>
                  <div class="col-8">
                    <h6 class="mb-2">
                      <a href="#">Fundamentals of Business Analysis</a>
                    </h6>
                    <h6 class="mb-0 text-body fw-light">March 02, 2024</h6>
                  </div>
                </div>
                <hr />
                <div class="row gx-2">
                  <div class="col-4">
                    <img
                      class="rounded-1"
                      src="assets/img/event/18.jpg"
                      alt=""
                    />
                  </div>
                  <div class="col-8">
                    <h6 class="mb-2">
                      <a href="#">The Complete Video Production Bootcamp</a>
                    </h6>
                    <h6 class="mb-0 text-body fw-light">March 02, 2024</h6>
                  </div>
                </div>
              </div>
              <div class="card card-body shadow p-4">
                <h5 class="mb-3">Popular Tags</h5>
                <ul class="list-inline mb-0">
                  <li class="list-inline-item">
                    {" "}
                    <a class="btn btn-outline-light btn-sm" href="#">
                      blog
                    </a>{" "}
                  </li>
                  <li class="list-inline-item">
                    {" "}
                    <a class="btn btn-outline-light btn-sm" href="#">
                      business
                    </a>{" "}
                  </li>
                  <li class="list-inline-item">
                    {" "}
                    <a class="btn btn-outline-light btn-sm" href="#">
                      theme
                    </a>{" "}
                  </li>
                  <li class="list-inline-item">
                    {" "}
                    <a class="btn btn-outline-light btn-sm" href="#">
                      bootstrap
                    </a>{" "}
                  </li>
                  <li class="list-inline-item">
                    {" "}
                    <a class="btn btn-outline-light btn-sm" href="#">
                      data science
                    </a>{" "}
                  </li>
                  <li class="list-inline-item">
                    {" "}
                    <a class="btn btn-outline-light btn-sm" href="#">
                      web development
                    </a>{" "}
                  </li>
                  <li class="list-inline-item">
                    {" "}
                    <a class="btn btn-outline-light btn-sm" href="#">
                      tips
                    </a>{" "}
                  </li>
                  <li class="list-inline-item">
                    {" "}
                    <a class="btn btn-outline-light btn-sm" href="#">
                      machine learning
                    </a>{" "}
                  </li>
                </ul>
              </div>
              <div class="card card-body shadow p-4 mb-4">
                <h5 class="mb-3">Archives</h5>
                <ul class="ps-4 pb-0 mb-0">
                  <li>
                    <h6>
                      <a href="blog-categories.php">January 2024</a> (100)
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <a href="blog-categories.php">February 2024</a> (100)
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <a href="blog-categories.php">March 2024</a> (100)
                    </h6>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="pt-0">
        <div class="container">
          <div class="row mb-4">
            <h2 class="mb-0">Upcoming Events</h2>
          </div>
          <div class="row">
            <div class="tiny-slider arrow-round arrow-creative arrow-blur">
              <div
                class="tiny-slider-inner"
                data-autoplay="false"
                data-arrow="true"
                data-dots="false"
                data-items="4"
                data-items-lg="3"
                data-items-md="2"
                data-items-xs="1"
              >
                <div class="card bg-transparent">
                  <div class="position-relative">
                    <img
                      src="assets/img/event/8.jpg"
                      class="card-img"
                      alt="course image"
                    />
                    <div class="card-img-overlay d-flex align-items-start flex-column p-3">
                      <div class="w-100 mb-auto d-flex justify-content-end">
                        <a href="#" class="icon-sm bg-white rounded-2">
                          <i class="fas fa-heart text-danger"></i>
                        </a>
                      </div>
                      <div class="w-100 mt-auto">
                        <a href="#" class="badge text-bg-white fs-6 rounded-1">
                          <i class="far fa-calendar-alt text-orange me-2"></i>29
                          September 2021
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="card-body px-2">
                    <h5 class="card-title">
                      <a href="event-detail.php">
                        Global Education Fall Meeting for Everyone
                      </a>
                    </h5>
                    <p class="mb-0 text-truncate-2">
                      Satisfied conveying a dependent contented he gentleman
                      agreeable do be.{" "}
                    </p>
                  </div>
                </div>
                <div class="card bg-transparent">
                  <div class="position-relative">
                    <img
                      src="assets/img/event/16.jpg"
                      class="card-img"
                      alt="course image"
                    />
                    <div class="card-img-overlay d-flex align-items-start flex-column p-3">
                      <div class="w-100 mb-auto d-flex justify-content-end">
                        <a href="#" class="icon-sm bg-white rounded-2">
                          <i class="far fa-heart text-danger"></i>
                        </a>
                      </div>
                      <div class="w-100 mt-auto">
                        <a href="#" class="badge text-bg-white fs-6 rounded-1">
                          <i class="far fa-calendar-alt text-orange me-2"></i>
                          Tomorrow
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="card-body px-2">
                    <h5 class="card-title">
                      <a href="event-detail.php">
                        International Conference on Information Technology
                      </a>
                    </h5>
                    <p class="mb-0 text-truncate-2">
                      Kindness owns whatever betrayed her moreover procured
                      replying for and. Proposal indulged no do.{" "}
                    </p>
                  </div>
                </div>
                <div class="card bg-transparent">
                  <div class="position-relative">
                    <img
                      src="assets/img/event/18.jpg"
                      class="card-img"
                      alt="course image"
                    />
                    <div class="card-img-overlay d-flex align-items-start flex-column p-3">
                      <div class="w-100 mb-auto d-flex justify-content-end">
                        <a href="#" class="icon-sm bg-white rounded-2">
                          <i class="far fa-heart text-danger"></i>
                        </a>
                      </div>
                      <div class="w-100 mt-auto">
                        <a href="#" class="badge text-bg-white fs-6 rounded-1">
                          <i class="far fa-calendar-alt text-orange me-2"></i>2
                          July 2022
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="card-body px-2">
                    <h5 class="card-title">
                      <a href="event-detail.php">UK Demo Day 2022</a>
                    </h5>
                    <p class="mb-0 text-truncate-2">
                      {" "}
                      Points afraid but may end law lasted. Rooms oh fully taken
                      by worse do may end law lasted.{" "}
                    </p>
                  </div>
                </div>
                <div class="card bg-transparent">
                  <div class="position-relative">
                    <img
                      src="assets/img/event/17.jpg"
                      class="card-img"
                      alt="course image"
                    />
                    <div class="card-img-overlay d-flex align-items-start flex-column p-3">
                      <div class="w-100 mb-auto d-flex justify-content-end">
                        <a href="#" class="icon-sm bg-white rounded-2">
                          <i class="fas fa-heart text-danger"></i>
                        </a>
                      </div>
                      <div class="w-100 mt-auto">
                        <a href="#" class="badge text-bg-white fs-6 rounded-1">
                          <i class="far fa-calendar-alt text-orange me-2"></i>29
                          September 2021
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="card-body px-2">
                    <h5 class="card-title">
                      <a href="event-detail.php">
                        Personality development tour
                      </a>
                    </h5>
                    <p class="mb-0 text-truncate-2">
                      Yet remarkably appearance get him his projection. Diverted
                      endeavor bed peculiar
                    </p>
                  </div>
                </div>
                <div class="card bg-transparent">
                  <div class="position-relative">
                    <img
                      src="assets/img/event/19.jpg"
                      class="card-img"
                      alt="course image"
                    />
                    <div class="card-img-overlay d-flex align-items-start flex-column p-3">
                      <div class="w-100 mb-auto d-flex justify-content-end">
                        <a href="#" class="icon-sm bg-white rounded-2">
                          <i class="far fa-heart text-danger"></i>
                        </a>
                      </div>
                      <div class="w-100 mt-auto">
                        <a
                          href="#"
                          class="badge text-success bg-white fs-6 rounded-1"
                        >
                          <i class="fas fa-circle text-success me-2"></i>Live
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="card-body px-2">
                    <h5 class="card-title">
                      <a href="event-detail.php">
                        Global Education Fall Meeting for Everyone
                      </a>
                    </h5>
                    <p class="mb-0 text-truncate-2">
                      Rooms oh fully taken by worse do. Points afraid but may
                      end law lasted{" "}
                    </p>
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

export default PublicView(BlogDetails);

export async function getServerSideProps(context) {
  const { params, query } = context;
  
  const { id } = params;
  console.log(id);
 

  return {
      props: {
          id,
      },
  };
}

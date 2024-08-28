import PublicView from "@/components/HOC/PublicView";
import { IMAGE_URL } from "@/helpers/apiUrl";
import { formatDate } from "@/helpers/functions";
import PublicService from "@/services/PublicService";
import React, { useEffect, useState } from "react";

const Blogs = () => {
  const [blogData, setBlogData] = useState({
    allFeaturedPost: [],
    allRecommendedPost: [],
    allRecord: [],
  });

  const handleGetBlogs = () => {
    const res = PublicService.allBlogs().then((data) => {
      console.log(data);
      setBlogData({
        allFeaturedPost: data.data.allFeaturedPost,
        allRecommendedPost: data.data.allRecommendedPost,
        allRecord: data.data.allRecord,
      })
    })
  }


  function truncateWords(text, limit) {
    const words = text.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return text;
  }
  function createMarkup(text) {
    const truncatedText = truncateWords(text, 10);
    return {__html: truncatedText};
  }

  console.log(blogData?.allRecord);
  

  useEffect(() => {
    handleGetBlogs();
    
  }, [])
  return (
    <main>
      <section className="pt-4 pb-2 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-dots my-0 py-0">
                  <li className="breadcrumb-item">
                    <a href="index.php">Home</a>
                  </li>
                  <li className="breadcrumb-item">Community</li>
                  <li className="breadcrumb-item active">Blogs</li>
                </ol>
              </nav>
              <h4 className="fw-normal mt-3">Featured Blogs</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-1 pb-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="card bg-transparent">
                <div className="overflow-hidden rounded-2">
                  <img
                    src="assets/img/event/1.jpg"
                    className="card-img rounded-2"
                    alt="course image"
                  />
                  <div className="bg-overlay bg-dark opacity-4"></div>
                  <div className="card-img-overlay d-flex align-items-start p-3">
                    <a href="blog-detail.php" className="badge text-bg-primary">
                      Hotels
                    </a>
                  </div>
                </div>
                <div className="card-body px-0">
                  <h5 className="card-title">
                    <a href="blog-detail.php">
                      Across the States: Exploring America's Culinary Heritage
                      and Regional Delicacies
                    </a>
                  </h5>
                  <p className="text-truncate-3">
                    Across the States: Exploring America's Culinary Heritage and
                    Regional Delicacies" takes readers on a flavorful journey
                    through the heart of American cuisine, unraveling the rich
                    tapestry Stateside Eats: Exploring the Culinary Wonders and
                    Regional Flavors Across America" embarks on a savory,
                    uncovering the unique dishes, of the West, join us as we
                    celebrate the diverse culinary heritage that unites
                    uncovering the unique dishes, of the West, join us as we
                    celebrate the diverse culinary heritage that unites us all,
                    one delicious bite at a time....
                  </p>
                  <div className="d-flex justify-content-between">
                    <h6 className="mb-0">
                      <a href="blog-detail.php">Carolyn Ortiz</a>
                    </h6>
                    <span className="small">Saturday, June 11, 2024</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="row g-3">
                <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                  <div className="overflow-hidden rounded-1">
                    <img
                      src="assets/img/event/2.jpg"
                      className="rounded-1"
                      alt="Card image"
                    />
                    <div className="bg-overlay bg-dark opacity-4"></div>
                    <div className="card-img-overlay d-flex align-items-start p-2">
                      <a
                        href="blog-categories.php"
                        className="badge text-bg-danger"
                      >
                        Restaurent
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
                  <h5 className="card-title mb-1 pb-0">
                    <a href="blog-detail.php">
                      From Coast to Coast: A Gastronomic Odyssey Through the
                      Flavors of the USA
                    </a>
                  </h5>
                  <p className="mb-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy.
                  </p>
                  <div className="d-flex justify-content-between">
                    <h6 className="mb-0">
                      <a href="blog-detail.php">Carolyn Ortiz</a>
                    </h6>
                    <span className="small">Sunday, June 13, 2024</span>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row g-3">
                <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                  <div className="overflow-hidden rounded-1">
                    <img
                      src="assets/img/event/3.jpg"
                      className="rounded-1"
                      alt="course image"
                    />
                    <div className="bg-overlay bg-dark opacity-4"></div>
                    <div className="card-img-overlay d-flex align-items-start p-2">
                      <a href="blog-detail.php" className="badge text-bg-danger">
                        Travels
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
                  <h5 className="card-title mb-1 pb-0">
                    <a href="blog-detail.php">
                      American Epicurean Adventures: Savoring the Unique Tastes
                      and Traditions Across the Nation
                    </a>
                  </h5>
                  <p className="mb-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy.
                  </p>
                  <nav
                    
                    
                    aria-label="breadcrumb"
                  >
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-0">
                        <a href="blog-detail.php">Arielle Norheim</a>
                      </h6>
                      <span className="small">Monday, June 20, 2024</span>
                    </div>
                  </nav>
                </div>
              </div>
              <hr />
              <div className="row g-3">
                <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                  <div className="overflow-hidden rounded-1">
                    <img
                      src="assets/img/event/4.jpg"
                      className="rounded-1"
                      alt="course image"
                    />
                    <div className="bg-overlay bg-dark opacity-4"></div>
                    <div className="card-img-overlay d-flex align-items-start p-2">
                      <a href="blog-detail.php" className="badge text-bg-danger">
                        Computer
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
                  <h5 className="card-title mb-1 pb-0">
                    <a href="blog-detail.php">
                      Taste America: A Deep Dive into the Rich Culinary Tapestry
                      of the United States
                    </a>
                  </h5>
                  <p className="mb-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy.
                  </p>
                  <nav
                   
                    aria-label="breadcrumb"
                  >
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-0">
                        <a href="blog-detail.php">Arielle Norheim</a>
                      </h6>
                      <span className="small">Wednessday, August 30, 2024</span>
                    </div>
                  </nav>
                </div>
              </div>
              <hr />
              <div className="row g-3">
                <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                  <div className="overflow-hidden rounded-1">
                    <img
                      src="assets/img/event/5.jpg"
                      className="rounded-1"
                      alt="course image"
                    />
                    <div className="bg-overlay bg-dark opacity-4"></div>
                    <div className="card-img-overlay d-flex align-items-start p-2">
                      <a href="blog-detail.php" className="badge text-bg-danger">
                        Auto Service
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
                  <h5 className="card-title mb-1 pb-0">
                    <a href="blog-detail.php">
                      United Plates: Navigating the Diverse Culinary Landscape
                      of the USA
                    </a>
                  </h5>
                  <p className="mb-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy.
                  </p>
                  <nav
                    
                    aria-label="breadcrumb"
                  >
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-0">
                        <a href="blog-detail.php">Arielle Norheim</a>
                      </h6>
                      <span className="small">Friday, July 25, 2024</span>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="py-5 bg-light">
        <div className="container">
          <div className="mb-3">
            <h3 className="fw-normal">
              Recommended <span className="text-warning">Blogs</span>
            </h3>
            <p className="mb-0">
              Projection favorable Mrs can be projecting own. Thirty it matter
              enable become admire in giving. 2 worst types of business
              accounts.
            </p>
          </div>
          <div className="row g-4">
            {blogData?.allRecommendedPost?.length > 0 && blogData?.allRecommendedPost.map((post, index) => (
              <div className="col-sm-6 col-lg-4 col-xl-3" key={index}>
              <div className="card bg-transparent">
                <div className="overflow-hidden rounded-top">
                  <img
                    src="assets/img/event/5.jpg"
                    className="card-img"
                    alt="course image"
                  />
                  <div className="bg-overlay bg-dark opacity-4"></div>
                  <div className="card-img-overlay d-flex align-items-start p-3">
                    <a href={`/blogs/${post.slug}`} className="badge text-bg-danger">
                      Hotels
                    </a>
                  </div>
                </div>
                <div className="card-body px-0">
                  <h5 className="card-title">
                    <a href={`/blogs/${post.slug}`}>
                      Epicurean Escapades: Exploring the Rich Culinary Landscape
                      of the United States
                    </a>
                  </h5>
                  <p className="text-truncate-2">
                    Affronting imprudence do he he everything. Offered chiefly
                    farther of my no colonel shyness. Such on help ye some door
                    if in.
                  </p>
                  <div className="d-flex justify-content-between">
                    <h6 className="mb-0">
                      <a href={`/blogs/${post.slug}`}>Arielle Norheim</a>
                    </h6>
                    <span className="small">Saturday, June 11, 2024</span>
                  </div>
                </div>
              </div>
            </div>
            ))}
            
           
          </div>
        </div>
      </section> */}
      <section className="py-5 ">
        <div className="container">
          <div className="row mb-3">
            <div className="col-12">
              <h3 className="fw-normal">
                Our Latest <span className="text-warning">Blogs</span>
              </h3>
              <p className="mb-0">
                Projection favorable Mrs can be projecting own. Thirty it matter
                enable become admire in giving. 2 worst types of business
                accounts.
              </p>
            </div>
          </div>
          <div className="row g-4">
            {blogData?.allRecord?.length > 0 && blogData?.allRecord.map((latest, index) => (
               <div className="col-sm-6 col-lg-4 col-xl-3" key={index}>
               <div className="card bg-transparent">
                 <div className="overflow-hidden rounded-top">
                   <img
                     src={`${IMAGE_URL}/uploads/blog-image/${latest.image}`}
                     className="card-img"
                     alt="course image"
                     height={298}
                   />
                   <div className="bg-overlay bg-dark opacity-4"></div>
                   <div className="card-img-overlay d-flex align-items-start p-3">
                     <a href={`/blogs/${latest?.slug}`} className="badge text-bg-danger">
                       {latest?.blogCategory?.name}
                     </a>
                   </div>
                 </div>
                 <div className="card-body px-0">
                   <h5 className="card-title">
                     <a href={`/blogs/${latest?.slug}`}>
                       {latest?.title}
                     </a>
                   </h5>
                   <div dangerouslySetInnerHTML={createMarkup(latest?.details)} />
                   <div className="d-flex justify-content-between">
                     <h6 className="mb-0">
                       <a href={`/blogs/${latest?.slug}`}>Arielle Norheim</a>
                     </h6>
                     <span className="small">{formatDate(latest?.updatedAt, "DD MMM YYYY")}</span>
                   </div>
                 </div>
               </div>
             </div>
            ))}
        
          </div>
          {/* <!-- Pagination START --> */}
          {/* <nav
            className="d-flex justify-content-center mt-5"
            aria-label="navigation"
          >
            <ul className="pagination pagination-primary-soft rounded mb-0">
              <li className="page-item mb-0">
                <a className="page-link" href="blog-detail.php" tabindex="-1">
                  <i className="fas fa-angle-double-left"></i>
                </a>
              </li>
              <li className="page-item mb-0">
                <a className="page-link" href="blog-detail.php">
                  1
                </a>
              </li>
              <li className="page-item mb-0 active">
                <a className="page-link" href="blog-detail.php">
                  2
                </a>
              </li>
              <li className="page-item mb-0">
                <a className="page-link" href="blog-detail.php">
                  ..
                </a>
              </li>
              <li className="page-item mb-0">
                <a className="page-link" href="blog-detail.php">
                  6
                </a>
              </li>
              <li className="page-item mb-0">
                <a className="page-link" href="blog-detail.php">
                  <i className="fas fa-angle-double-right"></i>
                </a>
              </li>
            </ul>
          </nav> */}
          {/* <!-- Pagination END --> */}
        </div>
      </section>
    </main>
  );
};

export default PublicView(Blogs, "Blogs");

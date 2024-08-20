import SidebarInformation from "@/components/Business/SidebarInformation";
import BusinessView from "@/components/HOC/BusinessView";
import { useBusinessAboutStore } from "@/store";

const Details = () => {
  const userProfile = useBusinessAboutStore((state) => state.businessProfile);
  return (
    <BusinessView>
      <main>
        <section class="p-0 m-0">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="d-flex justify-content-between align-items-center">
                  <button
                    class="btn btn-link d-xl-none mb-0 float-start px-0 mt-2 pb-0"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasSidebar"
                    aria-controls="offcanvasSidebar"
                  >
                    <i class="fas fa-sliders-h"></i> My Collection
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="py-3 bg-light mb-4">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <h5 class="text-danger mb-2">Careers</h5>
                <div class="d-flex justify-content-left">
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb breadcrumb-dots my-0 py-0">
                      <li class="breadcrumb-item">
                        <a href="index.php">Home</a>
                      </li>
                      <li class="breadcrumb-item">My Collection</li>
                      <li class="breadcrumb-item">Careers</li>
                      <li class="breadcrumb-item active">
                        {" "}
                        Digital Marketing Specialist
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="pt-0 pb-5">
          <div class="container">
            <div class="row">
              <div class="col-xl-3">
                <SidebarInformation profile={userProfile} />
              </div>
              <div class="col-xl-9">
                <h6 class="mb-2 text-primary">CN International</h6>
                <h5 class="mb-2">Digital Marketing Specialist</h5>
                <p>
                  Satisfied conveying a dependent contented he gentleman
                  agreeable do be. Warrant private blushes removed an in equally
                  totally if. Delivered dejection necessary objection do Mr
                  prevailed. Mr feeling does chiefly cordial in do.
                </p>
                <h5>Education</h5>
                <ul>
                  <li>Bachelor in Engineering (BEngg)</li>
                </ul>
                <h5>Experience</h5>
                <ul>
                  <li>At least 3 years</li>
                  <li>
                    The applicants should have experience in the following
                    business area(s): Software Company
                  </li>
                </ul>
                <h5>Qualifications:</h5>
                <ul>
                  <li>
                    Solid experience as a Full-stack Developer with a focus on
                    PHP, ReactJS, HTML5, CSS3, and MySQL.
                  </li>
                  <li>
                    Proficiency in developing responsive web applications and an
                    understanding of web design principles.
                  </li>
                  <li>
                    Knowledge of database design, query optimization, and
                    database management.
                  </li>
                  <li>
                    Experience with version control systems, preferably Git.
                  </li>
                  <li>
                    Strong problem-solving skills and the ability to work
                    effectively in a team environment.
                  </li>
                  <li>
                    Good understanding of software development methodologies,
                    particularly Agile.
                  </li>
                  <li>A commitment to continuous learning and improvement.</li>
                  <li>
                    Bachelor’s degree in Computer Science, Engineering, or a
                    related field is preferred.
                  </li>
                </ul>
                <h5>Job Summary:</h5>
                <p>
                  Ollyo is seeking an experienced Full-stack Developer to join
                  our expanding development team. This role is pivotal in
                  crafting and refining the technology that drives our
                  innovative web applications. With a strong foundation in PHP,
                  ReactJS, and MySQL, you will play a key role in developing
                  front-end and back-end solutions that enhance user
                  experiences. Working within a large, dynamic development team,
                  you will contribute to projects that are at the heart of our
                  business operations. If you are passionate about building
                  scalable, efficient web applications and eager to collaborate
                  with a team of skilled developers, we want to hear from you.
                </p>
                <h5>Key Responsibilities:</h5>
                <ul>
                  <li>
                    Develop high-quality web applications by integrating
                    front-end and back-end technologies using PHP, ReactJS,
                    MySQL, HTML5, and CSS3.
                  </li>
                  <li>
                    Participate in the entire application development lifecycle,
                    from concept to deployment, with a focus on coding and
                    debugging.
                  </li>
                  <li>
                    Work collaboratively with UI/UX designers to ensure the
                    technical feasibility of designs and create responsive,
                    user-centric interfaces.
                  </li>
                  <li>
                    Contribute to the optimization of applications for maximum
                    speed and scalability.
                  </li>
                  <li>
                    Assist in database design, development, and management in
                    MySQL, ensuring data integrity and performance.
                  </li>
                  <li>
                    Engage with the development team in code reviews, sharing
                    knowledge and practices to improve code quality and team
                    skills.
                  </li>
                  <li>
                    Stay updated with emerging web technologies and apply them
                    into operations and activities.
                  </li>
                  <li>
                    Collaborate across departments to understand user needs and
                    translate them into technical solutions.
                  </li>
                </ul>
                <h5>Compensation &amp; Other Benefits </h5>
                <ul>
                  <li>Salary Review: Yearly</li>
                  <li>Festival Bonus: 2</li>
                  <li>Exceptional work culture and environment</li>
                  <li>
                    Free meals, coffee, and snacksFull-size gym to support
                    wellness and fitness
                  </li>
                  <li>
                    Facilities for both indoor and outdoor sportsFree shuttle
                    service (subject to route availability)
                  </li>
                  <li>Parking facility (subject to availability)</li>
                  <li>Leave encashment</li>
                  <li>Loyalty bonus</li>
                  <li>Maternity and paternity leaves</li>
                  <li>Designated areas for male and female Muslim prayers</li>
                </ul>
                <h5>Employment Status</h5>
                <ul>
                  <li>Full Time</li>
                </ul>
                <h5>Job Location </h5>
                <ul>
                  <li>Dhaka</li>
                </ul>
                <h5>Deadline</h5>
                <p>22nd July, 2024</p>
                <div class="clearfix">&nbsp;</div>
                <h5>Apply for this position</h5>
                <form class="row g-3 needs-validation" novalidate>
                  <div class="col-md-12 col-sm-12 bg-light-input">
                    <label
                      class="form-label fw-normal text-black"
                      for="full_name"
                    >
                      Full name <span class="star">*</span>
                    </label>
                    <input
                      class="form-control full_name"
                      type="text"
                      title="full_name"
                      id="full_name"
                      placeholder="e. g. John Doe"
                      required
                    />
                    <div class="valid-feedback">Looks good!</div>
                    <div class="invalid-feedback">Please enter full name.</div>
                  </div>
                  <div class="col-md-12 col-sm-12 bg-light-input">
                    <label class="form-label fw-normal text-dark" for="email">
                      Email <span class="star">*</span>
                    </label>
                    <input
                      class="form-control email"
                      type="email"
                      title="email"
                      id="official_email"
                      placeholder="e. g. johndoe@gmail.com"
                      autofocus
                      required
                    />
                    <div class="valid-feedback">Looks good!</div>
                    <div class="invalid-feedback">
                      Please enter email address.
                    </div>
                  </div>
                  <div class="col-md-12 col-sm-12 bg-light-input">
                    <label class="form-label fw-normal text-dark" for="phone">
                      Phone <span class="star">*</span>
                    </label>
                    <input
                      class="form-control phone"
                      type="number"
                      id="zip"
                      title="zip"
                      placeholder="e.g. 01234567890"
                      autofocus
                      required
                    />
                    <div class="valid-feedback">Looks good!</div>
                    <div class="invalid-feedback">Please enter phone code.</div>
                  </div>

                  <div class="col-md-12 col-sm-12 bg-light-input">
                    <label class="form-label fw-normal text-dark" for="cover">
                      Cover Letter <span class="star">*</span>
                    </label>
                    <textarea
                      class="form-control cover"
                      rows="4"
                      type="text"
                      id="cover"
                      title="cover"
                      placeholder="E. g. Text..."
                      autofocus
                      required
                    ></textarea>
                    <div class="valid-feedback">Looks good!</div>
                    <div class="invalid-feedback">Please enter history.</div>
                  </div>
                  <div class="col-md-12 col-sm-12 bg-light-input">
                    <label class="form-label fw-normal text-dark" for="website">
                      Resume <span class="star">*</span>
                    </label>
                    <input
                      class="form-control website"
                      type="file"
                      id="file"
                      title="file"
                      autofocus
                      required
                    />
                    <div class="valid-feedback">Looks good!</div>
                    <div class="invalid-feedback">
                      Please attach your resume.
                    </div>
                  </div>
                  <div class="d-sm-flex justify-content-end mb-3">
                    <button type="submit" class="btn btn-primary-soft mb-0">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </BusinessView>
  );
};

export default Details;

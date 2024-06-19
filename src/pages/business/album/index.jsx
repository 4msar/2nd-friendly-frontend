import SidebarInformation from "@/components/Business/SidebarInformation";
import BusinessView from "@/components/HOC/BusinessView";
import React from "react";

const Album = () => {
  return (
    <main>
      <section className="p-0 m-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center">
                <button
                  className="btn btn-link d-xl-none mb-0 float-start px-0 mt-2 pb-0"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasSidebar"
                  aria-controls="offcanvasSidebar"
                >
                  <i className="fas fa-sliders-h"></i> Business Information
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-3 bg-light mb-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h5 className="text-danger mb-2">Album</h5>
              <div className="d-flex justify-content-left">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-dots my-0 py-0">
                    <li className="breadcrumb-item">
                      <a href="index.php">Home</a>
                    </li>
                    <li className="breadcrumb-item">Business Information</li>
                    <li className="breadcrumb-item">Album</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-1 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-md-3">
              <SidebarInformation />
            </div>
            <div className="col-xl-9 col-md-9">
            <div class="col d-md-flex justify-content-between align-items-center mb-2">
                        <div>
                            <h5 class="mb-2 mb-sm-0 text-danger pb-0">All Album</h5>
                        </div>
                        <div class="d-flex align-items-center mt-2 mt-md-0">
                            <a href="album-form.php" class="btn btn-sm btn-dark mb-0">Create Album</a>
                        </div>
                    </div>
                    <div class="table-responsive rounded-3 ">
                        <table class="table table p-4 mb-0 border">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Album Name</th>
                                <th>Quantity</th>
                                <th>Created</th>
                                <th>Updated</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="">
                                            <a href="photos.php"><img src="../assets/img/restaurent/1.jpg" class="rounded h-30px" alt=""/></a>
                                        </div>
                                        <h6 class="mb-0 ms-2 table-responsive-title">
                                            <a href="photos.php">Culver Burger</a>
                                        </h6>
                                    </div>
                                </td>
                                <td>34</td>
                                <td>Feb 15, 2024</td>
                                <td>March 25, 2024</td>
                                <td>
                                    <a href="album-form.php" class="btn btn-sm btn-blue-soft btn-round me-1 mb-0"><i class="far fa-fw fa-edit"></i></a>
                                    <a href="photos.php" class="btn btn-sm btn-success-soft btn-round me-1 mb-0"><i class="far fa-fw fa-image"></i></a>
                                    <button class="btn btn-sm btn-danger-soft btn-round mb-0"><i class="fas fa-fw fa-times"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="">
                                            <a href="photos.php"><img src="../assets/img/restaurent/1.jpg" class="rounded h-30px" alt=""/></a>
                                        </div>
                                        <h6 class="mb-0 ms-2 table-responsive-title">
                                            <a href="photos.php">Auto Mobile</a>
                                        </h6>
                                    </div>
                                </td>
                                <td>34</td>
                                <td>Feb 15, 2024</td>
                                <td>March 25, 2024</td>
                                <td>
                                    <a href="album-form.php" class="btn btn-sm btn-blue-soft btn-round me-1 mb-0"><i class="far fa-fw fa-edit"></i></a>
                                    <a href="photos.php" class="btn btn-sm btn-success-soft btn-round me-1 mb-0"><i class="far fa-fw fa-eye"></i></a>
                                    <button class="btn btn-sm btn-danger-soft btn-round mb-0"><i class="fas fa-fw fa-times"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="">
                                            <a href="photos.php"><img src="../assets/img/restaurent/2.jpg" class="rounded h-30px" alt=""/></a>
                                        </div>
                                        <h6 class="mb-0 ms-2 table-responsive-title">
                                            <a href="photos.php">Resturent</a>
                                        </h6>
                                    </div>
                                </td>
                                <td>34</td>
                                <td>Feb 15, 2024</td>
                                <td>March 25, 2024</td>
                                <td>
                                    <a href="album-form.php" class="btn btn-sm btn-blue-soft btn-round me-1 mb-0"><i class="far fa-fw fa-edit"></i></a>
                                    <a href="photos.php" class="btn btn-sm btn-success-soft btn-round me-1 mb-0"><i class="far fa-fw fa-eye"></i></a>
                                    <button class="btn btn-sm btn-danger-soft btn-round mb-0"><i class="fas fa-fw fa-times"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="">
                                            <a href="photos.php"><img src="../assets/img/restaurent/3.jpg" class="rounded h-30px" alt=""/></a>
                                        </div>
                                        <h6 class="mb-0 ms-2 table-responsive-title">
                                            <a href="photos.php">Auto Service</a>
                                        </h6>
                                    </div>
                                </td>
                                <td>34</td>
                                <td>Feb 15, 2024</td>
                                <td>March 25, 2024</td>
                                <td>
                                    <a href="album-form.php" class="btn btn-sm btn-blue-soft btn-round me-1 mb-0"><i class="far fa-fw fa-edit"></i></a>
                                    <a href="photos.php" class="btn btn-sm btn-success-soft btn-round me-1 mb-0"><i class="far fa-fw fa-eye"></i></a>
                                    <button class="btn btn-sm btn-danger-soft btn-round mb-0"><i class="fas fa-fw fa-times"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="">
                                            <a href="photos.php"><img src="../assets/img/restaurent/4.jpg" class="rounded h-30px" alt=""/></a>
                                        </div>
                                        <h6 class="mb-0 ms-2 table-responsive-title">
                                            <a href="photos.php">Gas Station</a>
                                        </h6>
                                    </div>
                                </td>
                                <td>34</td>
                                <td>Feb 15, 2024</td>
                                <td>March 25, 2024</td>
                                <td>
                                    <a href="album-form.php" class="btn btn-sm btn-blue-soft btn-round me-1 mb-0"><i class="far fa-fw fa-edit"></i></a>
                                    <a href="photos.php" class="btn btn-sm btn-success-soft btn-round me-1 mb-0"><i class="far fa-fw fa-eye"></i></a>
                                    <button class="btn btn-sm btn-danger-soft btn-round mb-0"><i class="fas fa-fw fa-times"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="">
                                            <a href="photos.php"><img src="../assets/img/restaurent/5.jpg" class="rounded h-30px" alt=""/></a>
                                        </div>
                                        <h6 class="mb-0 ms-2 table-responsive-title">
                                            <a href="photos.php">Culver Burger</a>
                                        </h6>
                                    </div>
                                </td>
                                <td>34</td>
                                <td>Feb 15, 2024</td>
                                <td>March 25, 2024</td>
                                <td>
                                    <a href="album-form.php" class="btn btn-sm btn-blue-soft btn-round me-1 mb-0"><i class="far fa-fw fa-edit"></i></a>
                                    <a href="photos.php" class="btn btn-sm btn-success-soft btn-round me-1 mb-0"><i class="far fa-fw fa-eye"></i></a>
                                    <button class="btn btn-sm btn-danger-soft btn-round mb-0"><i class="fas fa-fw fa-times"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="">
                                            <a href="photos.php"><img src="../assets/img/restaurent/6.jpg" class="rounded h-30px" alt=""/></a>
                                        </div>
                                        <h6 class="mb-0 ms-2 table-responsive-title">
                                            <a href="photos.php">Hotel</a>
                                        </h6>
                                    </div>
                                </td>
                                <td>34</td>
                                <td>Feb 15, 2024</td>
                                <td>March 25, 2024</td>
                                <td>
                                    <a href="album-form.php" class="btn btn-sm btn-blue-soft btn-round me-1 mb-0"><i class="far fa-fw fa-edit"></i></a>
                                    <a href="photos.php" class="btn btn-sm btn-success-soft btn-round me-1 mb-0"><i class="far fa-fw fa-eye"></i></a>
                                    <button class="btn btn-sm btn-danger-soft btn-round mb-0"><i class="fas fa-fw fa-times"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="">
                                            <a href="photos.php"><img src="../assets/img/restaurent/07.jpg" class="rounded h-30px" alt=""/></a>
                                        </div>
                                        <h6 class="mb-0 ms-2 table-responsive-title">
                                            <a href="photos.php">Fire Accessories</a>
                                        </h6>
                                    </div>
                                </td>
                                <td>34</td>
                                <td>Feb 15, 2024</td>
                                <td>March 25, 2024</td>
                                <td>
                                    <a href="album-form.php" class="btn btn-sm btn-blue-soft btn-round me-1 mb-0"><i class="far fa-fw fa-edit"></i></a>
                                    <a href="photos.php" class="btn btn-sm btn-success-soft btn-round me-1 mb-0"><i class="far fa-fw fa-eye"></i></a>
                                    <button class="btn btn-sm btn-danger-soft btn-round mb-0"><i class="fas fa-fw fa-times"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="">
                                            <a href="photos.php"><img src="../assets/img/restaurent/08.jpg" class="rounded h-30px" alt=""/></a>
                                        </div>
                                        <h6 class="mb-0 ms-2 table-responsive-title">
                                            <a href="photos.php">Building Equipment</a>
                                        </h6>
                                    </div>
                                </td>
                                <td>34</td>
                                <td>Feb 15, 2024</td>
                                <td>March 25, 2024</td>
                                <td>
                                    <a href="album-form.php" class="btn btn-sm btn-blue-soft btn-round me-1 mb-0"><i class="far fa-fw fa-edit"></i></a>
                                    <a href="photos.php" class="btn btn-sm btn-success-soft btn-round me-1 mb-0"><i class="far fa-fw fa-eye"></i></a>
                                    <button class="btn btn-sm btn-danger-soft btn-round mb-0"><i class="fas fa-fw fa-times"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="">
                                            <a href="photos.php"><img src="../assets/img/restaurent/9.jpg" class="rounded h-30px" alt=""/></a>
                                        </div>
                                        <h6 class="mb-0 ms-2 table-responsive-title">
                                            <a href="photos.php">Building Scalable</a>
                                        </h6>
                                    </div>
                                </td>
                                <td>34</td>
                                <td>Feb 15, 2024</td>
                                <td>March 25, 2024</td>
                                <td>
                                    <a href="album-form.php" class="btn btn-sm btn-blue-soft btn-round me-1 mb-0"><i class="far fa-fw fa-edit"></i></a>
                                    <a href="photos.php" class="btn btn-sm btn-success-soft btn-round me-1 mb-0"><i class="far fa-fw fa-eye"></i></a>
                                    <button class="btn btn-sm btn-danger-soft btn-round mb-0"><i class="fas fa-fw fa-times"></i></button>
                                </td>
                            </tr>
                            </tbody>
                            {/* <!-- Table body END --> */}
                        </table>
                        {/* <!-- Table END --> */}
                    </div>
                    <div class="d-sm-flex justify-content-sm-between align-items-sm-center my-1 ps-2">
                        <p class="mb-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>
                        {/* <!-- Pagination --> */}
                        <nav class="d-flex justify-content-center mb-0" aria-label="navigation">
                            <ul class="pagination pagination-sm pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                                <li class="page-item mb-0"><a class="page-link" href="#" tabindex="-1"><i class="fas fa-angle-left"></i></a></li>
                                <li class="page-item mb-0"><a class="page-link" href="#">1</a></li>
                                <li class="page-item mb-0 active"><a class="page-link" href="#">2</a></li>
                                <li class="page-item mb-0"><a class="page-link" href="#">3</a></li>
                                <li class="page-item mb-0"><a class="page-link" href="#"><i class="fas fa-angle-right"></i></a></li>
                            </ul>
                        </nav>
                    </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BusinessView(Album, "Album");

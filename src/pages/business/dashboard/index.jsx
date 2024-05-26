import BusinessView from '@/components/HOC/BusinessView'
import React from 'react'

const Dashboard = () => {
  return (
    <main>
    <section className="py-4">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb breadcrumb-dots my-0 py-0">
                            <li className="breadcrumb-item"><a href="index.php"><i className="bi bi-house me-1"></i> Home</a></li>
                            <li className="breadcrumb-item active">Dashboard</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </section>
    <section className="pt-2 pb-5">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    
                    <div className="row g-4">
                        <div className="col-sm-6 col-lg-4">
                            <div className="d-flex justify-content-center align-items-center p-4 bg-warning bg-opacity-15 rounded-3">
                                <span className="display-6 text-warning mb-0"><i className="fas fa-tv fa-fw"></i></span>
                                <div className="ms-4">
                                    <div className="d-flex">
                                        <h5 className="purecounter mb-0 fw-bold" data-purecounter-start="0" data-purecounter-end="25"	data-purecounter-delay="200">0</h5>
                                        <span className="mb-0 h5">K+</span>
                                    </div>
                                    <span className="mb-0 h6 fw-light">Total User</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="d-flex justify-content-center align-items-center p-4 bg-purple bg-opacity-10 rounded-3">
                                <span className="display-6 text-purple mb-0"><i className="fas fa-user-graduate fa-fw"></i></span>
                                <div className="ms-4">
                                    <div className="d-flex">
                                        <h5 className="purecounter mb-0 fw-bold" data-purecounter-start="0" data-purecounter-end="25"	data-purecounter-delay="200">0</h5>
                                        <span className="mb-0 h5">K+</span>
                                    </div>
                                    <span className="mb-0 h6 fw-light">Total Earning</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="d-flex justify-content-center align-items-center p-4 bg-info bg-opacity-10 rounded-3">
                                <span className="display-6 text-info mb-0"><i className="fas fa-gem fa-fw"></i></span>
                                <div className="ms-4">
                                    <div className="d-flex">
                                        <h5 className="purecounter mb-0 fw-bold" data-purecounter-start="0" data-purecounter-end="12" data-purecounter-delay="300">0</h5>
                                        <span className="mb-0 h5">K</span>
                                    </div>
                                    <span className="mb-0 h6 fw-light">Total Payout</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="header mt-5">
                        <h5 className="mb-2 mb-sm-0 text-danger pb-0">Recent 5 Support Tickets (s)</h5>
                        <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                    <div className="table-responsive border-0 mt-2">
                        <table className="table align-middle p-4 mb-0 table-hover border">
                            <thead className="border-bottom bg-light">
                            <tr>
                                <th>Customer Name</th>
                                <th>Created at</th>
                                <th>Subject</th>
                                <th>Ticket</th>
                                <th>Status</th>
                                <th>Updated at</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Arielle</td>
                                <td>January 26, 2024</td>
                                <td>
                                    <h6 className="mt-2 mt-lg-0 mb-0"><a href="support-detail.php">Connectivity Problems</a></h6>
                                </td>
                                <td>
                                    #102356
                                </td>
                                <td className="text-center text-sm-start">
                                    <span className="badge bg-success bg-opacity-10 text-success">Closed</span>
                                </td>
                                <td>May 21, 2023</td>
                                <td>
                                    <a href="support-detail.php" className="text-black"><i className="bi bi-send"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>Arielle</td>
                                <td>January 26, 2024</td>
                                <td>
                                    <h6 className="mt-2 mt-lg-0 mb-0"><a href="support-detail.php">Billing Inquiry</a></h6>
                                </td>
                                <td>
                                    #102356
                                </td>
                                <td className="text-center text-sm-start">
                                    <span className="badge bg-success bg-opacity-10 text-success">Closed</span>
                                </td>
                                {/* <!-- Table data --> */}
                                <td>May 21, 2023</td>
                                <td>
                                    <a href="support-detail.php" className="text-black"><i className="bi bi-send"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>Arielle</td>
                                <td>January 26, 2024</td>
                                <td>
                                    <h6 className="mt-2 mt-lg-0 mb-0"><a href="support-detail.php">Hardware Malfunction</a></h6>
                                </td>
                                <td>
                                    #102356
                                </td>
                                <td className="text-center text-sm-start">
                                    <span className="badge bg-danger bg-opacity-10 text-danger">Cancelled </span>
                                </td>
                                <td>May 21, 2023</td>
                                <td>
                                    <a href="support-detail.php" className="text-black"><i className="bi bi-send"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>Arielle</td>
                                <td>January 26, 2024</td>
                                <td>
                                    <h6 className="mt-2 mt-lg-0 mb-0"><a href="support-detail.php">Feature Request</a></h6>
                                </td>
                                <td>
                                    #102356
                                </td>
                                <td className="text-center text-sm-start">
                                    <span className="badge bg-success bg-opacity-10 text-success">Closed</span>
                                </td>
                                <td>May 21, 2023</td>
                                <td>
                                    <a href="support-detail.php" className="text-black"><i className="bi bi-send"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>Arielle</td>
                                <td>January 26, 2024</td>
                                <td>
                                    <h6 className="mt-2 mt-lg-0 mb-0"><a href="support-detail.php">Data Loss/Recovery</a></h6>
                                </td>
                                <td>
                                    #102356
                                </td>
                                <td className="text-center text-sm-start">
                                    <span className="badge bg-orange bg-opacity-10 text-orange">Pending</span>
                                </td>
                                <td>May 21, 2023</td>
                                <td>
                                    <a href="support-detail.php" className="text-black"><i className="bi bi-send"></i></a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="header mt-5">
                        <h5 className="mb-2 mb-sm-0 text-danger pb-0">Recent 5 Message(s)</h5>
                        <p className="mb-0 pb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                    <div className="table-responsive border-0">
                        <table className="table border align-middle p-1 mb-0 table-hover">
                            <thead>
                            <tr>
                                <th>Customer Name</th>
                                <th>Title & Message</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <div className="w-60px">
                                            <img src="../assets/img/user/arielle.jpg" className="rounded-1" alt=""/>
                                        </div>
                                        <div className="mb-0 ms-2">
                                            <h6>Arielle</h6>
                                            <div className="d-sm-flex">
                                                <i className="fas fa-star fa-sm text-warning"></i><i className="fas fa-star fa-sm text-warning"></i><i className="fas fa-star fa-sm text-warning"></i><i className="fas fa-star fa-sm text-warning"></i><i className="fas fa-star fa-sm text-warning"></i>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-center text-sm-start"><span className="fw-normal text-black">Lorem Ipsum is simply dummy text...</span><br/> It is a long established fact that a reader...</td>
                                <td>
                                    <div className="badge bg-success bg-opacity-10 text-success fw-normal">Awaiting</div>
                                </td>
                                <td>April 1, 2024</td>
                                <td><a href="message-detail.php" className="text-black"><i className="bi bi-send"></i></a></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <div className="w-60px">
                                            <img src="../assets/img/user/user-2.jpg" className="rounded-1" alt=""/>
                                        </div>
                                        <div className="mb-0 ms-2">
                                            <h6>John Doe</h6>
                                            <div className="d-sm-flex">
                                                <i className="fas fa-star fa-sm text-warning"></i><i className="fas fa-star fa-sm text-warning"></i><i className="fas fa-star fa-sm text-warning"></i><i className="fas fa-star fa-sm text-warning"></i><i className="fas fa-star fa-sm text-warning"></i>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-center text-sm-start"><span className="fw-normal text-black">Lorem Ipsum is simply dummy text...</span><br/> It is a long established fact that a reader...</td>
                                <td>
                                    <div className="badge bg-secondary bg-opacity-10 text-secondary">Replied</div>
                                </td>
                                <td>April 1, 2024</td>
                                <td><a href="message-detail.php" className="text-black"><i className="bi bi-send"></i></a></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <div className="w-60px">
                                            <img src="../assets/img/user/user-3.jpg" className="rounded-1" alt=""/>
                                        </div>
                                        <div className="mb-0 ms-2">
                                            <h6>Smith</h6>
                                            <div className="d-sm-flex">
                                                <i className="fas fa-star fa-sm text-warning"></i><i className="fas fa-star fa-sm text-warning"></i><i className="fas fa-star fa-sm text-warning"></i><i className="fas fa-star fa-sm text-warning"></i><i className="fas fa-star fa-sm text-warning"></i>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-center text-sm-start"><span className="fw-normal text-black">Lorem Ipsum is simply dummy text...</span><br/> It is a long established fact that a reader...</td>
                                <td>
                                    <div className="badge bg-success bg-opacity-10 text-success fw-normal">Awaiting</div>
                                </td>
                                <td>April 1, 2024</td>
                                <td><a href="message-detail.php" className="text-black"><i className="bi bi-send"></i></a></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <div className="w-60px">
                                            <img src="../assets/img/user/user-4.jpg" className="rounded-1" alt=""/>
                                        </div>
                                        <div className="mb-0 ms-2">
                                            <h6>Jacson</h6>
                                            <div className="d-sm-flex">
                                                <i className="fas fa-star fa-sm text-warning"></i><i className="fas fa-star fa-sm text-warning"></i><i className="fas fa-star fa-sm text-warning"></i><i className="fas fa-star fa-sm text-warning"></i><i className="fas fa-star fa-sm text-warning"></i>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-center text-sm-start"><span className="fw-normal text-black">Lorem Ipsum is simply dummy text...</span><br/> It is a long established fact that a reader...</td>
                                <td>
                                    <div className="badge bg-success bg-opacity-10 text-success fw-normal">Awaiting</div>
                                </td>
                                <td>April 1, 2024</td>
                                <td><a href="message-detail.php" className="text-black"><i className="bi bi-send"></i></a></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <div className="w-60px">
                                            <img src="../assets/img/user/user-5.jpg" className="rounded-1" alt=""/>
                                        </div>
                                        <div className="mb-0 ms-2">
                                            <h6>Emilian</h6>
                                            <div className="d-sm-flex">
                                                <i className="fas fa-star fa-sm text-warning"></i><i className="fas fa-star fa-sm text-warning"></i><i className="fas fa-star fa-sm text-warning"></i><i className="fas fa-star fa-sm text-warning"></i><i className="fas fa-star fa-sm text-warning"></i>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-center text-sm-start"><span className="fw-normal text-black">Lorem Ipsum is simply dummy text...</span><br/> It is a long established fact that a reader...</td>
                                <td>
                                    <div className="badge bg-secondary bg-opacity-10 text-secondary">Replied</div>
                                </td>
                                <td>April 1, 2024</td>
                                <td><a href="message-detail.php" className="text-black"><i className="bi bi-send"></i></a></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    </section>
</main>
  )
}

export default BusinessView(Dashboard)
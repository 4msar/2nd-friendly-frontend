import SidebarInformation from '@/components/Business/SidebarInformation'
import BusinessView from '@/components/HOC/BusinessView'
import useToken from '@/hooks/useToken';
import BusinessService from '@/services/BusinessService';
import { useBusinessAboutStore } from '@/store';
import React, { useEffect } from 'react'

const SupportDetails = ({slug}) => {
    const userProfile = useBusinessAboutStore((state) => state.businessProfile);
    const isAuthenticated = useToken();
    

    const payload = {
        id: slug
    }
    const handleGetDetails = () => {
        const res = BusinessService.supportView(payload).then((data) => {
            console.log(data);
            
        })
    }
    

    useEffect(() => {
        if(isAuthenticated) {
            handleGetDetails();
        }
    }, [slug, isAuthenticated])
  return (
    <BusinessView title="Details">
         <main>
        <section class="p-0 m-0">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="d-flex justify-content-between align-items-center">
                            <button class="btn btn-link d-xl-none mb-0 float-start px-0 mt-2 pb-0" type="button"
                                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar"
                                    aria-controls="offcanvasSidebar">
                                <i class="fas fa-sliders-h"></i> Business Information
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
                        <h5 class="text-danger mb-2">Can't create account</h5>
                        <div class="d-flex justify-content-left">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb breadcrumb-dots my-0 py-0">
                                    <li class="breadcrumb-item"><a href="index.php">Home</a></li>
                                    <li class="breadcrumb-item">Business Information</li>
                                    <li class="breadcrumb-item"><a href="support.php">Support</a></li>
                                    <li class="breadcrumb-item active">Can't create account</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="pt-1 pb-5">
            <div class="container">
                <div class="row">
                    <div class="col-xl-3">
                    <SidebarInformation profile={userProfile} />
                    </div>
                    <div class="col-xl-9">
                        <div class="card border bg-transparent rounded-2">
                            <div class="card-body mt-2 mt-sm-4">
                                <div class="d-sm-flex">
                                    <img class="avatar avatar-lg rounded-circle float-start me-3" src="../assets/img/avatar/09.jpg" alt="avatar" />
                                    <div>
                                        <div class="mb-3 d-sm-flex justify-content-sm-between align-items-center">
                                            <div>
                                                <h5 class="m-0">Carolyn Ortiz</h5>
                                                <span class="me-3 small">June 11, 2021 at 6:01 am </span>
                                            </div>
                                        </div>
                                        <div class="text-end">
                                            <div class="collapse show" id="collapseComment">
                                                <div class="d-flex mt-3">
                                                    <textarea class="form-control mb-0" placeholder="Add a comment..." rows="4" cols="88" spellcheck="false"></textarea>
                                                    <button class="btn btn-sm btn-primary-soft ms-2 px-4 mb-0 flex-shrink-0"><i class="fas fa-paper-plane fs-5"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div class="d-sm-flex">
                                    <img class="avatar avatar-lg rounded-circle float-start me-3" src="../assets/img/avatar/03.jpg" alt="avatar" />
                                    <div>
                                        <div class="mb-3 d-sm-flex justify-content-sm-between align-items-center">
                                            <div>
                                                <h5 class="m-0">Dennis Barrett (Support Agent)</h5>
                                                <span class="me-3 small">June 18, 2021 at 11:55 am</span>
                                            </div>
                                        </div>
                                        <p>Far advanced settling say finished raillery. Offered chiefly farther Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. </p>
                                        <p class="text-primary"><i class="fas fa-file-pdf me-2"></i><a href="../documents/vandal.jpeg" target="_blank">list-of-customers.zip</a></p>
                                    </div>
                                </div>
                                <hr />
                                <div class="d-sm-flex">
                                    <img class="avatar avatar-lg rounded-circle float-start me-3" src="../assets/img/avatar/09.jpg" alt="avatar" />
                                    <div>
                                        <div class="mb-3 d-sm-flex justify-content-sm-between align-items-center">
                                            <div>
                                                <h5 class="m-0">Carolyn Ortiz</h5>
                                                <span class="me-3 small">August 28, 2021 at 3:08 pm</span>
                                            </div>
                                        </div>
                                        <p>Offered chiefly farther Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. </p>
                                        <p class="text-primary"><i class="fas fa-file-pdf me-2"></i><a href="../documents/vandal.jpeg" target="_blank">list-of-customers.zip</a></p>
                                    </div>
                                </div>
                                <hr />
                                <div class="d-sm-flex">
                                    <img class="avatar avatar-lg rounded-circle float-start me-3" src="../assets/img/avatar/03.jpg" alt="avatar" />
                                    <div>
                                        <div class="mb-3 d-sm-flex justify-content-sm-between align-items-center">
                                            <div>
                                                <h5 class="m-0">Dennis Barrett (Support Agent)</h5>
                                                <span class="me-3 small">August 29, 2021 at 5:35 pm</span>
                                            </div>
                                        </div>
                                        <p>Chiefly farther Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. </p>
                                        <p class="text-primary"><i class="fas fa-file-pdf me-2"></i><a href="../documents/vandal.jpeg" target="_blank">list-of-customers.zip</a></p>
                                    </div>
                                </div>
                                <hr />
                                <div class="d-sm-flex">
                                    <img class="avatar avatar-lg rounded-circle float-start me-3" src="../assets/img/avatar/09.jpg" alt="avatar" />
                                    <div>
                                        <div class="mb-3 d-sm-flex justify-content-sm-between align-items-center">
                                            <div>
                                                <h5 class="m-0">Carolyn Ortiz</h5>
                                                <span class="me-3 small">September 15, 2021 at 8:28 am</span>
                                            </div>
                                        </div>
                                        <p>Chiefly farther Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. </p>
                                        <p class="text-primary"><i class="fas fa-file-pdf me-2"></i><a href="../documents/vandal.jpeg" target="_blank">list-of-customers.zip</a></p>
                                    </div>
                                </div>
                            </div>

                            <div class="card-footer border-top">
                                {/* <!-- Pagination START --> */}
                                <div class="d-sm-flex justify-content-sm-between align-items-sm-center">
                                                <p class="mb-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>
                                    {/* <!-- Pagination --> */}
                                    <nav class="d-flex justify-content-center mb-0" aria-label="navigation">
                                        <ul class="pagination pagination-sm pagination-primary-soft my-0 py-0">
                                            <li class="page-item my-0"><a class="page-link" href="#" tabindex="-1"><i class="fas fa-angle-left"></i></a></li>
                                            <li class="page-item my-0"><a class="page-link" href="#">1</a></li>
                                            <li class="page-item my-0 active"><a class="page-link" href="#">2</a></li>
                                            <li class="page-item my-0"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item my-0"><a class="page-link" href="#"><i class="fas fa-angle-right"></i></a></li>
                                        </ul>
                                    </nav>
                                </div>
                                {/* <!-- Pagination END --> */}
                            </div>
                        </div>
                        {/* <!-- Student review END --> */}
                    </div>
                </div>
            </div>
        </section>
    </main>
    </BusinessView>
  )
}

export default SupportDetails

export async function getServerSideProps(context) {
    const { params, query } = context;
    
    const { slug } = params;
    console.log(slug);
   

    return {
        props: {
            slug,
        },
    };
}
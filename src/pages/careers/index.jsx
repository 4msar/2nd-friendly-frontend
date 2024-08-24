import CareersCard from '@/components/CareersCard/CareersCard';
import { jobList } from '@/components/dummy_data/data'
import PublicView from '@/components/HOC/PublicView';
import PublicService from '@/services/PublicService';
import React, { useEffect, useState } from 'react'

const Careers = () => {
    const job_list = jobList;
    const [careers, setCareers] = useState();

    const handleGetCareers = () => {
        const res = PublicService.allCareers().then((data) => {
            console.log(data);
            setCareers(data.data.allRecord)
            
        })
    }

    useEffect(() => {
        handleGetCareers();
    }, [])
  return (
    <main>
    <section class="py-4">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb breadcrumb-dots my-0 py-0">
                            <li class="breadcrumb-item"><a href="index.php">Home</a></li>
                            <li class="breadcrumb-item">Company</li>
                            <li class="breadcrumb-item">Careers</li>
                        </ol>
                    </nav>
                    <h4 class="fw-normal mt-3">Careers</h4>
                </div>
            </div>
        </div>
    </section>
    <section class="pt-0 pb-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="card pt-0 mb-4">
                        <h5 class="fs-14px mb-2">Filter by Department</h5>
                        <div class="form-check mb-1">
                            <input class="form-check-input" type="checkbox" value="" id="check1"/>
                            <label class="form-check-label fs-13px" for="check1">
                                Business Development
                            </label>
                        </div>
                        <div class="form-check mb-1">
                            <input class="form-check-input" type="checkbox" value="" id="check2"/>
                            <label class="form-check-label fs-13px" for="check2">
                                Cross Border eCommerce
                            </label>
                        </div>
                        <div class="form-check mb-1">
                            <input class="form-check-input" type="checkbox" value="" id="check3"/>
                            <label class="form-check-label fs-13px" for="check3">
                                Data
                            </label>
                        </div>
                        <div class="form-check mb-1">
                            <input class="form-check-input" type="checkbox" value="" id="check4"/>
                            <label class="form-check-label fs-13px" for="check4">
                                Design
                            </label>
                        </div>
                        <div class="form-check mb-1">
                            <input class="form-check-input" type="checkbox" value="" id="check5"/>
                            <label class="form-check-label fs-13px" for="check5">
                                Engineering and Technology
                            </label>
                        </div>
                        <div class="form-check mb-1">
                            <input class="form-check-input" type="checkbox" value="" id="check6"/>
                            <label class="form-check-label fs-13px" for="check6">
                                Global Leaders Program
                            </label>
                        </div>
                        <div class="form-check mb-1">
                            <input class="form-check-input" type="checkbox" value="" id="check7"/>
                            <label class="form-check-label fs-13px" for="check7">
                                Marketing
                            </label>
                        </div>
                        <div class="form-check mb-1">
                            <input class="form-check-input" type="checkbox" value="" id="check8"/>
                            <label class="form-check-label fs-13px" for="check8">
                                Operations
                            </label>
                        </div>
                        <div class="form-check mb-1">
                            <input class="form-check-input" type="checkbox" value="" id="check9"/>
                            <label class="form-check-label fs-13px" for="check9">
                                People, Legal and Finance
                            </label>
                        </div>
                        <div class="form-check mb-1">
                            <input class="form-check-input" type="checkbox" value="" id="check10"/>
                            <label class="form-check-label fs-13px" for="check10">
                                Product Management
                            </label>
                        </div>
                    </div>
                    <div class="card mb-4">
                        <h5 class="fs-14px mb-2">Filter by Level</h5>
                        <div class="form-check mb-1">
                            <input class="form-check-input" type="checkbox" value="" id="check11"/>
                            <label class="form-check-label fs-13px" for="check11">
                                Internship
                            </label>
                        </div>
                        <div class="form-check mb-1">
                            <input class="form-check-input" type="checkbox" value="" id="check12"/>
                            <label class="form-check-label fs-13px" for="check12">
                                Entry Level
                            </label>
                        </div>
                        <div class="form-check mb-1">
                            <input class="form-check-input" type="checkbox" value="" id="check13"/>
                            <label class="form-check-label fs-13px" for="check13">
                                Experienced
                            </label>
                        </div>
                        <div class="form-check mb-0">
                            <input class="form-check-input" type="checkbox" value="" id="check14"/>
                            <label class="form-check-label fs-13px" for="check14">
                                Manager
                            </label>
                        </div>
                    </div>
                    <div class="card">
                        <h5 class="fs-14px mb-2">Filter by Location</h5>
                        <div class="form-check mb-1">
                            <input class="form-check-input" type="checkbox" value="" id="check21"/>
                            <label class="form-check-label fs-13px" for="check21">
                                Brazil - São Paulo
                            </label>
                        </div>
                        <div class="form-check mb-1">
                            <input class="form-check-input" type="checkbox" value="" id="check22"/>
                            <label class="form-check-label fs-13px" for="check22">
                                China - Shanghai
                            </label>
                        </div>
                        <div class="form-check mb-1">
                            <input class="form-check-input" type="checkbox" value="" id="check23"/>
                            <label class="form-check-label fs-13px" for="check23">
                                China - Shenzhen
                            </label>
                        </div>
                        <div class="form-check mb-1">
                            <input class="form-check-input" type="checkbox" value="" id="check24"/>
                            <label class="form-check-label fs-13px" for="check24">
                                Indonesia - Jakarta
                            </label>
                        </div>
                        <div class="form-check mb-1">
                            <input class="form-check-input" type="checkbox" value="" id="check25"/>
                            <label class="form-check-label fs-13px" for="check25">
                                Indonesia - Yogyakarta
                            </label>
                        </div>
                        <div class="form-check mb-1">
                            <input class="form-check-input" type="checkbox" value="" id="check26"/>
                            <label class="form-check-label fs-13px" for="check26">
                                Malaysia - Kuala Lumpur
                            </label>
                        </div>
                        <div class="form-check mb-1">
                            <input class="form-check-input" type="checkbox" value="" id="check27"/>
                            <label class="form-check-label fs-13px" for="check27">
                                Philippines - Manila
                            </label>
                        </div>
                        <div class="form-check mb-1">
                            <input class="form-check-input" type="checkbox" value="" id="check28"/>
                            <label class="form-check-label fs-13px" for="check28">
                                South Korea - Seoul
                            </label>
                        </div>
                        <div class="form-check mb-1">
                            <input class="form-check-input" type="checkbox" value="" id="check29"/>
                            <label class="form-check-label fs-13px" for="check29">
                                Singapore
                            </label>
                        </div>
                        <div class="form-check mb-1">
                            <input class="form-check-input" type="checkbox" value="" id="check30"/>
                            <label class="form-check-label fs-13px" for="check30">
                                Taipei
                            </label>
                        </div>
                        <div class="form-check mb-1">
                            <input class="form-check-input" type="checkbox" value="" id="check31"/>
                            <label class="form-check-label fs-13px" for="check31">
                                Thailand - Bangkok
                            </label>
                        </div>
                        <div class="form-check mb-1">
                            <input class="form-check-input" type="checkbox" value="" id="check32"/>
                            <label class="form-check-label fs-13px" for="check32">
                                Japan - Tokyo
                            </label>
                        </div>
                        <div class="form-check mb-1">
                            <input class="form-check-input" type="checkbox" value="" id="check33"/>
                            <label class="form-check-label fs-13px" for="check33">
                                Vietnam - Hanoi
                            </label>
                        </div>
                        <div class="form-check mb-1">
                            <input class="form-check-input" type="checkbox" value="" id="check34"/>
                            <label class="form-check-label fs-13px" for="check34">
                                Vietnam - Ho Chi Minh City
                            </label>
                        </div>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="d-flex align-items-center fw-bold text-gray-600 mb-3">
                        <div>Viewing 1 - 25 of 1,320</div>
                        <div class="ms-auto d-flex align-items-center">
                            <span class="me-3">Results per page:</span>
                            <select class="form-select form-select-sm w-80px">
                                <option value="">25</option>
                            </select>
                        </div>
                    </div>
                  {careers?.length > 0 && careers?.map((job) => (
                    <CareersCard item={job} />
                  ))}

                    {/* <hr class="opacity-30"/> */}
                    {/* <nav>
                        <ul class="pagination d-flex">
                            <li class="page-item disabled me-auto"><a class="page-link fw-bold" href="#">Previous</a></li>
                            <li class="page-item active"><a class="page-link fw-bold" href="#">1</a></li>
                            <li class="page-item"><a class="page-link fw-bold" href="#">2</a></li>
                            <li class="page-item"><a class="page-link fw-bold" href="#">3</a></li>
                            <li class="page-item"><a class="page-link fw-bold" href="#">4</a></li>
                            <li class="page-item"><a class="page-link fw-bold" href="#">5</a></li>
                            <li class="page-item ms-auto"><a class="page-link fw-bold" href="#">Next</a></li>
                        </ul>
                    </nav> */}
                </div>
            </div>
        </div>
    </section>
</main>
  )
}

export default PublicView(Careers)
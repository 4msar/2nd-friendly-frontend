import { Box, Tab, Tabs } from '@mui/material'
import React from 'react'
import PersonPinIcon from '@mui/icons-material/PersonPin';

function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

const AboutTheBusiness = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
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
                    <h5 class="text-danger mb-2">About the Business</h5>
                    <div class="d-flex justify-content-left">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb breadcrumb-dots my-0 py-0">
                                <li class="breadcrumb-item"><a href="index.php">Home</a></li>
                                <li class="breadcrumb-item">Account Information</li>
                                <li class="breadcrumb-item">About the Business</li>
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
                <Box
                    sx={{ flexGrow: 1, display: 'flex', }}
                    >
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: 'divider', textAlign: 'left' }}
                    >
                        <Tab icon={<PersonPinIcon />} iconPosition="start" label="About the business" />
                        <Tab icon={<PersonPinIcon />} iconPosition="start" label="Notification" />
                        <Tab icon={<PersonPinIcon />} iconPosition="start" label="External Application" />
                        <Tab icon={<PersonPinIcon />} iconPosition="start" label="Security Settings" />
                        <Tab icon={<PersonPinIcon />} iconPosition="start" label="Privacy Settings" />
                        <Tab icon={<PersonPinIcon />} iconPosition="start" label="Activity Logs" />
                        <Tab icon={<PersonPinIcon />} iconPosition="start" label="Delete Account" />
                        
                    </Tabs>
                </Box>
                </div>
                <div class="col-xl-9">
                    <form class="row g-3 needs-validation" novalidate>
                        <div class="col-12 justify-content-center align-items-center">
                            <label class="form-label fw-normal text-dark">Business Logo</label>
                            <div class="d-flex align-items-center">
                                <label class="position-relative me-4" for="uploadfile-1" title="Replace this pic">
                                <span class="avatar avatar-xl">
                                <img id="uploadfile-1-preview" class="avatar-img rounded-circle border border-white border-3 shadow" src="../assets/img/company-logo/1.svg" alt=""/>
                                </span>
                                    <button type="button" class="uploadremove"><i class="bi bi-x text-white"></i></button>
                                </label>
                                <label class="btn btn-primary-soft mb-0" for="uploadfile-1">Change Logo</label>
                                <input id="uploadfile-1" class="form-control d-none" type="file"/>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12 bg-light-input">
                            <label class="form-label fw-normal text-black" for="company_name">Company name <span class="star">*</span></label>
                            <input class="form-control company_name" type="text" title="company_name" id="company_name" placeholder="e. g. Redwood Solutions Co." required/>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Please enter company name.
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12 bg-light-input">
                            <label class="form-label fw-normal text-dark" for="official_email">Official email <span class="star">*</span></label>
                            <input class="form-control official_email" type="email" title="official_email" id="official_email"  placeholder="e. g. johndoe@gmail.com" autofocus required/>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Please enter email address.
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12 bg-light-input">
                            <label class="form-label fw-normal text-dark" for="official_phone">Official phone <span class="star">*</span></label>
                            <input type="number" class="form-control official_phone" title="official_phone" id="official_phone" placeholder="e.g. (234)567-890" autofocus required/>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Please enter phone number.
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12 bg-light-input">
                            <label class="form-label fw-normal text-dark" for="address_line_1">Official address <span class="star">*</span></label>
                            <input class="form-control address_line_1" id="address_line_1" title="address_line_1" type="text" placeholder="e.g. 123 Main Street, apt 4B" autofocus required/>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Please enter office address 1 .
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-4 bg-light-input">
                            <label class="form-label fw-normal text-dark" for="city">City <span class="star">*</span></label>
                            <input class="form-control city" type="text" id="city" title="city" placeholder="e.g. Oxnard" autofocus required/>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Please enter city.
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-4 bg-light-input">
                            <label class="form-label fw-normal text-dark" for="state">State <span class="star">*</span></label>
                            <select class="form-select js-choice state" id="state" title="state" aria-label=".form-select-lg" autofocus required>
                                <option value="">Select State</option>
                                <option value="AK">Alaska</option>
                                <option value="HI">Hawaii</option>
                                <option value="CA">California</option>
                                <option value="NV">Nevada</option>
                                <option value="OR">Oregon</option>
                                <option value="WA">Washington</option>
                                <option value="AZ">Arizona</option>
                                <option value="CO">Colorado</option>
                                <option value="ID">Idaho</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NM">New Mexico</option>
                                <option value="ND">North Dakota</option>
                                <option value="UT">Utah</option>
                                <option value="WY">Wyoming</option>
                                <option value="AL">Alabama</option>
                                <option value="AR">Arkansas</option>
                                <option value="IL">Illinois</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="OK">Oklahoma</option>
                                <option value="SD">South Dakota</option>
                                <option value="TX">Texas</option>
                                <option value="TN">Tennessee</option>
                                <option value="WI">Wisconsin</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="IN">Indiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="OH">Ohio</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WV">West Virginia</option>
                            </select>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Please select state.
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-4 bg-light-input">
                            <label class="form-label fw-normal text-dark" for="zip">Zip <span class="star">*</span></label>
                            <input class="form-control zip" type="text" id="zip" title="zip" placeholder="e.g. 93030" autofocus required/>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Please enter zip code.
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-4 bg-light-input">
                            <label class="form-label fw-normal text-dark" for="website">Website <span class="star">*</span></label>
                            <input class="form-control website" type="url" id="website" title="website" placeholder="e. g. www.2ndafriendly.com" autofocus required/>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Please enter website.
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-4 bg-light-input">
                            <label class="form-label fw-normal text-dark" for="history">History <span class="star">*</span></label>
                            <textarea class="form-control website" rows="4" type="text" id="history" title="history" placeholder="Write the history of your business." autofocus required></textarea>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Please enter history.
                            </div>
                        </div>
                        <div class="header mb-2 border-bottom">
                            <h5 class="header-title text-danger mb-0 pb-1">Company Owner</h5>
                        </div>
                        <div class="col-md-6 col-sm-12 bg-light-input">
                            <label class="form-label fw-normal text-black" for="first_name">First name <span class="star">*</span></label>
                            <input class="form-control first_name" type="text" title="first_name" id="first_name" placeholder="e. g. John" required/>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Please enter first name.
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12 bg-light-input">
                            <label class="form-label fw-normal text-dark" for="last_name">Last name <span class="star">*</span></label>
                            <input class="form-control last_name" type="text" id="last_name" title="last_name" placeholder="Type your last here" required/>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Please enter last name.
                            </div>
                        </div>
                        <div class="d-sm-flex justify-content-end mb-3">
                            <button type="submit" class="btn btn-primary-soft mb-0">Save changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</main>
  )
}

export default AboutTheBusiness
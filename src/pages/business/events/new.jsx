import SidebarInformation from "@/components/Business/SidebarInformation";
import BusinessView from "@/components/HOC/BusinessView";
import { API_URL } from "@/helpers/apiUrl";
import { capitalize, formatDate, formatTime } from "@/helpers/functions";
import useToken from "@/hooks/useToken";
import BusinessService from "@/services/BusinessService";
import { useBusinessAboutStore, useEventStore } from "@/store";
import { Button } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";

const EventAdd = () => {
  const userProfile = useBusinessAboutStore((state) => state.businessProfile);
  const isAuthenticated = useToken();
  const allState = useBusinessAboutStore((state) => state.allState);
  const [loading, setLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState("");
  // const singleEvent = useEventStore((state) => state.singleEvent);
  // const setEventData = useEventStore(
  //   (state) => state.setSingleEvent
  // );

  const [event, setEvent] = useState({
    title: "",
    category: "",
    venue_name: "",
    ticket_price: 0,
    address: "",
    phone_no: "",
    state: "",
    city: "",
    website_link: "",
    details: "",
    start_date: "",
    start_time: "",
    end_date: "",
    end_time: "",
    image: "",
    old_image: "",
  });

  const router = useRouter();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        convertToPNG(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const convertToPNG = (dataUrl) => {
    const img = new Image();
    img.src = `${dataUrl}`;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      const pngDataUrl = canvas.toDataURL("image/png");
      setEvent({
        ...event,
        image: pngDataUrl,
      });
    };
  };

  const handleEventCreate = (e) => {
    setLoading(true);
    e.preventDefault();
    e.stopPropagation();

    const payload = {
      ...event,
      website: event.website_link,
      start_date: formatDate(event.start_date, "DD-MM-YYYY"),
      start_time: formatTime(event.start_time),
      end_date: formatDate(event.end_date, "DD-MM-YYYY"),
      end_time: formatTime(event.end_time)
    };
    console.log(payload);
    const res = BusinessService.eventNew(payload).then((data) => {
      if (data.data.status === "success") {
        setLoading(false);
        router.push('/business/events')
      } else {
        setFieldErrors(data.data.fieldErrors)
        setLoading(false);
      }
    });
    // setLoading(false);
  };

  // console.log(event);

  return (
    <BusinessView title="Event Create">
      <main>
      {loading && (
        <div className="preloader-api">
        <div className="preloader-item">
          <div className="spinner-grow text-primary"></div>
        </div>
      </div>
      )} 
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
                <h5 class="text-danger mb-2">Account Logs</h5>
                <div class="d-flex justify-content-left">
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb breadcrumb-dots my-0 py-0">
                      <li class="breadcrumb-item">
                        <a href="index.php">Home</a>
                      </li>
                      <li class="breadcrumb-item">ABC</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Page content START --> */}
        <section class="pt-5">
          <div class="container">
            <div class="row">
              <div class="col-xl-3">
                <SidebarInformation profile={userProfile} />
              </div>
              <div class="col-xl-9">
                <h5 class="card-header-title border-bottom mb-4 pb-1 text-danger">
                  Business Event Form
                </h5>
                <div class="body m-1">
                  {/* <!-- Search and select START --> */}
                  <div class="content">
                    <div class="row g-3 needs-validation mt-2">
                      <div class="col-md-6 col-sm-12 bg-light-input">
                        <label
                          class="form-label fw-normal text-black"
                          for="event_name"
                        >
                          Event Title <span class="star">*</span>
                        </label>
                        <input
                          class="form-control event_name"
                          id="event_name"
                          title="event_name"
                          type="text"
                          placeholder="Spring Fun Fest"
                          required
                          value={event.title}
                          onChange={(e) => {
                            setEvent({
                              ...event,
                              title: e.target.value,
                            });
                          }}
                          autoComplete="off"
                        />
                        <div class="valid-feedback">Looks good!</div>
                        {fieldErrors?.title && (
                          <div class="text-danger">
                          Please enter event name.
                        </div>
                        )}
                        
                      </div>
                      <div class="col-md-6 col-sm-12 bg-light-input">
                        <label
                          class="form-label fw-normal text-dark"
                          for="image"
                        >
                          Image <span class="star">*</span>
                        </label>
                        <input
                          class="form-control image"
                          type="file"
                          id="image"
                          title="image"
                          required
                          onChange={(e) => handleImageChange(e)}
                        />
                        <div class="valid-feedback">Looks good!</div>
                        {fieldErrors?.image && (
                          <div class="text-danger">
                          Please upload image.
                        </div>
                        )}
                        
                      </div>
                      
                      <div class="col-md-6 col-sm-12 bg-light-input">
                        <label
                          class="form-label fw-normal text-dark"
                          for="date_time"
                        >
                          From Date <span class="star">*</span>
                        </label>
                        <div className="row">
                          <div className="col-md-8 col-sm-12 bg-light-input">
                          <input
                          class="form-control date_time"
                          id="date_time"
                          title="date_time"
                          type="date"
                          placeholder=""
                          required
                          value={event.start_date}
                          onChange={(e) => {
                            setEvent({
                              ...event,
                              start_date: e.target.value,
                            });
                          }}
                        />
                          </div>
                          <div className="col-md-4 col-sm-12 bg-light-input">
                          <input
                          class="form-control date_time"
                          id="date_time"
                          title="date_time"
                          type="time"
                          placeholder=""
                          required
                          value={event.start_time}
                          onChange={(e) => {
                            setEvent({
                              ...event,
                              start_time: e.target.value,
                            });
                          }}
                        />
                          </div>
                        </div>
                       
                       
                        <div class="valid-feedback">Looks good!</div>
                        {fieldErrors?.start_date && fieldErrors?.start_time && (
                          <div class="text-danger">
                          Please enter date & time.
                        </div>
                        )}
                        
                      </div>
                      <div class="col-md-6 col-sm-12 bg-light-input">
                        <label
                          class="form-label fw-normal text-dark"
                          for="date_time"
                        >
                          End Date <span class="star">*</span>
                        </label>
                        <div className="row">
                          <div className="col-md-8 col-sm-12 bg-light-input">
                          <input
                          class="form-control date_time"
                          id="date_time"
                          title="date_time"
                          type="date"
                          required
                          value={event.end_date}
                          onChange={(e) => {
                            setEvent({
                              ...event,
                              end_date: e.target.value,
                            });
                          }}
                        />
                          </div>
                          <div className="col-md-4 col-sm-12 bg-light-input">
                          <input
                          class="form-control end_time"
                          id="end_time"
                          title="end_time"
                          type="time"
                          placeholder=""
                          required
                          value={event.end_time}
                          onChange={(e) => {
                            setEvent({
                              ...event,
                              end_time: e.target.value,
                            });
                          }}
                        />
                          </div>
                        </div>
                        
                        <div class="valid-feedback">Looks good!</div>
                        {fieldErrors?.end_date && fieldErrors?.end_time && (
                          <div class="text-danger">
                          Please enter date & time.
                        </div>
                        )}
                       
                      </div>
                      <div class="col-md-6 bg-light-input">
                        <label for="" class="form-label fw-bold text-dark">
                          Category <span class="star">*</span>
                        </label>
                        <select
                          class="form-select bg-light"
                          id=""
                          
                          required
                          value={event.category}
                          onChange={(e) => {
                            setEvent({
                              ...event,
                              category: e.target.value,
                            });
                          }}
                        >
                          <option value="">Please Select</option>
                          <option value="1">Food & Drink</option>
                          <option value="2">Restaurant</option>
                          <option value="3">Auto Service</option>
                        </select>
                        <div class="valid-feedback">Looks good!</div>
                        {fieldErrors?.category && (
                          <div class="text-danger">
                          Please select a category.
                        </div>
                        )}
                        
                      </div>
                      <div class="col-md-6 col-sm-12 bg-light-input">
                        <label
                          class="form-label fw-normal text-dark"
                          for="location"
                        >
                          Venue Name <span class="star">*</span>
                        </label>
                        <input
                          class="form-control location"
                          id="location"
                          title="location"
                          type="text"
                          placeholder="Inter continent Park "
                          
                          required
                          value={event.venue_name}
                          onChange={(e) => {
                            setEvent({
                              ...event,
                              venue_name: e.target.value,
                            });
                          }}
                          autoComplete="off"
                        />
                        <div class="valid-feedback">Looks good!</div>
                        {fieldErrors?.venue_name && (
                          <div class="text-danger">
                          Please enter venue name.
                        </div>
                        )}
                        
                      </div>
                      <div class="col-md-6 col-sm-12 bg-light-input">
                        <label
                          class="form-label fw-normal text-dark"
                          for="location"
                        >
                          Ticket Price <span class="star">*</span>
                        </label>
                        <input
                          class="form-control location"
                          id="location"
                          title="location"
                          type="text"
                          placeholder="0.00"
                          
                          required
                          value={event.ticket_price}
                          onChange={(e) => {
                            setEvent({
                              ...event,
                              ticket_price: e.target.value,
                            });
                          }}
                          autoComplete="off"
                        />
                        <div class="valid-feedback">Looks good!</div>
                        {fieldErrors?.ticket_price && (
                          <div class="text-danger">
                          Please enter ticket price.
                        </div>
                        )}
                        
                      </div>

                      <div class="col-md-6 col-sm-12 bg-light-input">
                        <label
                          class="form-label fw-normal text-dark"
                          for="location"
                        >
                          Address <span class="star">*</span>
                        </label>
                        <input
                          class="form-control location"
                          id="location"
                          title="location"
                          type="text"
                          placeholder="W 13th St, New York"
                          
                          required
                          value={event.address}
                          onChange={(e) => {
                            setEvent({
                              ...event,
                              address: e.target.value,
                            });
                          }}
                          autoComplete="off"
                        />
                        <div class="valid-feedback">Looks good!</div>
                        {fieldErrors?.address && (
                          <div class="text-danger">
                          Please enter address
                        </div>
                        )}
                       
                      </div>
                      <div class="col-md-6 col-sm-12 bg-light-input">
                        <label
                          class="form-label fw-normal text-dark"
                          for="location"
                        >
                          Phone <span class="star">*</span>
                        </label>
                        <input
                          class="form-control location"
                          id="location"
                          title="location"
                          type="text"
                          placeholder="01234567890"
                          
                          required
                          value={event.phone_no}
                          onChange={(e) => {
                            setEvent({
                              ...event,
                              phone_no: e.target.value,
                            });
                          }}
                          autoComplete="off"
                        />
                        <div class="valid-feedback">Looks good!</div>
                        {fieldErrors?.phone_no && (
                          <div class="text-danger">
                          Please enter phone.
                        </div>
                        )}
                      </div>
                      <div class="col-md-6 col-sm-12 bg-light-input">
                        <label
                          class="form-label fw-normal text-dark"
                          for="location"
                        >
                          City <span class="star">*</span>
                        </label>
                        <input
                          class="form-control location"
                          id="location"
                          title="location"
                          type="text"
                          placeholder="Oxnard"
                          
                          required
                          value={event.city}
                          onChange={(e) => {
                            setEvent({
                              ...event,
                              city: e.target.value,
                            });
                          }}
                          autoComplete="off"
                        />
                        <div class="valid-feedback">Looks good!</div>
                        {fieldErrors?.city && (
                          <div class="text-danger">
                          Please enter city.
                        </div>
                        )}
                        
                      </div>
                      <div class="col-md-6 col-sm-12 bg-light-input">
                        <label
                          class="form-label fw-normal text-dark"
                          for="location"
                        >
                          State <span class="star">*</span>
                        </label>
                        <select
                          class="form-select form-control"
                          id=""
                          required
                          value={event.state}
                          onChange={(e) => {
                            setEvent({
                              ...event,
                              state: e.target.value,
                            });
                            setFieldErrors({
                              ...fieldErrors,
                              
                            })
                          }}
                        >
                          <option value="">Select State</option>
                          {allState.length > 0 &&
                            allState.map((state) => (
                              <option value={state.id}>{capitalize(state.name)}</option>
                            ))}
                        </select>
                        {fieldErrors?.state && (
                          <div class="text-danger">
                          Please enter state.
                        </div>
                        )}
                      </div>
                      <div class="col-md-6 col-sm-12 bg-light-input">
                        <label
                          class="form-label fw-normal text-dark"
                          for="location"
                        >
                          Website <span class="star">*</span>
                        </label>
                        <input
                          class="form-control location"
                          id="location"
                          title="location"
                          type="text"
                          placeholder="www.example.com"
                          
                          required
                          value={event.website}
                          onChange={(e) => {
                            setEvent({
                              ...event,
                              website_link: e.target.value,
                            });
                          }}
                          autoComplete="off"
                        />
                        <div class="valid-feedback">Looks good!</div>
                        {fieldErrors?.city && (
                          <div class="text-danger">
                          Please enter website.
                        </div>
                        )}
                      </div>

                      <div class="col-md-12 col-sm-12 bg-light-input">
                        <label
                          class="form-label fw-normal text-dark"
                          for="event_detail"
                        >
                          Event Detail <span class="star">*</span>
                        </label>
                        <textarea
                          class="form-control event_detail"
                          rows="10"
                          type="text"
                          id="event_detail"
                          title="event_detail"
                          placeholder="Write about event details here..."
                          required
                          value={event.details}
                          onChange={(e) => {
                            setEvent({
                              ...event,
                              details: e.target.value,
                            });
                          }}
                        ></textarea>
                        <div class="valid-feedback">Looks good!</div>
                        {fieldErrors?.details && (
                          <div class="text-danger">
                          Please enter event details.
                        </div>
                        )}
                      </div>
                      <div class="d-sm-flex justify-content-end mb-3">
                        <Button
                          onClick={(e) => handleEventCreate(e)}
                          class="btn btn-dark mb-0"
                        >
                          Add Event
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Page content END --> */}
      </main>
    </BusinessView>
  );
};

export default EventAdd;

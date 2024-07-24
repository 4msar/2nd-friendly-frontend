import SidebarInformation from "@/components/Business/SidebarInformation";
import BusinessView from "@/components/HOC/BusinessView";
import useToken from "@/hooks/useToken";
import BusinessService from "@/services/BusinessService";
import { useBusinessAboutStore, useBusinessHoursStore } from "@/store";
import { useEffect } from "react";

const HoursOfOperation = () => {
  const userProfile = useBusinessAboutStore((state) => state.businessProfile);
  const isAuthenticated = useToken();

  const businessHours = useBusinessHoursStore(
    (state) => state.businessOperation
  );
  const businessClosure = useBusinessHoursStore(
    (state) => state.extendedClosure
  );
  const setBusinessHours = useBusinessHoursStore(
    (state) => state.setBusinessHours
  );

  const setBusinessClosure = useBusinessHoursStore(
    (state) => state.setBusinessClosure
  );

  const getHoursOfOperation = async () => {
    const res = await BusinessService.operationHours().then((data) => {
      console.log(data.data);
      if (data.data.status === "success") {
        //   setAllAmenityData(data.data.allAmenity);
        //   setAllSubAmenityData(data.data.selectedAmenity);
        // setAllSubCategoryData(data.date)
      }
    });
  };

  const updateBusinessHours = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const res = await BusinessService.operationHoursSave(businessHours).then(
      (data) => {
        if (data.data.status === "success") {
          getHoursOfOperation();
        }
      }
    );
  };

  const updateBusinessClosure = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const res = await BusinessService.operationClosureSave(businessClosure).then(
      (data) => {
        if (data.data.status === "success") {
          getHoursOfOperation();
        }
      }
    );
  };

  useEffect(() => {
    if (isAuthenticated) {
      // getHoursOfOperation();
    }
  }, [isAuthenticated]);
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
              <h5 className="text-danger mb-2">Categories & Services</h5>
              <div className="d-flex justify-content-left">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-dots my-0 py-0">
                    <li className="breadcrumb-item">
                      <a href="index.php">Home</a>
                    </li>
                    <li className="breadcrumb-item">Business Information</li>
                    <li className="breadcrumb-item">Amenities</li>
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
              <SidebarInformation profile={userProfile} />
            </div>
            <div className="col-xl-9 col-md-9">
              <div class="card-header border-bottom pb-1 mb-3">
                <h5 class="card-header-title text-dark">Hours of Operation</h5>
                <div class="opacity-80">
                  Choose type of hour you want to open your business
                </div>
              </div>
              <div class="panel-body g-0 ">
                <form class="row g-3 needs-validation mt-3" novalidate>
                  <div class="row p-2">
                    <div class="col-lg-2 col-sm-6">Sunday</div>
                    <div class="col-2">
                      <select
                        class="form-select"
                        id=""
                        autofocus
                        required
                        onChange={(e) =>
                          setBusinessHours({
                            ...businessHours,
                            sunday_start_time: e.target.value
                          })
                        }
                      >
                        <option value="">Opens at</option>
                        <option value="1">12:00 AM</option>
                        <option value="2">12:15 AM</option>
                        <option value="3">12:30 AM</option>
                        <option value="4">12:45 AM</option>
                        <option value="5">01:00 AM</option>
                        <option value="6">01:15 AM</option>
                        <option value="7">01:30 AM</option>
                        <option value="8">01:45 AM</option>
                        <option value="9">02:00 AM</option>
                        <option value="10">02:15 AM</option>
                        <option value="11">02:30 AM</option>
                        <option value="12">02:45 AM</option>
                        <option value="13">03:00 AM</option>
                        <option value="14">03:15 AM</option>
                        <option value="15">03:30 AM</option>
                        <option value="16">03:45 AM</option>
                        <option value="17">04:00 AM</option>
                        <option value="18">04:15 AM</option>
                        <option value="19">04:30 AM</option>
                        <option value="20">04:45 AM</option>
                        <option value="21">05:00 AM</option>
                        <option value="22">05:15 AM</option>
                        <option value="23">05:30 AM</option>
                        <option value="24">05:45 AM</option>
                        <option value="25">06:00 AM</option>
                        <option value="26">06:15 AM</option>
                        <option value="27">06:30 AM</option>
                        <option value="28">06:45 AM</option>
                        <option value="29">07:00 AM</option>
                        <option value="30">07:15 AM</option>
                        <option value="31">07:30 AM</option>
                        <option value="32">07:45 AM</option>
                        <option value="33">08:00 AM</option>
                        <option value="34">08:15 AM</option>
                        <option value="35">08:30 AM</option>
                        <option value="36">08:45 AM</option>
                        <option value="37">09:00 AM</option>
                        <option value="38">09:15 AM</option>
                        <option value="39">09:30 AM</option>
                        <option value="40">09:45 AM</option>
                        <option value="41">10:00 AM</option>
                        <option value="42">10:15 AM</option>
                        <option value="43">10:30 AM</option>
                        <option value="44">10:45 AM</option>
                        <option value="45">11:00 AM</option>
                        <option value="46">11:15 AM</option>
                        <option value="47">11:30 AM</option>
                        <option value="48">11:45 AM</option>
                        <option value="49">12:00 PM</option>
                        <option value="50">12:15 PM</option>
                        <option value="51">12:30 PM</option>
                        <option value="52">12:45 PM</option>
                        <option value="53">01:00 PM</option>
                        <option value="54">01:15 PM</option>
                        <option value="55">01:30 PM</option>
                        <option value="56">01:45 PM</option>
                        <option value="57">02:00 PM</option>
                        <option value="58">02:15 PM</option>
                        <option value="59">02:30 PM</option>
                        <option value="60">02:45 PM</option>
                        <option value="61">03:00 PM</option>
                        <option value="62">03:15 PM</option>
                        <option value="63">03:30 PM</option>
                        <option value="64">03:45 PM</option>
                        <option value="65">04:00 PM</option>
                        <option value="66">04:15 PM</option>
                        <option value="67">04:30 PM</option>
                        <option value="68">04:45 PM</option>
                        <option value="69">05:00 PM</option>
                        <option value="70">05:15 PM</option>
                        <option value="71">05:30 PM</option>
                        <option value="72">05:45 PM</option>
                        <option value="73">06:00 PM</option>
                        <option value="74">06:15 PM</option>
                        <option value="75">06:30 PM</option>
                        <option value="76">06:45 PM</option>
                        <option value="77">07:00 PM</option>
                        <option value="78">07:15 PM</option>
                        <option value="79">07:30 PM</option>
                        <option value="80">07:45 PM</option>
                        <option value="81">08:00 PM</option>
                        <option value="82">08:15 PM</option>
                        <option value="83">08:30 PM</option>
                        <option value="84">08:45 PM</option>
                        <option value="85">09:00 PM</option>
                        <option value="86">09:15 PM</option>
                        <option value="87">09:30 PM</option>
                        <option value="88">09:45 PM</option>
                        <option value="89">10:00 PM</option>
                        <option value="90">10:15 PM</option>
                        <option value="91">10:30 PM</option>
                        <option value="92">10:45 PM</option>
                        <option value="93">11:00 PM</option>
                        <option value="94">11:15 PM</option>
                        <option value="95">11:30 PM</option>
                        <option value="96">11:45 PM</option>
                      </select>
                    </div>
                    <div class="col-lg-2 col-sm-6">
                      <select
                        class="form-select"
                        id=""
                        autofocus
                        required
                        onChange={(e) =>
                          setBusinessHours({
                            ...businessHours,
                            sunday_end_time: e.target.value
                          })
                        }
                      >
                        <option value="">Closes at</option>
                        <option value="1">12:00 AM</option>
                        <option value="2">12:15 AM</option>
                        <option value="3">12:30 AM</option>
                        <option value="4">12:45 AM</option>
                        <option value="5">01:00 AM</option>
                        <option value="6">01:15 AM</option>
                        <option value="7">01:30 AM</option>
                        <option value="8">01:45 AM</option>
                        <option value="9">02:00 AM</option>
                        <option value="10">02:15 AM</option>
                        <option value="11">02:30 AM</option>
                        <option value="12">02:45 AM</option>
                        <option value="13">03:00 AM</option>
                        <option value="14">03:15 AM</option>
                        <option value="15">03:30 AM</option>
                        <option value="16">03:45 AM</option>
                        <option value="17">04:00 AM</option>
                        <option value="18">04:15 AM</option>
                        <option value="19">04:30 AM</option>
                        <option value="20">04:45 AM</option>
                        <option value="21">05:00 AM</option>
                        <option value="22">05:15 AM</option>
                        <option value="23">05:30 AM</option>
                        <option value="24">05:45 AM</option>
                        <option value="25">06:00 AM</option>
                        <option value="26">06:15 AM</option>
                        <option value="27">06:30 AM</option>
                        <option value="28">06:45 AM</option>
                        <option value="29">07:00 AM</option>
                        <option value="30">07:15 AM</option>
                        <option value="31">07:30 AM</option>
                        <option value="32">07:45 AM</option>
                        <option value="33">08:00 AM</option>
                        <option value="34">08:15 AM</option>
                        <option value="35">08:30 AM</option>
                        <option value="36">08:45 AM</option>
                        <option value="37">09:00 AM</option>
                        <option value="38">09:15 AM</option>
                        <option value="39">09:30 AM</option>
                        <option value="40">09:45 AM</option>
                        <option value="41">10:00 AM</option>
                        <option value="42">10:15 AM</option>
                        <option value="43">10:30 AM</option>
                        <option value="44">10:45 AM</option>
                        <option value="45">11:00 AM</option>
                        <option value="46">11:15 AM</option>
                        <option value="47">11:30 AM</option>
                        <option value="48">11:45 AM</option>
                        <option value="49">12:00 PM</option>
                        <option value="50">12:15 PM</option>
                        <option value="51">12:30 PM</option>
                        <option value="52">12:45 PM</option>
                        <option value="53">01:00 PM</option>
                        <option value="54">01:15 PM</option>
                        <option value="55">01:30 PM</option>
                        <option value="56">01:45 PM</option>
                        <option value="57">02:00 PM</option>
                        <option value="58">02:15 PM</option>
                        <option value="59">02:30 PM</option>
                        <option value="60">02:45 PM</option>
                        <option value="61">03:00 PM</option>
                        <option value="62">03:15 PM</option>
                        <option value="63">03:30 PM</option>
                        <option value="64">03:45 PM</option>
                        <option value="65">04:00 PM</option>
                        <option value="66">04:15 PM</option>
                        <option value="67">04:30 PM</option>
                        <option value="68">04:45 PM</option>
                        <option value="69">05:00 PM</option>
                        <option value="70">05:15 PM</option>
                        <option value="71">05:30 PM</option>
                        <option value="72">05:45 PM</option>
                        <option value="73">06:00 PM</option>
                        <option value="74">06:15 PM</option>
                        <option value="75">06:30 PM</option>
                        <option value="76">06:45 PM</option>
                        <option value="77">07:00 PM</option>
                        <option value="78">07:15 PM</option>
                        <option value="79">07:30 PM</option>
                        <option value="80">07:45 PM</option>
                        <option value="81">08:00 PM</option>
                        <option value="82">08:15 PM</option>
                        <option value="83">08:30 PM</option>
                        <option value="84">08:45 PM</option>
                        <option value="85">09:00 PM</option>
                        <option value="86">09:15 PM</option>
                        <option value="87">09:30 PM</option>
                        <option value="88">09:45 PM</option>
                        <option value="89">10:00 PM</option>
                        <option value="90">10:15 PM</option>
                        <option value="91">10:30 PM</option>
                        <option value="92">10:45 PM</option>
                        <option value="93">11:00 PM</option>
                        <option value="94">11:15 PM</option>
                        <option value="95">11:30 PM</option>
                        <option value="96">11:45 PM</option>
                      </select>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                      <div class="form-check form-check-inline text-middle">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="inlineRadio1"
                          name="inlineRadio1"
                          autofocus
                          required
                          onChange={(e) =>
                            setBusinessHours({
                              ...businessHours,
                              is_sunday_24open: e.target.value
                            })
                          }
                        />
                        <label class="form-check-label" for="inlineRadio1">
                          Open 24 Hours
                        </label>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="inlineRadio2"
                          name="inlineRadio2"
                          autofocus
                          required
                          onChange={(e) =>
                            setBusinessHours({
                              ...businessHours,
                              is_sunday_close: e.target.value
                            })
                          }
                        />
                        <label class="form-check-label" for="inlineRadio2">
                          Close
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="row p-2">
                    <div class="col-lg-2 col-sm-6">Monday</div>
                    <div class="col-2">
                      <select
                        class="form-select"
                        id=""
                        autofocus
                        required
                        onChange={(e) =>
                          setBusinessHours({
                            ...businessHours,
                            monday_start_time: e.target.value
                          })
                        }
                      >
                        <option value="">Opens at</option>
                        <option value="1">12:00 AM</option>
                        <option value="2">12:15 AM</option>
                        <option value="3">12:30 AM</option>
                        <option value="4">12:45 AM</option>
                        <option value="5">01:00 AM</option>
                        <option value="6">01:15 AM</option>
                        <option value="7">01:30 AM</option>
                        <option value="8">01:45 AM</option>
                        <option value="9">02:00 AM</option>
                        <option value="10">02:15 AM</option>
                        <option value="11">02:30 AM</option>
                        <option value="12">02:45 AM</option>
                        <option value="13">03:00 AM</option>
                        <option value="14">03:15 AM</option>
                        <option value="15">03:30 AM</option>
                        <option value="16">03:45 AM</option>
                        <option value="17">04:00 AM</option>
                        <option value="18">04:15 AM</option>
                        <option value="19">04:30 AM</option>
                        <option value="20">04:45 AM</option>
                        <option value="21">05:00 AM</option>
                        <option value="22">05:15 AM</option>
                        <option value="23">05:30 AM</option>
                        <option value="24">05:45 AM</option>
                        <option value="25">06:00 AM</option>
                        <option value="26">06:15 AM</option>
                        <option value="27">06:30 AM</option>
                        <option value="28">06:45 AM</option>
                        <option value="29">07:00 AM</option>
                        <option value="30">07:15 AM</option>
                        <option value="31">07:30 AM</option>
                        <option value="32">07:45 AM</option>
                        <option value="33">08:00 AM</option>
                        <option value="34">08:15 AM</option>
                        <option value="35">08:30 AM</option>
                        <option value="36">08:45 AM</option>
                        <option value="37">09:00 AM</option>
                        <option value="38">09:15 AM</option>
                        <option value="39">09:30 AM</option>
                        <option value="40">09:45 AM</option>
                        <option value="41">10:00 AM</option>
                        <option value="42">10:15 AM</option>
                        <option value="43">10:30 AM</option>
                        <option value="44">10:45 AM</option>
                        <option value="45">11:00 AM</option>
                        <option value="46">11:15 AM</option>
                        <option value="47">11:30 AM</option>
                        <option value="48">11:45 AM</option>
                        <option value="49">12:00 PM</option>
                        <option value="50">12:15 PM</option>
                        <option value="51">12:30 PM</option>
                        <option value="52">12:45 PM</option>
                        <option value="53">01:00 PM</option>
                        <option value="54">01:15 PM</option>
                        <option value="55">01:30 PM</option>
                        <option value="56">01:45 PM</option>
                        <option value="57">02:00 PM</option>
                        <option value="58">02:15 PM</option>
                        <option value="59">02:30 PM</option>
                        <option value="60">02:45 PM</option>
                        <option value="61">03:00 PM</option>
                        <option value="62">03:15 PM</option>
                        <option value="63">03:30 PM</option>
                        <option value="64">03:45 PM</option>
                        <option value="65">04:00 PM</option>
                        <option value="66">04:15 PM</option>
                        <option value="67">04:30 PM</option>
                        <option value="68">04:45 PM</option>
                        <option value="69">05:00 PM</option>
                        <option value="70">05:15 PM</option>
                        <option value="71">05:30 PM</option>
                        <option value="72">05:45 PM</option>
                        <option value="73">06:00 PM</option>
                        <option value="74">06:15 PM</option>
                        <option value="75">06:30 PM</option>
                        <option value="76">06:45 PM</option>
                        <option value="77">07:00 PM</option>
                        <option value="78">07:15 PM</option>
                        <option value="79">07:30 PM</option>
                        <option value="80">07:45 PM</option>
                        <option value="81">08:00 PM</option>
                        <option value="82">08:15 PM</option>
                        <option value="83">08:30 PM</option>
                        <option value="84">08:45 PM</option>
                        <option value="85">09:00 PM</option>
                        <option value="86">09:15 PM</option>
                        <option value="87">09:30 PM</option>
                        <option value="88">09:45 PM</option>
                        <option value="89">10:00 PM</option>
                        <option value="90">10:15 PM</option>
                        <option value="91">10:30 PM</option>
                        <option value="92">10:45 PM</option>
                        <option value="93">11:00 PM</option>
                        <option value="94">11:15 PM</option>
                        <option value="95">11:30 PM</option>
                        <option value="96">11:45 PM</option>
                      </select>
                    </div>
                    <div class="col-lg-2 col-sm-6">
                      <select
                        class="form-select"
                        id=""
                        autofocus
                        required
                        onChange={(e) =>
                          setBusinessHours({
                            ...businessHours,
                            monday_end_time: e.target.value
                          })
                        }
                      >
                        <option value="">Closes at</option>
                        <option value="1">12:00 AM</option>
                        <option value="2">12:15 AM</option>
                        <option value="3">12:30 AM</option>
                        <option value="4">12:45 AM</option>
                        <option value="5">01:00 AM</option>
                        <option value="6">01:15 AM</option>
                        <option value="7">01:30 AM</option>
                        <option value="8">01:45 AM</option>
                        <option value="9">02:00 AM</option>
                        <option value="10">02:15 AM</option>
                        <option value="11">02:30 AM</option>
                        <option value="12">02:45 AM</option>
                        <option value="13">03:00 AM</option>
                        <option value="14">03:15 AM</option>
                        <option value="15">03:30 AM</option>
                        <option value="16">03:45 AM</option>
                        <option value="17">04:00 AM</option>
                        <option value="18">04:15 AM</option>
                        <option value="19">04:30 AM</option>
                        <option value="20">04:45 AM</option>
                        <option value="21">05:00 AM</option>
                        <option value="22">05:15 AM</option>
                        <option value="23">05:30 AM</option>
                        <option value="24">05:45 AM</option>
                        <option value="25">06:00 AM</option>
                        <option value="26">06:15 AM</option>
                        <option value="27">06:30 AM</option>
                        <option value="28">06:45 AM</option>
                        <option value="29">07:00 AM</option>
                        <option value="30">07:15 AM</option>
                        <option value="31">07:30 AM</option>
                        <option value="32">07:45 AM</option>
                        <option value="33">08:00 AM</option>
                        <option value="34">08:15 AM</option>
                        <option value="35">08:30 AM</option>
                        <option value="36">08:45 AM</option>
                        <option value="37">09:00 AM</option>
                        <option value="38">09:15 AM</option>
                        <option value="39">09:30 AM</option>
                        <option value="40">09:45 AM</option>
                        <option value="41">10:00 AM</option>
                        <option value="42">10:15 AM</option>
                        <option value="43">10:30 AM</option>
                        <option value="44">10:45 AM</option>
                        <option value="45">11:00 AM</option>
                        <option value="46">11:15 AM</option>
                        <option value="47">11:30 AM</option>
                        <option value="48">11:45 AM</option>
                        <option value="49">12:00 PM</option>
                        <option value="50">12:15 PM</option>
                        <option value="51">12:30 PM</option>
                        <option value="52">12:45 PM</option>
                        <option value="53">01:00 PM</option>
                        <option value="54">01:15 PM</option>
                        <option value="55">01:30 PM</option>
                        <option value="56">01:45 PM</option>
                        <option value="57">02:00 PM</option>
                        <option value="58">02:15 PM</option>
                        <option value="59">02:30 PM</option>
                        <option value="60">02:45 PM</option>
                        <option value="61">03:00 PM</option>
                        <option value="62">03:15 PM</option>
                        <option value="63">03:30 PM</option>
                        <option value="64">03:45 PM</option>
                        <option value="65">04:00 PM</option>
                        <option value="66">04:15 PM</option>
                        <option value="67">04:30 PM</option>
                        <option value="68">04:45 PM</option>
                        <option value="69">05:00 PM</option>
                        <option value="70">05:15 PM</option>
                        <option value="71">05:30 PM</option>
                        <option value="72">05:45 PM</option>
                        <option value="73">06:00 PM</option>
                        <option value="74">06:15 PM</option>
                        <option value="75">06:30 PM</option>
                        <option value="76">06:45 PM</option>
                        <option value="77">07:00 PM</option>
                        <option value="78">07:15 PM</option>
                        <option value="79">07:30 PM</option>
                        <option value="80">07:45 PM</option>
                        <option value="81">08:00 PM</option>
                        <option value="82">08:15 PM</option>
                        <option value="83">08:30 PM</option>
                        <option value="84">08:45 PM</option>
                        <option value="85">09:00 PM</option>
                        <option value="86">09:15 PM</option>
                        <option value="87">09:30 PM</option>
                        <option value="88">09:45 PM</option>
                        <option value="89">10:00 PM</option>
                        <option value="90">10:15 PM</option>
                        <option value="91">10:30 PM</option>
                        <option value="92">10:45 PM</option>
                        <option value="93">11:00 PM</option>
                        <option value="94">11:15 PM</option>
                        <option value="95">11:30 PM</option>
                        <option value="96">11:45 PM</option>
                      </select>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                      <div class="form-check form-check-inline text-middle">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="inlineRadio3"
                          name="inlineRadio3"
                          autofocus
                          required
                          onChange={(e) =>
                            setBusinessHours({
                              ...businessHours,
                              is_monday_24open: e.target.value
                            })
                          }
                        />
                        <label class="form-check-label" for="inlineRadio3">
                          Open 24 Hours
                        </label>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="inlineRadio4"
                          name="inlineRadio4"
                          autofocus
                          required
                          onChange={(e) =>
                            setBusinessHours({
                              ...businessHours,
                              is_monday_close: e.target.value
                            })
                          }
                        />
                        <label class="form-check-label" for="inlineRadio4">
                          Close
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="row p-2">
                    <div class="col-lg-2 col-sm-6">Tuesday</div>
                    <div class="col-2">
                      <select
                        class="form-select"
                        id=""
                        autofocus
                        required
                        onChange={(e) =>
                          setBusinessHours({
                            ...businessHours,
                            tuesday_start_time: e.target.value
                          })
                        }
                      >
                        <option value="">Opens at</option>
                        <option value="1">12:00 AM</option>
                        <option value="2">12:15 AM</option>
                        <option value="3">12:30 AM</option>
                        <option value="4">12:45 AM</option>
                        <option value="5">01:00 AM</option>
                        <option value="6">01:15 AM</option>
                        <option value="7">01:30 AM</option>
                        <option value="8">01:45 AM</option>
                        <option value="9">02:00 AM</option>
                        <option value="10">02:15 AM</option>
                        <option value="11">02:30 AM</option>
                        <option value="12">02:45 AM</option>
                        <option value="13">03:00 AM</option>
                        <option value="14">03:15 AM</option>
                        <option value="15">03:30 AM</option>
                        <option value="16">03:45 AM</option>
                        <option value="17">04:00 AM</option>
                        <option value="18">04:15 AM</option>
                        <option value="19">04:30 AM</option>
                        <option value="20">04:45 AM</option>
                        <option value="21">05:00 AM</option>
                        <option value="22">05:15 AM</option>
                        <option value="23">05:30 AM</option>
                        <option value="24">05:45 AM</option>
                        <option value="25">06:00 AM</option>
                        <option value="26">06:15 AM</option>
                        <option value="27">06:30 AM</option>
                        <option value="28">06:45 AM</option>
                        <option value="29">07:00 AM</option>
                        <option value="30">07:15 AM</option>
                        <option value="31">07:30 AM</option>
                        <option value="32">07:45 AM</option>
                        <option value="33">08:00 AM</option>
                        <option value="34">08:15 AM</option>
                        <option value="35">08:30 AM</option>
                        <option value="36">08:45 AM</option>
                        <option value="37">09:00 AM</option>
                        <option value="38">09:15 AM</option>
                        <option value="39">09:30 AM</option>
                        <option value="40">09:45 AM</option>
                        <option value="41">10:00 AM</option>
                        <option value="42">10:15 AM</option>
                        <option value="43">10:30 AM</option>
                        <option value="44">10:45 AM</option>
                        <option value="45">11:00 AM</option>
                        <option value="46">11:15 AM</option>
                        <option value="47">11:30 AM</option>
                        <option value="48">11:45 AM</option>
                        <option value="49">12:00 PM</option>
                        <option value="50">12:15 PM</option>
                        <option value="51">12:30 PM</option>
                        <option value="52">12:45 PM</option>
                        <option value="53">01:00 PM</option>
                        <option value="54">01:15 PM</option>
                        <option value="55">01:30 PM</option>
                        <option value="56">01:45 PM</option>
                        <option value="57">02:00 PM</option>
                        <option value="58">02:15 PM</option>
                        <option value="59">02:30 PM</option>
                        <option value="60">02:45 PM</option>
                        <option value="61">03:00 PM</option>
                        <option value="62">03:15 PM</option>
                        <option value="63">03:30 PM</option>
                        <option value="64">03:45 PM</option>
                        <option value="65">04:00 PM</option>
                        <option value="66">04:15 PM</option>
                        <option value="67">04:30 PM</option>
                        <option value="68">04:45 PM</option>
                        <option value="69">05:00 PM</option>
                        <option value="70">05:15 PM</option>
                        <option value="71">05:30 PM</option>
                        <option value="72">05:45 PM</option>
                        <option value="73">06:00 PM</option>
                        <option value="74">06:15 PM</option>
                        <option value="75">06:30 PM</option>
                        <option value="76">06:45 PM</option>
                        <option value="77">07:00 PM</option>
                        <option value="78">07:15 PM</option>
                        <option value="79">07:30 PM</option>
                        <option value="80">07:45 PM</option>
                        <option value="81">08:00 PM</option>
                        <option value="82">08:15 PM</option>
                        <option value="83">08:30 PM</option>
                        <option value="84">08:45 PM</option>
                        <option value="85">09:00 PM</option>
                        <option value="86">09:15 PM</option>
                        <option value="87">09:30 PM</option>
                        <option value="88">09:45 PM</option>
                        <option value="89">10:00 PM</option>
                        <option value="90">10:15 PM</option>
                        <option value="91">10:30 PM</option>
                        <option value="92">10:45 PM</option>
                        <option value="93">11:00 PM</option>
                        <option value="94">11:15 PM</option>
                        <option value="95">11:30 PM</option>
                        <option value="96">11:45 PM</option>
                      </select>
                    </div>
                    <div class="col-lg-2 col-sm-6">
                      <select
                        class="form-select"
                        id=""
                        autofocus
                        required
                        onChange={(e) =>
                          setBusinessHours({
                            ...businessHours,
                            tuesday_end_time: e.target.value
                          })
                        }
                      >
                        <option value="">Closes at</option>
                        <option value="1">12:00 AM</option>
                        <option value="2">12:15 AM</option>
                        <option value="3">12:30 AM</option>
                        <option value="4">12:45 AM</option>
                        <option value="5">01:00 AM</option>
                        <option value="6">01:15 AM</option>
                        <option value="7">01:30 AM</option>
                        <option value="8">01:45 AM</option>
                        <option value="9">02:00 AM</option>
                        <option value="10">02:15 AM</option>
                        <option value="11">02:30 AM</option>
                        <option value="12">02:45 AM</option>
                        <option value="13">03:00 AM</option>
                        <option value="14">03:15 AM</option>
                        <option value="15">03:30 AM</option>
                        <option value="16">03:45 AM</option>
                        <option value="17">04:00 AM</option>
                        <option value="18">04:15 AM</option>
                        <option value="19">04:30 AM</option>
                        <option value="20">04:45 AM</option>
                        <option value="21">05:00 AM</option>
                        <option value="22">05:15 AM</option>
                        <option value="23">05:30 AM</option>
                        <option value="24">05:45 AM</option>
                        <option value="25">06:00 AM</option>
                        <option value="26">06:15 AM</option>
                        <option value="27">06:30 AM</option>
                        <option value="28">06:45 AM</option>
                        <option value="29">07:00 AM</option>
                        <option value="30">07:15 AM</option>
                        <option value="31">07:30 AM</option>
                        <option value="32">07:45 AM</option>
                        <option value="33">08:00 AM</option>
                        <option value="34">08:15 AM</option>
                        <option value="35">08:30 AM</option>
                        <option value="36">08:45 AM</option>
                        <option value="37">09:00 AM</option>
                        <option value="38">09:15 AM</option>
                        <option value="39">09:30 AM</option>
                        <option value="40">09:45 AM</option>
                        <option value="41">10:00 AM</option>
                        <option value="42">10:15 AM</option>
                        <option value="43">10:30 AM</option>
                        <option value="44">10:45 AM</option>
                        <option value="45">11:00 AM</option>
                        <option value="46">11:15 AM</option>
                        <option value="47">11:30 AM</option>
                        <option value="48">11:45 AM</option>
                        <option value="49">12:00 PM</option>
                        <option value="50">12:15 PM</option>
                        <option value="51">12:30 PM</option>
                        <option value="52">12:45 PM</option>
                        <option value="53">01:00 PM</option>
                        <option value="54">01:15 PM</option>
                        <option value="55">01:30 PM</option>
                        <option value="56">01:45 PM</option>
                        <option value="57">02:00 PM</option>
                        <option value="58">02:15 PM</option>
                        <option value="59">02:30 PM</option>
                        <option value="60">02:45 PM</option>
                        <option value="61">03:00 PM</option>
                        <option value="62">03:15 PM</option>
                        <option value="63">03:30 PM</option>
                        <option value="64">03:45 PM</option>
                        <option value="65">04:00 PM</option>
                        <option value="66">04:15 PM</option>
                        <option value="67">04:30 PM</option>
                        <option value="68">04:45 PM</option>
                        <option value="69">05:00 PM</option>
                        <option value="70">05:15 PM</option>
                        <option value="71">05:30 PM</option>
                        <option value="72">05:45 PM</option>
                        <option value="73">06:00 PM</option>
                        <option value="74">06:15 PM</option>
                        <option value="75">06:30 PM</option>
                        <option value="76">06:45 PM</option>
                        <option value="77">07:00 PM</option>
                        <option value="78">07:15 PM</option>
                        <option value="79">07:30 PM</option>
                        <option value="80">07:45 PM</option>
                        <option value="81">08:00 PM</option>
                        <option value="82">08:15 PM</option>
                        <option value="83">08:30 PM</option>
                        <option value="84">08:45 PM</option>
                        <option value="85">09:00 PM</option>
                        <option value="86">09:15 PM</option>
                        <option value="87">09:30 PM</option>
                        <option value="88">09:45 PM</option>
                        <option value="89">10:00 PM</option>
                        <option value="90">10:15 PM</option>
                        <option value="91">10:30 PM</option>
                        <option value="92">10:45 PM</option>
                        <option value="93">11:00 PM</option>
                        <option value="94">11:15 PM</option>
                        <option value="95">11:30 PM</option>
                        <option value="96">11:45 PM</option>
                      </select>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                      <div class="form-check form-check-inline text-middle">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="inlineRadio5"
                          name="inlineRadio5"
                          autofocus
                          required
                          onChange={(e) =>
                            setBusinessHours({
                              ...businessHours,
                              is_tuesday_24open: e.target.value
                            })
                          }
                        />
                        <label class="form-check-label" for="inlineRadio5">
                          Open 24 Hours
                        </label>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="inlineRadio6"
                          name="inlineRadio6"
                          autofocus
                          required
                          onChange={(e) =>
                            setBusinessHours({
                              ...businessHours,
                              is_tuesday_close: e.target.value
                            })
                          }
                        />
                        <label class="form-check-label" for="inlineRadio6">
                          Close
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="row p-2">
                    <div class="col-lg-2 col-sm-6">Wednesday</div>
                    <div class="col-2">
                      <select
                        class="form-select"
                        id=""
                        autofocus
                        required
                        onChange={(e) =>
                          setBusinessHours({
                            ...businessHours,
                            wednesday_start_time: e.target.value
                          })
                        }
                      >
                        <option value="">Opens at</option>
                        <option value="1">12:00 AM</option>
                        <option value="2">12:15 AM</option>
                        <option value="3">12:30 AM</option>
                        <option value="4">12:45 AM</option>
                        <option value="5">01:00 AM</option>
                        <option value="6">01:15 AM</option>
                        <option value="7">01:30 AM</option>
                        <option value="8">01:45 AM</option>
                        <option value="9">02:00 AM</option>
                        <option value="10">02:15 AM</option>
                        <option value="11">02:30 AM</option>
                        <option value="12">02:45 AM</option>
                        <option value="13">03:00 AM</option>
                        <option value="14">03:15 AM</option>
                        <option value="15">03:30 AM</option>
                        <option value="16">03:45 AM</option>
                        <option value="17">04:00 AM</option>
                        <option value="18">04:15 AM</option>
                        <option value="19">04:30 AM</option>
                        <option value="20">04:45 AM</option>
                        <option value="21">05:00 AM</option>
                        <option value="22">05:15 AM</option>
                        <option value="23">05:30 AM</option>
                        <option value="24">05:45 AM</option>
                        <option value="25">06:00 AM</option>
                        <option value="26">06:15 AM</option>
                        <option value="27">06:30 AM</option>
                        <option value="28">06:45 AM</option>
                        <option value="29">07:00 AM</option>
                        <option value="30">07:15 AM</option>
                        <option value="31">07:30 AM</option>
                        <option value="32">07:45 AM</option>
                        <option value="33">08:00 AM</option>
                        <option value="34">08:15 AM</option>
                        <option value="35">08:30 AM</option>
                        <option value="36">08:45 AM</option>
                        <option value="37">09:00 AM</option>
                        <option value="38">09:15 AM</option>
                        <option value="39">09:30 AM</option>
                        <option value="40">09:45 AM</option>
                        <option value="41">10:00 AM</option>
                        <option value="42">10:15 AM</option>
                        <option value="43">10:30 AM</option>
                        <option value="44">10:45 AM</option>
                        <option value="45">11:00 AM</option>
                        <option value="46">11:15 AM</option>
                        <option value="47">11:30 AM</option>
                        <option value="48">11:45 AM</option>
                        <option value="49">12:00 PM</option>
                        <option value="50">12:15 PM</option>
                        <option value="51">12:30 PM</option>
                        <option value="52">12:45 PM</option>
                        <option value="53">01:00 PM</option>
                        <option value="54">01:15 PM</option>
                        <option value="55">01:30 PM</option>
                        <option value="56">01:45 PM</option>
                        <option value="57">02:00 PM</option>
                        <option value="58">02:15 PM</option>
                        <option value="59">02:30 PM</option>
                        <option value="60">02:45 PM</option>
                        <option value="61">03:00 PM</option>
                        <option value="62">03:15 PM</option>
                        <option value="63">03:30 PM</option>
                        <option value="64">03:45 PM</option>
                        <option value="65">04:00 PM</option>
                        <option value="66">04:15 PM</option>
                        <option value="67">04:30 PM</option>
                        <option value="68">04:45 PM</option>
                        <option value="69">05:00 PM</option>
                        <option value="70">05:15 PM</option>
                        <option value="71">05:30 PM</option>
                        <option value="72">05:45 PM</option>
                        <option value="73">06:00 PM</option>
                        <option value="74">06:15 PM</option>
                        <option value="75">06:30 PM</option>
                        <option value="76">06:45 PM</option>
                        <option value="77">07:00 PM</option>
                        <option value="78">07:15 PM</option>
                        <option value="79">07:30 PM</option>
                        <option value="80">07:45 PM</option>
                        <option value="81">08:00 PM</option>
                        <option value="82">08:15 PM</option>
                        <option value="83">08:30 PM</option>
                        <option value="84">08:45 PM</option>
                        <option value="85">09:00 PM</option>
                        <option value="86">09:15 PM</option>
                        <option value="87">09:30 PM</option>
                        <option value="88">09:45 PM</option>
                        <option value="89">10:00 PM</option>
                        <option value="90">10:15 PM</option>
                        <option value="91">10:30 PM</option>
                        <option value="92">10:45 PM</option>
                        <option value="93">11:00 PM</option>
                        <option value="94">11:15 PM</option>
                        <option value="95">11:30 PM</option>
                        <option value="96">11:45 PM</option>
                      </select>
                    </div>
                    <div class="col-lg-2 col-sm-6">
                      <select
                        class="form-select"
                        id=""
                        autofocus
                        required
                        onChange={(e) =>
                          setBusinessHours({
                            ...businessHours,
                            wednesday_end_time: e.target.value
                          })
                        }
                      >
                        <option value="">Closes at</option>
                        <option value="1">12:00 AM</option>
                        <option value="2">12:15 AM</option>
                        <option value="3">12:30 AM</option>
                        <option value="4">12:45 AM</option>
                        <option value="5">01:00 AM</option>
                        <option value="6">01:15 AM</option>
                        <option value="7">01:30 AM</option>
                        <option value="8">01:45 AM</option>
                        <option value="9">02:00 AM</option>
                        <option value="10">02:15 AM</option>
                        <option value="11">02:30 AM</option>
                        <option value="12">02:45 AM</option>
                        <option value="13">03:00 AM</option>
                        <option value="14">03:15 AM</option>
                        <option value="15">03:30 AM</option>
                        <option value="16">03:45 AM</option>
                        <option value="17">04:00 AM</option>
                        <option value="18">04:15 AM</option>
                        <option value="19">04:30 AM</option>
                        <option value="20">04:45 AM</option>
                        <option value="21">05:00 AM</option>
                        <option value="22">05:15 AM</option>
                        <option value="23">05:30 AM</option>
                        <option value="24">05:45 AM</option>
                        <option value="25">06:00 AM</option>
                        <option value="26">06:15 AM</option>
                        <option value="27">06:30 AM</option>
                        <option value="28">06:45 AM</option>
                        <option value="29">07:00 AM</option>
                        <option value="30">07:15 AM</option>
                        <option value="31">07:30 AM</option>
                        <option value="32">07:45 AM</option>
                        <option value="33">08:00 AM</option>
                        <option value="34">08:15 AM</option>
                        <option value="35">08:30 AM</option>
                        <option value="36">08:45 AM</option>
                        <option value="37">09:00 AM</option>
                        <option value="38">09:15 AM</option>
                        <option value="39">09:30 AM</option>
                        <option value="40">09:45 AM</option>
                        <option value="41">10:00 AM</option>
                        <option value="42">10:15 AM</option>
                        <option value="43">10:30 AM</option>
                        <option value="44">10:45 AM</option>
                        <option value="45">11:00 AM</option>
                        <option value="46">11:15 AM</option>
                        <option value="47">11:30 AM</option>
                        <option value="48">11:45 AM</option>
                        <option value="49">12:00 PM</option>
                        <option value="50">12:15 PM</option>
                        <option value="51">12:30 PM</option>
                        <option value="52">12:45 PM</option>
                        <option value="53">01:00 PM</option>
                        <option value="54">01:15 PM</option>
                        <option value="55">01:30 PM</option>
                        <option value="56">01:45 PM</option>
                        <option value="57">02:00 PM</option>
                        <option value="58">02:15 PM</option>
                        <option value="59">02:30 PM</option>
                        <option value="60">02:45 PM</option>
                        <option value="61">03:00 PM</option>
                        <option value="62">03:15 PM</option>
                        <option value="63">03:30 PM</option>
                        <option value="64">03:45 PM</option>
                        <option value="65">04:00 PM</option>
                        <option value="66">04:15 PM</option>
                        <option value="67">04:30 PM</option>
                        <option value="68">04:45 PM</option>
                        <option value="69">05:00 PM</option>
                        <option value="70">05:15 PM</option>
                        <option value="71">05:30 PM</option>
                        <option value="72">05:45 PM</option>
                        <option value="73">06:00 PM</option>
                        <option value="74">06:15 PM</option>
                        <option value="75">06:30 PM</option>
                        <option value="76">06:45 PM</option>
                        <option value="77">07:00 PM</option>
                        <option value="78">07:15 PM</option>
                        <option value="79">07:30 PM</option>
                        <option value="80">07:45 PM</option>
                        <option value="81">08:00 PM</option>
                        <option value="82">08:15 PM</option>
                        <option value="83">08:30 PM</option>
                        <option value="84">08:45 PM</option>
                        <option value="85">09:00 PM</option>
                        <option value="86">09:15 PM</option>
                        <option value="87">09:30 PM</option>
                        <option value="88">09:45 PM</option>
                        <option value="89">10:00 PM</option>
                        <option value="90">10:15 PM</option>
                        <option value="91">10:30 PM</option>
                        <option value="92">10:45 PM</option>
                        <option value="93">11:00 PM</option>
                        <option value="94">11:15 PM</option>
                        <option value="95">11:30 PM</option>
                        <option value="96">11:45 PM</option>
                      </select>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                      <div class="form-check form-check-inline text-middle">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="inlineRadio7"
                          name="inlineRadio7"
                          autofocus
                          required
                          onChange={(e) =>
                            setBusinessHours({
                              ...businessHours,
                              is_wednesday_24open: e.target.value
                            })
                          }
                        />
                        <label class="form-check-label" for="inlineRadio7">
                          Open 24 Hours
                        </label>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="inlineRadio8"
                          name="inlineRadio8"
                          autofocus
                          required
                          onChange={(e) =>
                            setBusinessHours({
                              ...businessHours,
                              is_wednesday_close: e.target.value
                            })
                          }
                        />
                        <label class="form-check-label" for="inlineRadio8">
                          Close
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="row p-2">
                    <div class="col-lg-2 col-sm-6">Thursday</div>
                    <div class="col-2">
                      <select
                        class="form-select"
                        id=""
                        autofocus
                        required
                        onChange={(e) =>
                          setBusinessHours({
                            ...businessHours,
                            thursday_start_time: e.target.value
                          })
                        }
                      >
                        <option value="">Opens at</option>
                        <option value="1">12:00 AM</option>
                        <option value="2">12:15 AM</option>
                        <option value="3">12:30 AM</option>
                        <option value="4">12:45 AM</option>
                        <option value="5">01:00 AM</option>
                        <option value="6">01:15 AM</option>
                        <option value="7">01:30 AM</option>
                        <option value="8">01:45 AM</option>
                        <option value="9">02:00 AM</option>
                        <option value="10">02:15 AM</option>
                        <option value="11">02:30 AM</option>
                        <option value="12">02:45 AM</option>
                        <option value="13">03:00 AM</option>
                        <option value="14">03:15 AM</option>
                        <option value="15">03:30 AM</option>
                        <option value="16">03:45 AM</option>
                        <option value="17">04:00 AM</option>
                        <option value="18">04:15 AM</option>
                        <option value="19">04:30 AM</option>
                        <option value="20">04:45 AM</option>
                        <option value="21">05:00 AM</option>
                        <option value="22">05:15 AM</option>
                        <option value="23">05:30 AM</option>
                        <option value="24">05:45 AM</option>
                        <option value="25">06:00 AM</option>
                        <option value="26">06:15 AM</option>
                        <option value="27">06:30 AM</option>
                        <option value="28">06:45 AM</option>
                        <option value="29">07:00 AM</option>
                        <option value="30">07:15 AM</option>
                        <option value="31">07:30 AM</option>
                        <option value="32">07:45 AM</option>
                        <option value="33">08:00 AM</option>
                        <option value="34">08:15 AM</option>
                        <option value="35">08:30 AM</option>
                        <option value="36">08:45 AM</option>
                        <option value="37">09:00 AM</option>
                        <option value="38">09:15 AM</option>
                        <option value="39">09:30 AM</option>
                        <option value="40">09:45 AM</option>
                        <option value="41">10:00 AM</option>
                        <option value="42">10:15 AM</option>
                        <option value="43">10:30 AM</option>
                        <option value="44">10:45 AM</option>
                        <option value="45">11:00 AM</option>
                        <option value="46">11:15 AM</option>
                        <option value="47">11:30 AM</option>
                        <option value="48">11:45 AM</option>
                        <option value="49">12:00 PM</option>
                        <option value="50">12:15 PM</option>
                        <option value="51">12:30 PM</option>
                        <option value="52">12:45 PM</option>
                        <option value="53">01:00 PM</option>
                        <option value="54">01:15 PM</option>
                        <option value="55">01:30 PM</option>
                        <option value="56">01:45 PM</option>
                        <option value="57">02:00 PM</option>
                        <option value="58">02:15 PM</option>
                        <option value="59">02:30 PM</option>
                        <option value="60">02:45 PM</option>
                        <option value="61">03:00 PM</option>
                        <option value="62">03:15 PM</option>
                        <option value="63">03:30 PM</option>
                        <option value="64">03:45 PM</option>
                        <option value="65">04:00 PM</option>
                        <option value="66">04:15 PM</option>
                        <option value="67">04:30 PM</option>
                        <option value="68">04:45 PM</option>
                        <option value="69">05:00 PM</option>
                        <option value="70">05:15 PM</option>
                        <option value="71">05:30 PM</option>
                        <option value="72">05:45 PM</option>
                        <option value="73">06:00 PM</option>
                        <option value="74">06:15 PM</option>
                        <option value="75">06:30 PM</option>
                        <option value="76">06:45 PM</option>
                        <option value="77">07:00 PM</option>
                        <option value="78">07:15 PM</option>
                        <option value="79">07:30 PM</option>
                        <option value="80">07:45 PM</option>
                        <option value="81">08:00 PM</option>
                        <option value="82">08:15 PM</option>
                        <option value="83">08:30 PM</option>
                        <option value="84">08:45 PM</option>
                        <option value="85">09:00 PM</option>
                        <option value="86">09:15 PM</option>
                        <option value="87">09:30 PM</option>
                        <option value="88">09:45 PM</option>
                        <option value="89">10:00 PM</option>
                        <option value="90">10:15 PM</option>
                        <option value="91">10:30 PM</option>
                        <option value="92">10:45 PM</option>
                        <option value="93">11:00 PM</option>
                        <option value="94">11:15 PM</option>
                        <option value="95">11:30 PM</option>
                        <option value="96">11:45 PM</option>
                      </select>
                    </div>
                    <div class="col-lg-2 col-sm-6">
                      <select
                        class="form-select"
                        id=""
                        autofocus
                        required
                        onChange={(e) =>
                          setBusinessHours({
                            ...businessHours,
                            thursday_end_time: e.target.value
                          })
                        }
                      >
                        <option value="">Closes at</option>
                        <option value="1">12:00 AM</option>
                        <option value="2">12:15 AM</option>
                        <option value="3">12:30 AM</option>
                        <option value="4">12:45 AM</option>
                        <option value="5">01:00 AM</option>
                        <option value="6">01:15 AM</option>
                        <option value="7">01:30 AM</option>
                        <option value="8">01:45 AM</option>
                        <option value="9">02:00 AM</option>
                        <option value="10">02:15 AM</option>
                        <option value="11">02:30 AM</option>
                        <option value="12">02:45 AM</option>
                        <option value="13">03:00 AM</option>
                        <option value="14">03:15 AM</option>
                        <option value="15">03:30 AM</option>
                        <option value="16">03:45 AM</option>
                        <option value="17">04:00 AM</option>
                        <option value="18">04:15 AM</option>
                        <option value="19">04:30 AM</option>
                        <option value="20">04:45 AM</option>
                        <option value="21">05:00 AM</option>
                        <option value="22">05:15 AM</option>
                        <option value="23">05:30 AM</option>
                        <option value="24">05:45 AM</option>
                        <option value="25">06:00 AM</option>
                        <option value="26">06:15 AM</option>
                        <option value="27">06:30 AM</option>
                        <option value="28">06:45 AM</option>
                        <option value="29">07:00 AM</option>
                        <option value="30">07:15 AM</option>
                        <option value="31">07:30 AM</option>
                        <option value="32">07:45 AM</option>
                        <option value="33">08:00 AM</option>
                        <option value="34">08:15 AM</option>
                        <option value="35">08:30 AM</option>
                        <option value="36">08:45 AM</option>
                        <option value="37">09:00 AM</option>
                        <option value="38">09:15 AM</option>
                        <option value="39">09:30 AM</option>
                        <option value="40">09:45 AM</option>
                        <option value="41">10:00 AM</option>
                        <option value="42">10:15 AM</option>
                        <option value="43">10:30 AM</option>
                        <option value="44">10:45 AM</option>
                        <option value="45">11:00 AM</option>
                        <option value="46">11:15 AM</option>
                        <option value="47">11:30 AM</option>
                        <option value="48">11:45 AM</option>
                        <option value="49">12:00 PM</option>
                        <option value="50">12:15 PM</option>
                        <option value="51">12:30 PM</option>
                        <option value="52">12:45 PM</option>
                        <option value="53">01:00 PM</option>
                        <option value="54">01:15 PM</option>
                        <option value="55">01:30 PM</option>
                        <option value="56">01:45 PM</option>
                        <option value="57">02:00 PM</option>
                        <option value="58">02:15 PM</option>
                        <option value="59">02:30 PM</option>
                        <option value="60">02:45 PM</option>
                        <option value="61">03:00 PM</option>
                        <option value="62">03:15 PM</option>
                        <option value="63">03:30 PM</option>
                        <option value="64">03:45 PM</option>
                        <option value="65">04:00 PM</option>
                        <option value="66">04:15 PM</option>
                        <option value="67">04:30 PM</option>
                        <option value="68">04:45 PM</option>
                        <option value="69">05:00 PM</option>
                        <option value="70">05:15 PM</option>
                        <option value="71">05:30 PM</option>
                        <option value="72">05:45 PM</option>
                        <option value="73">06:00 PM</option>
                        <option value="74">06:15 PM</option>
                        <option value="75">06:30 PM</option>
                        <option value="76">06:45 PM</option>
                        <option value="77">07:00 PM</option>
                        <option value="78">07:15 PM</option>
                        <option value="79">07:30 PM</option>
                        <option value="80">07:45 PM</option>
                        <option value="81">08:00 PM</option>
                        <option value="82">08:15 PM</option>
                        <option value="83">08:30 PM</option>
                        <option value="84">08:45 PM</option>
                        <option value="85">09:00 PM</option>
                        <option value="86">09:15 PM</option>
                        <option value="87">09:30 PM</option>
                        <option value="88">09:45 PM</option>
                        <option value="89">10:00 PM</option>
                        <option value="90">10:15 PM</option>
                        <option value="91">10:30 PM</option>
                        <option value="92">10:45 PM</option>
                        <option value="93">11:00 PM</option>
                        <option value="94">11:15 PM</option>
                        <option value="95">11:30 PM</option>
                        <option value="96">11:45 PM</option>
                      </select>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                      <div class="form-check form-check-inline text-middle">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="inlineRadio9"
                          name="inlineRadio9"
                          autofocus
                          required
                          onChange={(e) =>
                            setBusinessHours({
                              ...businessHours,
                              is_thursday_24open: e.target.value
                            })
                          }
                        />
                        <label class="form-check-label" for="inlineRadio9">
                          Open 24 Hours
                        </label>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="inlineRadio10"
                          name="inlineRadio10"
                          autofocus
                          required
                          onChange={(e) =>
                            setBusinessHours({
                              ...businessHours,
                              is_thursday_close: e.target.value
                            })
                          }
                        />
                        <label class="form-check-label" for="inlineRadio10">
                          Close
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="row p-2">
                    <div class="col-lg-2 col-sm-6">Friday</div>
                    <div class="col-2">
                      <select
                        class="form-select"
                        id=""
                        autofocus
                        required
                        onChange={(e) =>
                          setBusinessHours({
                            ...businessHours,
                            friday_start_time: e.target.value
                          })
                        }
                      >
                        <option value="">Opens at</option>
                        <option value="1">12:00 AM</option>
                        <option value="2">12:15 AM</option>
                        <option value="3">12:30 AM</option>
                        <option value="4">12:45 AM</option>
                        <option value="5">01:00 AM</option>
                        <option value="6">01:15 AM</option>
                        <option value="7">01:30 AM</option>
                        <option value="8">01:45 AM</option>
                        <option value="9">02:00 AM</option>
                        <option value="10">02:15 AM</option>
                        <option value="11">02:30 AM</option>
                        <option value="12">02:45 AM</option>
                        <option value="13">03:00 AM</option>
                        <option value="14">03:15 AM</option>
                        <option value="15">03:30 AM</option>
                        <option value="16">03:45 AM</option>
                        <option value="17">04:00 AM</option>
                        <option value="18">04:15 AM</option>
                        <option value="19">04:30 AM</option>
                        <option value="20">04:45 AM</option>
                        <option value="21">05:00 AM</option>
                        <option value="22">05:15 AM</option>
                        <option value="23">05:30 AM</option>
                        <option value="24">05:45 AM</option>
                        <option value="25">06:00 AM</option>
                        <option value="26">06:15 AM</option>
                        <option value="27">06:30 AM</option>
                        <option value="28">06:45 AM</option>
                        <option value="29">07:00 AM</option>
                        <option value="30">07:15 AM</option>
                        <option value="31">07:30 AM</option>
                        <option value="32">07:45 AM</option>
                        <option value="33">08:00 AM</option>
                        <option value="34">08:15 AM</option>
                        <option value="35">08:30 AM</option>
                        <option value="36">08:45 AM</option>
                        <option value="37">09:00 AM</option>
                        <option value="38">09:15 AM</option>
                        <option value="39">09:30 AM</option>
                        <option value="40">09:45 AM</option>
                        <option value="41">10:00 AM</option>
                        <option value="42">10:15 AM</option>
                        <option value="43">10:30 AM</option>
                        <option value="44">10:45 AM</option>
                        <option value="45">11:00 AM</option>
                        <option value="46">11:15 AM</option>
                        <option value="47">11:30 AM</option>
                        <option value="48">11:45 AM</option>
                        <option value="49">12:00 PM</option>
                        <option value="50">12:15 PM</option>
                        <option value="51">12:30 PM</option>
                        <option value="52">12:45 PM</option>
                        <option value="53">01:00 PM</option>
                        <option value="54">01:15 PM</option>
                        <option value="55">01:30 PM</option>
                        <option value="56">01:45 PM</option>
                        <option value="57">02:00 PM</option>
                        <option value="58">02:15 PM</option>
                        <option value="59">02:30 PM</option>
                        <option value="60">02:45 PM</option>
                        <option value="61">03:00 PM</option>
                        <option value="62">03:15 PM</option>
                        <option value="63">03:30 PM</option>
                        <option value="64">03:45 PM</option>
                        <option value="65">04:00 PM</option>
                        <option value="66">04:15 PM</option>
                        <option value="67">04:30 PM</option>
                        <option value="68">04:45 PM</option>
                        <option value="69">05:00 PM</option>
                        <option value="70">05:15 PM</option>
                        <option value="71">05:30 PM</option>
                        <option value="72">05:45 PM</option>
                        <option value="73">06:00 PM</option>
                        <option value="74">06:15 PM</option>
                        <option value="75">06:30 PM</option>
                        <option value="76">06:45 PM</option>
                        <option value="77">07:00 PM</option>
                        <option value="78">07:15 PM</option>
                        <option value="79">07:30 PM</option>
                        <option value="80">07:45 PM</option>
                        <option value="81">08:00 PM</option>
                        <option value="82">08:15 PM</option>
                        <option value="83">08:30 PM</option>
                        <option value="84">08:45 PM</option>
                        <option value="85">09:00 PM</option>
                        <option value="86">09:15 PM</option>
                        <option value="87">09:30 PM</option>
                        <option value="88">09:45 PM</option>
                        <option value="89">10:00 PM</option>
                        <option value="90">10:15 PM</option>
                        <option value="91">10:30 PM</option>
                        <option value="92">10:45 PM</option>
                        <option value="93">11:00 PM</option>
                        <option value="94">11:15 PM</option>
                        <option value="95">11:30 PM</option>
                        <option value="96">11:45 PM</option>
                      </select>
                    </div>
                    <div class="col-lg-2 col-sm-6">
                      <select
                        class="form-select"
                        id=""
                        autofocus
                        required
                        onChange={(e) =>
                          setBusinessHours({
                            ...businessHours,
                            friday_end_time: e.target.value
                          })
                        }
                      >
                        <option value="">Closes at</option>
                        <option value="1">12:00 AM</option>
                        <option value="2">12:15 AM</option>
                        <option value="3">12:30 AM</option>
                        <option value="4">12:45 AM</option>
                        <option value="5">01:00 AM</option>
                        <option value="6">01:15 AM</option>
                        <option value="7">01:30 AM</option>
                        <option value="8">01:45 AM</option>
                        <option value="9">02:00 AM</option>
                        <option value="10">02:15 AM</option>
                        <option value="11">02:30 AM</option>
                        <option value="12">02:45 AM</option>
                        <option value="13">03:00 AM</option>
                        <option value="14">03:15 AM</option>
                        <option value="15">03:30 AM</option>
                        <option value="16">03:45 AM</option>
                        <option value="17">04:00 AM</option>
                        <option value="18">04:15 AM</option>
                        <option value="19">04:30 AM</option>
                        <option value="20">04:45 AM</option>
                        <option value="21">05:00 AM</option>
                        <option value="22">05:15 AM</option>
                        <option value="23">05:30 AM</option>
                        <option value="24">05:45 AM</option>
                        <option value="25">06:00 AM</option>
                        <option value="26">06:15 AM</option>
                        <option value="27">06:30 AM</option>
                        <option value="28">06:45 AM</option>
                        <option value="29">07:00 AM</option>
                        <option value="30">07:15 AM</option>
                        <option value="31">07:30 AM</option>
                        <option value="32">07:45 AM</option>
                        <option value="33">08:00 AM</option>
                        <option value="34">08:15 AM</option>
                        <option value="35">08:30 AM</option>
                        <option value="36">08:45 AM</option>
                        <option value="37">09:00 AM</option>
                        <option value="38">09:15 AM</option>
                        <option value="39">09:30 AM</option>
                        <option value="40">09:45 AM</option>
                        <option value="41">10:00 AM</option>
                        <option value="42">10:15 AM</option>
                        <option value="43">10:30 AM</option>
                        <option value="44">10:45 AM</option>
                        <option value="45">11:00 AM</option>
                        <option value="46">11:15 AM</option>
                        <option value="47">11:30 AM</option>
                        <option value="48">11:45 AM</option>
                        <option value="49">12:00 PM</option>
                        <option value="50">12:15 PM</option>
                        <option value="51">12:30 PM</option>
                        <option value="52">12:45 PM</option>
                        <option value="53">01:00 PM</option>
                        <option value="54">01:15 PM</option>
                        <option value="55">01:30 PM</option>
                        <option value="56">01:45 PM</option>
                        <option value="57">02:00 PM</option>
                        <option value="58">02:15 PM</option>
                        <option value="59">02:30 PM</option>
                        <option value="60">02:45 PM</option>
                        <option value="61">03:00 PM</option>
                        <option value="62">03:15 PM</option>
                        <option value="63">03:30 PM</option>
                        <option value="64">03:45 PM</option>
                        <option value="65">04:00 PM</option>
                        <option value="66">04:15 PM</option>
                        <option value="67">04:30 PM</option>
                        <option value="68">04:45 PM</option>
                        <option value="69">05:00 PM</option>
                        <option value="70">05:15 PM</option>
                        <option value="71">05:30 PM</option>
                        <option value="72">05:45 PM</option>
                        <option value="73">06:00 PM</option>
                        <option value="74">06:15 PM</option>
                        <option value="75">06:30 PM</option>
                        <option value="76">06:45 PM</option>
                        <option value="77">07:00 PM</option>
                        <option value="78">07:15 PM</option>
                        <option value="79">07:30 PM</option>
                        <option value="80">07:45 PM</option>
                        <option value="81">08:00 PM</option>
                        <option value="82">08:15 PM</option>
                        <option value="83">08:30 PM</option>
                        <option value="84">08:45 PM</option>
                        <option value="85">09:00 PM</option>
                        <option value="86">09:15 PM</option>
                        <option value="87">09:30 PM</option>
                        <option value="88">09:45 PM</option>
                        <option value="89">10:00 PM</option>
                        <option value="90">10:15 PM</option>
                        <option value="91">10:30 PM</option>
                        <option value="92">10:45 PM</option>
                        <option value="93">11:00 PM</option>
                        <option value="94">11:15 PM</option>
                        <option value="95">11:30 PM</option>
                        <option value="96">11:45 PM</option>
                      </select>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                      <div class="form-check form-check-inline text-middle">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="inlineRadio11"
                          name="inlineRadio11"
                          autofocus
                          required
                          onChange={(e) =>
                            setBusinessHours({
                              ...businessHours,
                              is_friday_24open: e.target.value
                            })
                          }
                        />
                        <label class="form-check-label" for="inlineRadio11">
                          Open 24 Hours
                        </label>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="inlineRadio12"
                          name="inlineRadio12"
                          autofocus
                          required
                          onChange={(e) =>
                            setBusinessHours({
                              ...businessHours,
                              is_friday_close: e.target.value
                            })
                          }
                        />
                        <label class="form-check-label" for="inlineRadio12">
                          Close
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="row p-2">
                    <div class="col-lg-2 col-sm-6">Saturday</div>
                    <div class="col-2">
                      <select
                        class="form-select"
                        id=""
                        autofocus
                        required
                        onChange={(e) =>
                          setBusinessHours({
                            ...businessHours,
                            saturday_start_time: e.target.value
                          })
                        }
                      >
                        <option value="">Opens at</option>
                        <option value="1">12:00 AM</option>
                        <option value="2">12:15 AM</option>
                        <option value="3">12:30 AM</option>
                        <option value="4">12:45 AM</option>
                        <option value="5">01:00 AM</option>
                        <option value="6">01:15 AM</option>
                        <option value="7">01:30 AM</option>
                        <option value="8">01:45 AM</option>
                        <option value="9">02:00 AM</option>
                        <option value="10">02:15 AM</option>
                        <option value="11">02:30 AM</option>
                        <option value="12">02:45 AM</option>
                        <option value="13">03:00 AM</option>
                        <option value="14">03:15 AM</option>
                        <option value="15">03:30 AM</option>
                        <option value="16">03:45 AM</option>
                        <option value="17">04:00 AM</option>
                        <option value="18">04:15 AM</option>
                        <option value="19">04:30 AM</option>
                        <option value="20">04:45 AM</option>
                        <option value="21">05:00 AM</option>
                        <option value="22">05:15 AM</option>
                        <option value="23">05:30 AM</option>
                        <option value="24">05:45 AM</option>
                        <option value="25">06:00 AM</option>
                        <option value="26">06:15 AM</option>
                        <option value="27">06:30 AM</option>
                        <option value="28">06:45 AM</option>
                        <option value="29">07:00 AM</option>
                        <option value="30">07:15 AM</option>
                        <option value="31">07:30 AM</option>
                        <option value="32">07:45 AM</option>
                        <option value="33">08:00 AM</option>
                        <option value="34">08:15 AM</option>
                        <option value="35">08:30 AM</option>
                        <option value="36">08:45 AM</option>
                        <option value="37">09:00 AM</option>
                        <option value="38">09:15 AM</option>
                        <option value="39">09:30 AM</option>
                        <option value="40">09:45 AM</option>
                        <option value="41">10:00 AM</option>
                        <option value="42">10:15 AM</option>
                        <option value="43">10:30 AM</option>
                        <option value="44">10:45 AM</option>
                        <option value="45">11:00 AM</option>
                        <option value="46">11:15 AM</option>
                        <option value="47">11:30 AM</option>
                        <option value="48">11:45 AM</option>
                        <option value="49">12:00 PM</option>
                        <option value="50">12:15 PM</option>
                        <option value="51">12:30 PM</option>
                        <option value="52">12:45 PM</option>
                        <option value="53">01:00 PM</option>
                        <option value="54">01:15 PM</option>
                        <option value="55">01:30 PM</option>
                        <option value="56">01:45 PM</option>
                        <option value="57">02:00 PM</option>
                        <option value="58">02:15 PM</option>
                        <option value="59">02:30 PM</option>
                        <option value="60">02:45 PM</option>
                        <option value="61">03:00 PM</option>
                        <option value="62">03:15 PM</option>
                        <option value="63">03:30 PM</option>
                        <option value="64">03:45 PM</option>
                        <option value="65">04:00 PM</option>
                        <option value="66">04:15 PM</option>
                        <option value="67">04:30 PM</option>
                        <option value="68">04:45 PM</option>
                        <option value="69">05:00 PM</option>
                        <option value="70">05:15 PM</option>
                        <option value="71">05:30 PM</option>
                        <option value="72">05:45 PM</option>
                        <option value="73">06:00 PM</option>
                        <option value="74">06:15 PM</option>
                        <option value="75">06:30 PM</option>
                        <option value="76">06:45 PM</option>
                        <option value="77">07:00 PM</option>
                        <option value="78">07:15 PM</option>
                        <option value="79">07:30 PM</option>
                        <option value="80">07:45 PM</option>
                        <option value="81">08:00 PM</option>
                        <option value="82">08:15 PM</option>
                        <option value="83">08:30 PM</option>
                        <option value="84">08:45 PM</option>
                        <option value="85">09:00 PM</option>
                        <option value="86">09:15 PM</option>
                        <option value="87">09:30 PM</option>
                        <option value="88">09:45 PM</option>
                        <option value="89">10:00 PM</option>
                        <option value="90">10:15 PM</option>
                        <option value="91">10:30 PM</option>
                        <option value="92">10:45 PM</option>
                        <option value="93">11:00 PM</option>
                        <option value="94">11:15 PM</option>
                        <option value="95">11:30 PM</option>
                        <option value="96">11:45 PM</option>
                      </select>
                    </div>
                    <div class="col-lg-2 col-sm-6">
                      <select
                        class="form-select"
                        id=""
                        autofocus
                        required
                        onChange={(e) =>
                          setBusinessHours({
                            ...businessHours,
                            saturday_end_time: e.target.value
                          })
                        }
                      >
                        <option value="">Closes at</option>
                        <option value="1">12:00 AM</option>
                        <option value="2">12:15 AM</option>
                        <option value="3">12:30 AM</option>
                        <option value="4">12:45 AM</option>
                        <option value="5">01:00 AM</option>
                        <option value="6">01:15 AM</option>
                        <option value="7">01:30 AM</option>
                        <option value="8">01:45 AM</option>
                        <option value="9">02:00 AM</option>
                        <option value="10">02:15 AM</option>
                        <option value="11">02:30 AM</option>
                        <option value="12">02:45 AM</option>
                        <option value="13">03:00 AM</option>
                        <option value="14">03:15 AM</option>
                        <option value="15">03:30 AM</option>
                        <option value="16">03:45 AM</option>
                        <option value="17">04:00 AM</option>
                        <option value="18">04:15 AM</option>
                        <option value="19">04:30 AM</option>
                        <option value="20">04:45 AM</option>
                        <option value="21">05:00 AM</option>
                        <option value="22">05:15 AM</option>
                        <option value="23">05:30 AM</option>
                        <option value="24">05:45 AM</option>
                        <option value="25">06:00 AM</option>
                        <option value="26">06:15 AM</option>
                        <option value="27">06:30 AM</option>
                        <option value="28">06:45 AM</option>
                        <option value="29">07:00 AM</option>
                        <option value="30">07:15 AM</option>
                        <option value="31">07:30 AM</option>
                        <option value="32">07:45 AM</option>
                        <option value="33">08:00 AM</option>
                        <option value="34">08:15 AM</option>
                        <option value="35">08:30 AM</option>
                        <option value="36">08:45 AM</option>
                        <option value="37">09:00 AM</option>
                        <option value="38">09:15 AM</option>
                        <option value="39">09:30 AM</option>
                        <option value="40">09:45 AM</option>
                        <option value="41">10:00 AM</option>
                        <option value="42">10:15 AM</option>
                        <option value="43">10:30 AM</option>
                        <option value="44">10:45 AM</option>
                        <option value="45">11:00 AM</option>
                        <option value="46">11:15 AM</option>
                        <option value="47">11:30 AM</option>
                        <option value="48">11:45 AM</option>
                        <option value="49">12:00 PM</option>
                        <option value="50">12:15 PM</option>
                        <option value="51">12:30 PM</option>
                        <option value="52">12:45 PM</option>
                        <option value="53">01:00 PM</option>
                        <option value="54">01:15 PM</option>
                        <option value="55">01:30 PM</option>
                        <option value="56">01:45 PM</option>
                        <option value="57">02:00 PM</option>
                        <option value="58">02:15 PM</option>
                        <option value="59">02:30 PM</option>
                        <option value="60">02:45 PM</option>
                        <option value="61">03:00 PM</option>
                        <option value="62">03:15 PM</option>
                        <option value="63">03:30 PM</option>
                        <option value="64">03:45 PM</option>
                        <option value="65">04:00 PM</option>
                        <option value="66">04:15 PM</option>
                        <option value="67">04:30 PM</option>
                        <option value="68">04:45 PM</option>
                        <option value="69">05:00 PM</option>
                        <option value="70">05:15 PM</option>
                        <option value="71">05:30 PM</option>
                        <option value="72">05:45 PM</option>
                        <option value="73">06:00 PM</option>
                        <option value="74">06:15 PM</option>
                        <option value="75">06:30 PM</option>
                        <option value="76">06:45 PM</option>
                        <option value="77">07:00 PM</option>
                        <option value="78">07:15 PM</option>
                        <option value="79">07:30 PM</option>
                        <option value="80">07:45 PM</option>
                        <option value="81">08:00 PM</option>
                        <option value="82">08:15 PM</option>
                        <option value="83">08:30 PM</option>
                        <option value="84">08:45 PM</option>
                        <option value="85">09:00 PM</option>
                        <option value="86">09:15 PM</option>
                        <option value="87">09:30 PM</option>
                        <option value="88">09:45 PM</option>
                        <option value="89">10:00 PM</option>
                        <option value="90">10:15 PM</option>
                        <option value="91">10:30 PM</option>
                        <option value="92">10:45 PM</option>
                        <option value="93">11:00 PM</option>
                        <option value="94">11:15 PM</option>
                        <option value="95">11:30 PM</option>
                        <option value="96">11:45 PM</option>
                      </select>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                      <div class="form-check form-check-inline text-middle">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="inlineRadio13"
                          name="inlineRadio13"
                          autofocus
                          required
                          onChange={(e) =>
                            setBusinessHours({
                              ...businessHours,
                              is_saturday_24open: e.target.value
                            })
                          }
                        />
                        <label class="form-check-label" for="inlineRadio13">
                          Open 24 Hours
                        </label>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="inlineRadio14"
                          name="inlineRadio14"
                          autofocus
                          required
                          onChange={(e) =>
                            setBusinessHours({
                              ...businessHours,
                              is_saturday_close: e.target.value
                            })
                          }
                        />
                        <label class="form-check-label" for="inlineRadio14">
                          Close
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 d-grid gap-2 d-md-flex justify-content-md-start">
                    <button
                      class="btn btn-sm btn-dark"
                      onClick={(e) => updateBusinessHours(e)}
                    >
                      Save Change
                    </button>
                  </div>
                </form>
              </div>
              <div class="card-header border-bottom pb-1 mb-3 mt-4">
                <h5 class="card-header-title text-dark">Extended Closures</h5>
                <div class="opacity-80">
                  Let customers know about temporary or permanent closures to
                  your business
                </div>
              </div>
              <form class="row g-3 needs-validation mt-3" novalidate>
                <div class="row">
                  <div class="col-md-12 col-sm-12">
                    <div class="form-check form-check-inline text-middle">
                      <input
                        class="form-check-input"
                        type="radio"
                        id="inlineRadio15"
                        name="inlineRadio"
                        autofocus
                        required
                        onChange={(e) =>
                            setBusinessClosure({
                              ...businessClosure,
                              is_temporarily_closed: e.target.value
                            })
                          }
                      />
                      <label
                        class="form-check-label fw-bold text-dark"
                        for="inlineRadio15"
                      >
                        <h5>Temporarily Closed</h5>
                      </label>
                      <br />
                      <span class="text-opacity-50">
                        Planning a renovation or extended holiday? Mark your
                        business closed for a short time and set a date to let
                        customers know when you will reopen.Customers can still
                        interact with your busi
                      </span>
                    </div>
                    <ul class="list-group list-group-borderless mt-2 ps-6 border-bottom">
                      <li class="list-group-item text-dark">
                        <i class="bi bi-star fw-bold"></i> Customers can still
                        interact with your business on 2nd A Friendly.
                      </li>
                      <li class="list-group-item text-dark">
                        <i class="bi bi-megaphone"></i> We’ll pause your paid
                        products.
                      </li>
                      <li class="list-group-item text-dark">
                        <i class="bi bi-search"></i> Your business may appear
                        lower in search results while closed.
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-6 col-sm-12 mt-3">
                    <label
                      for="when_will_your_business_reopen"
                      class="form-label fw-bold text-dark"
                    >
                      When will your business reopen?{" "}
                      <span class="star">*</span>
                    </label>
                    <input
                      type="date"
                      id="when_will_your_business_reopen"
                      class="form-control when_will_your_business_reopen"
                      title="when_will_your_business_reopen"
                      required
                      onChange={(e) =>
                        setBusinessClosure({
                          ...businessClosure,
                          reopen_date: e.target.value
                        })
                      }
                    />
                  </div>
                  <div class="col-lg-12 col-sm-12 mt-3">
                    <label
                      for="additional_details"
                      class="form-label fw-bold text-dark"
                    >
                      Additional Details(optional) <span class="star">*</span>
                    </label>
                    <textarea
                      type="text"
                      name="additional_details"
                      class="form-control additional_details"
                      style={{ height: "100px" }}
                      id="additional_details"
                      placeholder=""
                      required
                      onChange={(e) =>
                        setBusinessClosure({
                          ...businessClosure,
                          additional_detail: e.target.value
                        })
                      }
                    ></textarea>
                  </div>
                  <div class="col-md-12 col-sm-12">
                    <div class="form-check form-check-inline text-middle mt-4">
                      <input
                        class="form-check-input"
                        type="radio"
                        id="inlineRadio16"
                        name="inlineRadio"
                        autofocus
                        required
                        onChange={(e) =>
                            setBusinessClosure({
                              ...businessClosure,
                              is_permanently_closed: e.target.value
                            })
                          }
                      />
                      <label
                        class="form-check-label fw-bold text-dark"
                        for="inlineRadio16"
                      >
                        <h5>Permanently Closed</h5>
                      </label>
                      <br />
                      <span class="text-opacity-50">
                        Let your customers know your business is closing
                        permanently.
                      </span>
                    </div>
                    <ul class="list-group list-group-borderless mt-2 ps-6 border-bottom">
                      <li class="list-group-item text-dark">
                        <i class="bi bi-x-circle-fill fw-bold"></i> You will
                        lose access to your page.
                      </li>
                      <li class="list-group-item text-dark">
                        <i class="bi bi-house-add-fill"></i> Your other
                        locations will not be affected.
                      </li>
                    </ul>
                  </div>
                  {/* <div class="col-lg-12 col-sm-12 mt-3">
                    <label
                      for="additional_details"
                      class="form-label fw-bold text-dark"
                    >
                      Additional Details(optional) <span class="star">*</span>
                    </label>
                    <textarea
                      type="text"
                      name="additional_details"
                      class="form-control additional_details"
                      style={{ height: "100px" }}
                      id="additional_details"
                      placeholder=""
                      required
                    ></textarea>
                  </div> */}
                </div>
                <div class="col-12 d-grid gap-2 d-md-flex justify-content-md-start">
                  <button
                    class="btn btn-sm btn-dark"
                    onClick={(e) => updateBusinessClosure(e)}
                  >
                    Save Change
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BusinessView(HoursOfOperation, "Hours of Operation");

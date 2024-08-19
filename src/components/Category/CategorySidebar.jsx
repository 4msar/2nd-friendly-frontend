import React from 'react'

const CategorySidebar = () => {
  return (
    <div className="col-lg-3 col-xxl-3">
      <div className="card card-body p-0 mb-3">
        <p className="fw-bold mb-2 fs-6">Category & Sub-Category</p>
        <div className="bg-light-input mb-3">
          <select
            className="form-select form-select-sm bg-light"
            id="category"
            name="category"
            autoFocus
          >
            <option value="">Select Category</option>
            <option value="1">Food & Dining</option>
            <option value="2">Automotive</option>
          </select>
        </div>
        <div className="bg-light-input mb-4">
          <select
            className="form-select form-select-sm bg-light"
            id="sub_category"
            name="sub_category"
            autoFocus
          >
            <option value="">Select Sub-Category</option>
            <option value="1">Desserts, Catering & Supplies</option>
            <option value="2">Fast Food & Carry Out</option>
            <option value="3">Grocery, Beverage & Tobacco</option>
            <option value="4">Restaurants</option>
          </select>
        </div>

        <p className="fw-bold mb-2 fs-6">State & City</p>
        <div className="bg-light-input mb-3">
          <select
            className="form-select form-select-sm bg-light"
            id="state"
            name="state"
            autoFocus
          >
            <option value="">Select State</option>
            <option value="1">California</option>
            <option value="2">New York</option>
          </select>
        </div>
        <div className="bg-light-input mb-3">
          <select
            className="form-select form-select-sm bg-light"
            id="city"
            name="city"
            autoFocus
          >
            <option value="">Select City</option>
            <option value="1">Oxnard</option>
            <option value="2">Pharamp</option>
          </select>
        </div>

        <p className="mb-2 border-bottom pb-1 fw-bold mb-2 pb-2">Duration</p>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id=""
            defaultChecked
          />
          <label className="form-check-label" htmlFor="">
            All
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="" />
          <label className="form-check-label" htmlFor="">
            Today
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="" />
          <label className="form-check-label" htmlFor="">
            Tomorrow
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="" />
          <label className="form-check-label" htmlFor="">
            This Weekend
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="" />
          <label className="form-check-label" htmlFor="">
            This Week
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="" />
          <label className="form-check-label" htmlFor="">
            Previous Week
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="" />
          <label className="form-check-label" htmlFor="">
            This Month
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="" />
          <label className="form-check-label" htmlFor="">
            Previous Month
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="" />
          <label className="form-check-label" htmlFor="">
            This Year
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="" />
          <label className="form-check-label" htmlFor="">
            Previous Year
          </label>
        </div>
      </div>
      <div className="card card-body p-0 mb-3">
        <p className="border-bottom pb-1 fw-bold mb-2" style={{fontSize: "17px"}}>
          Available
        </p>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id=""
            defaultChecked
          />
          <label className="form-check-label" htmlFor="">
            All
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="" />
          <label className="form-check-label" htmlFor="">
            Wi-Fi
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="" />
          <label className="form-check-label" htmlFor="">
            DJ
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="" />
          <label className="form-check-label" htmlFor="">
            Juke Box
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="" />
          <label className="form-check-label" htmlFor="">
            Karaoke
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="" />
          <label className="form-check-label" htmlFor="">
            Parking
          </label>
        </div>
      </div>
      <div className="card card-body p-0 mb-3">
        <p className="mb-2 border-bottom pb-1 fw-bold mb-2 pb-2">Suggested</p>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault9"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="flexCheckDefault9">
            All
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault9"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault9">
            Open Now 11:23
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault10"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault10">
            Offers Delivery
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault11"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault11">
            Outdoor Seating
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault13"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault13">
            Good for Lunch
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault14"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault14">
            Good for Kids
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault15"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault15">
            Pizza
          </label>
        </div>
      </div>
     

            </div>
  )
}

export default CategorySidebar
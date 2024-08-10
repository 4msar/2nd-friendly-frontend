import React from "react";
import UserSidebar from "../UserSidebar";

const UserNotification = () => {
  return (
    <div class="body">
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <div class="border-bottom mb-2 pb-2">
            <h5 class="mb-0 mb-sm-0 text-danger pb-0">Email Notifications</h5>
            <p class="mb-0">Choose type of notifications you want to receive</p>
          </div>
          <h6 class="mb-2">Get email updates about</h6>
          <div class="form-check form-switch form-check-md mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkPrivacy1"
              checked
            />
            <label class="form-check-label" for="checkPrivacy1">
              Friend requests
            </label>
          </div>
          <div class="form-check form-switch form-check-md mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkPrivacy2"
            />
            <label class="form-check-label" for="checkPrivacy2">
              New followers
            </label>
          </div>
          <div class="form-check form-switch form-check-md mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkPrivacy3"
              checked
            />
            <label class="form-check-label" for="checkPrivacy3">
              Compliments and direct messages
            </label>
          </div>
          <div class="form-check form-switch form-check-md mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkPrivacy4"
            />
            <label class="form-check-label" for="checkPrivacy4">
              Content your friends share with you
            </label>
          </div>
          <div class="form-check form-switch form-check-md mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkPrivacy5"
            />
            <label class="form-check-label" for="checkPrivacy5">
              Messages from business owners
            </label>
          </div>
          <div class="form-check form-switch form-check-md mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkPrivacy6"
            />
            <label class="form-check-label" for="checkPrivacy6">
              Status of your business info edits
            </label>
          </div>
          <div class="form-check form-switch form-check-md mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkPrivacy7"
            />
            <label class="form-check-label" for="checkPrivacy7">
              Contributions
            </label>
          </div>
          <h6 class="mb-2 mt-4">We'll also let you know about</h6>
          <div class="form-check form-switch form-check-md mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkPrivacy8"
              checked
            />
            <label class="form-check-label" for="checkPrivacy8">
              Businesses you might like
            </label>
          </div>
          <div class="form-check form-switch form-check-md mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkPrivacy9"
            />
            <label class="form-check-label" for="checkPrivacy9">
              2nd A Friendly tips and tricks
            </label>
          </div>
          <div class="form-check form-switch form-check-md mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkPrivacy10"
              checked
            />
            <label class="form-check-label" for="checkPrivacy10">
              Suggested businesses to review
            </label>
          </div>
          <div class="form-check form-switch form-check-md mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkPrivacy11"
            />
            <label class="form-check-label" for="checkPrivacy11">
              Discounts and promotions
            </label>
          </div>
          <div class="form-check form-switch form-check-md mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkPrivacy12"
            />
            <label class="form-check-label" for="checkPrivacy12">
              The Local 2nd A Friendly for your areas
            </label>
          </div>
          <div class="form-check form-switch form-check-md mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkPrivacy13"
            />
            <label class="form-check-label" for="checkPrivacy13">
              Restaurant News
            </label>
          </div>
          <div class="form-check form-switch form-check-md mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkPrivacy14"
            />
            <label class="form-check-label" for="checkPrivacy14">
              New questions you can answer
            </label>
          </div>
          <div class="form-check form-switch form-check-md mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkPrivacy15"
            />
            <label class="form-check-label" for="checkPrivacy15">
              Surveys
            </label>
          </div>
          <div class="form-check form-switch form-check-md mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkPrivacy16"
            />
            <label class="form-check-label" for="checkPrivacy16">
              Neighborhoods
            </label>
          </div>
          <div class="form-check form-switch form-check-md mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkPrivacy17"
            />
            <label class="form-check-label" for="checkPrivacy17">
              Feedback on businesses you've contacted
            </label>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 ">
          <div class="border-bottom mb-2 pb-2">
            <h5 class="mb-0 mb-sm-0 text-danger pb-0">Push Notifications</h5>
            <p class="mb-0">Choose type of notifications you want to receive</p>
          </div>
          <h6 class="mb-2">Friend activity</h6>
          <div class="form-check form-switch form-check-md mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkPrivacy18"
              checked
            />
            <label class="form-check-label" for="checkPrivacy18">
              By friends in your city
            </label>
          </div>
          <div class="form-check form-switch form-check-md mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkPrivacy19"
            />
            <label class="form-check-label" for="checkPrivacy19">
              By friends in all cities
            </label>
          </div>
          <h6 class="mb-2 mt-4">Reactions to your posts</h6>
          <div class="form-check form-switch form-check-md mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkPrivacy20"
              checked
            />
            <label class="form-check-label" for="checkPrivacy20">
              Review votes
            </label>
          </div>
          <div class="form-check form-switch form-check-md mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkPrivacy21"
            />
            <label class="form-check-label" for="checkPrivacy21">
              Check-in comments
            </label>
          </div>
          <div class="form-check form-switch form-check-md mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkPrivacy22"
              checked
            />
            <label class="form-check-label" for="checkPrivacy22">
              Check-in likes
            </label>
          </div>
          <div class="form-check form-switch form-check-md mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkPrivacy23"
            />
            <label class="form-check-label" for="checkPrivacy23">
              Tip likes
            </label>
          </div>
          <div class="form-check form-switch form-check-md mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkPrivacy24"
            />
            <label class="form-check-label" for="checkPrivacy24">
              Photo and video likes
            </label>
          </div>
          <div class="form-check form-switch form-check-md mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkPrivacy25"
            />
            <label class="form-check-label" for="checkPrivacy25">
              Compliments
            </label>
          </div>
          <div class="form-check form-switch form-check-md mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkPrivacy26"
            />
            <label class="form-check-label" for="checkPrivacy26">
              Direct messages
            </label>
          </div>
          <div class="form-check form-switch form-check-md mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkPrivacy27"
            />
            <label class="form-check-label" for="checkPrivacy27">
              Helpful answers
            </label>
          </div>
          <div class="form-check form-switch form-check-md mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkPrivacy28"
            />
            <label class="form-check-label" for="checkPrivacy28">
              Review Comments
            </label>
          </div>
          {/* <!-- Student notification --> */}
          <h6 class="mb-2 mt-4">From 2ndA Friendly</h6>
          <div class="form-check form-switch form-check-md mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkPrivacy29"
              checked
            />
            <label class="form-check-label" for="checkPrivacy29">
              Deals and announcements
            </label>
          </div>
          <div class="form-check form-switch form-check-md mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkPrivacy30"
            />
            <label class="form-check-label" for="checkPrivacy30">
              Businesses you might like
            </label>
          </div>
          <div class="form-check form-switch form-check-md mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkPrivacy31"
            />
            <label class="form-check-label" for="checkPrivacy31">
              Suggested businesses to review
            </label>
          </div>
          <div class="form-check form-switch form-check-md mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkPrivacy32"
            />
            <label class="form-check-label" for="checkPrivacy32">
              Updates on your views
            </label>
          </div>
          <div class="form-check form-switch form-check-md mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkPrivacy33"
            />
            <label class="form-check-label" for="checkPrivacy33">
              Surveys
            </label>
          </div>
          <div class="form-check form-switch form-check-md mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkPrivacy34"
            />
            <label class="form-check-label" for="checkPrivacy34">
              Collections updates
            </label>
          </div>
          <div class="form-check form-switch form-check-md mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkPrivacy35"
            />
            <label class="form-check-label" for="checkPrivacy35">
              Businesses You Hired
            </label>
          </div>
          <div class="form-check form-switch form-check-md mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkPrivacy36"
            />
            <label class="form-check-label" for="checkPrivacy36">
              Neighborhoods
            </label>
          </div>
          <div class="form-check form-switch form-check-md mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkPrivacy37"
            />
            <label class="form-check-label" for="checkPrivacy37">
              Order and purchase updates
            </label>
          </div>
          <div class="form-check form-switch form-check-md mb-2">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkPrivacy38"
            />
            <label class="form-check-label" for="checkPrivacy38">
              Waitlist updates
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNotification;

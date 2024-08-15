import React from "react";

const UserDeleteAccount = () => {
  return (
    <div>
      <h5>Before you go...</h5>
      <ul>
        <li>
          Take a backup of your data <a href="#">Here</a>
        </li>
        <li>If you delete your account, you will lose your all data.</li>
      </ul>
      <div class="form-check form-check-md my-4">
        <input class="form-check-input" type="checkbox" value="" id="" />
        <label class="form-check-label" for="">
          Yes, I'd like to delete my account
        </label>
      </div>
      <a href="#" class="btn btn-sm btn-blue me-2">
        Keep my account
      </a>
      <a href="#" class="btn btn-sm btn-danger">
        Delete my account
      </a>
    </div>
  );
};

export default UserDeleteAccount;

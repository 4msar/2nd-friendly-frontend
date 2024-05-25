import React from "react";

const Person = ({person}) => {
  return (
    <div class="text-center">
      {/* <!-- Avatar --> */}
      <div class="avatar avatar-xxl mb-3">
        <img
          class="avatar-img rounded-circle"
          src={person.img.src}
          alt="avatar"
        />
      </div>
      {/* <!-- Info --> */}
      <h6 class="mb-0">
        <a href="#">{person.name}</a>
      </h6>
      <p class="mb-0 small">{person.designation}</p>
      {/* <!-- Rating --> */}
      <ul class="list-inline mb-0">
        <li class="list-inline-item me-0 small">
          <i class="fas fa-star text-warning"></i>
        </li>
        <li class="list-inline-item me-0 small">
          <i class="fas fa-star text-warning"></i>
        </li>
        <li class="list-inline-item me-0 small">
          <i class="fas fa-star text-warning"></i>
        </li>
        <li class="list-inline-item me-0 small">
          <i class="fas fa-star text-warning"></i>
        </li>
        <li class="list-inline-item me-0 small">
          <i class="fas fa-star-half-alt text-warning"></i>
        </li>
      </ul>
    </div>
  );
};

export default Person;

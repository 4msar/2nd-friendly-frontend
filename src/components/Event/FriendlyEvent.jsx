import Link from "next/link";
import React from "react";

const FriendlyEvent = ({ item }) => {
  return (
    <div class="row gx-2 mb-2 pb-2">
      <div class="col-3">
        <img class="rounded-1" src={item.img.src} alt="" />
      </div>
      <div class="col-9">
        <h6 class="mb-1">
          <Link href="#">
            {item.title}
          </Link>
        </h6>
        <p class="mt-0 mb-0 fst-italic small">{item.date}</p>
      </div>
    </div>
  );
};

export default FriendlyEvent;

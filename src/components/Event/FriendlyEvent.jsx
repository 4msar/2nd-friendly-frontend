import Link from "next/link";
import React from "react";

const FriendlyEvent = ({ item }) => {
  return (
    <div className="row gx-2 mb-2 pb-2">
      <div className="col-3">
        <img className="rounded-1" src={item.img.src} alt="" />
      </div>
      <div className="col-9">
        <h6 className="mb-1">
          <Link href="#">
            {item.title}
          </Link>
        </h6>
        <p className="mt-0 mb-0 fst-italic small">{item.date}</p>
      </div>
    </div>
  );
};

export default FriendlyEvent;

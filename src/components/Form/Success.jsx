import Link from "next/link";
import React from "react";

const Success = () => {
  return (
    <div id="success">
      <div class="mt-5">
        <h4>Success! We'll get back to you ASAP!</h4>
        <p>
          Meanwhile, clean your hands often, use soap and water, or an
          alcohol-based hand rub, maintain a safe distance from anyone who is
          coughing or sneezing and always wear a mask when physical distancing
          is not possible.
        </p>
        <Link class="back-link" href="">
          Go back from the beginning ➜
        </Link>
      </div>
    </div>
  );
};

export default Success;

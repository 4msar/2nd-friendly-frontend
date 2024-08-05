import { capitalize } from "@/helpers/functions";

const CategoryBox = ({ icon, title, subtitle, url, index=1 }) => {
  return (
    <div class="col-sm-6 col-lg-4 col-xl-4" key={index}>
      <div class="card card-body shadow rounded-3">
        <div class="d-flex align-items-center">
          <div class={`icon-lg ${index%2 === 0 ? 'bg-purple text-purple' : 'bg-danger text-danger'} bg-opacity-15 rounded-circle`}>
            <i class={icon}></i>
          </div>
          <div class="ms-3">
            <h5 class="mb-0">
              <a href={url} class="stretched-link">
                {capitalize(title)}
              </a>
            </h5>
            <span>{`${subtitle} Sub Categories`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBox;

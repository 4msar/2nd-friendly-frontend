import Link from "next/link";
import { useRouter } from "next/router";

const SidebarInformation = ({ profile }) => {
  const router = useRouter();
  const pathParts = router.asPath.split("/");
  const lastPart =
    pathParts[pathParts.length - 1] || pathParts[pathParts.length - 2];
  console.log(lastPart);
  return (
    <div className="" id="offcanvasSidebar">
      {/* <!-- Offcanvas header --> */}

      {/* <!-- Offcanvas body --> */}
      <div className="offcanvas-body p-3 p-xl-0">
        <div className="card h-100 w-100">
          <div className="align-items-center border-bottom mb-2">
            <h5 className="mb-2 clearfix">
              {profile?.business_name ?? "Business Name"}
              <Link href="#" className="fw-bold text-primary" target="_blank">
                <i className="fas fa-sm fa-fw fa-link"></i>
              </Link>
            </h5>
            <p className="small mb-0 mb-sm-0 pb-2">
              {`${profile?.zip}, ${profile?.Official_address_line1}, ${profile?.city}`}
            </p>
          </div>
          <div className="list-group list-group-dark list-group-borderless pt-1 ps-0">
            <Link
              className={`list-group-item mb-1 text-dark fw-normal bg-danger-soft-hover ${
                lastPart === "categories" ? "active" : ""
              }`}
              href="/business/categories"
            >
              <i className="fas fa-network-wired"></i> Categories
            </Link>
            <Link
              className={`list-group-item mb-1 text-dark fw-normal bg-danger-soft-hover ${
                lastPart === "amenities" ? "active" : ""
              }`}
              href="/business/amenities"
            >
              <i className="fas fa-bullhorn"></i> Amenities
            </Link>
            <Link
              className={`list-group-item mb-1 text-dark fw-normal bg-danger-soft-hover ${
                lastPart === "hours-of-operation" ? "active" : ""
              }`}
              href="/business/hours-of-operation"
            >
              <i className="fas fa-business-time"></i> Hours of Operation
            </Link>
            <Link
              className={`list-group-item mb-1 text-dark fw-normal bg-danger-soft-hover ${
                lastPart === "album" ? "active" : ""
              }`}
              href="/business/album"
            >
              <i className="fas fa-camera-retro"></i> Photos
            </Link>
            <Link
              className={`list-group-item mb-1 text-dark fw-normal bg-danger-soft-hover ${
                lastPart === "videos" ? "active" : ""
              }`}
              href="/business/videos"
            >
              <i className="fas fa-file-video"></i> Videos
            </Link>
            <Link
              className={`list-group-item mb-1 text-dark fw-normal bg-danger-soft-hover ${
                lastPart === "reviews" ? "active" : ""
              }`}
              href="/business/reviews"
            >
              <i className="fas fa-star"></i> Reviews
            </Link>
            <Link
              className={`list-group-item mb-1 text-dark fw-normal bg-danger-soft-hover ${
                lastPart === "message" ? "active" : ""
              }`}
              href="/business/message"
            >
              <i className="fas fa-envelope-open"></i> Messages
            </Link>
            <Link
              className={`list-group-item mb-1 text-dark fw-normal bg-danger-soft-hover ${
                lastPart === "events" ? "active" : ""
              }`}
              href="/business/events"
            >
              <i className="fab fa-envira"></i> Events
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarInformation;

import Link from "next/link";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

const SidebarInformation = React.memo(({ profile }) => {
  const router = useRouter();

  const lastPart = useMemo(() => {
    const pathParts = router.asPath.split("/");
    return pathParts[pathParts.length - 1] || pathParts[pathParts.length - 2];
  }, [router.asPath]);

  const links = useMemo(
    () => [
      {
        href: "/business/categories",
        icon: "fas fa-network-wired",
        label: "Categories",
        key: "categories"
      },
      {
        href: "/business/amenities",
        icon: "fas fa-plus",
        label: "Amenities",
        key: "amenities"
      },
      {
        href: "/business/offers-and-operation",
        icon: "fas fa-gift",
        label: "Offers & Operation",
        key: "hours-of-operation"
      },
      {
        href: "/business/business-highlight-points",
        icon: "fas fa-bullhorn",
        label: "Business Highlight Points",
        key: "hours-of-operation"
      },
      {
        href: "/business/hours-of-operation",
        icon: "fas fa-business-time",
        label: "Hours of Operation",
        key: "hours-of-operation"
      },
      {
        href: "/business/album",
        icon: "fas fa-camera-retro",
        label: "Photos",
        key: "album"
      },
      {
        href: "/business/videos",
        icon: "fas fa-file-video",
        label: "Videos",
        key: "videos"
      },
      {
        href: "/business/reviews",
        icon: "fas fa-star",
        label: "Reviews",
        key: "reviews"
      },
      {
        href: "/business/message",
        icon: "fas fa-envelope-open",
        label: "Messages",
        key: "message"
      },
      {
        href: "/business/events",
        icon: "fab fa-envira",
        label: "Events",
        key: "events"
      },
      {
        href: "/business/careers",
        icon: "fab fa-envira",
        label: "Careers",
        key: "careers"
      },
      {
        href: "/business/support",
        icon: "fa fa-handshake fa-m",
        label: "Support",
        key: "support"
      }
    ],
    []
  );

  return (
    <div className="" id="offcanvasSidebar">
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
              {`${profile?.zip ?? "1000"}, ${
                profile?.Official_address_line1 ?? "Dallas"
              }, ${profile?.city ?? "Texas"}`}
            </p>
          </div>
          <div className="list-group list-group-dark list-group-borderless pt-1 ps-0">
            {links.map((link) => (
              <a
                key={link.key}
                className={`list-group-item mb-1 text-dark fw-normal bg-danger-soft-hover ${
                  lastPart === link.key ? "active" : ""
                }`}
                href={link.href}
              >
                <i className={link.icon}></i> {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default SidebarInformation;

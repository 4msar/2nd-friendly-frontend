import React, { useMemo } from "react";
import user2 from "@/assets/img/user/user-4.jpg";
import Link from "next/link";
import { useRouter } from "next/router";
import { IMAGE_URL } from "@/helpers/apiUrl";
import { useCustomerAboutStore } from "@/store/useCustomerAboutStore";
const UserSidebar = React.memo(({profile}) => {
  const customer = useCustomerAboutStore((state) => state.customer);
  const customerProfile = useCustomerAboutStore((state) => state.customerProfile);
  const router = useRouter();

  const lastPart = useMemo(() => {
    const pathParts = router.asPath.split('/');
    return pathParts[pathParts.length - 1] || pathParts[pathParts.length - 2];
  }, [router.asPath]);
 
  const links = useMemo(() => [
    { href: '/user/message', icon: 'fas fa-envelope-open', label: 'Messages', key: 'message' },
    { href: '/user/reviews', icon: 'fas fa-star', label: 'Reviews', key: 'reviews' },
    { href: '/user/wishlist', icon: 'fa fa-check-square fa-m', label: 'Wishlist', key: 'wishlist' },
    { href: '/user/careers', icon: 'fab fa-envira', label: 'Careers', key: 'careers' },
    { href: '/user/support', icon: 'fa fa-handshake fa-m', label: 'Support', key: 'support' }
  ], []);

  return ( 
    <div className="" tabindex="-1" id="offcanvasSidebar">
      
      <div className="offcanvas-body p-3 p-xl-0">
        <div className="card h-100 w-100 border-right">
          <div className="d-sm-flex justify-content-sm-between align-items-center mb-2 border-bottom pb-2">
            <div className="d-flex align-items-center">
              <div className="avatar avatar-lg">
                <img
                  className="avatar-img rounded-circle"
                  src={customerProfile?.image ? `${IMAGE_URL}/uploads/customer-image/${customerProfile?.image}` : user2.src}
                  alt="avatar"
                />
              </div>
              <div className="ms-2">
                <h5 className="mb-0">{customer?.first_name ?? "Jahangir Hossain"}</h5>
                <p className="small mb-0 mb-sm-0 pb-0">{customer?.email ?? "account@redwood.com"}</p>
              </div>
            </div>
          </div> 
          <div className="list-group list-group-dark list-group-borderless pt-1 ps-0">
          {links.map(link => (
              <Link
                key={link.key}
                className={`list-group-item mb-1 text-dark fw-normal bg-danger-soft-hover ${lastPart === link.key ? 'active' : ''}`}
                href={link.href}
              >
                <i className={link.icon}></i> {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default UserSidebar;

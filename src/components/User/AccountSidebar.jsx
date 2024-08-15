import { IMAGE_URL } from "@/helpers/apiUrl";
import { useBusinessAboutStore, useUserStore } from "@/store";
import { useCustomerAboutStore } from "@/store/useCustomerAboutStore";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

const UserAccountSidebar = () => {
  const customer = useCustomerAboutStore((state) => state.customer);
  const customerProfile = useCustomerAboutStore((state) => state.customerProfile);
    const router = useRouter();

    const lastPart = useMemo(() => {
      const pathParts = router.asPath.split('/');
      return pathParts[pathParts.length - 1] || pathParts[pathParts.length - 2];
    }, [router.asPath]);
    const links = useMemo(() => [
      { href: '/user/account-information', icon: 'bi bi-pencil-square fa-fw me-2', label: 'Account Information', key: 'account-information' },
      { href: '/user/notifications', icon: 'fas fa-bullhorn', label: 'Notifications', key: 'notifications' },
      { href: '/user/external-applications', icon: 'fas fa-business-time', label: 'External Applications', key: 'external-applications' },
      { href: '/user/security-settings', icon: 'fas fa-m fa-fw me-10px fa-lock', label: 'Security Settings', key: 'security-settings' },
      { href: '/user/privacy-settings', icon: 'fas fa-cog fa-m', label: 'Privacy Settings', key: 'privacy-settings' },
      { href: '/user/delete-profile', icon: 'fas fa-trash fa-m me-2', label: 'Delete Profile', key: 'delete-profile' },
      { href: '/user/activity-logs', icon: 'fab fa-envira', label: 'Activity Logs', key: 'activity-logs' },
      
    ], []);
  return (
    <div class="" tabindex="-1" id="offcanvasSidebar">
      
      <div class="offcanvas-body p-3 p-xl-0">
        <div class="card h-100 w-100 border-right">
          <div class="d-sm-flex justify-content-sm-between align-items-center mb-2 pt-0 pb-2 border-bottom">
            <div class="d-flex align-items-center">
              <div class="avatar avatar-lg">
                <img
                  class="avatar-img rounded-circle"
                  src={`${IMAGE_URL}/uploads/customer-image/${customerProfile?.image}`}
                  alt="avatar"
                />
              </div>
              <div class="ms-2">
                <h5 class="mb-0">{`${customer?.first_name} ${customer?.last_name}` ?? "Arielle Norheim"}</h5>
                <p class="small mb-0 mb-sm-0 pb-0">{customer?.email ?? "arinorheim@hotmail.com"}</p>
              </div>
            </div>
          </div>
          <div class="list-group list-group-dark list-group-borderless pt-1 ps-0">
          {links.map((link, index) => (
            <a
              key={index}
              class={`list-group-item mb-1 text-dark fw-normal bg-danger-soft-hover ${lastPart === link.key ? 'active' : ''}`}
              href={link.href}
            >
              <i class={link.icon}></i>{link?.label}
            </a>
            ))}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAccountSidebar;

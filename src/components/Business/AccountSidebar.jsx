import { IMAGE_URL } from "@/helpers/apiUrl";
import { useBusinessAboutStore } from "@/store";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

const AccountSidebar = () => {
    const userProfile = useBusinessAboutStore((state) => state.businessProfile);
    const router = useRouter();

    const lastPart = useMemo(() => {
      const pathParts = router.asPath.split('/');
      return pathParts[pathParts.length - 1] || pathParts[pathParts.length - 2];
    }, [router.asPath]);
    const links = useMemo(() => [
      { href: '/business/about-the-business', icon: 'bi bi-pencil-square fa-fw me-2', label: 'Account Information', key: 'about-the-business' },
      { href: '/business/notifications', icon: 'fas fa-bullhorn', label: 'Notifications', key: 'notifications' },
      { href: '/business/external-applications', icon: 'fas fa-business-time', label: 'External Applications', key: 'external-applications' },
      { href: '/business/security-settings', icon: 'fas fa-m fa-fw me-10px fa-lock', label: 'Security Settings', key: 'security-settings' },
      { href: '/business/privacy-settings', icon: 'fas fa-cog fa-m', label: 'Privacy Settings', key: 'privacy-settings' },
      { href: '/business/delete-profile', icon: 'fas fa-trash fa-m me-2', label: 'Delete Profile', key: 'delete-profile' },
      { href: '/business/activity-logs', icon: 'fab fa-envira', label: 'Activity Logs', key: 'activity-logs' },
      
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
                  src={`${IMAGE_URL}/uploads/business-logo/${userProfile?.business_logo}`}
                  alt="avatar"
                />
              </div>
              <div class="ms-2">
                <h5 class="mb-0">{userProfile?.business_name ?? "Arielle Norheim"}</h5>
                <p class="small mb-0 mb-sm-0 pb-0">{userProfile?.official_email ?? "arinorheim@hotmail.com"}</p>
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

export default AccountSidebar;

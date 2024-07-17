import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BusinessHeader from '../Header/BusinessHeader';
import Head from 'next/head';
import useToken from '@/hooks/useToken';
import { useAuthStore } from '@/store';

const BusinessView = (WrapperComponent, title) => {
    const BusinessComponent = (props) => {
        const router = useRouter();
        const isAuthenticated = useToken();
        const userProfile = useAuthStore((state) => state.user);
        useEffect(() => {
          // Check if the user is authenticated, for example by checking a token in localStorage
         
          
          if (!isAuthenticated) {
            // If the user is not authenticated, redirect them to the login page
            router.push('/sign-in-business');
          }

          if(isAuthenticated && !userProfile?.isBusiness){ 
            router.push('/');
          }
        }, [router]);
    
        // If the user is authenticated, render the wrapped component
        return (
            <>
                <Head>
                    <title>{title} | 2nd A Friendly</title>
                </Head>
                <BusinessHeader />
                    <WrapperComponent {...props}  />
                <Footer />
            </>
        );
      };
    
      return BusinessComponent;
}

export default BusinessView
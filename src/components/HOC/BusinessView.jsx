import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BusinessHeader from '../Header/BusinessHeader';

const BusinessView = (WrapperComponent) => {
    const BusinessComponent = (props) => {
        // const router = useRouter();
    
        // useEffect(() => {
        //   // Check if the user is authenticated, for example by checking a token in localStorage
        //   const isAuthenticated = localStorage.getItem('token');
          
        //   if (!isAuthenticated) {
        //     // If the user is not authenticated, redirect them to the login page
        //     router.push('/login');
        //   }
        // }, []);
    
        // If the user is authenticated, render the wrapped component
        return (
            <>
                <BusinessHeader />
                    <WrapperComponent {...props}  />
                <Footer />
            </>
        );
      };
    
      return BusinessComponent;
}

export default BusinessView
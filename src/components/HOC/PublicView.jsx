import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const PublicView = (WrapperComponent) => {
    const PublicComponent = (props) => {
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
                <Header />
                    <WrapperComponent {...props}  />
                <Footer />
            </>
        );
      };
    
      return PublicComponent;
}

export default PublicView
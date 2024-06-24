import React from 'react'
import UserHeader from '../Header/UserHeader';
import Head from 'next/head';
import Footer from '../Footer/Footer';

 const UserView = (WrapperComponent, title) => {
    const UserViewComponent = (props) => {
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
             <Head>
                <title>{title} | 2nd A Friendly</title>
            </Head>
                <UserHeader />
                    <WrapperComponent {...props}  />
                <Footer />
            </>
        );
      };
    
      return UserViewComponent;
}

export default UserView

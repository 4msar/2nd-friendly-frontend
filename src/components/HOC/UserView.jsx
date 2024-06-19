import React from 'react'

 const UserView = () => {
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
                <BusinessHeader />
                    <WrapperComponent {...props}  />
                <Footer />
            </>
        );
      };
    
      return UserViewComponent;
}

export default UserView

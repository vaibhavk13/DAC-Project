import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignIn from '../Login/SignIn';
import SignUp from '../Login/SignUp';
import Home from '../Home/Home';
import AboutUs from '../About  Us/AboutUs';
import FeedbackForm from '../Feedback Form/FeedbackForm';
import QueryForm from '../QueryForm/QueryForm';
import ContactUs from '../Contact Us/ContactUs';
import Blog from '../Blogs/Blogs';
import ArtistBooking from '../Artist Booking/ArtistBooking';
import ArtistRegistration from '../Artist Registration/ArtistRegistration';
import Artist from '../Artist/Artist';
import ArtistPage from '../Artist/ArtistPage';
import CreateBlogs from '../Forms/BlogsForm';
import PrivacyPolicy from '../Footer/PrivacyPolicy';
import TermsAndConditions from '../Footer/TermsAndConditions';
import Events from '../Events/Events';
import UserProfile from '../Profile/UserProfile';
import Help from '../Footer/Help';
import ErrorBoundary from '../Error/ErrorBoundary';



const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <SignIn />,
    },
    {
      path: '/signup',
      element: <SignUp />,
    },
    {
      path: '/home',
      element: <Home />,
    },
    {
        path: '/aboutus',
        element: <AboutUs />,
      },
      {
        path: '/blogs',
        element: <Blog />,
      },
      {
        path: '/createblogs',
        element: <CreateBlogs />,
      },
      {
        path: '/artists',
        element: <Artist />,
      },
      {
        path: "/artist/:id",
        element: <ArtistPage />
      },
      {
        path: '/booking',
        element: <ArtistBooking />,
      },
      {
        path: '/registration',
        element: <ArtistRegistration />,
      },
      
      {
        path: '/contactus',
        element: <ContactUs />,
      },
    
      {
        path: '/feedbackform',
        element: <FeedbackForm />,
      },
      {
        path: '/queryform',
        element: <QueryForm />,
      },
      {
        path: '/privacypolicy',
        element: <PrivacyPolicy />,
      },
      {
        path: '/help',
        element: <Help />,
      },
      {
        path: '/termsAndconditions',
        element: <TermsAndConditions />,
      },
      {
        path: '/events',
        element: <Events />,
      },
      {
        path: '/userprofile',
        element: <UserProfile/>,
      },
      { path: '*', element: <ErrorBoundary /> }
    
    
  
  ]);

  return (
    <RouterProvider router={appRouter} />
  );
}

export default Body;

import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from './Footer'

const Help = () => {

    const [titleVisible, setTitleVisible] = useState(false);

    const handleScroll = () => {
      const titleSection = document.getElementById('title');
      if (titleSection && titleSection.getBoundingClientRect().top <= window.innerHeight) {
        setTitleVisible(true);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const sections = [
      {
        id: 'login',
        title: 'User Login - Sign In/Up',
        content: `
        Users with an existing account can sign in using their registered email and password. The "Forgot Password" link allows users to reset their password if they have forgotten it.
        Those who already have an account can log in with their password and registered email. The "Forgot Password" link allows users to reset their password if they have forgotten it.
        `,
      },
      {
        id: 'home',
        title: 'Home',
        content: `
          The Home page is the landing page where users are introduced to the GetYourArtist platform. It has testimonies, an overview of the services provided, and a list of the featured 
          artists. Via the menu, users can access additional areas of the website, including Blogs, Contact Us, Events, Book Artist, and About Us.
        `,
      },
      {
        id: 'about',
        title: 'About Us',
        content: `
          This page contains information about GetYourArtist, such as the company's history, vision, and mission. Links to the business's social media profiles and general contact 
          details are available to users.
        `,
      },
      {
        id: 'book',
        title: 'Book Artist',
        content: `
          Users can search for artists based on categories such as music, dance, photography, etc. They can also apply filters based on location, availability etc.Once a user selects an 
          artist, they can view the artist's profile, which includes a portfolio, biography, and reviews.Users can book an artist by selecting an event date, filling out event details, and 
          giving organization details.Confirmation will be sent via email once the booking is complete.
        `,
      },
      {
        id: 'register',
        title: 'Register',
        content: `
          Artists can sign up to be listed on the platform by filling out their personal details, uploading a profile picture, and providing samples of their work through images or videos. 
          After registration, artists can manage their profiles, respond to booking requests, and showcase their talents to a broad audience.
        `,
      },
      {
        id: 'events',
        title: 'Events Page',
        content: `
          Users can browse through a list of upcoming events where GetYourArtist artists will be performing.Each event has its own page where users can find detailed information,
          including the date, time, venue, and a list of performing artists.
        `,
      },
      {
        id: 'blogs',
        title: 'Blogs',
        content: `
          This page lists all the blogs posted on the platform. Users can browse through different blog posts based on categories like tips for event planning, 
          artist spotlights, etc. Clicking on a blog title will take users to the full blog post where they can read.
        `,
      },
      {
        id: 'contact',
        title: 'Contact Us',
        content: `
          Users can find the company’s contact details, including email and phone number, on this page. Users can submit feedback about their experience on the platform. 
          The form includes options to rate their experience, type of feedback, and a description field for detailed comments.This form allows users to ask questions or seek information 
          about specific services or features. Users need to provide their name, email, and query details before submitting the form.
        `,
      },
    ];


  return (
    <div>
        <Navbar/>

        <div className="relative min-h-screen bg-cover bg-center bg-no-repeat">
      <div className=" bg-opacity-60 p-10">
        <div className="container mx-auto">
          <div className="text-center text-black" id="title">
            <h1 className={`text-2xl text-red-700 font-bold mb-6 ${titleVisible ? 'animate-fade-in' : 'opacity-0'}`}>Help Center</h1>
            <p className='text-black font-bold text-xm justify-center'>✮ ✮ ✮ Welcome to the GetYourArtist Help Center — your go-to resource for guidance, tips, and support as you explore our platform. 
              Whether you're booking an artist, managing your profile, or seeking answers, we're here to assist you every step of the way. ✮ ✮ ✮</p>
          </div>

          <div className="space-y-10 text-black">
            {sections.map((section) => (
              <div key={section.id} className="transition-all transform duration-500 hover:scale-105 shadow-lg p-8 bg-opacity-50 bg-orange-100 rounded-lg">
                <h2 className="text-2xl font-bold mb-2">✮ {section.title}</h2>
                <p className="text-lg whitespace-pre-wrap text-left font-semibold">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
        
        
        <Footer/>
    </div>
  )
}

export default Help


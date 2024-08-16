import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);
    const scrollIntervalRef = useRef(null);
    const navigate = useNavigate();

    const events = [
        { src: "/Images/Event1.jpg", alt: "Event 1" },
        { src: "/Images/Event2.jpg", alt: "Event 2" },
        { src: "/Images/Event3.jpg", alt: "Event 3" },
        { src: "/Images/Event4.jpg", alt: "Event 4" },
        { src: "/Images/Event5.jpg", alt: "Event 5" }
    ];

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
        }, 60000); // Change image every 60 seconds
        return () => clearInterval(intervalRef.current);
    }, [events.length]);

    useEffect(() => {
        const autoScroll = () => {
            const container = document.querySelector('.auto-scroll-container');
            if (container) {
                container.scrollBy({
                    left: 2000,
                    behavior: 'smooth'
                });
            }
        };

        scrollIntervalRef.current = setInterval(autoScroll, 2000); // Scroll every 2 seconds
        return () => clearInterval(scrollIntervalRef.current);
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
    };

    const handleImageClick = () => {
        navigate('/events');
    };

    return (
        <div className="overflow-hidden">
            <Navbar username="Akanksha" onLogout={() => { }} />

            <div className="relative w-full h-screen bg-cover bg-center transition-transform zoom-in-animation mt-10" style={{ backgroundImage: "url('/Images/HomeMain.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10 container mx-auto px-4 py-16 text-center text-white">
                    <h1 className="text-4xl font-bold mb-8 mt-60">Celebrating Creativity, Connecting Talent</h1>
                    <p className="text-xl mb-12">
                        Discover the best artists and talents for your events. From music to performances, we connect you with exceptional talent to make your occasion memorable.
                    </p>
                </div>

                {/* Inline CSS for Animations */}
                <style jsx>{`
                    .zoom-in-animation {
                        animation: zoomIn 10s ease-in-out infinite;
                    }

                    @keyframes zoomIn {
                        0% {
                            transform: scale(1);
                        }
                        50% {
                            transform: scale(1.1);
                        }
                        100% {
                            transform: scale(1);
                        }
                    }
                `}</style>

                {/* Image Cards Section */}
                <div className="absolute bottom-0 w-full bg-black py-4">
                    <div className="container mx-auto overflow-hidden px-4 flex gap-4 items-center auto-scroll-container" style={{ whiteSpace: 'nowrap' }}>
                        <div className="flex gap-4">
                            <img src="/Images/HC1_c.jpg" alt="Drums" className="w-64 h-32 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform" />
                            <img src="/Images/HC1_a.jpg" alt="Stage" className="w-64 h-32 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform" />
                            <img src="/Images/HC1_d.jpg" alt="Piano" className="w-64 h-32 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform" />
                            <img src="/Images/HC1_b.jpg" alt="Paintbrushes" className="w-64 h-32 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform" />
                            <img src="/Images/HC1_e.jpg" alt="Comedy" className="w-64 h-32 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform" />
                            <img src="/Images/HC1_f.jpg" alt="Drums" className="w-64 h-32 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform" />
                            <img src="/Images/HC1_g.jpg" alt="Stage" className="w-64 h-32 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform" />
                            <img src="/Images/HC1_h.jpg" alt="Piano" className="w-64 h-32 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform" />
                            <img src="/Images/HC1_i.jpg" alt="Paintbrushes" className="w-64 h-32 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform" />
                            <img src="/Images/HC1_j.jpg" alt="Comedy" className="w-64 h-32 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform" />
                        </div>
                    </div>
                </div>
            </div>

            <section className="py-12 px-6 bg-orange-100 mt-6 mx-5">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center text-red-700 mb-6">About Us</h2>
                    <p className="text-lg text-gray-800 mb-6 mx-auto max-w-3xl text-center">
                        Get Your Artist is your premier destination for booking top-tier artists for any occasion. Whether you're organizing a private gathering, a corporate event, or a grand public concert, our goal is to connect you with the ideal talent to elevate your event.
                        We strive to offer a smooth and efficient experience for both event planners and artists. Our platform is designed to facilitate the perfect match between event needs and artist capabilities, ensuring that every event is unforgettable.
                        <br /><br />
                        Explore our platform to discover extraordinary talent and let us help bring your vision to life with excellence and flair!
                    </p>
                </div>
            </section>

            {/* Artist Details Section */}
            <section className="py-12 px-6 bg-orange-100 mt-6 mx-5">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center text-red-700 mb-6">Some Featured Artists...</h2>
                    <div className="overflow-hidden whitespace-nowrap flex gap-4 items-center">
                        <div className="flex gap-4">
                            <Link to="/artistid" className="inline-block w-64 h-80 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                                <img src="/Images/ArtistProfile1.png" alt="Artist 1" className="w-full h-2/3 object-cover rounded-t-lg" />
                                <div className="p-4">
                                    <h3 className="text-xl font-bold">Liam Johnson</h3>
                                    <p className="text-gray-700">Singer/Songwriter</p>
                                </div>
                            </Link>
                            <Link to="//artist/:id" className="inline-block w-64 h-80 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                                <img src="/Images/ArtistProfile2.png" alt="Artist 2" className="w-full h-2/3 object-cover rounded-t-lg" />
                                <div className="p-4">
                                    <h3 className="text-xl font-bold">Emma Davis</h3>
                                    <p className="text-gray-700">Jazz Singer/Songwriter</p>
                                </div>
                            </Link>
                            <Link to="//artist/:id" className="inline-block w-64 h-80 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                                <img src="/Images/ArtistProfile3.png" alt="Artist 3" className="w-full h-2/3 object-cover rounded-t-lg" />
                                <div className="p-4">
                                    <h3 className="text-xl font-bold">James Anderson</h3>
                                    <p className="text-gray-700">Visual Artist / Painter</p>
                                </div>
                            </Link>
                            <Link to="//artist/:id" className="inline-block w-64 h-80 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                                <img src="/Images/ArtistProfile4.png" alt="Artist 4" className="w-full h-2/3 object-cover rounded-t-lg" />
                                <div className="p-4">
                                    <h3 className="text-xl font-bold">Sophia Johnson</h3>
                                    <p className="text-gray-700">Dance Performer</p>
                                </div>
                            </Link>
                            <Link to="//artist/:id" className="inline-block w-64 h-80 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                                <img src="/Images/ArtistProfile5.png" alt="Artist 5" className="w-full h-2/3 object-cover rounded-t-lg" />
                                <div className="p-4">
                                    <h3 className="text-xl font-bold">Oliver Smith</h3>
                                    <p className="text-gray-700">Comedian</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Registration Section */}
            <section className="relative h-70 bg-cover bg-center mx-6 mt-4" style={{ backgroundImage: "url('/Images/HomeRegistration.png')" }}>
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10 container mx-auto text-center text-white py-16">
                    <h2 className="text-3xl font-bold mb-6">Ready to Take the Stage?</h2>
                    <p className="text-2xl mb-6">Join our community, showcase your talent, and connect with fans and clients.
                        Register Now!!</p>
                    <Link to="/registration">
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg">
                            Register now
                        </button>
                    </Link>
                </div>
            </section>

          
            {/* Events Section */}
            <section className="py-12 px-6 bg-red-100 mt-6 mx-5">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-red-700 mb-6">Upcoming Events</h2>
                    <div className="relative">
                        <button
                            onClick={handlePrevious}
                            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-red-700 text-white p-2 rounded-full focus:outline-none z-10"
                            aria-label="Previous"
                        >
                            &lt;
                        </button>
                        <div className="flex justify-center items-center overflow-hidden">
                            <div className="flex w-full max-w-screen-lg space-x-6">
                                <img
                                    src={events[currentIndex].src}
                                    alt={events[currentIndex].alt}
                                    className="w-60 object-cover rounded-lg cursor-pointer"
                                    onClick={handleImageClick} // Add click handler
                                />
                                <img
                                    src={events[(currentIndex + 1) % events.length].src}
                                    alt={events[(currentIndex + 1) % events.length].alt}
                                    className="w-60 object-cover rounded-lg cursor-pointer"
                                    onClick={handleImageClick} // Add click handler
                                />
                                <img
                                    src={events[(currentIndex + 2) % events.length].src}
                                    alt={events[(currentIndex + 2) % events.length].alt}
                                    className="w-60 object-cover rounded-lg cursor-pointer"
                                    onClick={handleImageClick} // Add click handler
                                />
                                <img
                                    src={events[(currentIndex + 3) % events.length].src}
                                    alt={events[(currentIndex + 3) % events.length].alt}
                                    className="w-60 object-cover rounded-lg cursor-pointer"
                                    onClick={handleImageClick} // Add click handler
                                />
                                {/* <img
                                    src={events[(currentIndex + 4) % events.length].src}
                                    alt={events[(currentIndex + 4) % events.length].alt}
                                    className="w-60 object-cover rounded-lg cursor-pointer"
                                    onClick={handleImageClick} // Add click handler
                                /> */}
                            </div>
                        </div>
                        <button
                            onClick={handleNext}
                            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-red-700 text-white p-2 rounded-full focus:outline-none z-10"
                            aria-label="Next"
                        >
                            &gt;
                        </button>
                    </div>
                </div>
            </section>



            <section className="py-12 px-6 bg-red-100 mt-6 mx-5">
                <div className="container mx-auto flex items-center">
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img
                            src="/Images/HomeBlogs.jpg"
                            alt="HomeBlog"
                            className="w-72 h-64 object-cover rounded-lg shadow-lg mr-2  transform transition-transform duration-300 ease-in-out  hover:bg-red-200 hover:scale-105 hover:-translate-x-2 hover:z-10"
                        />
                        <img
                            src="/Images/HomeBlogs2.jpg"
                            alt="HomeBlog"
                            className="w-72 h-64 object-cover rounded-lg shadow-lg 
                                        transform transition-transform duration-300 ease-in-out 
                                         hover:bg-red-200 hover:scale-105 hover:-translate-x-2 hover:z-10"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 lg:pl-6">
                        <p className="text-xl text-center text-red-700 text-gray-800 mb-6">
                            Dive into the World of Artistry: Explore Our Blogs for the Latest Trends, Tips, and Stories from the Performance Industry!

                        </p>
                        <div className="flex justify-center">
                            <Link to="/blogs">
                                <button className="bg-red-700 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-red-800">
                                    Blogs
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 px-6 bg-orange-100 mt-6 mx-5">
                <div className="container mx-auto flex flex-col items-center justify-center text-center">
                    <h3 className="text-3xl font-bold text-red-700 mb-4">Artistry Through the Lens</h3>
                    <img
                        src="/Images/HomeGallery.png"
                        alt="Home Gallery"
                        className="w-full max-w-screen-lg object-cover rounded-lg shadow-lg  transform transition-transform duration-300 ease-in-out  
            hover:bg-red-200 hover:scale-105 hover:-translate-x-2 hover:z-10"
                    />
                    <h3 className='text-center text-ornage-950 text-xl mt-10'><i>Discover a world of artistic excellence and create lasting memories by connecting with diverse talents through our platform—your gateway to unforgettable experiences and unparalleled artistry</i></h3>
                </div>
            </section>





            <Footer />
        </div>
    );
};

export default Home;

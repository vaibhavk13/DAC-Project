import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Blogs = () => {
  const [isOpenArt, setIsOpenArt] = useState(false);
  const [isOpenMusic, setIsOpenMusic] = useState(false);

  const toggleAccordionArt = () => {
    setIsOpenArt(!isOpenArt);
  };

  const toggleAccordionMusic = () => {
    setIsOpenMusic(!isOpenMusic);
  };

  return (
    <div>
      <Navbar />

      <div className="flex bg-black bg-opacity-90 p-8 mx-5 px-10">
        {/* Left Side: Text and Button with lighter background */}
        <div className="w-1/2 flex justify-center items-center pr-10">
          <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
            <p className="mb-6 text-center text-xl text-white">
              Share your unique insights and captivating stories with our community.
            </p>
            <Link to="/createblogs">
              <button className="bg-red-700 hover:bg-red-600 text-white py-2 px-4 rounded w-40 transform transition-transform hover:scale-105 active:scale-95 shadow-md">
                Create Blog
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-1/2 flex justify-center items-center">
          <img
            src="/Images/BlogMain.png"
            alt="Descriptive Alt Text"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Blog Section 1 */}
      <div className="my-10 mx-5 px-10">
        <div className="bg-orange-100 p-6 rounded-lg shadow-lg">
          <div className="flex items-center cursor-pointer" onClick={toggleAccordionArt}>
            <img
              src="/Images/Blog1.jpg"
              alt="WorldOfArtAndExpression"
              className="w-16 h-16 object-cover mx-4"
            />
            <h2 className="text-2xl font-bold flex-1 text-orange-950">
              Discover the World of Art and Its Diverse Expressions
            </h2>
            <span className="text-2xl ml-4 ">{isOpenArt ? 'v' : '^'}</span>
          </div>

          {isOpenArt && (
            <div className="mt-4">
              <img
                src="/Images/Blog1.jpg"
                alt="WorldOfArtAndExpression"
                className="w-50 h-40 mb-4 object-cover mx-auto"
              />
              <p className="text-base text-orange-950">
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Classical Legends:</strong> Masterpieces from artists like Leonardo da Vinci and Michelangelo set the standard for artistic excellence. Their works, such as <em>Mona Lisa</em> and <em>David</em>, showcase incredible skill and emotional depth, influencing art for centuries.</li>
                  <li><strong>Renaissance Breakthroughs:</strong> The Renaissance was a period of innovation, with artists like Titian and Caravaggio exploring new techniques and perspectives. Their work, like Caravaggio’s <em>The Calling of Saint Matthew</em>, transformed art with a focus on realism and dramatic lighting.</li>
                  <li><strong>Impressionist Magic:</strong> Impressionism, led by artists such as Monet and Renoir, captured the beauty of everyday moments with vibrant colors and dynamic brushwork. Monet’s <em>Water Lilies</em> and Renoir’s <em>Luncheon of the Boating Party</em> exemplify this movement’s focus on light and color.</li>
                  <li><strong>Modern Art Revolution:</strong> The 20th century brought radical changes with artists like Picasso and Pollock. Picasso’s abstract works and Pollock’s energetic splatters broke traditional boundaries, reflecting the era’s experimentation and expression.</li>
                  <li><strong>Contemporary Visions:</strong> Today’s artists, from Banksy’s provocative street art to Yayoi Kusama’s immersive installations, explore new media and themes. Their diverse approaches challenge norms and engage audiences in fresh ways.</li>
                  <li><strong>Conclusion:</strong> Art’s evolution highlights the endless creativity and cultural shifts over time. Whether through classical sculptures or modern installations, each form of art offers a unique window into human experience.</li>
                </ul>
              </p>
            </div>
          )}

          <button
            className="text-red-500 underline mt-4"
            onClick={toggleAccordionArt}
          >
            {isOpenArt ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>

      {/* Blog Section 2 */}
      <div className="my-10 mx-5 px-10">
        <div className="bg-orange-200 p-6 rounded-lg shadow-lg">
          <div className="flex items-center cursor-pointer" onClick={toggleAccordionMusic}>
            <img
              src="/Images/Blog2.jpg"
              alt="MusicalWorld"
              className="w-16 h-16 object-cover mx-4"
            />
            <h2 className="text-2xl font-bold flex-1 text-orange-950">
              The Vibrant World of Music: Bands, DJs, and Their Impact
            </h2>
            <span className="text-2xl ml-4 ">{isOpenMusic ? 'v' : '^'}</span>
          </div>

          {isOpenMusic && (
            <div className="mt-4">
              <img
                src="/Images/Blog2A.jpg"
                alt="MusicalWorld"
                className="w-50 h-40 mb-4 object-cover mx-auto"
              />
              <p className="text-base text-blue-950">
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>The Rise of Iconic Bands:</strong>
                    <ul className="list-disc pl-6">
                      <li><strong>The Beatles:</strong> Revolutionized popular music in the 1960s with their groundbreaking sound and iconic albums like <em>Sgt. Pepper's Lonely Hearts Club Band</em>. Their influence extends beyond music, shaping culture and style.</li>
                      <li><strong>Queen:</strong> Known for their theatrical performances and timeless hits like <em>Bohemian Rhapsody</em>, Queen's blend of rock, opera, and pop continues to captivate audiences worldwide.</li>
                      <li><strong>U2:</strong> With their powerful lyrics and innovative sound, U2 has remained a major force in rock music for decades, addressing social issues through songs like <em>With or Without You</em>.</li>
                    </ul>
                  </li>
                  <li><strong>The Evolution of DJs:</strong>
                    <ul className="list-disc pl-6">
                      <li><strong>David Guetta:</strong> A pioneer in blending electronic dance music with mainstream pop, Guetta's hits like <em>Titanium</em> have brought EDM to a global audience.</li>
                      <li><strong>Calvin Harris:</strong> Known for his infectious beats and collaborations with top artists, Harris has shaped the sound of modern dance music with tracks like <em>Summer</em>.</li>
                      <li><strong>Skrillex:</strong> A key figure in the dubstep movement, Skrillex's energetic performances and innovative sound design have pushed the boundaries of electronic music.</li>
                    </ul>
                  </li>
                  <li><strong>Impact on Modern Music:</strong>
                    <ul className="list-disc pl-6">
                      <li><strong>Collaborations:</strong> The synergy between bands and DJs has led to exciting cross-genre collaborations, bringing fresh sounds to fans and expanding the reach of both.</li>
                      <li><strong>Cultural Influence:</strong> Both bands and DJs have significantly impacted fashion, film, and media, with their music becoming a backdrop for cultural moments and trends.</li>
                    </ul>
                  </li>
                  <li><strong>Conclusion:</strong> The world of music is ever-evolving, with bands and DJs playing crucial roles in shaping its future. Their creativity and innovation continue to inspire and entertain, making music a universal language that connects us all.</li>
                </ul>
              </p>
            </div>
          )}

          <button
            className="text-red-700 underline mt-4"
            onClick={toggleAccordionMusic}
          >
            {isOpenMusic ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>

      

      <Footer />
    </div>
  );
};

export default Blogs;

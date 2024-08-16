import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, createUserWithEmailAndPassword } from '../../Utils/firebase'; // Import Firebase auth
import checkValidateData from '../../Utils/checkValidateData';
import { useDispatch } from 'react-redux';
import { setUser } from '../../Utils/userSlice'; // Import setUser action

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    const validationError = checkValidateData(email, password);
    if (validationError) {
      alert(validationError);
      return;
    }

    try {
      // Firebase authentication logic
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Dispatch action to update username in Redux state
      dispatch(setUser(name)); // Using `name` here as the username

      navigate('/home');
    } catch (error) {
      console.error("Sign Up Error:", error);
      alert("Failed to sign up. Please try again.");
    }
  };

  return (
    <div className='bg-orange-100 min-h-screen flex items-center justify-center'>
      <div className="relative z-10 flex items-center justify-center w-full max-w-screen-xl mx-auto">
        <div className="flex bg-white rounded-lg shadow-lg w-full md:w-5/6 lg:w-4/5 xl:w-3/4">
          <div className="w-1/3 flex items-center justify-center border-r-2 border-red-700 p-10"
               style={{ backgroundImage: `url('/Images/Background.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="bg-opacity-50 p-6 rounded-lg">
              <img src="/Images/LogoC_GYA.png" alt="Logo" className="w-64 h-auto object-contain opacity-90" />
              <p className='text-sm text-center text-red-700 font-semibold text-lg mt-4'>"Connect, Create, Inspire" <br />
                Log In to Get Started with Get Your Artist.
              </p>
            </div>
          </div>
          <div className="w-2/3 p-12"
               style={{ backgroundImage: `url('/Images/Background.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="border-2 border-red-700 bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl mb-6 text-center text-red-700 font-semibold">Sign Up</h2>
              <form onSubmit={handleSignUp}>
                <div className='mb-4'>
                  <label className='text-red-700 text-sm font-bold mb-2'>Name</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                    id="name"
                    type="text"
                    placeholder="Enter your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-red-700 text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                    id="email"
                    type="email"
                    placeholder="Enter your Email Id"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-red-700 text-sm font-bold mb-2">
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                    id="password"
                    type="password"
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-center mb-6">
                  <button
                    className="bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
                <p className='text-sm mt-6 text-center'>Already a User?
                  <Link className="font-medium text-red-700 underline hover:text-red-800 transition" to="/"> Sign In </Link>
                  Now
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

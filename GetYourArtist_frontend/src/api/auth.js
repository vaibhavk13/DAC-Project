import { auth } from '../Utils/firebase'; 
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';


// Function to sign in a user
export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential; // Returning the user credential or user object
  } catch (error) {
    throw new Error(error.message); // Handle error properly in your component
  }
};

// Function to sign up a new user
export const signUp = async (name, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await userCredential.user.updateProfile({ displayName: name });
    return userCredential; // Returning the user credential or user object
  } catch (error) {
    throw new Error(error.message); // Handle error properly in your component
  }
};

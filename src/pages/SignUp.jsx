import { signInWithEmailAndPassword ,createUserWithEmailAndPassword,updateProfile} from "firebase/auth";
import React, { useCallback, useState } from "react";
import { auth } from "../firebase";
import { Link } from "react-router-dom";


const SignUp = () => {

const [name,setName]=useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = useCallback(
    (e) => {
if (!email || !password) {
  return;
}

e.preventDefault();
createUserWithEmailAndPassword(auth,email,password)
.then((auth) => {
  updateProfile(auth.user, { displayName: name })
})
.catch((error) =>{console.log(error)});
    
  }, [email, password]);

  return (
    <div className="max-w-md mx-auto py-12">
      <h1 className="text-2xl">Create new account</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
        <input
          type="text"
          placeholder="Enter your name"
          className="p-6 bg-gray-100 rounded-md"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
        
        <input
          type="email"
          placeholder="Enter your email"
          className="p-6 bg-gray-100 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        
        <input
          type="password"
          placeholder="Enter your password"
          className="p-6 bg-gray-100 rounded-md"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <input type="submit" className="p-4 bg-green-400 rounded-md" value="Submit"/>
      </form>
      <Link to="/sign-in">Already have an account? Sign In</Link>

    </div>
  );
};

export default SignUp;

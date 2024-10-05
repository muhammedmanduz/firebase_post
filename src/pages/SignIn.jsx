import React from "react";
import { useCallback, useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
    
      if (!email || !password) {
        return;
      }

      signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("hey ,you have signed in")
      })
      .catch((error) => {
        console.log(error);
      });
    },
    [email, password]
  );

  return (
    <div className="max-w-md mx-auto py-12">
      <h1 className="text-2xl">Sign in</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          className="p-6 bg-gray-100 rounded-md"
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          className="p-6 bg-gray-100 rounded-md"
        />
        <Link to="/forgot-password" className="ml-auto">
          Fargot Password ?
        </Link>
        <input
          type="submit"
          className="p-4 bg-pink-400 rounded-md"
          value="Sign-In"
        />
        <Link to="/sign-up">Don't have an account? Sign up</Link>
      </form>
    </div>
  );
};

export default SignIn;

import { signOut } from "firebase/auth";
import React from "react";
import { useCallback } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import {useCollectionData} from "react-firebase-hooks/firestore"
import Posts from "../components/Posts";
import AddPost from "../components/AddPost";


const Home = () => {
  const [user, isLoading] = useAuthState(auth);

  const handleSignOut = useCallback(() => {
    signOut(auth);
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  console.log(user)
  return (
    <div className="max-w-md py-12 mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xl">{user.displayName}</p>
          <p className="text-lg text-gray-700">{user.email}</p>
        </div>
        <button onClick={handleSignOut} className="p-4 bg-pink-400 rounded-md">Sign Out</button>
      </div>
      <AddPost/>
      <Posts/>
    </div>
  );
};

export default Home;

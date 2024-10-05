import React, { useCallback, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const ref = collection(db, "posts");

const AddPost = () => {
  const [body, setBody] = useState("");

  const handleSubmit = useCallback((e) => {
    e.preventDefault();


    addDoc(ref, { 
        body: body
     });

  }, [body]);

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col mt-8">
        <input
          type="text"
          placeholder="Enter your post"
          className="bg-gray-100 p-4 rounded-t-md"
          onChange={(e)=>setBody(e.currentTarget.value)}
        />
        <input
          type="submit"
          value="Send"
          className="bg-pink-400 p-4 rounded-b-md"
        />
      </form>
    </div>
  );
};

export default AddPost;

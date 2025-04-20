import React, { useState } from "react";
import { db, collection, addDoc } from "../../firebase-Config.js";

const Form = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  // const [isHidden, setIsHidden] = useState(true);

  const add = async () => {
  

    try {
      await addDoc(collection(db, "React"), {
        title,
        description,
        image,
      });
      alert("Data stored successfully!");

      // Clear input fields
      setTitle("");
      setDescription("");
      setImage("");
    } catch (error) {
      alert("Error adding document: " + error.message);
    }
  };

  return (
    <> 
   

      
        <div
          id="hide"
          className="p-6 mt-5  flex flex-col mx-auto w-[500px] gap-4 bg-gray-50 shadow rounded"
        >
          <h1 className="text-xl font-bold">Title</h1>
          <input
            className="h-10 font-bold bg-gray-100 rounded px-2"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
          />

          <h1 className="text-xl font-bold">Descriptions</h1>
          <textarea
            className="h-24 font-bold bg-gray-100 rounded px-2 py-1"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write something"
          />

          <h1 className="text-xl font-bold">Image URL</h1>
          <input
            className="h-10 font-bold bg-gray-100 rounded px-2"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Enter image URL"
          />

          <button
            onClick={add}
            className="self-end bg-blue-500 w-[150px] h-10 rounded-xl text-white font-bold"
          >
            Submit
          </button>
        </div>
      
    </>
  );
};

export default Form;

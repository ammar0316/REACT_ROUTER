

// // export default Cards;
// import React, { useEffect, useState } from "react";
// import { db, collection,
//   getDocs,
//   doc,
//   deleteDoc,
//   updateDoc, } from "../../firebase-Config";


// const Cards = () => {
//   const [data, setData] = useState([]);
//   const [editingId, setEditingId] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const [updatedData, setUpdatedData] = useState({
//     title: "",
//     description: "",
//     image: "",
//   });

//   const fetchData = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, "React"));
//       const items = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setData(items);
//       setLoading(false); // stop loading when done
//     } catch (error) {
//       console.error("Error fetching data: ", error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await deleteDoc(doc(db, "React", id));
//       setData((prev) => prev.filter((item) => item.id !== id));
//     } catch (error) {
//       console.error("Error deleting document: ", error);
//     }
//   };

//   const handleUpdateClick = (item) => {
//     setEditingId(item.id);
//     setUpdatedData({
//       title: item.title,
//       description: item.description,
//       image: item.image,
//     });
//   };

//   const handleUpdateSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const itemRef = doc(db, "React", editingId);
//       await updateDoc(itemRef, {
//         title: updatedData.title,
//         description: updatedData.description,
//         image: updatedData.image,
//       });
//       setData((prev) =>
//         prev.map((item) =>
//           item.id === editingId
//             ? {
//                 ...item,
//                 title: updatedData.title,
//                 description: updatedData.description,
//                 image: updatedData.image,
//               }
//             : item
//         )
//       );
//       setEditingId(null);
//     } catch (error) {
//       console.error("Error updating document: ", error);
//     }
//   };

//   return (
//     <>
//       {loading ? (
//         // Loader shown while loading is true
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
//           {[1, 2, 3].map((n) => (
//             <div
//               key={n}
//               className="border p-4 rounded shadow-md bg-white h-[410px] flex justify-center items-center"
//             >
//               <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         // Actual cards shown when loading is false
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 ">
//           {data.map((item) => (
//             <div
//               key={item.id}
//               className="border p-4 rounded shadow-lg/45 bg-white relative h-[410px] overflow-hidden"
//             >
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-48 object-cover rounded"
//               />
//               <h2 className="text-xl font-bold mt-2">{item.title}</h2>
  
//               <p className="text-gray-700 overflow-y-auto scrollbar-hide max-h-[100px] pr-2">
//                 {item.description}
//               </p>
  
//               <div className="mt-4 flex justify-between">
//                 <button
//                   onClick={() => handleUpdateClick(item)}
//                   className="bg-yellow-500 text-white px-3 py-1 rounded"
//                 >
//                   Update
//                 </button>
//                 <button
//                   onClick={() => handleDelete(item.id)}
//                   className="bg-red-500 text-white px-3 py-1 rounded"
//                 >
//                   Delete
//                 </button>
//               </div>
  
//               {editingId === item.id && (
//                 <form onSubmit={handleUpdateSubmit} className="mt-4">
//                   <input
//                     type="text"
//                     value={updatedData.title}
//                     onChange={(e) =>
//                       setUpdatedData({ ...updatedData, title: e.target.value })
//                     }
//                     className="block w-full mb-2 p-2 border rounded"
//                     placeholder="Update title"
//                   />
//                   <textarea
//                     value={updatedData.description}
//                     onChange={(e) =>
//                       setUpdatedData({
//                         ...updatedData,
//                         description: e.target.value,
//                       })
//                     }
//                     className="block w-full mb-2 p-2 border rounded"
//                     placeholder="Update description"
//                   ></textarea>
//                   <input
//                     type="text"
//                     value={updatedData.image}
//                     onChange={(e) =>
//                       setUpdatedData({ ...updatedData, image: e.target.value })
//                     }
//                     className="block w-full mb-2 p-2 border rounded"
//                     placeholder="Update image URL"
//                   />
//                   <button
//                     type="submit"
//                     className="bg-green-500 text-white px-4 py-1 rounded"
//                   >
//                     Save
//                   </button>
//                 </form>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </>
//   );
// }
  

// export default Cards;
// gpt
import React, { useEffect, useState } from "react";
import {
  db,
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "../../firebase-Config";

const Cards = () => {
  const [data, setData] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);

  const [updatedData, setUpdatedData] = useState({
    title: "",
    description: "",
    image: "",
  });

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "React"));
      const items = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(items);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "React", id));
      setData((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  const handleUpdateClick = (item) => {
    setEditingId(item.id);
    setUpdatedData({
      title: item.title,
      description: item.description,
      image: item.image,
    });
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const itemRef = doc(db, "React", editingId);
      await updateDoc(itemRef, {
        title: updatedData.title,
        description: updatedData.description,
        image: updatedData.image,
      });

      // Option 1: Update state directly
      setData((prev) =>
        prev.map((item) =>
          item.id === editingId
            ? { ...item, ...updatedData }
            : item
        )
      );

      // Option 2 (optional): Re-fetch data to ensure sync
      // await fetchData();

      setEditingId(null); // Exit edit mode
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  return (
    <>
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 p-4">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="border p-4 rounded shadow-md bg-white h-[410px] flex justify-center items-center"
            >
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {data.map((item) => (
            <div
              key={item.id}
              id="SSSS"
              className="  border  p-4 rounded shadow-md bg-gray-100 relative overflow-y-scroll  h-[410px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="text-xl font-bold mt-2">{item.title}</h2>
              <p id="abc" className="text-gray-700 max-h-[100px] overflow-y-auto pr-2">
                {item.description}
              </p>

              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => handleUpdateClick(item)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>

              {editingId === item.id && (
                <form onSubmit={handleUpdateSubmit} className="mt-4 space-y-2">
                  <input
                    type="text"
                    value={updatedData.title}
                    onChange={(e) =>
                      setUpdatedData({ ...updatedData, title: e.target.value })
                    }
                    className="block w-full p-2 border rounded"
                    placeholder="Update title"
                    required
                  />
                  <textarea
                    value={updatedData.description}
                    onChange={(e) =>
                      setUpdatedData({
                        ...updatedData,
                        description: e.target.value,
                      })
                    }
                    className="block w-full p-2 border rounded"
                    placeholder="Update description"
                    required
                  ></textarea>
                  <input
                    type="text"
                    value={updatedData.image}
                    onChange={(e) =>
                      setUpdatedData({
                        ...updatedData,
                        image: e.target.value,
                      })
                    }
                    className="block w-full p-2 border rounded"
                    placeholder="Update image URL"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-1 rounded"
                  >
                    Save
                  </button>
                </form>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Cards;


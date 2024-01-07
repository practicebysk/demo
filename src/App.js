import React, { useEffect, useState } from "react";
import { funget, funset } from "./gfunncation";
import { Route, Routes } from "react-router-dom";
import A from "./A";
import Nav from "./Nav";
import List from "./List";
import Routes1 from "./Routes1";

function App() {
  return (
    <div>
      <Nav />
      <List />
      <Routes1/>
    </div>
  );
}

export default App;
// import React, { useState } from "react";

// function App() {
//   const [inputdata, setInputdata] = useState();
//   const [task, setTask] = useState([]);

//   const [editinput, setEditinput] = useState({
//     lable: "",
//   });

//   const handeladd = () => {
//     const data = {
//       value: false,
//       lable: inputdata,
//       id: task.length + 1,
//     };

//     if (data.lable.length > 0) {
//       setTask([...task, data]);
//       setInputdata(" ");
//     }
//   };

//   const handelchangevaluecheakbox = (id) => {
//     const data = [...task];
//     data[id].value = !data[id].value;
//     setTask(data);
//   };

//   const handelinputchane = (e) => {
//     setEditinput({ ...editinput, [e.target.name]: e.target.value });
//   };

//   const handeledit = (id) => {
//     const data = task.find((item) => {
//       return item.id === id;
//     });

//     setEditinput(data);
//   };

//   const handeleditsave = () => {
//     const upadteddata = task.map((item) => {
//       if (item.id === editinput.id) {
//         return { ...item, ...editinput };
//       }
//       return item;
//     });

//     setTask(upadteddata);
//     setEditinput({ id: null, label: "" });
//   };

//   // const handeldelete = () => {
//   //   const a = task.
//   // };
//   return (
//     <div>
//       <input
//         type="text"
//         value={inputdata}
//         onChange={(e) => setInputdata(e.target.value)}
//       />
//       <button onClick={handeladd}>Add Task</button>

//       {/* edit input */}
//       <br></br>
//       <input
//         type="text"
//         value={editinput.lable}
//         name="lable"
//         onChange={(e) => handelinputchane(e)}
//       />
//       <button onClick={() => handeleditsave()}>Save</button>
//       {task?.map((item, index) => {
//         return (
//           <div key={index}>
//             <span>
//               <input
//                 type="checkbox"
//                 value={item.lable}
//                 checked={item.value}
//                 onChange={() => handelchangevaluecheakbox(index)}
//               />
//             </span>
//             <span>{item.lable}</span>

//             {item.value && (
//               <>
//                 <button onClick={() => handeledit(item.id)}>Edit</button>
//                 {/* <button onClick={() => handeldelete(item.id)}>Delete</button> */}
//               </>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default App;

export default function Register() {
  return (
    <>
      <h1>hey</h1>
    </>
  );
}
// "use client";
// import { useState } from "react";
// import WheelPicker from "react-wheelpicker";

// export default function Register() {
//   const data = [
//     "Intro to Data Science",
//     "Big Data",
//     "Design and Analysis of Algorithms",
//     "Operating Systems",
//     "Cloud Computing",
//     "Principles of Database Systems",
//   ];

//   const [isPickerOpen, setIsPickerOpen] = useState(false);
//   const [selection, setSelection] = useState(data[2]);
//   //     this.state = {
//   //       pickerOpen: false,
//   //       data: ,
//   //       defaultSelection: 3,
//   //       selection: "Big Data",
//   //     };
//   //   }

//   return (
//     <>
//       here
//       <div className="selected" onClick={() => setIsPickerOpen((pre) => !pre)}>
//         {selection}
//       </div>
//       {isPickerOpen && (
//         <div className="demo-container">
//           <WheelPicker
//             animation="falt"
//             data={data}
//             height={40}
//             parentHeight={250}
//             fontSize={13}
//             defaultSelection={3}
//             updateSelection={(selectedIndex) =>
//               setSelection(() => data[selectedIndex])
//             }
//             scrollerId="scroll-select-subject"
//           />
//         </div>
//       )}
//     </>
//   );
// }

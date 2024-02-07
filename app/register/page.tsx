import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Label } from "@/components/ui/label";

export default function Register() {
  return (
    <>
      <div className="p-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="cost">金額</Label>
          <Input placeholder="金額" id="cost" type="number" />
        </div>
      </div>
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

import { BsSend } from "react-icons/bs";

const MessageInput = () => {
  return (
    <div className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 text-white"
          placeholder="send a message"
        />
        <button
          type="button"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          <BsSend />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;

//STARTER CODE FOR MESSAGE INPUTS
// import { BeSend } from "react-icons/bs";

// const MessageInput = () => {
//   return (
//     <div className="px-4 my-3">
//       <div className="w-full">
//         <input
//           type="text"
//           className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 text-white"
//           placeholder="send a message"
//         />
//         <button
//           type="button"
//           className="absolute inset-y-0 end-0 flex items-center pe-3"
//         >
//           <BeSend />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MessageInput;

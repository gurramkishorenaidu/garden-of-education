// import React from "react";

// const Dropdown = () => {
//   return (
//     <div class="p-20">
//       <div class="group/main relative mr-16 inline-block">
//         <button class="inline-flex items-center rounded bg-gray-300 py-2 px-4 font-semibold text-gray-700">
//           <span class="mr-4">Dropdown</span>
//           <svg
//             class="h-4 w-4 fill-current"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 20 20"
//           >
//             <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
//           </svg>
//         </button>
//         <div className="w-max">
//           <ul class="absolute hidden w-full pt-1 text-gray-700 group-hover/main:block">
//             <li class="group/item w-full">
//               <a
//                 class="whitespace-no-wrap block w-full rounded-t bg-gray-200 py-2 px-4 hover:bg-gray-400"
//                 href="#"
//               >
//                 1
//               </a>
//               <ul class="l-0 absolute top-0 left-36 hidden pt-1 text-gray-700 group-hover/item:block">
//                 <li
//                   class="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400"
//                   href="#"
//                 >
//                   1.1
//                 </li>
//                 <li
//                   class="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400"
//                   href="#"
//                 >
//                   1.2
//                 </li>
//                 <li
//                   class="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400"
//                   href="#"
//                 >
//                   1.3
//                 </li>
//               </ul>
//             </li>
//             <li class="group/item w-full">
//               <a
//                 class="whitespace-no-wrap block w-full rounded-t bg-gray-200 py-2 px-4 hover:bg-gray-400"
//                 href="#"
//               >
//                 2
//               </a>
//               <ul class="l-0 absolute top-0 left-36 hidden pt-1 text-gray-700 group-hover/item:block">
//                 <li
//                   class="whitespace-no-wrap mt-10 block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400"
//                   href="#"
//                 >
//                   2.1
//                 </li>
//                 <li
//                   class="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400"
//                   href="#"
//                 >
//                   2.2
//                 </li>
//                 <li
//                   class="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400"
//                   href="#"
//                 >
//                   2.3
//                 </li>
//               </ul>
//             </li>
//             <li class="group/item w-full">
//               <a
//                 class="whitespace-no-wrap block w-full rounded-t bg-gray-200 py-2 px-4 hover:bg-gray-400"
//                 href="#"
//               >
//                 3
//               </a>
//               <ul class="l-0 absolute top-0 left-36 my-10 hidden pt-1 text-gray-700 group-hover/item:block">
//                 <li
//                   class="whitespace-no-wrap mt-10 block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400"
//                   href="#"
//                 >
//                   3.1
//                 </li>
//                 <li
//                   class="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400"
//                   href="#"
//                 >
//                   3.2
//                 </li>
//                 <li
//                   class="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400"
//                   href="#"
//                 >
//                   3.3
//                 </li>
//               </ul>
//             </li>
//           </ul>
//           <div></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dropdown;

// div class="p-20">
//   <div class="group/main relative mr-16 inline-block">
//     <button class="inline-flex items-center rounded bg-gray-300 py-2 px-4 font-semibold text-gray-700">
//       <span class="mr-4">Dropdown</span>
//       <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//         <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
//       </svg>
//     </button>
//     <div className="w-max">
//       <ul class="absolute hidden w-full pt-1 text-gray-700 group-hover/main:block">
//         <li class="group/item w-full">
//           <a class="whitespace-no-wrap block w-full rounded-t bg-gray-200 py-2 px-4 hover:bg-gray-400" href="#">1</a>
//           <ul class="l-0 absolute top-0 left-36 hidden pt-1 text-gray-700 group-hover/item:block">
//             <li class="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400" href="#">1.1</li>
//             <li class="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400" href="#">1.2</li>
//             <li class="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400" href="#">1.3</li>
//           </ul>
//         </li>
//         <li class="group/item w-full">
//           <a class="whitespace-no-wrap block w-full rounded-t bg-gray-200 py-2 px-4 hover:bg-gray-400" href="#">2</a>
//           <ul class="l-0 absolute top-0 left-36 hidden pt-1 text-gray-700 group-hover/item:block">
//             <li class="whitespace-no-wrap mt-10 block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400" href="#">2.1</li>
//             <li class="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400" href="#">2.2</li>
//             <li class="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400" href="#">2.3</li>
//           </ul>
//         </li>
//         <li class="group/item w-full">
//           <a class="whitespace-no-wrap block w-full rounded-t bg-gray-200 py-2 px-4 hover:bg-gray-400" href="#">3</a>
//           <ul class="l-0 absolute top-0 left-36 my-10 hidden pt-1 text-gray-700 group-hover/item:block">
//             <li class="whitespace-no-wrap mt-10 block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400" href="#">3.1</li>
//             <li class="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400" href="#">3.2</li>
//             <li class="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400" href="#">3.3</li>
//           </ul>
//         </li>
//       </ul>
//       <div></div>
//     </div>
//   </div>
// </div>


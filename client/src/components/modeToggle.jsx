function ModeToggle() {
  return (
    <div className="relative w-fit h-fit flex">
      <span
        className="w-[2.813rem] h-[1.313rem] rounded-[2.5rem] inline-block border-black border-[1px] bg-[#f0f0f0]"
        aria-label="toggle dark mode"
      ></span>
      <span className="absolute w-4 h-4 rounded-[50%] bg-black left-[0.138rem] top-2/4 -translate-y-2/4 cursor-pointer"></span>
    </div>
  );
}

export default ModeToggle;

// CSS

// .toggle {
//   position: relative;
//   width: fit-content;
//   height: fit-content;
//   display: flex;
// }
// .toggle__b {
//   width: 4.5rem;
//   height: 2.1rem;
//   border-radius: 4rem;
//   display: inline-block;
//   border: 1px solid black;
//   background-color: #f0f0f0;
// }
// .toggle__c {
//   position: absolute;
//   width: 1.6rem;
//   height: 1.6rem;
//   border-radius: 50%;
//   background-color: black;
//   left: 0.22rem;
//   top: 0.24rem;
//   cursor: pointer;
// }

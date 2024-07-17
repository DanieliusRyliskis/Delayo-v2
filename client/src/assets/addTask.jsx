function AddTask() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="20"
        cy="20"
        r="19.5"
        fill="#F9F366"
        stroke="black"
        strokeDasharray="2 2"
      />
      <path
        d="M20 12.5L20 27.5"
        stroke="#33363F"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <path
        d="M27.5 20L12.5 20"
        stroke="#33363F"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default AddTask;

import { useState } from "react";
import PasswordSVG from "../assets/passwordSVG";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // This callback function does not cause a re-render
  const removeLabel = function (e) {
    if (e.target.value === "") {
      e.target.previousElementSibling.classList.add("invisible");
    }
  };
  const addLabel = function (e) {
    if (e.target.value === "") {
      e.target.previousElementSibling.classList.remove("invisible");
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-center font-bold text-xl mt-20 mb-14 sm:mt-24 lg:mt-28 2xl:mt-32">
          Register
        </h1>
        <form>
          {/* It is essential to add space in min(x,_y) */}
          <div className="border-gray-300 border-2 rounded-lg w-[min(80%,_25rem)] mx-auto relative h-9 overflow-hidden shadow-md mt-7">
            <label
              htmlFor="username"
              className="absolute left-1 top-2/4 -translate-y-2/4 text-gray-500 cursor-text"
            >
              Username
            </label>
            <input
              onFocus={removeLabel}
              onBlur={addLabel}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              name="username"
              id="username"
              className="ml-2 w-[90%] h-full rounded-lg focus:outline-none"
            />
          </div>
          <div className="border-gray-300 border-2 rounded-lg w-[min(80%,_25rem)] mx-auto relative h-9 overflow-hidden shadow-md mt-7">
            <label
              htmlFor="email"
              className="absolute left-1 top-2/4 -translate-y-2/4 text-gray-500 cursor-text"
            >
              Email
            </label>
            <input
              onFocus={removeLabel}
              onBlur={addLabel}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              className="ml-2 w-[90%] h-full rounded-lg focus:outline-none"
            />
          </div>
          <div className="border-gray-300 border-2 rounded-lg w-[min(80%,_25rem)] mx-auto relative h-9 overflow-hidden shadow-md mt-7">
            <label
              htmlFor="password"
              className="absolute left-1 top-2/4 -translate-y-2/4 text-gray-500 cursor-text"
            >
              Password
            </label>
            <input
              onFocus={removeLabel}
              onBlur={addLabel}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              className="ml-2 w-[90%] h-full rounded-lg focus:outline-none"
            />
            <div className="absolute top-2/4 -translate-y-2/4 right-1 cursor-pointer">
              <PasswordSVG />
            </div>
          </div>
          <div className="w-[min(80%,_25rem)] mx-auto mt-7 flex items-center">
            <input
              type="checkbox"
              id="conditions"
              className="w-5 h-5 accent-green-600"
            />
            <label
              htmlFor="conditions"
              className="relative pl-1 inline-block text-sm"
            >
              I agree with the{" "}
              <span className="text-blue-600">Terms & Conditions</span>
            </label>
          </div>
          <button className="bg-primary rounded-md mx-auto block w-[min(80%,_25rem)] py-2 font-semibold mt-4">
            Sign Up
          </button>
        </form>
        <h2 className="text-gray-500 text-center my-6">
          Already have an account?{" "}
          <a href="" className="text-primary">
            Login
          </a>
        </h2>
      </div>
    </div>
  );
}

export default Register;

import { useState, useEffect } from "react";
import HidePassword from "../assets/hidePassword";
import ShowPassword from "../assets/showPassword";
import Warning from "../components/warning";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (show) {
      document.getElementById("password").type = "text";
    } else {
      document.getElementById("password").type = "password";
    }
  }, [show]);

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
  const submit = function (e) {
    e.preventDefault();
    const form = { username, email, password, checked };
    if (form.username === "" || form.username === " ") {
      document.querySelector("h1").style.marginBottom = "2rem";
      setErrorMessage("You must provide a username.");
      setError(true);
    } else if (form.email === "" || form.email === " ") {
      document.querySelector("h1").style.marginBottom = "2rem";
      setErrorMessage("You must provide an email.");
      setError(true);
    } else if (form.password === "" || form.password === " ") {
      document.querySelector("h1").style.marginBottom = "2rem";
      setErrorMessage("You must provide a password.");
      setError(true);
    } else if (!form.checked) {
      document.querySelector("h1").style.marginBottom = "2rem";
      setErrorMessage("Please agree to the terms and conditions.");
      setError(true);
    } else {
      const postRequest = async () => {
        try {
          const res = await fetch("http://localhost:5000/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
          });
          if (!res.ok) {
            const data = await res.json();
            setErrorMessage(data.error);
            setError(true);
          } else if (res.ok) {
            navigate("/home");
          }
        } catch (error) {
          console.log(error);
        }
      };
      postRequest();
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-center font-bold text-xl mt-20 mb-14 sm:mt-24 lg:mt-28 2xl:mt-32">
          Register
        </h1>
        {error ? <Warning err={errorMessage} /> : null}
        <form>
          {/* It is essential to add space in min(x,_y) */}
          <div className="border-gray-300 border-2 rounded-lg w-[min(80%,_25rem)] mx-auto relative h-9 overflow-hidden shadow-md mt-4">
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
              required
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
              required
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
              required
            />
            <div
              className="absolute top-2/4 -translate-y-2/4 right-1 cursor-pointer"
              onClick={() => setShow(!show)}
            >
              {show ? <HidePassword /> : <ShowPassword />}
            </div>
          </div>
          <div className="w-[min(80%,_25rem)] mx-auto mt-7 flex items-center">
            <input
              type="checkbox"
              id="conditions"
              className="w-5 h-5 accent-green-600 cursor-pointer"
              required
              onClick={() => setChecked(!checked)}
            />
            <label
              htmlFor="conditions"
              className="relative pl-1 inline-block text-sm"
            >
              I agree with the{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms & Conditions
              </a>
            </label>
          </div>
          <button
            onClick={submit}
            className="bg-primary rounded-md mx-auto block w-[min(80%,_25rem)] py-2 font-semibold mt-4 hover:bg-[#FFFA88]"
          >
            Sign Up
          </button>
        </form>
        <h2 className="text-gray-500 text-center my-6">
          Already have an account?{" "}
          <a href="/login" className="text-primary">
            Login
          </a>
        </h2>
      </div>
    </div>
  );
}

export default SignupPage;

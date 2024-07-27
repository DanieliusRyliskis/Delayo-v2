import { useState, useEffect } from "react";
import HidePassword from "../assets/hidePassword";
import ShowPassword from "../assets/showPassword";
import Warning from "../components/warning";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (show) {
      document.getElementById("password").type = "text";
    } else {
      document.getElementById("password").type = "password";
    }
  }, [show]);

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
    const form = { email, password, checked };
    if (form.email === "" || form.email === " ") {
      document.querySelector("h1").style.marginBottom = "2rem";
      setErrorMessage("You must provide an email.");
      setError(true);
    } else if (form.password === "" || form.password === " ") {
      document.querySelector("h1").style.marginBottom = "2rem";
      setErrorMessage("You must provide a password.");
      setError(true);
    } else {
      const postRequest = async () => {
        try {
          const res = await fetch("http://localhost:5000/login", {
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
    <>
      <h1 className="text-center font-bold text-xl mt-20 mb-14 sm:mt-24 lg:mt-28 2xl:mt-32">
        Login
      </h1>
      {error ? <Warning err={errorMessage} /> : null}
      <form>
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
        <div className="flex items-center justify-between w-[min(80%,_25rem)] mx-auto mt-7">
          <div className="  flex items-center">
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
              Remember me
            </label>
          </div>
          <a href="#" className="text-sm text-primary">
            Forgot password?
          </a>
        </div>

        <button
          onClick={submit}
          className="bg-primary rounded-md mx-auto block w-[min(80%,_25rem)] py-2 font-semibold mt-4 hover:bg-[#FFFA88]"
        >
          Login
        </button>
      </form>
    </>
  );
}

export default LoginPage;

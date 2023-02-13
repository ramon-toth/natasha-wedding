import React, { useContext, useState } from "react";
import Card from "../../shared/Card";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";

function Login() {
  const [formData, setFormData] = useState({});

  const navigate = useNavigate();

  const { setAuth } = useContext(AppContext);

  const handleInputChange = (e) => {
    e.preventDefault();
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(process.env.REACT_APP_API_SERVER + "/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((res) =>
        res.token ? loginSuccessful(res.token) : alert("Incorrect Credentials!")
      )
      .catch(() => alert("Unknown error occured."));
  };

  const loginSuccessful = (token) => {
    window.sessionStorage.setItem("token", token);
    setAuth(token);
    navigate("/admin");
  };

  const loginForm = (
    <form>
      <div className="flex justify-center self-center text-xl  z-10">
        <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
          <div className="mb-4">
            <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
          </div>
          <div className="space-y-5">
            <div className="space-y-2">
              <label className="text-xl font-medium text-gray-700 tracking-wide">
                Email
              </label>
              <input
                className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                type=""
                name="email"
                placeholder="mail@gmail.com"
                onChange={handleInputChange}
              ></input>
            </div>
            <div className="space-y-2">
              <label className="mb-5 text-lx font-medium text-gray-700 tracking-wide">
                Password
              </label>
              <input
                className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleInputChange}
              ></input>
            </div>
            <div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full flex justify-center bg-secondary  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );

  return (
    <div className="h-screen flex justify-center w-screen items-center bg-image">
      <Card styles="h-fit">
        {{
          content: loginForm,
        }}
      </Card>
    </div>
  );
}

export default Login;

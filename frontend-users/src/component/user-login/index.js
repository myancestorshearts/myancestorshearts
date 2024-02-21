/* eslint-disable no-unused-vars */
import React, { useState } from "react"

const SignInPage = () => {
  const [errors, setErrors] = useState("")
  const [formData, setformData] = useState("")

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = {}

    if (!formData.email || !formData.email.trim()) {
      newErrors.email = "Email is Required"
    }
    if (!formData.password || !formData.password.trim()) {
      newErrors.password = "Password is Required"
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    try {
      const response = await fetch(
        "http://localhost/5001/userRoutes/client-login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      )

      const data = await response.json()

      if (response.ok) {
        sessionStorage.setItem("authToken", data.token)
        console.log("LoggedIn")
      } else {
        console.error(data.message || "Login Error")
      }
    } catch (error) {
      console.error("Login Error: ", error)
    }
  }
  return (
    <div className=" bg-gray-100 text-gray-700 p-8 rounded-lg shadow-md w-full max-w-md mx-auto ">
      <h2 className="text-2xl font-bold mr-auto p-9 text-gray-900 mb-4">
        Sign In
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Continue
          </button>
        </div>
        <div className="text-center">
          <a
            href="/signup"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Sign up for free
          </a>
        </div>
      </form>
    </div>
  )
}

export default SignInPage

import React from "react"
import Login from "../user-login/index"

const Home = () => {
  return (
    <div className="relative flex pt-8 min-h-96 bg-primary-500 text-white ">
      <div className="m-auto md:flex md:justify-between md:items-center md:w-full md:px-28">
        <div className="md:flex-1 md:mr-4">
          {" "}
          <h1 className="text-6xl font-bold mb-2">
            Welcome To MyAncestorsHeart
          </h1>
          <p className="text-xl mb-4">Genealogy and Family history platform</p>
        </div>
        <div className="absolute w-full pt-10 ">
          <div className="w-full max-w-md pr-5">
            <Login />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

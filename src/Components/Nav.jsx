// import React from "react";

import { useState } from "react";

export default function Nav() {
   
    const [loginClicked , SetLClick] = useState(false);
    const [signupClicked , SetSClick] = useState(false);
    function Dissappear(e){
        e.preventDefault();
        if(e.target === e.currentTarget){
            SetLClick(false);
            SetSClick(false);
        }

    }
    

    
    return (
    <>
      <div className="w-full flex items-center justify-between px-16 h-[80px] border-b-2 navbar">
        <div className="text-4xl stroke-text">ReciPro</div>
        <div>
          <ul className="flex items-center gap-8 ml-12">
            <li className="underline-hover text-lg font-semibold">
              <a href="index.html">Home</a>
            </li>
            <li className="underline-hover text-lg font-semibold">
              <a href="recipes.html">Recipes</a>
            </li>
            <li className="underline-hover text-lg font-semibold">
              <a href="make.html">Make✨</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button id="signup" onClick={()=>{SetSClick(!signupClicked)}} className="lightBtn">
            Sign Up
          </button>
          <button id="login" onClick={()=>{SetLClick(!loginClicked)}}  className="darkBtn">
            Login
          </button>
        </div>
      </div>

     {loginClicked && (
         <div
         onClick={Dissappear}
         id="loginwindowbg"
         className=" fade-in bg-black/50 fixed inset-0 flex items-center justify-center z-50"
       >
         <div
           id="loginwindow"
           className=" backdrop-blur-md bg-white/30 p-8 rounded-lg shadow-lg max-w-sm w-full fade-in"
         >
           <h2 className="text-2xl mb-4 text-center font-semibold">Login</h2>
           <form className="flex flex-col items-center justify-center">
             <div className="mb-4">
               <label className="block text-gray-700">Username:</label>
               <input
                 type="email"
                 placeholder="Enter User Name"
                 className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                 required
               ></input>
             </div>
 
             <div className="mb-4">
               <label className="block text-gray-700">Password:</label>
               <input
                 type="password"
                 placeholder="Enter Password"
                 className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                 required
               ></input>
             </div>
 
             <button
               type="submit"
               className="bg-blue-500 text-white  mx-auto hover:bg-blue-400  p-2 rounded-lg"
             >
               Login
             </button>
 
             <p className="flex flex-row gap-1">
               Dont have an account
               <span id="signup1"  onClick={()=>{SetLClick(!loginClicked); SetSClick(!signupClicked)}} className="text-red-700 cursor-pointer">
                 {" "}
                 Sign Up!{" "}
               </span>
             </p>
           </form>
         </div>
       </div>
     )}
     { signupClicked &&(
        <div onClick={Dissappear} id="signupwindowbg" className="  fade-in bg-black/50 fixed inset-0  flex items-center justify-center z-50 ">
        <div id="signupwindow"
            className=" rounded-xl backdrop-blur-md shadow-lg bg-slate-200 bg-opacity-30 flex flex-col justify-center items-center ">
            <div className="p-12 flex flex-col justify-center items-center">
                <span className="text-4xl font-semibold font-serif my-2">Register</span>
                <span className="text-l text-slate-500 mb-8 font-md font-sans">Enter your information to register
                </span>
                <div className="flex flex-row gap-28 w-full">
                    <div className="flex flex-col gap-1">
                        <label className="text-sm  font-semibold text-slate-700" htmlFor="name">First Name</label>
                        <input placeholder="Enter your name" className="rounded shadow p-1" type="text" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-semibold text-slate-700" htmlFor="name">Last Name</label>
                        <input placeholder="Enter your last name" className="rounded shadow p-1" type="text" />
                    </div>
                </div>

                <div className="flex w-full flex-col mt-8">

                    <label className="text-sm font-semibold text-slate-700" htmlFor="name">Email</label>
                    <input placeholder="Enter your email" className="rounded shadow p-1 w-full" type="text" />


                </div>
                <div className="flex  w-full flex-col mt-8">

                    <label className="text-sm font-semibold text-slate-700" htmlFor="name">Password</label>
                    <input placeholder="Enter your Password" className="rounded shadow p-1 w-full " type="pass" />

                </div>

                <button className="rounded bg-blue-500 mt-12 p-2 text-white font-semibold hover:bg-blue-400">
                    Register
                </button>
                <p className="flex flex-row gap-1">Already have an account?
                    <span onClick={()=>{SetLClick(!loginClicked); SetSClick(!signupClicked)}} id="login1" className="text-red-700 cursor-pointer"> Login! </span>
                </p>
            </div>
        </div>
    </div>
     )

     }
    </>
  );
}

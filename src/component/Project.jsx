import React from "react";
import Nagebaba from "../images/nagebaba.png"
import Prime from "../images/prime.png";
import Hospital from "../images/hospital.png"
const Project = () =>{
    
    const project = [
        {
            id:1,
            src:Nagebaba,
            desc:" Nagebaba Multistate Website &Management System"
        },
        {
            id:2,
            src:Hospital,
            desc:"Swasthya Hospital Website"
        },
        {
            id:3,
            src:Prime,
            desc:"Prime Course Website"
        }
    ]

    return(
        <div name='project' className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen ">
           <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</p>
                <p className="py-6">Check Out Projects here</p>
            </div>


            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {project.map(({ id,src,desc})=>(
                <div key ={id} className="shadow-md shadow-gray-600 rounded-lg">
                    <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>
                    <div  className="mt-2 ml-10"><p> {desc}</p></div>
                    <div className="flex items-center justify-center">
                        <button className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105">Demo</button>
                        <button className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105">Code</button>
                    </div>
                </div>
            ))}
            </div>
           </div>
        </div>
    )
}
export default Project;
import React from "react";
import HTML from "../images/html.png"
import CSS from "../images/css.png";
import JS from "../images/js.png";
import REACT from "../images/react.png"
import NEXT from "../images/next1.png";
import NODE from "../images/node.png";
import EXPRESS from "../images/express1.png"
import MYSQL from "../images/Mysql.png";
import MONGO from "../images/mongo.png"
import GITHUB from "../images/git1.png"
const Skills = ()=>{

    const tech = [
        {
            id:1,
            src:HTML,
            title:"HTML",
            style:"shadow-orange-500"
        },

        {
            id:2,
            src:CSS,
            title:"CSS",
            style:"shadow-blue-500"
        },
        {
            id:3,
            src:JS,
            title:"Javascript",
            style:"shadow-yellow-500"
        },
        {
            id:4,
            src:REACT,
            title:"React",
            style:"shadow-blue-500"
        },
        {
            id:5,
            src:NEXT,
            title:"Next-js",
            style:"shadow-white"
        },
        {
            id:6,
            src:NODE,
            title:"Node",
            style:"shadow-green-500"
        },
        {
            id:7,
            src:EXPRESS,
            title:"Express js",
            style:"shadow-white"
        },
        {
            id:8,
            src:MYSQL,
            title:"MySql",
            style:"shadow-blue-500"
        },
        {
            id:9,
            src:MONGO,
            title:"Mongo db",
            style:"shadow-green-500"
        },
        {
            id:10,
            src:GITHUB,
            title:"Github",
            style:"shadow-white"
        },
    ]
    return(
        <div name="skills"
        className="bg-gradient-to-b from-gray-800 to-black w-full md:h-screen  ">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white ">
            <div className="">
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Skills</p>
                <p className="py-6">There are the Technologies I've worked with</p>
            </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                {tech.map(({ id,src,title,style})=>(
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img alt=""  src={src} className="w-20 mx-auto"/>
                        <p className="mt-4">{title}</p>
                    </div>
                    ))}
                </div>
                </div>
        </div>
    )
}
export  default  Skills;
import React from "react";
import A2Z from "../images/a2z.png"
const About = () =>{

    const comp = [
        {
            id:1,
            src :A2Z,
            company:"Company Name : A2Z infotech Ahemednagar",
            role:"Role : frontend developer",
            date:" 2-Dec-2022 to 28-April-2023 ",
            link:"https://a2zithub.org/",
            style:"w-40 h-50"
        },

        {
            id:2,
            src :"https://www.rentper.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.f27af157.png&w=1080&q=75",
            company:"Company Name : Rentper",
            role:"Role : Fullstack developer",
            date:" 20-Oct-2022 to 20-May-2024",
            link:"https://www.rentper.org/en",
            style:"w-40 h-50% mt-20"
        }
    ]
    return(
    <div name="about" className="w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    Experience
                </p>

            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {comp.map(({ id,src,company, role, date,link,style})=>(
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
                    <img src = {src} alt="" className={`ml-20 rounded-md duration-200 hover:scale-105 ${style}`}/>
                    <div  className="mt-2 ml-10"><p> {company}</p></div>
                    <br></br>
                    <div  className="mt-2 ml-10"><p> {role} </p></div>
                    <br></br>
                    <div  className="mt-2 ml-10"><p> {date}</p></div>
                    <div className="flex items-center justify-center">
                        <a href={link}
                        className="w- 1/2 text-white bg-gradient-to-b from-cyan-500 to-blue-500 mt-3 px-6 py-2 mb-2 mx-auto flex items-center rounded-md">Visit Site</a>
                        <br></br>
                     
                    </div>
                </div>
                  ))}
            </div>
        </div>
    </div>
    )
}
export default About;
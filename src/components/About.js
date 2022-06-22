import React from 'react'
import pic1 from '../images/DSC_0082.jpg'
import pic2 from '../images/school.png'
import pic3 from '../images/socialfoto.jpeg'
import {  HiBriefcase, HiUser, HiAcademicCap } from 'react-icons/hi'


function About(){
    return(
        <section className="flex flex-row">
            <div className="md:p-16 mx-auto max-w-screen-2xl">
                <div className="flex flex-col items-center">
                    <div className="p-5">
                        <h1 className="text-3xl mb-4 text-red-600 font-bold">About Me</h1>
                        <p className="text-xl">Maak kennis met mij en mijn school en werk achtergrond en ontdek wie ik ben!</p>
                    </div>
                    <div className="hidden md:flex flex-col bg-red-900 p-2 rounded-2xl animate-pulse">
                        <p>Klik op de iconen links om door de pagina heeft te scrollen</p>
                    </div>
                </div>
                <div  className="flex flex-col items-center">
                    <div className="p-5"></div>
                    <div id="persoon"></div>
                </div>
                <div className="flex flex-col-reverse md:flex-row justify-between p-10">
                    <div className="md:p-10 ">
                        <div className="container md:mx-auto md:p-5 rounded-xl">
                            <h1 className="text-3xl mb-5 text-red-600 font-bold">
                                Wie ik ben
                            </h1>
                            <p className="text-xl mb-5">
                                Mijn naam is Jesse Hobie Elbertsen, ik ben geboren op 15 september 1999 in Hilversum Noord-Holland in Nederland. 
                            </p>
                            <p className="text-xl mb-5">
                                Ik ben sinds 2021 begonnen met programmeren en met name op front-end gebied toen ik begonnen ben met mijn HBO opleiding op Hogeschool Utrecht. Ik heb dit gedaan omdat ik al op jongen leeftijd een interesse had in Computers en ik wilde graag meer leren over software aangezien ik het hardware deel al goed begreep.
                            </p>
                            <p className="text-xl mb-5">
                                Verder zijn mijn hobbies: fitness, vissen en op stap gaan en dingen ontdekken. 
                            </p>
                        </div>
                    </div>
                    <div className="p-10">
                        <div className="bg-red-900 p-2 rounded-xl mt-8">
                            <img className="rounded-xl" width={500} src={pic1} alt="" />
                        </div>
                    </div>
                </div>
                <div id="school" className="flex flex-col items-center ">
                    <div  className="p-5"></div>
                    <div></div>
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="p-10">
                        <div className="bg-red-900 p-2 rounded-xl mt-8">
                            <img className="rounded-xl" width={700} src={pic2} alt="" />
                        </div>
                    </div>
                    <div className="p-10">
                        <div className="container mx-auto md:p-5 rounded-xl">
                        <h1 className="text-3xl mb-5 text-red-600 font-bold">School Achtergrond</h1>
                            <p className="text-xl mb-5">
                                In 2019 heb ik mijn HAVO Diploma gehaald bij het VAVO lyceum in Amersfoort. Hier heb ik de Natuur en gezondheid (NG) profiel gevolgd, met als bijvak informatica waar ik maar eerste aanmerking heb gehad met programmeren en met name HTML/CSS.
                            </p>
                            <p className="text-xl mb-5">
                                Ik heb na het halen van mijn HAVO diploma 2 jaar gewerkt, na die 2 jaar heb ik me opgegeven voor OPEN-ICT op hogeschool Utrecht waar ik uit eindelijk in 2025 mijn bachelor in ICT zal ontvangen. 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center ">
                    <div className="p-5"></div>
                    <div id="werk"></div>
                </div>
                <div className="flex flex-col md:flex-row-reverse">
                    <div className="p-10">
                        <div className="bg-red-900 p-2 rounded-xl mt-8">
                            <img className="rounded-xl" src={pic3} alt="" />
                        </div>
                    </div>
                    <div className="p-10">
                        <div className="container mx-auto md:p-5 rounded-xl">
                        <h1 className="text-3xl mb-5 text-red-600 font-bold">Werk Achtergrond</h1>
                            <p className="text-xl mb-5">
                                Vanaf jongs af aan ben ik al begonnen met werken en heb sinds mijn 14de altijd al een baan gehad.
                            </p>
                            <div className="text-xl mb-5">
                                <ul>
                                    <li className="mb-4">
                                        -2015 t/m 2021: Albert Heijn
                                    </li>
                                    <li className="mb-4">
                                        -2019 t/m 2020: The Sting (kleding winkel)
                                    </li>
                                    <li className="mb-4">
                                        -2021 t/m heden Coolblue
                                    </li>
                                </ul>
                            </div>
                            <p className="text-xl mb-5">
                                Ik vind het belangrijk om altijd mezelf te ontwikkelen op de arbeidsmarkt en om nieuwe skills te leren. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex flex-col fixed">
                    <a href="#persoon">
                        <button className="m-6 bg-red-900 text-4xl rounded-xl p-5 hover:bg-red-600">
                            <HiUser />
                        </button>
                    </a>
                    <a href="#school">
                        <p className="hidden hover:bg-red-900 p-2">School achtergrond</p>
                        <button className="m-6 bg-red-900 text-4xl rounded-xl p-5 hover:bg-red-600">
                           <HiAcademicCap />
                        </button>
                    </a>
                    <a href="#werk">
                        <button className="m-6 bg-red-900 text-4xl rounded-xl p-5 hover:bg-red-600">
                            <HiBriefcase />
                         </button>
                     </a>
                 </div>
        </section>
    )
}

export default About;
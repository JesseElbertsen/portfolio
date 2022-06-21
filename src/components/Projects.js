import React from 'react'

import pic2 from '../images/jandekapper.png'
import pic3 from '../images/snippetjar.png'
import {  HiScissors } from 'react-icons/hi'
import { GiMasonJar } from "react-icons/gi";
import { MdComputer } from "react-icons/md";
import Slider from './Slider.js'


function Projects(){
    return(
        <section className="flex flex-row">
            <div className="md:p-16 mx-auto max-w-screen-2xl">
                <div className="flex flex-col items-center">
                    <div className="p-5">
                        <h1 className="text-3xl mb-4 text-red-600 font-bold">My Projects</h1>
                        <p className="text-xl">Neem een kijkje in de Projecten die ik heb gedaan!</p>
                    </div>
                    <div className="hidden md:flex flex-col bg-red-900 p-2 rounded-2xl animate-pulse">
                        <p>Klik op de iconen links om door de pagina heeft te scrollen</p>
                    </div>
                </div>

                <div className="flex flex-col items-center ">
                    <div className=" p-5"></div>
                    <div id="persoon"></div>
                </div>
                <div className="flex flex-col md:flex-col justify-between p-10">
                    <div className="md:p-10 ">
                        <div className="container md:mx-auto md:p-5 rounded-xl">
                            <h1 className="text-3xl mb-5 text-red-600 font-bold">Portfolio Project</h1>
                            <p className="text-xl mb-5">In het begin van mijn school carriere op Hogeschool Utrecht hebben wij om kennis te maken met coderen en ICT in het algemeen kleine projectjes gedaan, met als begin een portfolio website maken.</p>
                            <p className="text-xl mb-5">Tijdens het eerste project had ik nul kennis over programmeren dus was dit een goed begin om kennis te maken met HTML en CSS.</p>
                            <p className="text-xl mb-5">-De eerste versie is geschreven met puur HTML en CSS maar was niet responsive.</p>
                            <p className="text-xl mb-5">-De tweede versie wilde ik graag responsive maken en heb ik dus met de minimale kennis die ik had Bootstrap toegepast.</p>
                            <p className="text-xl mb-5">-De derde versie heb ik met HTML CSS zelf een grid systeem gemaakt om de site responsive te maken en om een beter begrip te krijgen van hoe het is om met HTML en CSS te werken.</p>
                            <p className="text-xl mb-5">-En als laatste heb ik het huidige portfolio site die ik gemaakt heb met React en Tailwind om alle dingen die ik geleerd heb met de vorige versies in 1 hele project toe te passen</p>
                        </div>
                        <div className="md:p-10">
                            <p className='text-3xl font-bold p-2 text-red-600'>Skills die ik geleerd heb.</p>
                            <p className="text-2xl font-bold p-2">-HTML</p>
                            <p className="text-2xl font-bold p-2">-CSS</p>
                            <p className="text-2xl font-bold p-2">-React</p>
                            <p className="text-2xl font-bold p-2">-Tailwind</p>
                        </div>
                    </div>
                    <div className="md:p-10 flex justify-center">
                        <div className="bg-red-900 p-2 rounded-xl mt-8">
                            <Slider/>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center ">
                    <div className=" p-5"></div>
                    <div id="school"></div>
                </div>
                <div className="flex flex-col-reverse md:flex-col-reverse justify-between p-10">
                    <div className="md:p-10">
                        <div className="bg-red-900 p-2 rounded-xl mt-8">
                            <img className="rounded-xl" src={pic2} alt="pic2" />
                        </div>
                    </div>
                    <div className="md:p-10">
                        <div className="container md:mx-auto md:p-5 rounded-xl">
                            <h1 className="text-3xl mb-5 text-red-600 font-bold">Kappers Applicatie</h1>
                            <p className="text-xl mb-5">
                                In het tweede blok van het eerste jaar moesten wij als laatste opgegeven opdracht een werkend kappers applicatie maken, waar je bestellingen kon plaatsen en als gebruiker zelf nieuwe producten kon invoegen. 
                            </p>
                            <p className="text-xl mb-5">
                                Dit project heb ik samen gemaakt met Can Örsçek, Liran Kadin en Nathan Sakoetoe. Wij hebben dit project onder verdeeld tussen Front-end en back-end, ik zelf heb de back-end opgepakt met hier en daar wat inbreng op de front-end.
                            </p>
                            <p className="text-xl mb-5">
                                Alhoewel de samenwerking stroef ging door wat mening verschillen, hebben we desondanks een werkend project weten te maken die voor iedereen leerzaam was.
                            </p>
                            <p className="text-xl mb-5">
                                Zo heb ik hier vooral meer kennis gemaakt met scrum, GitHub en hoe ik simpel een database opstel met firebase. 
                            </p>
                        </div>
                        <div className='md:p-10'>
                            <p className='text-3xl font-bold text-red-600 p-2'>Skills die ik geleerd heb.</p>
                            <p className="text-2xl font-bold p-2">-Scrum</p>
                            <p className="text-2xl font-bold p-2">-Firebase</p>
                            <p className="text-2xl font-bold p-2">-GitHub</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center p-10">
                    <div className=" p-5"></div>
                    <div id="werk"></div>
                </div>
                <div className="flex flex-col md:flex-col justify-between ">
                    <div className="p-10">
                        <div className="container md:mx-auto md:p-5">
                            <h1 className="text-3xl mb-5 text-red-600 font-bold">SnippetJar</h1>
                            <p className="text-xl mb-5">
                                Als laatste project van het eerste schooljaar heb ik gewerkt aan de pitch van Justian Spijkerbosch, namelijk SnippetJar. SnippetJar is een app waar ik samen met Justian Spijkerbosch, Joel Lytsman Piernbaum, Lowen Rekondie en Can  Örsçek aan heb gewerkt. 
                            </p>
                            <p className="text-xl mb-5">
                                De bedoeling van deze app is dat je gemakkelijk oplossingen die je bent tegen gekomen kan opslaan in een database en terug kan halen als individu of als team zodat je niet weer tijd hoeft in te leveren om te gaan trouble-shooten. 
                            </p>
                            <p className="text-xl mb-5">
                                In dit project heb ik vooral bijdrage geleverd aan front-end en heb ik test rapporten geschreven om de functies te testen die al af waren in het project.
                            </p>
                            <p className="text-xl mb-5">
                                Voor mij was dit vooral een leerzame project aangezien mijn peers al meer kennis hadden met programmeren en coderen. 
                            </p>
                        </div>
                        <div className='md:p-10'>
                            <p className='text-3xl font-bold text-red-600 p-2'>Skills die ik verbeterd heb.</p>
                            <p className="text-2xl font-bold p-2">-Scrum</p>
                            <p className="text-2xl font-bold p-2">-React</p>
                            <p className="text-2xl font-bold p-2">-Tailwind</p>
                        </div>
                    </div>
                    <div className="p-10">
                        <div className="bg-red-900 p-2 rounded-xl">
                            <img className="rounded-xl" src={pic3} alt="pic3" />
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="hidden md:flex flex-col fixed">
                    <a className="flex flex-row" href="#persoon">
                        <button className="m-6 bg-red-900 text-4xl rounded-xl p-5 hover:bg-red-600">
                            <MdComputer />
                        </button>
                    </a>
                    <a href="#school">
                        <button className="m-6 bg-red-900 text-4xl rounded-xl p-5 hover:bg-red-600">
                           <HiScissors />
                        </button>
                    </a>
                    <a href="#werk">
                        <button className="m-6 bg-red-900 text-4xl rounded-xl p-5 hover:bg-red-600">
                            <GiMasonJar />
                         </button>
                    </a>
                </div>
        </section>
    )
}

export default Projects;
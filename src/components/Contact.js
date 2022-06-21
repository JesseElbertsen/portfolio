import React from 'react'
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai';

function Contact(){
    return(
        <section>
            <div className="flex flex-col items-center md:p-24 mt-6">
                <div className="flex flex-col w-1/2">
                    <h1 className="font-bold text-4xl pb-8">Contact</h1>
                    <h1 className="font-bold text-2xl pb-4">Voor eventuele samenwerking of om contact op te nemen kunt u mij mailen naar: </h1>
                    <a className="text-red-600 mb-5 text-xl" href="mailto:jesse.elbertsen@gmail.com">jesse.elbertsen@gmail.com.</a> 
                    <h1 className="font-bold text-2xl">of kunt u naar mijn socials gaan hier onderaan.</h1>
                    <div className="flex flex-col md:flex-row justify-between pt-8">
                        <div className="p-2">
                            <a className="flex md:flex-row" href="https://github.com/JesseElbertsen">
                                <div className="bg-red-900 rounded-2xl p-2">
                                    <AiOutlineGithub/>
                                </div>
                                <p className="p-1">Github</p>
                            </a>
                        </div>
                        <div className="p-2">
                            <a className="flex md:flex-row" href="https://www.linkedin.com/in/jesse-elbertsen-012835240/">
                                <div className="bg-red-900 rounded-2xl p-2 font">
                                    <AiOutlineLinkedin/>
                                </div>
                                <p className="p-1">Linkedin</p>
                            </a>
                        </div>
                        <div className="p-2">
                            <a className="flex md:flex-row" href="https://www.instagram.com/jesseelbertsen/">
                                <div className="bg-red-900 rounded-2xl p-2">
                                    <AiOutlineInstagram/>
                                </div>
                                <p className="p-1">Instagram</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;
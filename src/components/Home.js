import React from 'react'
import pic1 from '../images/jepsiee.png'
import {Link} from 'react-router-dom'


function Home(){
    return(
        <section>
            <div>
                <div className="flex flex-col md:flex-row justify-center p-5">
                    <div className="p-10 md:mt-24">
                        <div className="container mx-auto pb-5 y-auto">
                            <h1 className="text-3xl font-bold">Hi!</h1>
                            <h1 className="text-3xl font-bold">Mijn naam is</h1>
                            <h1 className="text-3xl text-bold text-red-600">Jesse Elbertsen</h1>
                        </div>
                        <div className="font-bold w-60 flex flex-col justify-center">
                            <h1 className="mb-4">Ik ben beginnende developer in <p className="text-red-600">HTML - CSS - React</p></h1>
                            <h1>en ik vind het leuk om websites te designen en maken, maar vooral om te leren.</h1>
                        </div>
                    </div>
                    <div className="p-10">
                        <img width={600} src={pic1} alt="" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row center justify-center m-5 p-5">
                <div className="m-5 p-5">
                    <div className="mb-3">
                        <p>Ben je benieuwd naar mijn Projecten?</p>
                        <p>Druk dan hier om een kijkje te nemen!</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <Link className="hover:bg-red-600 bg-red-900 p-2 rounded-xl" to="/projects">Projects</Link>
                    </div>
                </div>
                <div className="m-5 p-5">
                    <div className="mb-3">
                        <p>Of wil je graag met mij samen werken?</p>
                        <p>Druk hier om contact op te nemen!</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <Link className="hover:bg-red-600 bg-red-900 p-2 rounded-xl" to="/contact">Contact me</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;
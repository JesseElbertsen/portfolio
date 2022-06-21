import React, { useEffect, useState, useRef} from "react";
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'

const featuredProducts = [
    "/image/portfolio1steversie.png",
    "/image/portfolio2deversie.png",
    "/image/portfolio3deversie.png"
];

let count =0;
export default function Slider() {

    const [currentIndex, setCurrentIndex] = 
    useState(0);

    const slideRef = useRef();

    const removeAnimation = () => {
        slideRef.current.classList.remove
        ('fade-anim')
    }

    useEffect(() => {
        slideRef.current.addEventListener('animationend', removeAnimation)
        // startSlider()
    }, [])

    // const startSlider = () => {
    //     setInterval(() => {
    //         handleOnNextClick()
    //     }, 5000);
    // }

    const handleOnNextClick = () => {
        count = (count + 1 ) % featuredProducts.length;
        setCurrentIndex(count);
        slideRef.current.classList.add
        ('fade-anim')
    }

    const handleOnPrevClick = () => {
        const productsLength = featuredProducts.length;
        count = (currentIndex + productsLength - 1 ) % productsLength;
        setCurrentIndex(count);
        slideRef.current.classList.add
        ('fade-anim')
    };

    console.log(slideRef);

    return (
        <div ref={slideRef} className="w-full select-none relative">
            <div className="aspect-w-16 aspect-h-9">
                <img  src={featuredProducts[currentIndex]} alt="" />
            </div>
            <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
                <button className="bg-red-900 p-2 rounded-3xl" onClick={handleOnPrevClick}><BiLeftArrow/></button>
                <button className="bg-red-900 p-2 rounded-3xl" onClick={handleOnNextClick}><BiRightArrow/></button>
            </div>
        </div>
    );
}
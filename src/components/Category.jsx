import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { categoryData } from "../utils/data";
import { useState } from "react";


const Category = () => {

    const [slide, setSlide] = useState(0);

    function nextSlide() {
        if (slide < 9) {
            const newSlide = slide + 3;
            setSlide(newSlide);
        } else {
            setSlide(slide)
        }

    }
    function prevSlide() {
        if (slide == 0) {
            setSlide(slide)
            return;
        } else {
            const newSlide = slide - 3;
            setSlide(newSlide);
        }
    }

    return (
        <div className="mt-5 max-w-[1200px] mx-auto ">
            <div className="flex items-center justify-between">
                <div className="font-bold text-[20px] md:text-[35px]">{`What's on your mind?`}</div>
                <div className="flex gap-10">
                    <div onClick={prevSlide} className="bg-gray-400 w-[30px] md:w-[40px] h-[30px] md:h-[40px] flex justify-center items-center cursor-pointer rounded-full"><FaArrowLeft /></div>
                    <div onClick={nextSlide} className="bg-gray-400 w-[30px] md:w-[40px] h-[30px] md:h-[40px] flex justify-center items-center cursor-pointer rounded-full"><FaArrowRight /></div>
                </div>
            </div>
            <div className="flex overflow-hidden">
                {
                    categoryData.map((val, ind) => {
                        return (
                            <div key={ind} className="w-[200px] shrink-0 duration-500" style={{
                                transform: `translateX(-${slide * 100}%)`
                            }}>
                                <img src={val.image} alt="" />
                            </div>
                        )
                    })
                }
            </div>
            <hr className="my-6 border-[1px] text-gray-400" />
        </div>
    )
}

export default Category
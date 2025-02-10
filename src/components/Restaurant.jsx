import { useContext, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { restaurantData } from "../utils/data";
import { UserContext } from "./UserContext";

const Restaurant = () => {

    const [slide, setSlide] = useState(0);
    const [restaurant] = useState(restaurantData);
    const { cart, setCart } = useContext(UserContext);

    function nextSlide() {
        if (slide < 6) {
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

    function addItem(index) {
        const selectProduct = restaurant[index];
        localStorage.setItem("cartitem", JSON.stringify(selectProduct));
        setCart([...cart, selectProduct])
    }

    return (
        <div className="mt-5 max-w-[1200px] mx-auto ">
            <div className="flex items-center justify-between">
                <div className="font-bold text-[20px] md:text-[35px]">Top restaurant chains in Rajkot</div>
                <div className="flex gap-10">
                    <div onClick={prevSlide} className="bg-gray-400 w-[30px] md:w-[40px] h-[30px] md:h-[40px] flex justify-center items-center cursor-pointer rounded-full"><FaArrowLeft /></div>
                    <div onClick={nextSlide} className="bg-gray-400 w-[30px] md:w-[40px] h-[30px] md:h-[40px] flex justify-center items-center cursor-pointer rounded-full"><FaArrowRight /></div>
                </div>
            </div>
            <div className="flex overflow-hidden gap-10 pt-10">
                {
                    restaurant.map((val, ind) => {
                        return (
                            <div key={ind} className="w-[300px] shrink-0 duration-500 " style={{
                                transform: `translateX(-${slide * 120}%)`
                            }}>
                                <div className="relative">
                                    <img src={val.image} alt="" className="max-w-[300px] w-full h-[210px] rounded-2xl" />
                                    <div className="image-overlap absolute w-full h-full rounded-2xl top-0"></div>
                                    <p className="absolute bottom-0 left-3 text-[25px]  font-bold text-white">{val?.offer}</p>
                                </div>
                                <div className="p-3">
                                    <div className="text-xl font-bold">
                                        {val?.title}
                                    </div>
                                    <div className="pb-1">
                                        {val?.minTime} - {val?.maxTime} {`minute`}
                                    </div>
                                    <div>
                                        {val?.name}
                                    </div>
                                    <div className="flex justify-between items-center">
                                        {val?.place}
                                        <button onClick={() => addItem(ind)} className="bg-amber-500 p-1 font-bold rounded-md">add item</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <hr className="my-6 border-[1px] text-gray-400" />
        </div>
    )
}

export default Restaurant
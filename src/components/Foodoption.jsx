import { useContext } from "react";
import { restaurantData } from "../utils/data";
import { UserContext } from "./UserContext";

const Foodoption = () => {

    const { cart, setCart } = useContext(UserContext);


    function addItem(index) {
        const selectProduct = restaurantData[index];
        setCart([...cart, selectProduct])
    }
    return (
        <div className="mt-5 max-w-[1200px] mx-auto ">
            <div className="flex items-center">
                <div className="font-bold text-[20px] md:text-[35px]">Top restaurant chains in Rajkot</div>
            </div>
            <div className="gap-10 pt-10" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", display: "grid" }}>
            {
                    restaurantData.map((val, ind) => {
                        return (
                            <div key={ind} className="shrink-0 duration-500 ">
                                <div className="relative hover:scale-105 transition-all duration-150">
                                    <img src={val.image} alt="" className="object-cover object-top w-full h-[210px] rounded-2xl" />
                                    <div className="image-overlap absolute w-full h-full rounded-2xl top-0"></div>
                                    <p className="absolute bottom-0 left-3 text-[21px]  font-bold text-white">{val?.offer}</p>
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
                                        <button onClick={() => addItem(ind)} className="bg-amber-500 p-1 rounded-md">add item</button>
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

export default Foodoption
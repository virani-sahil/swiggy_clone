// import React from 'react'

import { useContext, useEffect } from "react"
import { UserContext } from "./UserContext";

const Cart = () => {
    const { cart, setCart } = useContext(UserContext);

    function handleRemove(index) {
        const removeItem = cart.filter((val, ind) => ind !== index)
        localStorage.setItem("cartitem", JSON.stringify(removeItem))
        setCart(removeItem);
    }

    useEffect(() => {
        const cartNewData = JSON.parse(localStorage.getItem("cartitem"));
        setCart(cartNewData);
    }, [setCart])

    return (
        <div className="grid grid-cols-5 gap-10 p-10">
            {
                cart?.map((val, ind) => {
                    return (
                        <div key={ind}>
                            <div className="relative w-[300px]">
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
                                    <button onClick={() => handleRemove(ind)} className="bg-red-500 p-1 text-white font-bold rounded-md">remove</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cart
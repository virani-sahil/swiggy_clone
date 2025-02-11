// import React from 'react'

import { useContext, useEffect } from "react"
import { UserContext } from "./UserContext";
// import Header from "./Header";
import { Link } from "react-router";

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
    }, [setCart]);

    return (
        <div className="p-10 ">
            {/* <Header /> */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">

                {
                    cart?.map((val, ind) => {
                        return (
                            <div key={ind}>
                                <div className="relative hover:scale-105 transition-all duration-150">
                                    <img src={val.image} alt="" className=" w-full h-[210px] rounded-2xl" />
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
                                        <button onClick={() => handleRemove(ind)} className="bg-red-500 hover:bg-red-600 hover:shadow-2xl transition-all duration-150 p-1 text-white font-bold rounded-md">remove</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="fixed right-5  bottom-5">
                <Link to="/" className="p-2 bg-black text-white  rounded-xl px-3 font-bold">Home</Link>
            </div>
        </div>
    )
}

export default Cart
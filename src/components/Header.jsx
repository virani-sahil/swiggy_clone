import { RxCaretDown } from "react-icons/rx";
import { useState } from "react";
import { menu } from "../utils/data";
const Header = () => {

    const [toggle, setToggle] = useState(false)

    function handleToggle() {
        console.log("toggle true")
        setToggle(true);
    }

    function closeToggle() {
        console.log("toggle false");
        setToggle(false);
    }

    return (
        <>
            <div className="overlap w-full h-full fixed duration-500" onClick={closeToggle} style={{
                opacity: toggle ? 1 : 0,
                visibility: toggle ? "visible" : "hidden",
            }}>
                <div className="w-[400px] bg-white h-full absolute duration-500" onClick={(e) => { e.stopPropagation() }} style={{
                    left: toggle ? "0%" : "-100%",
                }}></div>
            </div>
            <header className="p-[15px] shadow-xl text-[#686b78]">
                <div className="max-w-[1200px] mx-auto flex items-center">
                    <div className="w-[100px]">
                        <img src="/images/Swiggy-logo.png" className="w-full" alt="" />
                    </div>
                    <div className="">
                        <span className="font-bold border-b-[3px] border-[black]">Ratanada</span>
                        <RxCaretDown fontSize={25} onClick={() => handleToggle()} className="inline text-[#fc8019] cursor-pointer" />
                    </div>
                    <nav className="flex ml-auto gap-10 items-center text-[18px]">
                        {
                            menu.map(({ Icon, name }, index) => {
                                return <li key={index} className="list-none flex hover:text-[#fc8019] font-[600] cursor-pointer items-center gap-2">
                                    <Icon />
                                    {name}
                                </li>
                            })
                        }
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header
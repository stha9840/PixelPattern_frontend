import React from "react";
import {IoMdDownload} from "react-icons/io";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import Footer from "../components/Footer1.jsx";
import Carasol from "../components/carasol.jsx";
import Navbar from "../components/navbar.jsx";

const New = () => {


    const { data: wallpaper } = useQuery({
        queryKey: ["GET_COMIC_DATA_New"],
        queryFn() {
            return axios.get("http://localhost:8084/item/getAll")
        },
    });



    const popularWallpaper = wallpaper?.data.slice(-6)

    return (
        <>
            <Navbar/>

            <Carasol/>

            <div className=" h-auto md:p-10 p-5 md:mb-52  ">
                <h1 className="md:text-4xl text-3xl gilroy-bold">Newly Added Wallpapers.</h1>
                <div className="pt-6 md:flex  gap-20 flex-wrap  ">
                    {popularWallpaper?.map((i) => (
                        <div key={i?.id} className="md:w-[26rem] md:mb-0 mb-8 rounded-xl cursor-pointer shadow-xl ">
                            <div className="overflow-hidden rounded-t-xl">
                                <img src={'data:image/jpeg;base64,'+i?.itemImage} className="bg-cover h-[15rem] transform-gpu scale-100 hover:scale-110 transition-transform duration-500" alt={i.itemName} />
                            </div>
                            <div className="px-2 pt-2 pb-3 flex justify-between items-center">
                                <h1 className="gilroy-bold md:text-3xl text-2xl">{i?.itemName}</h1>
                                <button className={"text-3xl"}><IoMdDownload /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer/>
        </>
    );
};

export default New;

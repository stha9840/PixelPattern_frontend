import React from "react";
import {IoMdDownload} from "react-icons/io";
import PropTypes from "prop-types";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {Link} from "react-router-dom";
import {isAuthenticated} from "../service/authService";

const PopularPage = () => {


    const { data: wallpaper } = useQuery({
        queryKey: ["GET_COMIC_DATA"],
        queryFn() {
            return axios.get("http://localhost:8084/item/getAll")
        },
    });

    // Shuffle function to shuffle the array
    function shuffleArray(array) {
        for (let i = array?.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const shufflewdwallpaperdata = shuffleArray(wallpaper?.data)
    const popularWallpaper = shufflewdwallpaperdata?.slice(0,6)

    const handleDownload = () => {
        if (isAuthenticated()) {
            // Implement your download logic here
            console.log("Downloading...");
        } else {
            alert("Please log in to download wallpapers.");
        }
    };

    return (
        <>
            <div className=" h-auto md:p-10 p-5 md:mb-52  ">
                <h1 className="md:text-4xl text-3xl gilroy-bold">Most Downloaded.</h1>
                <div className="pt-6 md:flex  gap-20 flex-wrap  ">
                    {popularWallpaper?.map((i) => (
                        <div key={i?.id} className="md:w-[26rem] md:mb-0 mb-8 rounded-xl cursor-pointer shadow-xl ">
                            <div className="overflow-hidden rounded-t-xl">
                                <img src={'data:image/jpeg;base64,'+i?.itemImage} className="bg-cover h-[15rem] transform-gpu scale-100 hover:scale-110 transition-transform duration-500" alt={i.itemName} />
                            </div>
                            <div className="px-2 pt-2 pb-3 flex justify-between items-center">
                                <h1 className="gilroy-bold md:text-3xl text-2xl">{i?.itemName}</h1>
                                {isAuthenticated()?(
                                    <Link to={i?.downloadLink}>
                                        <button className={"text-3xl"} ><IoMdDownload /></button>
                                    </Link>
                                ):(
                                    <button className={"text-3xl"} ><IoMdDownload /></button>

                                )}

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
PopularPage.propTypes = {
    genreList: PropTypes.array.isRequired
};
export default PopularPage;

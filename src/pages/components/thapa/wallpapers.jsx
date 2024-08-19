import  {useEffect, useState} from "react";
import "./wallpaper.css"
import WallpaperCard from "./wallpaperCard.jsx";
import Navbas from "./Navbas.jsx";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";



const Wallpaper = () => {

    const { data: wallpaper } = useQuery({
        queryKey: ["GET_COMIC_DATA"],
        queryFn() {
            return axios.get("http://localhost:8084/item/getAll")
        },
    });


    const [wallpaperData, setWallpaperData] = useState([]);
    const [genreList, setGenreList] = useState([]);

    useEffect(() => {
        if (wallpaper?.data) {
            setWallpaperData(wallpaper.data);

            const uniqueCategories = [
                "All",
                ...new Set(
                    wallpaper?.data.map((curElem) => curElem?.albumId.album || "Uncategorized")
                ),

            ];
            setGenreList(uniqueCategories);
        }
    }, [wallpaper?.data]);
    // console.log(Comic?.data)

    const filterItem = (album) => {
        if (album === "All") {
            setWallpaperData(wallpaper?.data || []);
            return;
        }

        const updatedList = wallpaper?.data?.filter((curElem) => {
            return curElem?.albumId.album === album;
        }) || [];

        setWallpaperData(updatedList);
    };

    return (
        <>
            <Navbas filterItem={filterItem} genreList={genreList} />

            <WallpaperCard wallpaperData={wallpaperData} />
        </>
    )
}

export default Wallpaper;

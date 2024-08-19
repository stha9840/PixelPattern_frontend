import "./wallpaper.css"
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {isAuthenticated} from "../../service/authService";

const WallpaperCard = ({wallpaperData  }) => {
      // console.log(wallpaperData);

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
            <div className={"card-container  "}>
                {wallpaperData.map((i) => (
                    <div key={i.itemId} className={"card transform-gpu scale-100 hover:scale-105 transition-transform duration-500"}>
                        <div className={"card-body"}>
                            <span className={"card-author subtitle "}>{i.itemName}</span>
                        </div>
                        <img src={'data:image/jpeg;base64,'+i?.itemImage}  alt={i.itemImage} className={"bg-cover h-[15rem]"} />
                        <span className={"cursor-pointer"}>
                           {isAuthenticated() ? (
                               <Link to={i?.downloadLink}>
                                   <button className={"download"} onClick={handleDownload}>
                                       Download
                                   </button>
                               </Link>
                           ) : (
                               <button className={"download"} disabled>
                                   Download
                               </button>
                           )}

                        </span>
                    </div>
                ))}
            </div>
        </>
    );
};
WallpaperCard.propTypes = {
    wallpaperData: PropTypes.array.isRequired
};
export default WallpaperCard;


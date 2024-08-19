import "./wallpaper.css";
import PropTypes from "prop-types";

const Navbas = ({ filterItem, genreList }) => {
    return (
        <>
            <div className="navbar-container flex justify-center pt-4 ">
                {genreList.map((curElem) => (
                    <button
                        key={curElem}
                        className="genre-button m-2 py-2 px-4 text-black rounded-lg transition-all duration-300 shadow-md"
                        onClick={() => filterItem(curElem)}
                    >
                        {curElem}
                    </button>
                ))}
            </div>
        </>
    );
};

Navbas.propTypes = {
    filterItem: PropTypes.func.isRequired,
    genreList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Navbas;

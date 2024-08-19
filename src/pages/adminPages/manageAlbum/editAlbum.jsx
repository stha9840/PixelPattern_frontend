import {useMutation, useQuery} from "@tanstack/react-query";
import axios from "axios";
import {useForm} from "react-hook-form";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import AdminSidebar from "../adminComponents/adminSidebar.jsx";


const EditAlbum = () =>{

    const navigate = useNavigate();

    const useApiCall = useMutation({
        mutationKey:["POST_GENRE_DATA"],
        mutationFn:(payload)=>{
            console.log(payload)
            return axios.post("http://localhost:8084/album/save",payload)
        },onSuccess: () => {
            reset();
            navigate('/ManageAlbum')
        }
    })

    const onSubmit=(value)=>{
        useApiCall.mutate(value)
    }

    //To update Genre
    const{pk_id} = useParams();

    const{data:getByIdApi}=useQuery({
        queryKey:["GET_BY_ID_GENRE"],
        queryFn(){
            return axios.get("http://localhost:8084/album/getById/"+pk_id)
        },enabled:!!pk_id
    })

    // Sending data to backend
    const {register,
        handleSubmit,
        formState,
        reset} = useForm({values:getByIdApi?.data});

    const location = useLocation();
    const currentLocation = location.pathname;

    return(
        <>
            <div className={"manage-genre-div bg-gray-100"}>
                <AdminSidebar activePage={currentLocation}/>
                <div className={"pl-80  px-6 pt-2 pb-24 flex h-screen items-center justify-center"}>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <div className="modal w-5/12 h-64 mr-80 shadow-xl bg-white transform rounded-2xl ">
                        <div className="modal-box">
                            <form method="dialog" className={"px-6 py-6"} onSubmit={handleSubmit(onSubmit)}>
                                <h3 className="font-bold text-2xl">Edit Album</h3>
                                <div className={"w-full h-12 border-solid border rounded-xl border-gray-300 mt-10 flex items-center pl-4 pr-2"}>
                                    <input type={"text"} placeholder={"Enter Album Name"} className={"w-full outline-none appearance-none"} {...register("album",{required:"Genre Name is required!!"})} />
                                </div>
                                {/*<h6 className={"text-xs pl-2 text-gray-500"}>{errors?.genre?.message}</h6>*/}

                                <button type={"submit"} className={"btn-add w-24 h-12 absolute bottom-6 right-6 cursor-pointer green-color text-white rounded-xl"}><a>Edit</a></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditAlbum;
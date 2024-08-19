import Navbar from "../components/navbar.jsx";
import "../login&register/register.css"
import {useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import axios from "axios";

const Register = ()=> {

    const{register,
        handleSubmit,
        formState,
        reset} = useForm();
    const {errors} = formState;

    const useApiCall = useMutation({
        mutationKey:["POST_USER_DATA"],
        mutationFn:(payload)=>{
            return axios.post("http://localhost:8084/user/save",payload)
        },onSuccess:()=>{
            reset();
            window.location.href = '/Login';
        }
    })

    const onSubmit=(value)=>{
        useApiCall.mutate(value)
    }

    return(
        <>
            <Navbar/>
            <div className={"register-overlay flex w-full h-screen pt-8 px-10 bg-white justify-between"}>

                <div className={"register-modal-content w-full md:w-3/12 h-[60%] flex justify-center items-center flex-col"}>
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="username" type="text" placeholder="Enter Your Name" {...register("fullName",{required:"Name is required"})}></input>
                        <input className="email" type="text" placeholder="Email" {...register("email",{required:"Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                                message: "Invalid email address"
                            }})}></input>
                        <input className="password" type="password" placeholder="Password" {...register("password",{required:"Password is required",minLength: {
                                value: 4,
                                message: "Password must be at least 4 characters long"
                            }})}></input>
                        <button type={"submit"} className="sign-in  ">Sign in</button>
                    </form>
                </div>
                <div className="md:w-7/12 h-[82%] absolute right-1 bg-cover bg-center mt-14 " style={{ backgroundImage: "url('https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7885.jpg?t=st=1724000095~exp=1724003695~hmac=c53f6326303c78c54d9dc3d0734a9961190d319c7c76d3e7080e0778b25481ab&w=740')", borderRadius: "15%" }}>
                </div>
            </div>
        </>
    )
}
export default Register
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { deleteUser, getAllUsers } from "../../API/userRequest";
const Slide = () => {
    const userData = useSelector((state) => state.user.users?.allUsers?.todos)
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        deleteUser(dispatch, id);
        getAllUsers(dispatch);
    }
    /* eslint-disable */
    useEffect(() => {
        getAllUsers(dispatch);
    }, [dispatch])
    return (
        <div className="">
            {userData?.map((data) => {
                return(
                    <div className="flex bg-gray-700 mx-40 mb-1 py-2">
                        <div className="ml-3">
                            <h1 className="text-orange-500 font-mono text-2xl">
                                {data.name}
                            </h1>
                            <p className="text-white italic">
                                {data.description}
                            </p>  
                        </div>
                        <div className="ml-auto mt-3">
                            <button className="text-green-500 bg-white hover:bg-slate-100 rounded-full w-28 mx-4 h-8">
                                Compelete
                            </button>
                            <button className="text-red-500 bg-red-100 hover:bg-red-200 rounded-full w-20 mr-8 h-8"
                                onClick={() => handleDelete(data._id)}
                            >
                                Delete
                            </button>
                        </div>    
                    </div>
                )
            })}
        </div>
        
    );
}
 
export default Slide;
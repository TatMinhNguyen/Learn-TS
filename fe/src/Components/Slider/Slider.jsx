import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { deleteUser, getAllUsers, updateUser } from "../../API/userRequest";
const Slide = () => {
    const userData = useSelector((state) => state.user.users?.allUsers?.todos)
    const dispatch = useDispatch();

    const [editStates, setEditStates] = useState({});

    const handleNameChange = (id, newName) => {
        // Cập nhật trạng thái chỉnh sửa
        setEditStates({ ...editStates, [id]: true });
    
        // Gọi hàm cập nhật người dùng
        updateUser({ name: newName },dispatch, id);
    
        // Lấy danh sách người dùng sau khi cập nhật
        getAllUsers(dispatch);
    };
    const handleDescriptionChange = (id, newDescription) => {
        // Cập nhật trạng thái chỉnh sửa
        setEditStates({ ...editStates, [id]: true });
    
        // Gọi hàm cập nhật người dùng
        updateUser({ description: newDescription }, dispatch, id );
    
        // Lấy danh sách người dùng sau khi cập nhật
        getAllUsers(dispatch);
    };
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
                const isEditing = editStates[data._id];
                return (
                    <div className="flex bg-gray-700 mx-40 mb-1 py-2" key={data._id}>
                      <div className="ml-3">
                        {isEditing ? (
                          <input
                            className="p-1 m-1 rounded-md"
                            type="text"
                            value={data.name}
                            onChange={(e) => handleNameChange(data._id, e.target.value)}
                          />
                        ) : (
                          <h1 className="text-orange-500 font-mono text-2xl">{data.name}</h1>
                        )}
                        {isEditing ? (
                          <input
                            className="p-1 m-1 rounded-md mt-3"
                            type="text"
                            value={data.description}
                            onChange={(e) => handleDescriptionChange(data._id, e.target.value)}
                          />
                        ) : (
                          <p className="text-white italic">{data.description}</p>
                        )}
                      </div>
                      <div className="flex ml-auto mt-3">
                        {isEditing ? (
                        <button
                        className="text-blue-500 bg-blue-100 hover:bg-slate-200 rounded-full w-28 mx-4 h-8 mb-2"
                        onClick={() => setEditStates({ ...editStates, [data._id]: false })}
                        >
                            Save
                      </button>
                        ) : (
                        <button
                            className="text-green-500 bg-white hover:bg-slate-100 rounded-full w-28 mx-4 h-8"
                            onClick={() => setEditStates({ ...editStates, [data._id]: true })}
                        >
                            
                            Compelete
                        </button>
                        )}
                        {isEditing ? (
                            <></>
                        ) : (
                            
                            <button
                            className="text-red-500 bg-red-100 hover:bg-red-200 rounded-full w-20 mr-8 h-8"
                            onClick={() => handleDelete(data._id)}
                            >
                            Delete
                            </button>                            
                        )}

                      </div>
                    </div>
                  );
            })}
        </div>
        
    );
}
 
export default Slide;
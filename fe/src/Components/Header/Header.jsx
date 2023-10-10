import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createUser, getAllUsers } from "../../API/userRequest";

const Header = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const handleCreate = (e) => {
        e.preventDefault();
        const newUser = {
            name: name,
            description: description
        };
        createUser(newUser, dispatch);
        getAllUsers(dispatch);
    }
    useEffect(() => {
        getAllUsers(dispatch);
    }, [dispatch])
    return (
        <div className="flex my-5 bg-gray-700 mx-40">
            <div className="my-3 ml-3">
                <h1 className="text-white pl-2">
                    Name
                </h1>
                <input type="text" placeholder="Name" className=
                    "p-2 m-2 rounded-md"
                    onChange={(e) => setName(e.target.value)}
                />            
            </div>
            <div className="my-3 ml-3">
                <h1 className="text-white pl-2">
                    Description
                </h1>
                <input type="text" placeholder="Description" className=
                    "p-2 m-2 rounded-md"
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <button className="text-white bg-orange-400 hover:bg-orange-300 h-10 rounded-full w-24 mt-7 ml-auto mr-10"
            onClick={handleCreate}>
                Add Todo
            </button>
        </div>
    );
}
 
export default Header;
import axios from "axios";

const UserPath =() =>{
    const url = "http://localhost:8080/api/v1/users";

    const getUserById = async(id) =>{
        try{
            const response = await axios.get(`${url}/${id}`);
            return response.data;
        } catch (error) {
            console.error ("Error to obtains user details", error);
            throw error;
        }
    };
    
    const deleteUser = async (id) => {
        try {
            const response = await axios.delete(`/api/v1/users/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error deleting user", error);
            throw error;
        }
    };

    const createUser = async(userData) => {
        try{
            const response = await axios.post(url, userData);
            return response.data;
        }catch (error) {
            console.error ("Error creating user", error);
            throw error;
        }
    };

    const updateUser = async (id, userData) => {
        try {
            const response = await axios.put(`/api/v1/users/${id}`, userData);
        return response.data;
    } catch (error) {
        console.error("Error updating user", error);
        throw error;
    }
};

return{ getUserById, createUser, updateUser, deleteUser}

}

export default UserPath;
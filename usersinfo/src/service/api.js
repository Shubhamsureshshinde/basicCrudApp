import axios from "axios";


const URL = 'http://localhost:8000'
//benefits of using axios as it gives response and request headers

export const addUser = async (data) => {
    try {
        return await axios.post(`${URL}/add`, data);
    } catch (error) {
    }
}


export const getUsers = async (data) => {
    try {
        return await axios.get(`${URL}/all`, data);
    } catch (error) {
    }
}


export const getUser = async (userName) => {
    try {
        return await axios.get(`${URL}/${userName}`,);
    } catch (error) {
    }
}

export const editUser = async (user, userName) => {
    try {
        return await axios.post(`${URL}/${userName}`, user);
    } catch (error) {
    }
}

export const deleteUser = async (userName) => {
    try {
        return await axios.delete(`${URL}/${userName}`);
    } catch (error) {
    }
}




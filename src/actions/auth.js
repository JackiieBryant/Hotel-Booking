import axios from "axios";

export const register = async (user) => 
    await axios.post(`${process.env.REACT_API_API}/register`, user);

export const login = async (user) => 
    await axios.post(`${process.env.REACT_API_API}/login`, user);
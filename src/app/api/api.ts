import axios from "axios";

const baseUrl = 'https://university.kubsau.ru/kubsau/hs/csData/';
const instance = axios.create({
    baseURL: baseUrl,
})


export const getGroups = async () => {
    const response = await instance.get(`GetGroups`);
    return response.data;
}
export const getGroupById = async (id: string) => {
    let response = await instance.get(`GetByGroup/${id}`, {});
    return response.data
}
export const getRooms = async () => {
    let response = await instance.get(`GetRooms`);
    return response.data
}
export const getRoomById = async (id: string) => {
    let response = await instance.get(`GetByRoom/${id}`, {});
    return response.data
}
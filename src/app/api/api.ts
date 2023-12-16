import axios from "axios";

const baseUrl = 'http://it2003.kubsau.ru/api/';

const username = 'ws';
const password = '1';
const token = 'hi9318jdmi32odMoiwjd2owc';

const basicAuth = 'Basic ' + btoa(username + ':' + password);

const headers = {
    'Token': token,
    Authorization: basicAuth,
};

const instance = axios.create({
    baseURL: baseUrl,
    headers: headers
})


export const getGroups = async () => {
    const response = await instance.options(`GetGroups`);
    return response.data;
}
export const getGroupById = async (id: string) => {
    let response = await instance.get(`schedule/${id}`, {});
    return response.data
}
export const getRooms = async () => {
    let response = await instance.get(`GetRooms`);
    return response.data
}
export const getRoomById = async (id: string) => {
    let response = await instance.get(`room/${id}`, {});
    return response.data
}
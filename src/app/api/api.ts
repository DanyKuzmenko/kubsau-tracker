import axios from "axios";

const baseUrl = 'https://university.kubsau.ru/kubsau/hs/csData/';

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
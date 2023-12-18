import axios from "axios";
import {CheckboxType} from "../types/types";

const baseUrl = 'http://it2003.kubsau.ru/api/';



const instance = axios.create({
    baseURL: baseUrl,
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
export const getTasks = async () => {
    let response = await instance.get(`tasks`, {});
    return response.data
}
export const createTask = async (date: Date, task: TaskType) => {
    let response = await instance.post(`tasks`, {
        date: date,
        task: {
            title: task.title,
            subject: task.subject,
            teacher: task.teacher,
            isDone: task.isDone,
            deadline: task.deadline,
            description: task.description,
            checkboxes: task.checkboxes,
            lessonId: task.lessonId,
        }
    });
    return response.data
}


type TaskType = {
    title: string,
    subject: string,
    teacher: string,
    isDone: boolean,
    deadline: Date,
    description: string,
    checkboxes: CheckboxType[]
    lessonId: string,
}

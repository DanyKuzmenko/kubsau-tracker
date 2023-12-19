import axios from 'axios';

import { GroupType } from '../../features/SearchInput/ui/SearchInput';
import { CheckboxType, TeacherType } from '../types/types';

const baseUrl = 'http://it2003.kubsau.ru/api/';

const instance = axios.create({
  baseURL: baseUrl,
});

export const getGroups = async () => {
  const response = await instance.get(`groups`);

  return response.data as GroupType;
};
export const getGroupById = async (id: string) => {
  let response = await instance.get(`schedule/${id}`, {});
  return response.data;
};
export const getRooms = async () => {
  let response = await instance.get(`GetRooms`);
  return response.data;
};
export const getRoomById = async (id: string) => {
  let response = await instance.get(`room/${id}`, {});
  return response.data;
};
export const getTasks = async () => {
  let response = await instance.get(`tasks`, {});
  return response.data;
};
export const getTasksById = async (id: string) => {
  let response = await instance.get(`tasks/` + id, {});
  return response.data;
};
export const createTask = async (date: Date, task: TaskType) => {
  let response = await instance.post(`tasks`, {
    date: date,
    task: {
      title: task.title,
      subject: task.subject,
      teachers: task.teachers,
      isDone: task.isDone,
      deadline: task.deadline,
      description: task.description,
      checkboxes: task.checkboxes,
      lessonId: task.lessonId,
    },
  });
  return response.data;
};
export const patchTask = async (id: string, task: TaskType) => {
  let response = await instance.patch(`tasks/` + id, {
    title: task.title,
    subject: task.subject,
    teachers: task.teachers,
    isDone: task.isDone,
    deadline: task.deadline,
    description: task.description,
    lessonId: task.lessonId,
  });
  return response.data;
};

export const createCheckbox = async (title: string, lessonId: string) => {
  let response = await instance.post(`tasks/checkbox`, {
    title: title,
    lessonId: lessonId,
    isDone: false,
  });
  return response.data;
};
export const patchCheckbox = (id: string, title: string, isDone: boolean) => {};

type TaskType = {
  title: string;
  subject: string;
  teachers: TeacherType[];
  isDone: boolean;
  deadline: Date;
  description: string;
  checkboxes?: CheckboxType[];
  lessonId: string;
};

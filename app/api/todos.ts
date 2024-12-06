"use server"
import {axiosInstance} from "@/app/api/axiosInstance";
import {Todo} from "@/types/todo";


export const getTodos = async () => {
    const response = await axiosInstance.get<Todo[]>('/todo')
    return response.data
}

export const addTodo = async ({title} : {title: string}) => {
    const response = await axiosInstance.post('/todo', {title: title})
    return response.data
}

export const editTodo = async (id: number, data: Partial<Todo>) => {
    const response = await axiosInstance.put(`/todo/${id}`, data)
    return response.data
}


export const deleteTodo = async (id: number) => {
    const response = await axiosInstance.delete(`/todo/${id}`)
    return response.data
}





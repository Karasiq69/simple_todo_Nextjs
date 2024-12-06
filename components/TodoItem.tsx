'use client'
import {Todo} from "@/types/todo";
import {Checkbox} from "@/components/ui/checkbox";
import {Button} from "@/components/ui/button";
import {Trash2} from "lucide-react";
import {useTodos} from "@/hooks/useTodos";


type Props = {
    todoItem: Todo
};

const TodoItem = ({ todoItem }: Props) => {
    const { toggleTodo, deleteTodo, isLoading } = useTodos();

    return (
        <li className={'flex justify-between w-full items-center p-3 bg-white rounded-md'}>
            <div className={'flex gap-2 items-center'}>
                <Checkbox
                    checked={todoItem.isCompleted}
                    onCheckedChange={() => toggleTodo(todoItem.id, !todoItem.isCompleted)}
                    disabled={isLoading}
                />
                <p className={`font-bold text-xl ${todoItem.isCompleted && 'line-through'}`}>
                    {todoItem.title}
                </p>
            </div>
            <Button
                variant={'ghost'}
                onClick={() => deleteTodo(todoItem.id)}
                disabled={isLoading}
            >
                <Trash2 size={14}/>
            </Button>
        </li>
    );
};

export default TodoItem;

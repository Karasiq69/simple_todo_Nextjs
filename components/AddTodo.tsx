'use client'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useTodos } from '@/hooks/useTodos';

const AddTodo = () => {
    const [title, setTitle] = useState('');
    const { addTodo, isLoading, error } = useTodos();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await addTodo(title);
        setTitle('');
    };

    return (
        <form onSubmit={onSubmit} className="flex gap-3 w-full">
            {error && <p className="text-red-500">{error}</p>}
            <Input
                value={title}
                name={'title'}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={'Add new task...'}
                className={'bg-white w-full'}
                disabled={isLoading}
            />
            <Button
                type={'submit'}
                disabled={isLoading || !title.trim()}
            >
                {isLoading ? 'Adding...' : '+ Add'}
            </Button>
        </form>
    );
};

export default AddTodo;
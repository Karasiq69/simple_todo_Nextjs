import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Todo } from '@/types/todo';
import { addTodo, editTodo, deleteTodo } from '@/app/api/todos';

interface UseTodosProps {
  initialTodos?: Todo[];
}

export const useTodos = ({ initialTodos = [] }: UseTodosProps = {}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [todos] = useState<Todo[]>(initialTodos);

  const handleAddTodo = async (title: string) => {
    if (!title.trim()) return;

    try {
      setIsLoading(true);
      setError(null);
      await addTodo({ title });
    } catch (e) {
      setError('Failed to add todo');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleTodo = async (id: number, isCompleted: boolean) => {
    try {
      setIsLoading(true);
      setError(null);
      await editTodo(id, { isCompleted });
    } catch (e) {
      setError('Failed to update todo');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteTodo = async (id: number) => {
    try {
      setIsLoading(true);
      setError(null);
      await deleteTodo(id);
    } catch (e) {
      setError('Failed to delete todo');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    todos,
    isLoading,
    error,
    addTodo: handleAddTodo,
    toggleTodo: handleToggleTodo,
    deleteTodo: handleDeleteTodo,
  };
};
import {getTodos} from "@/app/api/todos";
import TodoItem from "@/components/TodoItem";


const TodosView = async () => {
    const initialTodos = await getTodos();

    return (
        <div className={'w-full'}>
            {!initialTodos.length && (
                <div className={'text-center text-muted-foreground'}>
                    No todos added yet.
                </div>
            )}
            <ul className={'flex-col flex gap-3 w-96'}>
                {initialTodos?.map((todoItem) => (
                    <TodoItem
                        key={todoItem?.id}
                        todoItem={todoItem}
                    />
                ))}
            </ul>
        </div>
    );
};
export default TodosView;



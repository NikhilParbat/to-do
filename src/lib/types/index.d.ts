interface Todo {
    id: number;
    title: string;
    description:string
    status: Status;
}

type Status  = "Done" | "In-progress"
type UseTodoState = {
    todos: Todo[];
    getTodos: VoidFunction;
    addTodo: (todo: Todo) => void;
}
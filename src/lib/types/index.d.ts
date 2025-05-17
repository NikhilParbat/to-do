interface Todo {
    id: number;
    title: string;
    status: Status;
}

type Status  = "Done" | "In-progress"
interface Todo {
    id: number;
    title: string;
    description:string
    status: Status;
}

type Status  = "Done" | "In-progress"
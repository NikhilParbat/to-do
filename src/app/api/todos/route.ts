import { todos } from "@/lib/data/todo"
import { NextResponse } from "next/server"


export const GET = (req:Request, res:Response) => {
    return new NextResponse(JSON.stringify(todos), {status:200})
}     

// POST new todo
export const POST = async (req: Request) => {
    const body = await req.json();
  
    const newTodo: Todo = {
      ...body,
    };
  
    todos.push(newTodo);
  
    return NextResponse.json(newTodo, { status: 201 });
  };

  
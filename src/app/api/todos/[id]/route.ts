import { NextResponse } from "next/server";
import { todos} from "@/lib/data/todo";

export const GET = async (req: Request, { params }: { params: { id: string } }) => {
  const todo = todos.find(t => t.id === parseInt(params.id));

  if (!todo) {
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });
  }

  return NextResponse.json(todo);
};

export const PUT = async (req: Request, { params }: { params: { id: string } }) => {
  const id = parseInt(params.id);
  const index = todos.findIndex(t => t.id === id);

  if (index === -1) {
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });
  }

  const body = await req.json();
  todos[index] = { ...todos[index], ...body };

  return NextResponse.json(todos[index]);
};

export const DELETE = async (req: Request, { params }: { params: { id: string } }) => {
  const id = parseInt(params.id);
  const index = todos.findIndex(t => t.id === id);

  if (index === -1) {
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });
  }

  const deleted = todos.splice(index, 1);

  return NextResponse.json(deleted[0]);
};

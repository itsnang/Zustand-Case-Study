import dbConnect from "@/app/lib/mongodb";
import Todo from "@/app/models/todo";
import { NextRequest, NextResponse } from "next/server";
import { HttpStatusCode } from "axios";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();
    const todolist: ITodo = body;
    // console.log(todolist);

    const todo = await Todo.create(todolist);

    return NextResponse.json(todo, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Bad request",
      },
      { status: 400 }
    );
  }
}
export async function GET() {
  try {
    await dbConnect();
    const todo: ITodo[] = await Todo.find();
    return NextResponse.json(todo, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Bad request",
      },
      { status: HttpStatusCode.BadRequest }
    );
  }
}

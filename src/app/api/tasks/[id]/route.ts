import dbConnect from "@/app/lib/mongodb";
import Todo from "@/app/models/todo";
import { logger } from "@/lib/logger/logger";
import { HttpStatusCode } from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();

    const todo = await Todo.findById(params.id);
    if (!todo) {
      return NextResponse.json(
        { message: `Product ${params.id} not found` },
        { status: HttpStatusCode.NotFound }
      );
    }
    logger.info(todo);
    return NextResponse.json(todo, { status: HttpStatusCode.Ok });
  } catch (error) {
    return NextResponse.json(
      { message: "Bad request" },
      { status: HttpStatusCode.BadRequest }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    const body = await req.json();
    const todolist: ITodo = body;
    const todo = await Todo.findByIdAndUpdate(params.id, todolist);
    if (!todo) {
      return NextResponse.json(
        { message: `Product ${params.id} not found` },
        { status: HttpStatusCode.NotFound }
      );
    }
    logger.info(todo);
    return NextResponse.json(todo, { status: HttpStatusCode.Ok });
  } catch (error) {
    return NextResponse.json(
      { message: "Bad request" },
      { status: HttpStatusCode.BadRequest }
    );
  }
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    const todo = await Todo.findByIdAndDelete(params.id);
    if (!todo) {
      return NextResponse.json(
        { message: `Product ${params.id} not found` },
        { status: HttpStatusCode.NotFound }
      );
    }
    logger.info(todo);
    return NextResponse.json({
      message: `Product ${params.id} has been deleted`,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Bad request" },
      { status: HttpStatusCode.BadRequest }
    );
  }
}

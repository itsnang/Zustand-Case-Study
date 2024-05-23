"use client";
import { Button } from "@/components/Button";
import InputField from "@/components/InputField";
import { TodoCard } from "@/components/TodoCard";
import { useForm, SubmitHandler } from "react-hook-form";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { use, useEffect, useState } from "react";
import { logger } from "@/lib/logger/logger";

async function fectTodo() {
  const res = await fetch("http://localhost:3000/api/tasks");
  const data: ITodo[] = await res.json();
  return data;
}

export default function Home() {
  const [data, setData] = useState<ITodo[]>([]);
  useEffect(() => {
    fectTodo().then((data) => {
      setData(data);
      logger.info("data", data);
    });
  }, [setData]);

  const handleDeleteEvent = async (id: string) => {
    try {
      await fetch(`http://localhost:3000/api/tasks/${id}`, {
        method: "DELETE",
      });
      setData(data.filter((todo) => todo._id !== id));
    } catch (error) {}
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <main className="">
      <div className="">
        {data.map((todo) => (
          <TodoCard
            href={"/task/" + todo._id}
            location="Phnom Penh"
            key={todo._id}
            id={todo._id}
            img={"https://pbs.twimg.com/media/FgemUm-XEAEc2WV.jpg"}
            title={todo.name}
            date={todo.date}
            onDelete={() => handleDeleteEvent(todo._id)}
          />
        ))}
      </div>
      <div className="relative w-full flex flex-col flex-grow justify-center items-center">
        <div className="fixed bottom-0 w-full flex justify-center items-center">
          <div className="w-screen md:w-1/2 p-4 flex flex-grow-1 justify-center items-center space-x-4">
            <InputField
              className="w-full"
              name="email"
              type="email"
              placeholder={"Enter your task"}
              register={register("email", { required: "Email is required" })}
            />
            <Button
              className="text-secondary"
              iconClassName="-rotate-45"
              variant="secondary"
              icon={<PaperAirplaneIcon />}
              onClick={handleSubmit((data) => console.log(data))}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

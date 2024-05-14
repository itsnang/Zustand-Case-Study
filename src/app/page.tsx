"use client";
import { useCounterStore } from "@/providers/counter-store-provider";
import Image from "next/image";

export default function Home() {
  const { count, incrementCount, decrementCount } = useCounterStore(
    (state) => state
  );
  return (
    <main className="flex min-h-screen flex-row items-center justify-between p-24">
      <button onClick={() => decrementCount()}>-</button>
      <p>{count}</p>
      <button onClick={() => incrementCount()}>+</button>
    </main>
  );
}

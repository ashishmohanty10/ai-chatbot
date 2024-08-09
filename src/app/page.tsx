import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <div className="py-16 flex flex-col items-center  min-h-screen dark:bg-zinc-800 space-y-5">
      <div className=" space-y-3">
        <div className="flex items-center gap-4 justify-center text-center">
          <p className="text-4xl  font-bold">Just Another Ai Chat Bot </p>
          <Bot size={38} className="text-blue-600" />
        </div>
        <p className="text-center font-medium">
          Beyond the Ordinary, Every Chat Matters
        </p>
      </div>

      <Button
        size={"lg"}
        className="bg-blue-600 text-white font-bold hover:bg-blue-700"
      >
        <span>Try Out Now</span>
      </Button>
    </div>
  );
}

"use client";
import Image from "next/image";
import React from "react";

function LastActions({ title, date }: { title: string; date: string }) {
  return (
    <button
      className="flex gap-2 items-start cursor-pointer"
      onClick={() => {
        const modal = document.getElementById(
          "my_modal_2"
        ) as HTMLDialogElement | null;
        modal?.showModal();
      }}
    >
      <div className="rounded-full h-fit w-fit p-1">
        <Image
          src={"https://picsum.photos/200"}
          alt="placeholder"
          width={100}
          height={100}
          className="rounded-full w-6"
        />
      </div>
      <div>
        <h2 className="text-md font-semibold">{title}</h2>
        <h4 className="text-xs text-start text-gray-400">{date}</h4>
      </div>
    </button>
  );
}

export default LastActions;

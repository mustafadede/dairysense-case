"use client";
import React from "react";

function SubHeader({ title }: { title: string }) {
  return <h1 className="text-md mb-4">{title}</h1>;
}

export default SubHeader;

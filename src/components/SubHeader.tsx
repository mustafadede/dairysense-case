"use client";
import React from "react";

function SubHeader({ title }: { title: string }) {
  return <h1 className="text-lg mb-4">{title}</h1>;
}

export default SubHeader;

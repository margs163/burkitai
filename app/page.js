'use client'
import MainMap from "@/components/MainMap";
import PathTracker from "@/components/PathTracker";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  return (
    <div className="w-full mx-auto mt-7">
      <MainMap />
      <PathTracker />
    </div>   
  );
}

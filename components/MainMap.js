"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import { useState, useEffect } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

export default function MainMap() {
  const [currentImage, setCurrentImage] = useState("/map1.jpg");
  const [mapPressed, setMapPressed] = useState(false);

  // Array of image sources
  const imageSources = ["/map1.jpg", "/map2.jpg"];

  useEffect(() => {
    // Function to change the image
    const changeImage = () => {
      setCurrentImage((prevImage) => {
        const currentIndex = imageSources.indexOf(prevImage);
        if (mapPressed === true) {
          return imageSources[(currentIndex) % imageSources.length];
        }
        else {
          return imageSources[(currentIndex + 1) % imageSources.length];
        }
      });
    };

    // Set interval to change image every 2 seconds
    const interval = setInterval(changeImage, 500);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [imageSources]);

  return (
    <Card className=" mx-auto bg-zinc-800/90 border-zinc-600 w-[1200px]">
      {/* <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader> */}
      <CardContent className="py-4 h-[584px]">
        <Image
          src={currentImage}
          width={560}
          height={560}
          alt="map.jpg"
          className="mx-auto"
          onClick={() => setMapPressed(!mapPressed)}
        />
      </CardContent>
      <Dialog open={mapPressed} onOpenChange={() => {setMapPressed(false)}} className="border-zinc-900">
        {/* <DialogTrigger>Open</DialogTrigger> */}
        <DialogContent className="bg-zinc-700 text-white border-zinc-500 border-2">
          <DialogHeader>
            <DialogTitle className="text-2xl">Violence class detected!</DialogTitle>
            <DialogDescription className="text-zinc-300">
              This is the violence video from camera, that was detected on
              region 6.
            </DialogDescription>
          </DialogHeader>
          <video
            src="/V_100.mp4"
            width={500}
            height={500}
            autoPlay
            className="border-2 border-zinc-600 rounded-xl"
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button
                type="button"
                variant="secondary"
                onClick={() => {
                  setMapPressed(false);
                }}
                className="bg-red-600 text-white font-semibold hover:bg-red-700"
              >
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
}

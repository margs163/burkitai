'use client'
import { Cctv, ChevronDown, Video, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "./ui/input";
import { useState, useEffect } from "react";

const items = [
  {
    title: "Sector 1",
    url: "#",
  },
  {
    title: "Sector 2",
    url: "#",
  },
  {
    title: "Sector 3",
    url: "#",
  },
  {
    title: "Sector 4",
    url: "#",
  },
  {
    title: "Sector 5",
    url: "#",
  },
  {
    title: "Sector 6",
    url: "#",
  },
  {
    title: "Sector 7",
    url: "#",
  },
  {
    title: "Sector 8",
    url: "#",
  },
  {
    title: "Sector 9",
    url: "#",
  },
  {
    title: "Sector 10",
    url: "#",
  },
  {
    title: "Sector 11",
    url: "#",
  },
  {
    title: "Sector 12",
    url: "#",
  },
  {
    title: "Sector 13",
    url: "#",
  },
  {
    title: "Sector 14",
    url: "#",
  },
  {
    title: "Sector 15",
    url: "#",
  },
  {
    title: "Sector 16",
    url: "#",
  },
  {
    title: "Sector 17",
    url: "#",
  },
  {
    title: "Sector 18",
    url: "#",
  },
  {
    title: "Sector 19",
    url: "#",
  },
  {
    title: "Sector 20",
    url: "#",
  },
  {
    title: "Sector 21",
    url: "#",
  },
  {
    title: "Sector 22",
    url: "#",
  },
  {
    title: "Sector 23",
    url: "#",
  },
  {
    title: "Sector 24",
    url: "#",
  },
  {
    title: "Sector 25",
    url: "#",
  },
  {
    title: "Sector 26",
    url: "#",
  },
];

const subitems = [
  {
    title: "Camera 1",
    url: "#",
  },
  {
    title: "Camera 2",
    url: "#",
  },
  {
    title: "Camera 3",
    url: "#",
  },
  {
    title: "Camera 4",
    url: "#",
  },
  {
    title: "Camera 5",
    url: "#",
  },
];

export function AppSidebar() {
  const imageSources = ["text-zinc-200", "text-red-500"];
  const [styleText, setStyleText] = useState(false);

  useEffect(() => {
    // Function to change the image
    const changeImage = () => {
      setStyleText((prevImage) => {
        return !prevImage;
      });
    };

    // Set interval to change image every 2 seconds
    const interval = setInterval(changeImage, 500);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [imageSources]);
  return (
    <Sidebar>
      <SidebarHeader className="">
        <Link
          href={"#"}
          className="flex justify-start items-center gap-2 px-2 pt-2"
        >
          <Image width={50} height={50} src={"/qyran.jpg"} alt="qyran.jpg" />
          <h1 className="text-3xl font-bold">Qyran AI</h1>
        </Link>
      </SidebarHeader>
      <SidebarContent className="px-2 scrollbar">
        <SidebarGroup>
          <SidebarGroupLabel>Search camera</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="relative">
              <Search size={18} className="absolute top-3 left-2" />
              <Input
                type="search"
                placeholder="search camera"
                className="bg-zinc-700 border-none py-0 h-10 pl-9 placeholder:text-zinc-300"
              />
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent className=" bg-zinc-700 p-2 rounded-md">
            <SidebarMenu>
              {items.map((item, ind) => (
                <Collapsible key={item.title} className="group/collapsible">
                  <SidebarMenuItem key={item.title}>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton asChild>
                        <Link
                          className={`data-[state=open]:text-red-500 ${styleText && ind == 5 ? "text-red-500" : "text-zinc-200"} data-[state=open]:bg-[hsl(240_6%_16%)] font-semibold`}
                          href={item.url}
                        >
                          <Cctv />
                          <span className={styleText}>{item.title}</span>
                          <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:-rotate-90" />
                        </Link>
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {subitems.map((subitem, index) => (
                          <SidebarMenuSubItem key={subitem.title}>
                            <SidebarMenuSubButton asChild>
                              <Link href={subitem.url}>
                                <Video />
                                <span className={`font-semibold ${styleText && index == 3 ? "text-red-500" : "text-zinc-300"}`}>{subitem.title}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

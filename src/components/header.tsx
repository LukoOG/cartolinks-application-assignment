"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

import { House, Video, WandSparkles, Folder, Image as LucideImage, Brush, PenTool, Headset, Bell, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function Header() {
	const { theme, setTheme } = useTheme()
	
	
	const icons = [House, Video, WandSparkles, Folder, LucideImage, Brush, PenTool]
	const items3 = [
	{
		Icon: LucideImage, //placeholder till closer match is found
		text: "Gallery"
	},
	{
		Icon: Headset,
		text: "Support"
	},
	{
		Icon: Bell,
		text: ""
	}, 
	{
		Icon: theme === "dark" ? Sun : Moon,
		text:"",
		toggle: true,
	}
	]
	const [selectedIndex, setIndex] = useState<number>(0)

  return (
		<section className="min-h-8 max-h-fit items-center grid 6 gap-x-3 grid-cols-[auto_1fr_auto]">
		
			<div className="flex flex-row w-1/3 justify-between gap-x-4">
				<Avatar>
					<AvatarImage className="aspect-square h-full w-full" src="/krea.png" />
				</Avatar>
				
				<div className="flex flex-row">
					<Avatar>
						<AvatarImage className="aspect-square h-full w-full" src="/user.png" />
					</Avatar>
					
					<Select defaultValue="name">
						<SelectContent>
							<SelectGroup>
								<SelectItem value="name">benevolent123@gmail.com</SelectItem>
							</SelectGroup>
						</SelectContent>
						<SelectTrigger className="max-w-[280px] outline-none border-none">
							<SelectValue placeholder="here" />
						</SelectTrigger>
					</Select>
					
				</div>
			</div>
			
			<div className="rounded-lg max-h-fit justify-self-center bg-muted p-1">
				<div className="justify-evenly h-full items-center flex flex-row">
					{icons.map((Icon, index) =>(
						<div key={index} onClick={()=>setIndex(index)} className={`h-10 w-12 rounded-xl cursor-pointer transition-ease duration-200 ${selectedIndex === index ? "bg-background shadow-md" : ""} `}>
							<Icon className="h-full m-auto text-foreground" size={14} />
						</div>
					))}
				</div>
			</div>
			
			<div className="grid [grid-template-columns:repeat(5,auto)] items-center gap-x-2 text-foreground font-400 text-sm justify-evenly">
				{ items3.map( ( { Icon, text, toggle }, index) => (
					<div key={index} className="max-w-fit">
						<div className="cursor-pointer hover:bg-card-foreground/30 transition-all duration-200 bg-muted rounded-md p-2"
						onClick={()=>{ if(toggle){ setTheme(theme === "dark" ? "light" : "dark") }}}>
							<div className="flex flex-row items-center my-auto h-full justify-between gap-1">
								<Icon size={14} className="text-foreground" />
								{ text ? <p>{text}</p> : null}
							</div>
						</div>
					</div>
				) ) }
					<div className="max-w-fit">
						<Avatar>
							<AvatarImage className="aspect-square h-full w-full" src="/user.png" />
						</Avatar>	
					</div>
			</div>
			
		</section>
  );
}

"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import GenerateItemCard from "@/components/generateItemCard"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { type LucideIcon, House, Video, WandSparkles, Folder, Image as LucideImage, Brush, PenTool, Headset, Bell, Sun } from "lucide-react";

import { useEffect, useState } from "react";

export default function Main() {
	
	interface componentItems {
		Icon: LucideIcon,
		color: string,
		title: string,
		text: string,
	}
	
	const generateComponentItems: componentItems[] = [
		{
			Icon: LucideImage,
			color: "bg-yellow-500",
			title: "Image",
			text: "Generate images with custom styles in flux and ideogram"
		},
		{
			Icon: Video,
			color: "bg-gradient-to-br from-gray-700 to-gray-100",
			title: "Video Lipsync",
			text: "Lip sync any video to any audio"
		},
		{
			Icon: Video,
			color: "bg-gradient-to-br from-gray-700 to-gray-100",
			title: "Video Lipsync",
			text: "Lip sync any video to any audio"
		},
		{
			Icon: Video,
			color: "bg-gradient-to-br from-gray-700 to-gray-100",
			title: "Video Lipsync",
			text: "Lip sync any video to any audio"
		},
		{
			Icon: Video,
			color: "bg-gradient-to-br from-gray-700 to-gray-100",
			title: "Video Lipsync",
			text: "Lip sync any video to any audio"
		},
		{
			Icon: Video,
			color: "bg-gradient-to-br from-gray-700 to-gray-100",
			title: "Video Lipsync",
			text: "Lip sync any video to any audio"
		},
		{
			Icon: Video,
			color: "bg-gradient-to-br from-gray-700 to-gray-100",
			title: "Video Lipsync",
			text: "Lip sync any video to any audio"
		},
		{
			Icon: Video,
			color: "bg-gradient-to-br from-gray-700 to-gray-100",
			title: "Video Lipsync",
			text: "Lip sync any video to any audio"
		},
	]
	
	const [selectedIdx, setSelectedIdx] = useState<number>(0)
	const images = ["/naruto.webp"]
  return (
	<section className="flex flex-col h-full overflow-x-hidden">
		<div className="h-full">
		
			<Carousel className="w-full h-full block">
				<CarouselContent className="min-h-full">
				{images.map((url, index) => (
				  <CarouselItem key={index} className="max-h-fit md:basis-1/2 lg:basis-1/3">
					<div className="p-1">
					  <div className="bg-card text-card-foreground rounded-xl shadow-sm overflow-hidden border max-h-fit w-full">
						 <img className="w-full h-48 object-fit" src={url} /> 
					  </div>
					</div>
				  </CarouselItem>
				))}
				</CarouselContent>

				{/* Controls row */}
				<div className="grid grid-cols-[28rem_1fr_1fr] items-center justify-between mt-2 px-2">
					{/* Placeholder indicators */}
					<div className="w-full col-start-1 span-1"></div>
					<div className="col-start-2 span-1 items-center justify-center flex gap-2 min-w-full max-w-fit h-full">
						{images.map((_, index) => (
							<span key={index} className="h-2 w-2 rounded-full bg-gray-400"></span>
						))}
					</div>

					{/* Buttons */}
					<div className="flex items-center justify-center gap-1">
						<CarouselPrevious className="static translate-y-0 left-0 right-0 relative m-0" />
						<CarouselNext className="static translate-y-0 left-0 right-0 relative m-0" />
					</div>
				</div>
			</Carousel>
			
		</div>
		
		<div className="min-h-full">
			<h2 className="max-h-fit w-full text-left font-600 text-lg">Generate</h2>
			<section className="grid grid-rows-2 grid-cols-4 gap-2 justify-evenly min-h-full">
			{generateComponentItems.map(({ Icon, color, title, text }, index) => (
				<GenerateItemCard key={index} Icon={Icon} color={color} title={title} text={text} />
			))}
			</section>
		</div>
		
		<div className="min-h-0 flex-shrink">
			<h2 className="max-h-fit w-full text-left font-600 text-lg">Gallery</h2>
		</div>
	</section>
  );
}

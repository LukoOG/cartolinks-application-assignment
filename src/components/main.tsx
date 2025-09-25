"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import GenerateItemCard from "@/components/generateItemCard";
import { type LucideIcon, 
	Video, 
	WandSparkles, 
	Image as LucideImage, 
	Brush, 
	PenTool, 
	MicVocal,
	PersonStanding,
} from "lucide-react";

import { useEffect, useState } from "react";

export default function Main() {
	
	interface componentItems {
		Icon: LucideIcon | null,
		color: string,
		title: string,
		text: string,
	}
	
	const generateComponentItems: componentItems[] = [
		{
			Icon: LucideImage,
			color: "bg-gradient-to-br from-gray-700 to-gray-100",
			title: "Image",
			text: "Generate images with custom styles in flux and ideogram"
		},
		{
			Icon: Video,
			color: "bg-yellow-500",			
			title: "Video",
			text: "Generate videos with Helua, Pica, Luma and more"
		},
		{
			Icon: Brush,
			color: "bg-gradient-to-b from-cyan-600 to-cyan-100",
			title: "Realtime",
			text: "Realtime AI rendering on a canvas, instant feedback loops"
		},
		{
			Icon: WandSparkles,
			color: "bg-gradient-to-b from-black to-gray-500",
			title: "Enhancer",
			text: "Upscale and enhance images and videos up to 22k"
		},
		{
			Icon: PenTool,
			color: "bg-gradient-to-b from-gray-900 to-purple-700 via-purple-800",
			title: "Edit",
			text: "Add objects, change styles, or expand photos and generations"
		},
		{
			Icon: MicVocal,
			color: "bg-gradient-to-b from-teal-500 to-yellow-200 via-green-300",
			title: "Video Lipsync",
			text: "Lip sync any video to any audio"
		},
		{
			Icon: PersonStanding,
			color: "bg-black",
			title: "Motion Transfer",
			text: "Lip sync any video to any audio"
		},
		{
			Icon: null,
			color: "bg-gradient-to-br from-gray-700 to-gray-100",
			title: "Train",
			text: "Teach Krea to replicate your style, products or characters"
		},
	]
	
	const [api, setApi] = useState<CarouselApi>()	
	const [selectedIdx, setSelectedIdx] = useState<number>(0)
	const images = ["/naruto.webp", "/perfume.jpeg", "/naruto.jpeg"]
	
	useEffect(() => {
		if (!api) {
		  return
		}
		console.log(selectedIdx)
	 
		//setCount(api.scrollSnapList().length)
		setSelectedIdx(api.selectedScrollSnap() + 1)
	 
		api.on("select", () => {
		  setSelectedIdx(api.selectedScrollSnap() + 1)
		})
	}, [selectedIdx, api])
  return (
	<section className="flex flex-col h-full overflow-x-hidden">
		<div className="h-full">
		
			<Carousel className="w-full h-full block" setApi={setApi}>
				<CarouselContent className="min-h-full">
				{images.map((url, index) => (
				  <CarouselItem key={index} className="max-h-fit basis-7/12">
					<div className="p-1">
					  <div className="bg-card text-card-foreground rounded-xl shadow-sm overflow-hidden border max-h-fit w-full">
						 <Image alt={`Carousel image ${index}`} width={1200} height={800} className="w-full h-90 object-fit" src={url} /> 
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
							<span key={index} onClick={()=>api?.scrollTo(index)} className={`${selectedIdx === index + 1 ? "bg-black" : "bg-gray-300"} h-2 w-2 rounded-full cursor-pointer`}></span>
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

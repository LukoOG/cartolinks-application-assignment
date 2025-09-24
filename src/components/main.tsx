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
import { House, Video, WandSparkles, Folder, Image as LucideImage, Brush, PenTool, Headset, Bell, Sun } from "lucide-react";



export default function Main() {
	const generateComponentItems = [
	{
		Icon: Video,
		title: "Video Lipsync",
		text: "Lip sync any video to any audio"
	},{
		Icon: Headset,
		title: "Video",
		text: "Generate any video with our AI models"
	},
	]
  return (
	<section className="flex flex-col min-h-full overflow-x-hidden">
		<div className="h-full">
			<Carousel className="w-full h-full block">
				<CarouselContent className="min-h-full">
				{Array.from({ length: 20 }).map((_, index) => (
				  <CarouselItem key={index} className="max-h-fit md:basis-1/2 lg:basis-1/3">
					<div className="p-1">
					  <Card className="h-full w-">
						<CardContent className="p-6 overflow-hidden">
						{/* <img className="inline h-full w-[18rem] object-fit aspect-5/4" src="/naruto.jpeg" /> */}
							<span className="bg-none w-full h-full aspect-5/4" >{index + 1}</span>
						</CardContent>
					  </Card>
					</div>
				  </CarouselItem>
				))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
		
		<div className="min-h-full">
			<h2 className="max-h-fit w-full text-left font-600 text-lg">Generate</h2>
			<section className="grid grid-rows-2 grid-cols-4 gap-4 justify-evenly min-h-full w-full">
			{generateComponentItems.map(({ Icon, title, text }, index) => (
				<GenerateItemCard key={index} Icon={Icon} title={title} text={text} />
			))}
			</section>
		</div>
		
		<div>
			<h2 className="w-full text-left font-600 text-lg">Gallery</h2>
		</div>
	</section>
  );
}

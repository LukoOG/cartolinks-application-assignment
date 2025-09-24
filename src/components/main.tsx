import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Main() {
	const images = ["/"]
  return (
	<section className="grid grid-rows-[10fr_1fr_1fr] max-h-full overflow-hidden">
		<div className="h-full">
			<Carousel className="w-full block">
				<CarouselContent>
				{Array.from({ length: 20 }).map((_, index) => (
				  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
					<div className="p-1">
					  <Card>
						<CardContent className="p-6">
						  <span className="text-3xl font-semibold">{index + 1}</span>
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
		
		<div>
			<h2 className="w-full text-left font-600 text-lg">Generate</h2>
			<section>
					
			</section>
		</div>
		
		<div>
			<h2 className="w-full text-left font-600 text-lg">Gallery</h2>
			<section>
					
			</section>
		</div>
	</section>
  );
}

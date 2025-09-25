import { Button } from "@/components/ui/button"
import { type LucideIcon, Image } from  "lucide-react";

interface itemCardProps {
	Icon: LucideIcon,
	color: string,
	title: string,
	text: string,
}

export default function itemCard ({ Icon, color, title, text }:itemCardProps ) {
	return (
		<div className="w-full max-h-[70%] grid-cols-[1fr_3fr_1fr] items-center grid p-2">
			<div className={`${color} h-12 flex items-center justify-center w-12 rounded-xl bg-red-400`}>
				<Icon color="#fff" fill="transparent" size={24} />
			</div>
			
			<div className="justify-self-center-safe grid-grow">
				<h2 className="text-md">{title}</h2>
				<div className="text-muted-foreground text-sm">
					<p>{text}</p>
				</div>
			</div>
			
			<div className="w-full">
				<Button className="text-foreground bg-muted rounded-2xl">Open</Button>
			</div>
		</div>
	)
}
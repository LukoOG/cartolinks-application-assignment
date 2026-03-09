import { Button } from "@/components/ui/button"
import { type LucideIcon } from  "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar"

interface itemCardProps {
	Icon: LucideIcon | null,
	color: string,
	title: string,
	text: string,
}

export default function itemCard ({ Icon, color, title, text }:itemCardProps ) {
	return (
		<div className="w-full grid grid-cols-1 sm:grid-cols-[1fr_3fr_1fr] items-center p-2">
			{Icon ? <div className={`${color} h-12 flex items-center justify-center w-12 rounded-xl`}>
				<Icon color="#fff" fill="transparent" size={24} />
			</div> : 
			<Avatar className="h-12 w-12"> 
				<AvatarImage className="aspect-square h-full w-full" src="/naruto.jpeg" alt="generate icon image default" />
			</Avatar>
			}
			
			<div className="justify-self-center-safe sm:justify-self-auto">
				<h2 className="text-md">{title}</h2>
				<div className="text-muted-foreground text-sm">
					<p>{text}</p>
				</div>
			</div>
			
			<div className="w-full sm:w-auto">
				<Button className="text-foreground bg-muted rounded-2xl">Open</Button>
			</div>
		</div>
	)
}
import Image from "next/image";

import Main from "@/components/main";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
		<div className="w-full flex flex-col min-h-fit grow pt-2 px-8 mt-8">
			<header className="max-h-fit mb-12">
				<Header />
			</header>
			<main className="grow">
				<Main />
			</main>
		</div>
		<footer className="w-auto sm:w-full max-h-fit text-[1rem] bg-foreground/85 text-background font-bold px-4 py-2 sm:py-2 sm:px-8">
			<div className="m-1 sm:m-auto gap-2 sm:gap-4 flex-row justify-center sm:justify-between items-center flex">
				
				<div className="flex flex-row items-center gap-2 sm:gap-4 w-full sm:w-auto justify-center sm:justify-start">
					<div className="h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-xl">
						<Image alt={"Krea AI logo"} width={800} height={500} className="w-full object-fit" src="/krea-2.jpeg" />
					</div>
					<p>KREA AI</p>
				</div>
				
				<div className="flex flex-row items-center gap-2 sm:gap-4 w-full sm:w-auto justify-center sm:justify-end">
					<p>Curated by</p>
					<div className="overflow-hidden h-10 w-10 sm:h-12 sm:w-12">
						<Image alt={"Mobbin logo"} width={800} height={500} className="h-full w-full object-fit" src="/Mobbin.png" />
					</div>
					<p>Mobbin</p>
				</div>				
			</div>
		</footer>
    </div>
  );
}

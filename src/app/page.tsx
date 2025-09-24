import Main from "@/components/main"
import Header from "@/components/header"

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
		<div className="w-full flex flex-col min-h-fit flex-grow pt-2 px-8 mt-2">
			<header className="max-h-fit mb-12">
				<Header />
			</header>
			<main className="flex-grow">
				<Main />
			</main>
		</div>
		<footer className="w-full  max-h-fit text-[1rem] bg-foreground/85 text-background font-bold py-2 px-8">
			<div className="flex-row justify-between items-center flex">
				
				<div className="w-1/10 justify-between flex flex-row items-center">
					<div className="max-w-10 max-h-10 overflow-hidden rounded-xl">
						<img className="w-full object-fit" src="/krea-2.jpeg" />
					</div>
					<p>KREA AI</p>
				</div>
				
				<div className="w-1/5 justify-evenly flex flex-row items-center">
					<p>Curated by</p>
					<div className="overflow-hidden max-h-10 max-w-10">
						<img className="h-full w-full object-fit" src="/Mobbin.png" />
					</div>
					<p>Mobbin</p>
				</div>				
			</div>
		</footer>
    </div>
  );
}

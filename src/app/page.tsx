import Main from "@/components/main"
import Header from "@/components/header"

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
		<div className="w-full flex flex-col min-h-fit flex-grow py-2 px-8 mt-2">
			<header className="max-h-fit mb-12">
				<Header />
			</header>
			<main className="flex-grow">
				<Main />
			</main>
		</div>
		<footer className="w-full flex-row flex justify-between max-h-fit bg-gray-600 text-background text-card-foreground font-semibold py-2 px-8">
			<div>
				<div>sd</div>
				<div><p>Curated by</p></div>
			</div>
		</footer>
    </div>
  );
}

import Main from "@/components/main"
import Header from "@/components/header"

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
		<div className="w-full min-h-fit flex-grow py-2 px-8 mt-2">
			<header>
				<Header />
			</header>
			<main>
				<Main />
			</main>
		</div>
		<footer className="w-full flex-row flex justify-between max-h-fit bg-foreground text-background text-card-foreground font-semibold py-2 px-8">
			<div>
				<div>sd</div>
				<div><p>Curated by</p></div>
			</div>
		</footer>
    </div>
  );
}

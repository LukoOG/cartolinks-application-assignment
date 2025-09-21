import Main from "@/lib/components/main"

export default function Home() {
  return (
    <div className="font-sans min-h-screen py-2 px-8">
		<div className="w-full">
			<header>
			</header>
			<main>
				<Main />
			</main>
		</div>
		<footer className="w-full flex-row flex justify-between  text-card-foreground font-semibold py-2 px-8">
			<div>sd</div>
			<div><p>Curated by</p></div>
		</footer>
    </div>
  );
}

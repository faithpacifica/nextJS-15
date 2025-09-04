import Hello from "./components/hello.client";


export default function Home() {
	console.log('Which component am I?');

	return (
		<main>
			<h1 className="font-bold text-3xl">Welcome to Next.js</h1>
			<Hello />
		</main>
	);
}

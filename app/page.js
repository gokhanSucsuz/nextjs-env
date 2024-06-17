"use client";
import Image from "next/image";

export default function Home() {
	console.log(process.env.DB_HOST);
	console.log(process.env.USER_NAME);
	console.log(process.env.DB_PASSWORD);
	console.log(
		"Everyone can see this because it is public ",
		process.env.NEXT_PUBLIC_TEST
	);
	console.log(process.env.DB_CONNECTION);
	const text = `.evn_development_local > .env.local > .env_development >	.env`;
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			{text}
		</main>
	);
}

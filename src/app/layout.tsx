import type { Metadata } from "next";
import { Cabin } from "next/font/google";

import "@/styles/core/index.scss";
import "./globals.css";

const cabin = Cabin({
	subsets: ["latin"],
	variable: '--font-cabin',
});

export const metadata: Metadata = {
  title: "Greenspark Interview Task",
  description: "Created by Steven James Dent for Greenspark",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cabin.className}>{children}</body>
		</html>
	);
}
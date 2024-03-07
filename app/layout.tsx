import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

//import { AppProps } from "next/app";
//import Dash from '.'
//import LoginPage from './login';
//import {BrowserRouter, Routes,Route } from "react-router-dom"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Dash",
    description: "Sign in to Purdue Hackers Dashboard.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>{children}</body>
        </html>
    );
}
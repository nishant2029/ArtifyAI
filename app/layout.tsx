import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider, SignIn, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import SignInPage from "./(auth)/sign-in/[[...sign-in]]/page";

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
  title: "ArtifyAI",
  description: "An AI powered Image Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
        <SignedOut>
        <SignInPage/>
      </SignedOut>
          {children}
        </body>
      </html>
      </ClerkProvider>
    
  );
}

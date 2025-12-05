"use client";

import { Button } from "@/components/ui/button";
import { SignInButton, useUser } from "@clerk/nextjs";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  const { isSignedIn } = useUser();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="px-6 py-4 border-b flex items-center justify-between sticky top-0 bg-background/95 backdrop-blur z-50">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={32} height={32} className="dark:hidden" />
          <Image src="/logo-dark.svg" alt="Logo" width={32} height={32} className="hidden dark:block" />
          <span className="font-bold text-xl">Jotion</span>
        </div>
        <div className="flex items-center gap-4">
          {!isSignedIn && (
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">Log in</Button>
            </SignInButton>
          )}
          {isSignedIn ? (
            <Button size="sm" asChild>
              <Link href="/documents">Enter Jotion</Link>
            </Button>
          ) : (
            <SignInButton mode="modal">
              <Button size="sm">Get Jotion free</Button>
            </SignInButton>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-20 pb-12 gap-8">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Your ideas, documents, & plans. Unified.
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground">
            Jotion is the connected workspace where better, faster work happens.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          {!isSignedIn && (
            <SignInButton mode="modal">
              <Button size="lg" className="w-full sm:w-auto font-semibold">
                Get Jotion free
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </SignInButton>
          )}
          {isSignedIn && (
            <Button size="lg" asChild className="w-full sm:w-auto font-semibold">
              <Link href="/documents">
                Enter Jotion
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          )}
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-5xl text-left">
          <div className="p-6 border rounded-xl bg-card">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2">Block-Based Editing</h3>
            <p className="text-muted-foreground">Just like Notion. Type '/' to add any block content you need instantly.</p>
          </div>
          <div className="p-6 border rounded-xl bg-card">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2">Infinite Nesting</h3>
            <p className="text-muted-foreground">No folders. Just pages inside pages inside pages. Organize how you think.</p>
          </div>
          <div className="p-6 border rounded-xl bg-card">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2">Real-time Sync</h3>
            <p className="text-muted-foreground">Collaborate with your team in real-time. Changes save instantly.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t text-center text-sm text-muted-foreground">
        <p>&copy; 2024 Jotion. Built with Next.js 14, Convex & Tailwind.</p>
      </footer>
    </div>
  );
}

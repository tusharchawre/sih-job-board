"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth/authClient";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Button onClick={signIn}>
        Login
      </Button>
    </div>
  );
}

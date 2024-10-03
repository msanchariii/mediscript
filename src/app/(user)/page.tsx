"use client";
import CTA from "@/components/CTA/CTA";
import Dashboard from "@/components/Home/Dashboard";
import Hero from "@/components/Home/Hero";
import { ModeToggle } from "@/components/ModeToggle";
import PatientTable from "@/components/PatientTable";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";

export default function Home() {
    const { auth } = useAuth();
    return (
        // <div className="flex min-h-screen w-full flex-col p-6">
        <>
            {auth?.isLoggedIn ? (
                <Dashboard id={auth.id} role={auth.role} />
            ) : (
                <Hero />
            )}
        </>
        // </div>
    );
}

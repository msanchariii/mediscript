"use client";
import Dashboard from "@/components/Home/Dashboard";
import Hero from "@/components/Home/Hero";
import { useAuth } from "@/context/AuthContext";

export default function Home() {
    const { auth } = useAuth();
    return (
        <>
            {auth?.isLoggedIn ? (
                <Dashboard id={auth.id} role={auth.role} />
            ) : (
                <Hero />
            )}
        </>
    );
}

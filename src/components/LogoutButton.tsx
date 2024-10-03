"use client";
import React from "react";
import { useAuth } from "../context/AuthContext";
import { Button } from "./ui/button";
// import { useRouter } from "next/router";

const LogoutButton = () => {
    const { auth, logout } = useAuth();
    // const router = useRouter();

    const handleLogout = async () => {
        await logout(auth.id!);
        // router.push("/");
    };

    if (!auth.isLoggedIn) {
        return null;
    }

    return (
        <Button
            onClick={handleLogout}
            // className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
            Logout
        </Button>
    );
};

export default LogoutButton;

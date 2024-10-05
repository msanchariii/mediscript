"use client";
import DoctorForm from "@/components/Forms/DoctorForm";
import HelperForm from "@/components/Forms/HelperForm";
import { useAuth } from "@/context/AuthContext";
import React from "react";

function ProfilePage() {
    const { auth } = useAuth();
    return (
        <div className="w-full p-12">
            {auth && auth.isLoggedIn && auth.role === "doctor" ? (
                <DoctorForm />
            ) : (
                <HelperForm />
            )}
        </div>
    );
}

export default ProfilePage;

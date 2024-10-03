import Nav from "@/components/Nav/Nav";
import React from "react";

function UserLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Nav />
            <main className="p-12">{children}</main>
        </>
    );
}

export default UserLayout;

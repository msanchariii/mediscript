import Nav from "@/components/Nav/Nav";
import React from "react";

function UserLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Nav />
            <main className="">{children}</main>
        </>
    );
}

export default UserLayout;

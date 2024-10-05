"use client";
import Link from "next/link";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Package2 } from "lucide-react";
import { Button } from "../ui/button";
import { ModeToggle } from "../ModeToggle";
import { useAuth } from "@/context/AuthContext";
import LogoutButton from "../LogoutButton";

type NavLinkProps = {
    title: string;
    path: string;
};

const links = [
    {
        id: 1,
        title: "Dashboard",
        path: "/",
    },
    {
        id: 2,
        title: "Patients",
        path: "/patient",
    },
    {
        id: 4,
        title: "Appointments",
        path: "/appointments",
    },
    {
        id: 5,
        title: "Profile",
        path: "/profile",
    },
];

const NavLink = ({ title, path }: NavLinkProps) => {
    return (
        <Link
            href={path}
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
            {title}
        </Link>
    );
};

const Nav = () => {
    const { auth } = useAuth();
    return (
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
            <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                <Link
                    href="#"
                    className="flex items-center gap-2 text-lg font-semibold md:text-base"
                >
                    <Package2 className="h-6 w-6" />
                    <span className="sr-only">Mediscript</span>
                </Link>
                {auth && auth.isLoggedIn ? (
                    <>
                        {links.map((item) => {
                            return (
                                <NavLink
                                    key={item.id}
                                    path={item.path}
                                    title={item.title}
                                />
                            );
                        })}
                    </>
                ) : (
                    <Link href={"/"} className="font-bold text-xl">
                        Mediscript
                    </Link>
                )}
            </nav>
            {/* Mobile */}
            <Sheet>
                {auth?.isLoggedIn ? (
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="shrink-0 md:hidden"
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">
                                Toggle navigation menu
                            </span>
                        </Button>
                    </SheetTrigger>
                ) : (
                    <Link
                        href="#"
                        className="flex items-center gap-2 text-lg font-semibold md:hidden"
                    >
                        <Package2 className="h-6 w-6" />
                        <span className="sr-only">Mediscript</span>
                    </Link>
                )}
                <SheetContent side="left">
                    <nav className="grid gap-6 text-lg font-medium">
                        <Link
                            href="#"
                            className="flex items-center gap-2 text-lg font-semibold"
                        >
                            <Package2 className="h-6 w-6" />
                            <span className="sr-only">Mediscript</span>
                        </Link>
                        {links.map((item) => {
                            return (
                                <Link
                                    key={item.id}
                                    href={item.path}
                                    title={item.title}
                                    className="hover:text-foreground"
                                >
                                    {item.title}
                                </Link>
                            );
                        })}
                    </nav>
                </SheetContent>
            </Sheet>
            <div className="flex w-full items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4 float-left">
                {auth?.isLoggedIn ? (
                    <LogoutButton />
                ) : (
                    <div className="space-x-4">
                        <Button asChild variant="secondary">
                            <Link href="/login">Log In</Link>
                        </Button>
                        <Button asChild>
                            <Link href="/register">Register</Link>
                        </Button>
                    </div>
                )}

                <ModeToggle />
            </div>
        </header>
    );
};

export default Nav;

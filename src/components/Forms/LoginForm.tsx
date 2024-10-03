"use client";
import { useAuth } from "@/context/AuthContext";
import React, { useState, FormEvent } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { Label } from "../ui/label";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "../ui/card";

const LoginForm: React.FC = () => {
    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        // console.log("role", formData.get("role"));
        const email = formData.get("email") as string;
        const role = formData.get("role") as string;
        const password = formData.get("password") as string;

        console.log(email, password, role);

        const success = await login(email, password, role);
        if (success) {
            console.log("Login successful");
            console.log(success);
            router.push("/");
        } else {
            alert("Login failed. Please check your credentials.");
        }
    };

    return (
        <Card className="mx-auto max-w-sm bg-slate-950/20">
            <CardHeader>
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription>
                    Enter your email below to login to your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="m@example.com"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                            <Link
                                href="/404"
                                className="ml-auto inline-block text-sm underline"
                            >
                                Forgot your password?
                            </Link>
                        </div>
                        <Input
                            id="password"
                            type="password"
                            name="password"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="role">Role</Label>
                        </div>
                        <Select name="role" required>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select your account type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="doctor">Doctor</SelectItem>
                                <SelectItem value="helper">Helper</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Button type="submit" className="w-full">
                        Login
                    </Button>
                    {/* <Button asChild variant="outline" className="w-full">
                        <Link href="/register">Register</Link>
                    </Button> */}
                </div>
                <div className="mt-4 text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Link href="/register" className="underline">
                        Register
                    </Link>
                </div>
            </CardContent>
        </Card>
        // <Card className="space-y-6 w-full max-w-md bg-accent/20">
        //     <CardHeader className="space-y-3">
        //         <h1 className="text-3xl font-semibold text-center">Login</h1>
        //         <h2 className="text-center">
        //             New to Mediscript ?{" "}
        //             <Link
        //                 href="/register"
        //                 className="text-primary/80 hover:underline"
        //             >
        //                 Sign up
        //             </Link>{" "}
        //             here.
        //         </h2>
        //     </CardHeader>
        //     <CardContent>
        //         <form onSubmit={handleSubmit} className="space-y-4">
        //             <div className="space-y-2">
        //                 <Label> Email</Label>
        //                 <Input
        //                     type="email"
        //                     name="email"
        //                     placeholder="harrypotter@hogwarts.com"
        //                     required
        //                 />
        //             </div>
        //             <div className="space-y-2">
        //                 <Label>Password</Label>
        //                 <Input
        //                     type="password"
        //                     name="password"
        //                     placeholder="Password"
        //                     required
        //                 />
        //             </div>
        //             <div className="space-y-2">
        //                 <Label>Role</Label>
        //                 <Select name="role">
        //                     <SelectTrigger className="w-full">
        //                         <SelectValue placeholder="Doctor/Helper" />
        //                     </SelectTrigger>
        //                     <SelectContent>
        //                         <SelectItem value="doctor">Doctor</SelectItem>
        //                         <SelectItem value="helper">Helper</SelectItem>
        //                     </SelectContent>
        //                 </Select>
        //             </div>

        //             <Button type="submit" className="w-36">
        //                 Login
        //             </Button>
        //         </form>
        //     </CardContent>
        // </Card>
    );
};

export default LoginForm;

// import Link from "next/link"

// import { Button } from "@/components/ui/button"
import {
    //   Card,
    //   CardContent,
    CardDescription,
    //   CardHeader,
    CardTitle,
} from "@/components/ui/card";
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

const description =
    "A login form with email and password. There's an option to login with Google and a link to sign up if you don't have an account.";

"use client";
import { useAuth } from "@/context/AuthContext";
import React, { FormEvent } from "react";
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
import {
    Card,
    CardContent,
    CardHeader,
    CardDescription,
    CardTitle,
} from "../ui/card";
import axios from "axios";

function RegisterForm() {
    const { login } = useAuth();
    const router = useRouter();
    const [error, setError] = React.useState<string | null>(null);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            // console.log("role", formData.get("role"));
            const email = formData.get("email") as string;
            const role = formData.get("role") as string;
            const password = formData.get("password") as string;
            const confirmPassword = formData.get("confirm-password") as string;

            console.log(email, password, role);

            if (!email || !password || !role) {
                setError("Please fill in all fields.");
                return;
            }

            if (password.length < 6) {
                setError("Password must be at least 6 characters long.");
                return;
            }

            if (password !== confirmPassword) {
                setError("Passwords do not match.");
                return;
            }

            setError("");

            const result = await axios({
                method: "POST",
                url: "/api/auth/register",
                data: {
                    email,
                    password,
                    role,
                },
            });
            if (result.status == 201) {
                await login(email, password, role);
                router.push("/");
            } else {
                setError(
                    "An error occured while registering. Please try again."
                );
            }
        } catch (error) {}
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-md">
            <Card className="mx-auto w-full max-w-xl bg-slate-950/20">
                <CardHeader>
                    <CardTitle className="text-2xl">Register</CardTitle>
                    <CardDescription>
                        Enter your email below to a new account.
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
                                <Label htmlFor="confirm-password">
                                    Confirm Password
                                </Label>
                            </div>
                            <Input
                                id="confirm-password"
                                type="password"
                                name="confirm-password"
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
                                    <SelectItem value="doctor">
                                        Doctor
                                    </SelectItem>
                                    <SelectItem value="helper">
                                        Helper
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <p className="h-6 text-red-400 text-sm">
                                {error || ""}
                            </p>
                            {/* <Input
                                type="text"
                                className="text-rose-400 font-semibold"
                                disabled
                                value={error || ""}
                            /> */}
                        </div>
                        <Button type="submit" className="w-full">
                            Register
                        </Button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Already have an account?{" "}
                        <Link href="/login" className="underline">
                            Log in.
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </form>
    );
}

export default RegisterForm;

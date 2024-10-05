"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";
import Link from "next/link";

export default function CTA() {
    return (
        <>
            <div className="px-12 py-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-3xl">
                            {/* name */}
                            Dr. Ayan Ghosh
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                            {/* Degree  */}
                            MD. MBBS. FCPS
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4 sm:grid-cols-2"></div>
                    </CardContent>
                </Card>
            </div>
            <div className="flex w-full flex-col px-12 py-6">
                <main className="">
                    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                            <Card
                                className="sm:col-span-2"
                                x-chunk="dashboard-05-chunk-0"
                            >
                                <CardHeader className="pb-3">
                                    <CardTitle>Appointments</CardTitle>
                                    <CardDescription className="text-balance max-w-lg leading-relaxed">
                                        Keep track record for patient data and
                                        appointments
                                    </CardDescription>
                                </CardHeader>
                                <CardFooter>
                                    <Button asChild>
                                        <Link href="/appointments/new">
                                            Create New Appointment
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                            <Card x-chunk="dashboard-05-chunk-1">
                                <CardHeader className="pb-2">
                                    <CardDescription>This Week</CardDescription>
                                    <CardTitle className="text-4xl">
                                        $1,329
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-xs text-muted-foreground">
                                        +25% from last week
                                    </div>
                                </CardContent>
                                {/* <CardFooter>
                            <Progress value={25} aria-label="25% increase" />
                            </CardFooter> */}
                            </Card>
                            <Card x-chunk="dashboard-05-chunk-2">
                                <CardHeader className="pb-2">
                                    <CardDescription>
                                        This Month
                                    </CardDescription>
                                    <CardTitle className="text-4xl">
                                        $5,329
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-xs text-muted-foreground">
                                        +10% from last month
                                    </div>
                                </CardContent>
                                {/* <CardFooter>
                            <Progress value={12} aria-label="12% increase" />
                            </CardFooter> */}
                            </Card>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

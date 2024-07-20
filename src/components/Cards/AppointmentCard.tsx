"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";

export default function AppointmentCard() {
    const date = new Date(Date.now());
    const formattedDate = new Intl.DateTimeFormat("en-IN", {
        dateStyle: "full",
        timeStyle: "long",
        timeZone: "Asia/Kolkata",
    }).format(date);
    return (
        <div className="w-full max-w-lg my-6">
            <Card>
                <CardHeader>
                    <CardTitle>Appointment Details</CardTitle>
                    <CardDescription>{formattedDate}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-6">
                        <div className="grid gap-3">
                            <Label htmlFor="name" className="font-bold">
                                Concern
                            </Label>
                            <Input
                                id="name"
                                type="text"
                                className="w-full"
                                defaultValue="Fever and Frequent Headache"
                            />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="name" className="font-bold">
                                Diagnosis Summery
                            </Label>
                            <Input
                                id="name"
                                type="text"
                                className="w-full"
                                defaultValue="Maleria"
                            />
                        </div>
                        <Button>View Prescription</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

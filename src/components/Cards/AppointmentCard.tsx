"use client";

const date = new Date("2022-01-01T10:00:00Z");
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";

export default function AppointmentCard({
    status,
}: {
    status: "upcoming" | "completed" | "cancelled";
}) {
    const formattedDate = new Intl.DateTimeFormat("en-IN", {
        dateStyle: "full",
        timeStyle: "long",
        timeZone: "Asia/Kolkata",
    }).format(date);

    return (
        <div className="w-full max-w-lg">
            <Card className="bg-background/50">
                <CardHeader className="space-y-1">
                    <CardTitle>Appointment Details</CardTitle>
                    <CardDescription>{formattedDate}</CardDescription>
                    <Status status={status} />
                </CardHeader>
                <CardContent className="grid grid-rows-2 gap-6">
                    {/* row 1 */}
                    <div className="grid gap-6 ">
                        <div className="grid gap-3">
                            <Label htmlFor="name" className="font-bold">
                                Concern
                            </Label>
                            <Input
                                id="name"
                                type="text"
                                className="w-full disabled:opacity-100 cursor-none"
                                defaultValue="Fever and Frequent Headache"
                                disabled
                            />
                        </div>
                    </div>
                    {/* row 2 */}
                    {status === "completed" && (
                        <Button
                            className="w-full self-end"
                            variant={"secondary"}
                        >
                            View Prescription
                        </Button>
                    )}
                    {status === "upcoming" && (
                        <div className="w-full grid grid-cols-2 gap-x-4 self-end">
                            <Button className="w-full" variant={"secondary"}>
                                Start Consultation
                            </Button>
                            <Button
                                className="w-full self-end"
                                variant={"destructive"}
                            >
                                Cancel Appointment
                            </Button>
                        </div>
                    )}
                    {status === "cancelled" && (
                        <Button
                            variant={"destructive"}
                            disabled
                            className="self-end"
                        >
                            Cancelled
                        </Button>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}

const Status = ({
    status,
}: {
    status: "upcoming" | "completed" | "cancelled";
}) => {
    let bgColor = "";
    let textColor = "";
    if (status === "upcoming") {
        bgColor = "bg-yellow-500";
        textColor = "text-yellow-500";
    } else if (status === "completed") {
        bgColor = "bg-green-500";
        textColor = "text-green-500";
    } else {
        bgColor = "bg-red-500";
        textColor = "text-red-500";
    }
    return (
        <div className="flex gap-2 py-1 items-center">
            <section
                className={`w-1 p-2 aspect-square rounded-full ${bgColor}`}
            />
            <p className={`text-sm text font-semibold ${textColor}`}>
                {status.toUpperCase()}
            </p>
        </div>
    );
};

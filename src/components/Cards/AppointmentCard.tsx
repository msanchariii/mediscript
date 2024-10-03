"use client";

const date = new Date("2022-01-01T10:00:00Z");
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

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

    const [appointmentStatus, setAppointmentStatus] = useState<
        "upcoming" | "completed" | "cancelled"
    >(status);

    const { toast } = useToast();

    const handleCancelAppointment = () => {
        try {
            console.log("Appointment Cancelled");
            setAppointmentStatus("cancelled");
            // TODO: API call to cancel appointment
            toast({
                variant: "success",
                title: "Appointment Cancelled",
                description:
                    "Your appointment has been successfully cancelled.",
            });
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
            });
        }
    };

    return (
        <div className="w-full max-w-lg">
            <Card className="bg-background/50">
                <CardHeader className="space-y-1">
                    <CardTitle>Appointment Details</CardTitle>
                    <CardDescription>{formattedDate}</CardDescription>
                    <Status status={appointmentStatus} />
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
                    {appointmentStatus === "completed" && (
                        <Button
                            className="w-full self-end"
                            variant={"secondary"}
                        >
                            View Prescription
                        </Button>
                    )}
                    {appointmentStatus === "upcoming" && (
                        <div className="w-full grid grid-cols-2 gap-x-4 self-end">
                            <Button className="w-full" variant={"secondary"}>
                                Start Consultation
                            </Button>
                            <CancelAppointmentAlert
                                handleCancelAppointment={
                                    handleCancelAppointment
                                }
                            />
                        </div>
                    )}
                    {appointmentStatus === "cancelled" && (
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

export function CancelAppointmentAlert({
    handleCancelAppointment,
}: {
    handleCancelAppointment: () => Promise<void> | void;
}) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className="w-full self-end" variant={"destructive"}>
                    Cancel Appointment
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        cancel this appointment.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction onClick={handleCancelAppointment}>
                        Cancel Appointment
                    </AlertDialogAction>
                    <AlertDialogCancel>Exit</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

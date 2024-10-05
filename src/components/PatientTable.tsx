"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import AppointmentCard from "./Cards/AppointmentCard";

export default function PatientTable() {
    return (
        <div className="p-12">
            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl">
                        Upcoming Appointments
                    </CardTitle>
                    <CardDescription>
                        Manage your appointments and generate e-prescription.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-3 gap-4">
                        <AppointmentCard status="upcoming" id="1" />
                        <AppointmentCard status="upcoming" id="2" />
                        <AppointmentCard status="upcoming" id="3" />
                        <AppointmentCard status="upcoming" id="4" />
                        <AppointmentCard status="upcoming" id="5" />
                    </div>
                </CardContent>
                <CardFooter>
                    <div className="text-xs text-muted-foreground">
                        Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                        products
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}

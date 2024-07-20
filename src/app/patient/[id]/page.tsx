import AppointmentCard from "@/components/Cards/AppointmentCard";
import PatientDetailsCard from "@/components/Cards/PatientDetailsCard";
import { Button } from "@/components/ui/button";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
    const id = params.id;
    return (
        <div className="p-12 space-y-12">
            <div className="flex justify-between">
                <h2 className="font-bold text-4xl">Patient Details</h2>
                <Button>Edit Patient Details</Button>
            </div>
            <PatientDetailsCard />
            <div className="flex justify-between">
                <h2 className="font-bold text-4xl">Appointments</h2>
                <Button>Prescribe Now</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6  place-items-center">
                <AppointmentCard />
                <AppointmentCard />
                <AppointmentCard />
                <AppointmentCard />
                <AppointmentCard />
            </div>
        </div>
    );
};

export default page;

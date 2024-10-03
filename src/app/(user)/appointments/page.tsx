import AppointmentCard from "@/components/Cards/AppointmentCard";
import React from "react";

function page() {
    return (
        <div className="p-12 space-y-6">
            <h2 className="text-3xl font-semibold">All Appointments</h2>
            <div className="grid grid-cols-3 gap-4 place-items-center">
                <AppointmentCard status="upcoming" />
                <AppointmentCard status="upcoming" />
                <AppointmentCard status="completed" />
                <AppointmentCard status="upcoming" />
                <AppointmentCard status="cancelled" />
                <AppointmentCard status="completed" />
                <AppointmentCard status="completed" />
            </div>
        </div>
    );
}

export default page;

import React from "react";
import CTA from "../CTA/CTA";
import PatientTable from "../PatientTable";

function Dashboard({
    id,
    role,
}: {
    id: number | string | null;
    role: string | null;
}) {
    return (
        <div>
            <CTA />
            <PatientTable />
        </div>
    );
}

export default Dashboard;

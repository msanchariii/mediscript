import CTA from "@/components/CTA/CTA";
import { ModeToggle } from "@/components/ModeToggle";
import PatientTable from "@/components/PatientTable";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
    return (
        // <div className="flex min-h-screen w-full flex-col p-6">
        <>
            <CTA />
            <PatientTable />
        </>
        // </div>
    );
}

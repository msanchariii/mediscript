"use client";
import React, { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { formatDateString, formatDateToDDMMYYYY } from "@/lib/formatDateString";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { Divide } from "lucide-react";
import Link from "next/link";

function AppointmentForm() {
    const [patients, setPatients] = useState<any>([]); //filtered patients
    const [newPatient, setNewPatient] = useState<any>(null);
    const [selectedPatient, setSelectedPatient] = useState<any>(null);
    const [patientError, setPatientError] = useState<string | null>(null); // patient form error

    const [isDisabled, setIsDisabled] = useState<boolean>(true); // if the appointment form is disabled
    const [isCreateNewPatientDisabled, setIsCreateNewPatientDisabled] =
        useState<boolean>(true);
    const [isAppointmentCreated, setIsAppointmentCreated] =
        useState<boolean>(false);

    const [newAppointment, setNewAppointment] = useState({
        concern: "",
        appointmentDate: "",
        location: "",
        patientId: "",
        status: "upcoming",
        diagnosisSummery: "",
    });

    const handlePatientSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const patientName = formData.get("name") as string;
        const dob = formData.get("dob") as string;
        const phone_no = formData.get("phone") as string;
        const email = formData.get("email") as string;
        const gender = formData.get("gender") as string;

        // Mandatory name and DOB, optional for phone_no.
        if (!patientName) {
            setPatientError("Name is required.");
            return;
        }

        const filteredPatients = fakePatients.filter((patient) => {
            const nameMatch =
                patient.name.toLowerCase() === patientName.toLowerCase();
            const dobMatch = dob ? patient.dob === dob : true;
            const phoneMatch = phone_no ? patient.phone_no === phone_no : true;
            return nameMatch && dobMatch && phoneMatch;
        });

        setPatients(filteredPatients);

        // Handling new patient creation if no match found
        if (
            filteredPatients.length === 0 &&
            (!email || !gender || !phone_no || !dob)
        ) {
            setPatientError(
                "No patient found. Fill all the fields create a new patient."
            );
            setIsCreateNewPatientDisabled(false);
            setNewPatient({
                name: patientName,
                dob: dob,
                phone_no: phone_no || "",
            });
            return;
        }

        if (filteredPatients.length === 0) {
            setPatientError("No patient found. Create a new patient.");
            setIsCreateNewPatientDisabled(false);

            setNewPatient({
                ...newPatient,
                name: patientName,
                dob: dob,
                phone_no: phone_no || "",
                gender: (formData.get("gender") as string) || "",
                email: (formData.get("email") as string) || "",
            });

            if (phone_no || formData.get("gender") || formData.get("email")) {
                setPatientError(null);
                setIsCreateNewPatientDisabled(false);
            } else {
                setPatientError(
                    "Email, phone, and gender are required for new patients."
                );
                setIsCreateNewPatientDisabled(true);
            }
        } else {
            setIsCreateNewPatientDisabled(true);
            setPatientError(null);
        }
    };

    const handleCreateNewPatient = () => {
        if (newPatient) {
            console.log("Creating New Patient:", newPatient);
            setSelectedPatient(newPatient);
            setIsDisabled(false);
        }
    };

    const handleCreateAppointment = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!selectedPatient) return;

        const formData = new FormData(e.currentTarget);
        const { concern, appointmentDate, appointmentLocation } =
            Object.fromEntries(formData.entries());

        if (concern && appointmentDate && appointmentLocation) {
            // Create new appointment
            setNewAppointment({
                concern: concern as string,
                appointmentDate: formatDateString(appointmentDate as string), //YYYY-MM-DD
                location: appointmentLocation as string,
                patientId: selectedPatient.id,
                status: "upcoming",
                diagnosisSummery: "",
            });
            setIsAppointmentCreated(true);

            console.log("Appointment Created for:", selectedPatient);
        } else {
            console.error("Form fields missing:", {
                concern,
                appointmentDate,
                appointmentLocation,
            });
        }
    };

    // Use useEffect to log the updated appointment once it's set
    useEffect(() => {
        if (isAppointmentCreated) {
            console.log("Appointment Details:", newAppointment);
        }
    }, [newAppointment, isAppointmentCreated]);

    return (
        <div className="space-y-12">
            {/* Search or Create Patient Form */}
            <form className="space-y-6" onSubmit={handlePatientSearch}>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-3">
                        <Label>Patient Name</Label>
                        <Input
                            type="text"
                            placeholder="John Doe"
                            required
                            name="name"
                        />
                    </div>
                    <div className="space-y-3">
                        <Label>DOB</Label>
                        <Input
                            type="text"
                            placeholder="YYYY-MM-DD"
                            // required
                            name="dob"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-3">
                        <Label>Gender</Label>
                        <Input
                            type="text"
                            placeholder="m, f, t"
                            name="gender"
                        />
                    </div>
                    <div className="space-y-3">
                        <Label>Phone No.</Label>
                        <Input
                            type="text"
                            placeholder="999-999-9999"
                            name="phone"
                        />
                    </div>
                    <div className="space-y-3">
                        <Label>Email Address</Label>
                        <Input
                            type="email"
                            placeholder="john.doe@email.com"
                            name="email"
                        />
                    </div>
                </div>
                <div className="space-x-6">
                    <Button type="submit">Search Patient</Button>
                    <Button
                        onClick={handleCreateNewPatient}
                        disabled={isCreateNewPatientDisabled}
                    >
                        Create New Patient
                    </Button>
                </div>
                <div className="h-6">
                    {patientError && (
                        <p className="text-red-500">{patientError}</p>
                    )}
                </div>
            </form>

            {/* Display Filtered Patients */}
            <div className="grid grid-cols-2 gap-6">
                <Card className=" p-2 dark:bg-slate-950/20">
                    <CardHeader>Create a New Appointment</CardHeader>
                    <CardContent>
                        <form
                            action=""
                            className="space-y-6"
                            onSubmit={handleCreateAppointment}
                        >
                            <div className="space-y-3">
                                <Label>Patient Name</Label>
                                <Input
                                    type="text"
                                    required
                                    // name="patientName"
                                    disabled
                                    value={selectedPatient?.name || ""}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <Label>Phone Number</Label>
                                    <Input
                                        type="text"
                                        // name="phone"
                                        disabled
                                        value={selectedPatient?.phone_no || ""}
                                    />
                                </div>
                                <div className="space-y-3">
                                    <Label>Email Address</Label>
                                    <Input
                                        type="email"
                                        // name="email"
                                        disabled
                                        value={selectedPatient?.email || ""}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <Label>Gender</Label>
                                    <Input
                                        type="text"
                                        // name="gender"
                                        disabled
                                        value={selectedPatient?.gender || ""}
                                    />
                                </div>
                                <div className="space-y-3">
                                    <Label>Age</Label>
                                    <Input
                                        type="text"
                                        // name="age"
                                        disabled
                                        value={selectedPatient?.dob || ""}
                                    />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <Label>Concern</Label>
                                <Input
                                    type="text"
                                    placeholder="Fever, headache, etc."
                                    required
                                    name="concern"
                                    disabled={isDisabled}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <Label>Appointment Date</Label>
                                    <Input
                                        type="text"
                                        name="appointmentDate"
                                        disabled={isDisabled}
                                        value={
                                            selectedPatient?.appointmentDate ||
                                            formatDateToDDMMYYYY(new Date())
                                        }
                                    />
                                </div>
                                <div className="space-y-3">
                                    <Label>Appointment Location</Label>
                                    <Select name="appointmentLocation">
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select a location" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="l1">
                                                Location 1
                                            </SelectItem>
                                            <SelectItem value="l2">
                                                Location 2
                                            </SelectItem>
                                            <SelectItem value="l3">
                                                Location 2
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="flex w-full justify-between space-x-6">
                                <Button
                                    type="submit"
                                    disabled={
                                        isDisabled || isAppointmentCreated
                                    }
                                >
                                    Create Appointment
                                </Button>
                                {isAppointmentCreated && (
                                    // < className="">
                                    <div className="space-x-6">
                                        <Button variant={"secondary"}>
                                            <Link href="/appointments">
                                                {/* ! Check if doctor */}
                                                Start Consultation
                                            </Link>
                                        </Button>
                                        <Button asChild variant={"secondary"}>
                                            <Link href="/appointments/new">
                                                Add Another
                                            </Link>
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </form>
                    </CardContent>
                </Card>

                {/* Patient List */}
                <Card className="p-2 dark:bg-slate-950/20 ">
                    <CardHeader>Search Result</CardHeader>
                    <CardContent className="space-y-2">
                        {patients.length > 0 &&
                            patients.map((patient: any) => (
                                <div
                                    key={patient.id}
                                    className="flex justify-between items-center p-2 border border-gray-200/20 rounded-md"
                                >
                                    <div className="flex-grow grid grid-cols-3 text-xs">
                                        <p>{patient.name}</p>
                                        <p>{patient.dob}</p>
                                        <p>{patient.phone_no}</p>
                                    </div>
                                    <Button
                                        onClick={() => {
                                            setSelectedPatient(patient);
                                            setIsDisabled(false);
                                        }}
                                        className="aspect-square"
                                        variant={"secondary"}
                                        size={"icon"}
                                    >
                                        {">"}
                                    </Button>
                                </div>
                            ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default AppointmentForm;

const fakePatients = [
    {
        id: 1,
        name: "John Doe",
        dob: "1990-01-01",
        phone_no: "999-999-9999",
        gender: "male",
        email: "john@example.com",
    },
    {
        id: 2,
        name: "Jane Smith",
        dob: "1985-05-15",
        phone_no: "888-888-8888",
        gender: "female",
        email: "jane@example.com",
    },
    {
        id: 3,
        name: "Sam Green",
        dob: "1992-09-30",
        phone_no: "777-777-7777",
        gender: "male",
        email: "sam@example.com",
    },
    {
        id: 4,
        name: "Lisa Brown",
        dob: "1995-12-10",
        phone_no: "666-666-6666",
        gender: "female",
        email: "lisa@example.com",
    },
];

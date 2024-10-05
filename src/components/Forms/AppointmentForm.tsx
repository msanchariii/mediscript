"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { MoveRight } from "lucide-react";
import { set } from "date-fns";

function AppointmentForm() {
    const [patients, setPatients] = useState<any>([]);
    const [selectedPatient, setSelectedPatient] = useState<any>(null);
    const [isDisabled, setIsDisabled] = useState<boolean>(true);
    const [isCreateNewPatientDisabled, setIsCreateNewPatientDisabled] =
        useState<boolean>(true);
    const [isSearchDisabled, setIsSearchDisabled] = useState<boolean>(false);
    const [patientError, setPatientError] = useState<string | null>(null);
    const [newPatient, setNewPatient] = useState<any>(null);
    const [isAppointmentCreated, setIsAppointmentCreated] =
        useState<boolean>(false);

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
            setIsSearchDisabled(true);
            return;
        }

        if (filteredPatients.length === 0) {
            setPatientError("No patient found. Create a new patient.");
            setIsCreateNewPatientDisabled(false);
            setIsSearchDisabled(true);

            setNewPatient({
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
        console.log("Appointment Created for:", selectedPatient);
        setIsAppointmentCreated(true);
    };

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
                        disabled={isSearchDisabled}
                    >
                        Create New Patient
                    </Button>
                </div>
                {patientError && <p className="text-red-500">{patientError}</p>}
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
                                    name="patientName"
                                    disabled
                                    value={selectedPatient?.name || ""}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <Label>Phone Number</Label>
                                    <Input
                                        type="text"
                                        name="phone"
                                        disabled
                                        value={selectedPatient?.phone_no || ""}
                                    />
                                </div>
                                <div className="space-y-3">
                                    <Label>Email Address</Label>
                                    <Input
                                        type="email"
                                        name="email"
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
                                        name="gender"
                                        disabled
                                        value={selectedPatient?.gender || ""}
                                    />
                                </div>
                                <div className="space-y-3">
                                    <Label>Age</Label>
                                    <Input
                                        type="text"
                                        name="age"
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
                            <div className="space-y-3">
                                <Button type="submit" disabled={isDisabled}>
                                    Create Appointment
                                </Button>
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
                                    >
                                        Select
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

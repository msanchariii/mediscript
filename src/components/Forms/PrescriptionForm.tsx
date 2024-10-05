"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import axios from "axios";

const AppointmentDeatils = {
    patientName: "John Doe",
    age: 25,
    concern: "Fever",
};

function PrescriptionForm({ appointment }: { appointment: any }) {
    const [formData, setFormData] = useState<any>({
        vitals: {
            bloodPressure: "",
            bloodSugar: "",
            pulseRate: "",
            temperature: "",
            spO2: "",
        },
        patientDetails: {
            name: "",
            gender: "",
            age: "",
            date: "",
        },
        purpose: "",
        symptoms: [],
        medicines: Array(10).fill({
            drug: "",
            drugInfo: "",
            instruction: "",
            remarks: "",
        }), // 10 rows for medicines
        investigations: Array(5).fill({ test: "", components: "" }), // 10 rows for investigations
        advice: "",
    });

    // Handle change for all input fields
    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        section: string,
        index: number = -1
    ) => {
        const { name, value } = e.target;

        // Check if it's an array field like medicines or investigations
        if (index >= 0) {
            setFormData((prevData: any) => {
                const updatedArray = [...prevData[section]];
                updatedArray[index] = { ...updatedArray[index], [name]: value };
                return { ...prevData, [section]: updatedArray };
            });
        } else {
            setFormData((prevData: any) => ({
                ...prevData,
                [section]: { ...prevData[section], [name]: value },
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const filteredFormData = {
            ...formData,
            appointmentId: appointment.id,
            medicines: formData.medicines
                ? formData.medicines.filter(
                      (medicine: any) =>
                          medicine.drug !== "" ||
                          medicine.drugInfo !== "" ||
                          medicine.instruction !== "" ||
                          medicine.remarks !== ""
                  )
                : [],
            investigations: formData.investigations
                ? formData.investigations.filter(
                      (investigation: any) =>
                          investigation.test !== "" ||
                          investigation.components !== ""
                  )
                : [],
        };

        console.log("Form submitted:", filteredFormData);

        const res = await axios.post("/api", filteredFormData);
    };

    return (
        <div className="p-4">
            <form onSubmit={handleSubmit} className="space-y-12">
                {/* Patient Details */}
                <div className="w-full ">
                    {/* Add fields for name, age, gender, etc. */}
                    <PatientDetails
                        formData={formData}
                        handleInputChange={handleInputChange}
                    />
                </div>
                <div className="space-y-3">
                    <Label htmlFor="purpose" className="">
                        Concern or Purpose of Visit
                    </Label>
                    <Textarea
                        name="purpose"
                        id="purpose"
                        value={AppointmentDeatils.concern}
                        disabled
                        // onChange={(e) => handleInputChange(e, "purpose")}
                    />
                </div>
                <Separator />

                {/* Vitals */}
                <h1 className="text-4xl">Vitals</h1>
                <VitalsSection
                    formData={formData}
                    handleInputChange={handleInputChange}
                />
                <Separator />

                {/* Purpose */}

                {/* Medicines */}
                <div className="space-y-6">
                    <h2 className="text-4xl">Medicines</h2>
                    <div className="grid grid-cols-6 gap-4">
                        <Label className="col-span-2">Drug Name</Label>
                        <Label className="col-span-2">Drug Info</Label>
                        <Label>Instruction</Label>
                        <Label>Remarks</Label>
                    </div>
                    {formData.medicines.map((medicine: any, index: number) => (
                        <MedicineRow
                            key={index}
                            index={index}
                            medicine={medicine}
                            handleInputChange={handleInputChange}
                        />
                    ))}
                </div>
                <Separator />

                {/* Investigations */}
                <div className="space-y-6">
                    <h2 className="text-4xl">Investigations</h2>
                    <div className="grid grid-cols-3 gap-4">
                        <Label className="columns-2">Test</Label>
                        <Label>Components</Label>
                    </div>
                    {formData.investigations.map(
                        (investigation: any, index: number) => (
                            <InvestigationRow
                                key={index}
                                index={index}
                                investigation={investigation}
                                handleInputChange={handleInputChange}
                            />
                        )
                    )}
                </div>
                <Separator />

                {/* Submit */}
                <Button type="submit">Generate Prescription</Button>
            </form>
        </div>
    );
}

const PatientDetails = ({ formData, handleInputChange }: any) => (
    <div className="w-full grid grid-cols-3 gap-6">
        {/* Patient Name */}
        <div className="space-y-3">
            <Label htmlFor="name">Patient Name</Label>
            <Input
                type="text"
                name="name"
                id="name"
                value={formData.patientDetails.name}
                onChange={(e) => handleInputChange(e, "patientDetails")}
            />
        </div>

        {/* Age */}
        <div className="space-y-3">
            <Label htmlFor="age">Age</Label>
            <Input
                type="text"
                name="age"
                id="age"
                value={formData.patientDetails.age}
                onChange={(e) => handleInputChange(e, "patientDetails")}
            />
        </div>

        {/* Gender */}
        <div className="space-y-3">
            <Label htmlFor="gender">Gender</Label>
            <Input
                type="text"
                name="gender"
                id="gender"
                value={formData.patientDetails.gender}
                onChange={(e) => handleInputChange(e, "patientDetails")}
            />
        </div>

        {/* Weight */}
        <div className="space-y-3">
            <Label htmlFor="weight">Weight</Label>
            <Input
                type="text"
                name="weight"
                id="weight"
                value={formData.patientDetails.weight}
                onChange={(e) => handleInputChange(e, "patientDetails")}
            />
        </div>

        {/* Appointment Date */}
        <div className="space-y-3">
            <Label htmlFor="date">Appointment Date</Label>
            <Input
                type="text"
                name="date"
                id="date"
                value={formData.patientDetails.date}
                onChange={(e) => handleInputChange(e, "patientDetails")}
            />
        </div>

        {/* Appointment Location */}
        <div className="space-y-3">
            <Label htmlFor="location">Appointment Location</Label>
            <Input
                type="text"
                name="location"
                id="location"
                value={formData.patientDetails.location}
                onChange={(e) => handleInputChange(e, "patientDetails")}
            />
        </div>
    </div>
);

const VitalsSection = ({ formData, handleInputChange }: any) => (
    <div className="w-full mt-6 grid grid-cols-3 gap-6">
        <div className="space-y-3">
            <Label htmlFor="bloodPressure">Blood Pressure</Label>
            <Input
                type="text"
                name="bloodPressure"
                id="bloodPressure"
                value={formData.vitals.bloodPressure}
                onChange={(e) => handleInputChange(e, "vitals")}
            />
        </div>
        <div className="space-y-3">
            <Label htmlFor="bloodSugar">Blood Sugar</Label>
            <Input
                type="text"
                name="bloodSugar"
                id="bloodSugar"
                value={formData.vitals.bloodSugar}
                onChange={(e) => handleInputChange(e, "vitals")}
            />
        </div>
        <div className="space-y-3">
            <Label htmlFor="pulseRate">Pulse Rate</Label>
            <Input
                type="text"
                name="pulseRate"
                id="pulseRate"
                value={formData.vitals.pulseRate}
                onChange={(e) => handleInputChange(e, "vitals")}
            />
        </div>
        <div className="space-y-3">
            <Label htmlFor="temperature">Temperature</Label>
            <Input
                type="text"
                name="temperature"
                id="temperature"
                value={formData.vitals.temperature}
                onChange={(e) => handleInputChange(e, "vitals")}
            />
        </div>
        <div className="space-y-3">
            <Label htmlFor="spO2">SpO2</Label>
            <Input
                type="text"
                name="spO2"
                id="spO2"
                value={formData.vitals.spO2}
                onChange={(e) => handleInputChange(e, "vitals")}
            />
        </div>
    </div>
);

const MedicineRow = ({ index, medicine, handleInputChange }: any) => (
    <div className="grid grid-cols-6 gap-4">
        <Input
            type="text"
            name="drug"
            value={medicine.drug}
            className="col-span-2"
            onChange={(e) => handleInputChange(e, "medicines", index)}
        />
        <Input
            type="text"
            name="drugInfo"
            value={medicine.drugInfo}
            className="col-span-2"
            onChange={(e) => handleInputChange(e, "medicines", index)}
        />
        <Input
            type="text"
            name="instruction"
            value={medicine.instruction}
            onChange={(e) => handleInputChange(e, "medicines", index)}
        />
        <Input
            type="text"
            name="remarks"
            value={medicine.remarks}
            onChange={(e) => handleInputChange(e, "medicines", index)}
        />
    </div>
);

const InvestigationRow = ({ index, investigation, handleInputChange }: any) => (
    <div className="grid grid-cols-3 gap-4">
        <Input
            type="text"
            name="test"
            value={investigation.test}
            onChange={(e) => handleInputChange(e, "investigations", index)}
        />
        <Input
            type="text"
            name="components"
            value={investigation.components}
            className="col-span-2"
            onChange={(e) => handleInputChange(e, "investigations", index)}
        />
    </div>
);

export default PrescriptionForm;

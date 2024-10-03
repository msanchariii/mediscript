import Image from "next/image";
import { Phone } from "lucide-react";
import { prescription, doctor } from "@/lib/fakeData";
// import { doctor } from "../data/fakeData";
// import { doctor, prescription } from "../data/fakeData";

export default function Page({
    searchParams,
}: {
    searchParams: { id: string };
}) {
    const id = searchParams.id;
    console.log(id);

    const {
        vitals,
        patientDetails,
        purpose,
        symptoms,
        medicines,
        investigation,
        advice,
        nextVisitDate,
        otDate,
    } = prescription;

    console.log(patientDetails);

    return (
        <div className=" w-full min-h-screen mx-auto p-4 max-w-7xl relative z-50 border-2 my-12 rounded m-2 text-prescriptionBlue">
            <div className="bg-white h-full w-full p-4 divide-y-4  divide-prescriptionBlue rounded">
                {/* Header Section */}
                <div className="">
                    {/* Image */}
                    <div className="relative h-48 w-full">
                        <Image
                            className="object-cover"
                            src="/wave.svg"
                            alt="logo"
                            fill={true}
                            priority={true}
                        />
                    </div>
                    {/* Doctor */}
                    <DoctorsDetails doctorDetails={doctor} />
                </div>

                {/* Patient details section */}
                <PatientDetails patientDetails={patientDetails} />

                {/* Main Prescription section */}
                <div className="w-full flex flex-col md:flex-row divide-y-4 md:divide-y-0 md:divide-x-4 divide-prescriptionBlue min-h-screen">
                    {/* Left section */}
                    <div className="w-full md:w-1/3 bg-white text-prescriptionBlue min-h-96 space-y-10 md:space-y-20 p-4">
                        <div>
                            <h3 className=" font-semibold text-xl my-1">
                                Vitals:{" "}
                            </h3>

                            <Vitals vitals={vitals} />
                        </div>
                        <div className="text-left">
                            <h3 className=" font-semibold text-xl my-1">
                                Complaints:{" "}
                            </h3>
                            <p>{purpose}</p>
                        </div>
                        <div className="text-left">
                            <h3 className=" font-semibold text-xl my-1">
                                Symptoms:{" "}
                            </h3>

                            <div className=" pl-4">
                                {/* <strong>Symptoms: </strong> */}
                                <ul className=" list-disc ">
                                    {symptoms.map((symptom, index) => {
                                        return <li key={index}>{symptom}</li>;
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Right section */}
                    <div className="w-full md:w-2/3 min-h-96 p-4 bg-white space-y-4">
                        {/* Rx Symbol */}
                        <div className="relative h-24 aspect-square text-prescriptionBlue">
                            <Image src="/rx.svg" alt="RX Symbol" fill={true} />
                        </div>
                        {/* Medicines  */}
                        <ol className="space-y-4 list-decimal px-4">
                            {medicines.map((medicine, index) => {
                                return (
                                    <MedicineCard
                                        key={index}
                                        medicine={medicine}
                                    />
                                );
                            })}
                        </ol>

                        {/* Investigations  */}
                        <div className="py-4">
                            <h3 className=" font-semibold text-xl py-2">
                                Investigations:{" "}
                            </h3>
                            <ol className="space-y-2 px-8 list-decimal ">
                                {investigation.map((test, index) => {
                                    return (
                                        <InvestigationCard
                                            key={index}
                                            test={test}
                                        />
                                    );
                                })}
                            </ol>
                        </div>

                        {/* Others */}
                        <div className="text-prescriptionBlue space-y-2 text-xl font-medium">
                            <p>
                                <strong>Advice: </strong>
                                {advice}
                            </p>
                            <p>
                                <strong>Next Visit Date: </strong>
                                {nextVisitDate.toLocaleDateString("en-GB")}
                            </p>
                            <p>
                                <strong>OT Date: </strong>
                                {otDate.toLocaleDateString("en-GB")}
                            </p>
                        </div>
                    </div>
                </div>
                {/* Footer section */}
                <div className=" p-4 uppercase bg-prescriptionBlue text-center align-middle h-[160px] flex items-center justify-center font-semibold text-lg text-white">
                    PRESCRIPTION GENERATED BY MEDISCRIPT
                </div>
            </div>
        </div>
    );
}

type PatientDetailsPropType = {
    name: string;
    age: string;
    gender: string;
    date: string;
};

const PatientDetails = ({
    patientDetails,
}: {
    patientDetails: PatientDetailsPropType;
}) => {
    const { name, age, gender, date } = patientDetails;

    return (
        <div className="text-prescriptionBlue min-h-12 flex flex-col md:flex-row justify-between items-start md:items-center p-4">
            <p>
                <strong>Name : </strong>
                {name}
            </p>{" "}
            <p>
                <strong>Age : </strong>
                {age}
            </p>{" "}
            <p>
                <strong>Gender : </strong>
                {gender}
            </p>{" "}
            <p>
                <strong>Date : </strong>
                {date}
            </p>
        </div>
    );
};

const DoctorsDetails = ({
    doctorDetails,
}: {
    doctorDetails: {
        name: string;
        degree: string;
        address: string;
        phone: string;
    };
}) => {
    const { name, degree, address, phone } = doctorDetails;
    return (
        <div className="p-4 space-y-0.5">
            <h1 className="text-5xl font-serif italic font-bold text-prescriptionBlue">
                {name}
            </h1>
            <p className="text-lg font-semibold text-prescriptionBlue">
                {degree}
            </p>
            <p className="text-sm text-slate-700 font-semibold">{address}</p>
            <div className="flex items-center">
                <Phone color="blue" />
                <p className="text-sky-800 ml-2 font-medium">{phone}</p>
            </div>
        </div>
    );
};

const MedicineCard = ({
    medicine,
}: {
    medicine: {
        drug: string;
        drugInfo: string;
        instruction: string;
        remarks: string;
    };
}) => {
    return (
        <li className=" p-1 ">
            <div className="">
                <h4 className="text-prescriptionBlue text-xl font-bold ">
                    {medicine.drug}
                </h4>
                <p className="text-lg font-semibold text-prescriptionBlue">
                    {medicine.drugInfo}
                </p>
            </div>
            <div>
                <p className="font-medium text-prescriptionLightBlue text-lg">
                    <strong>Instruction:</strong>
                    {medicine.instruction}
                </p>
                <p className="font-medium text-prescriptionLightBlue">
                    <strong>Remarks: </strong>
                    {medicine.remarks}
                </p>
            </div>
        </li>
    );
};

const InvestigationCard = ({
    test,
}: {
    test: {
        test: string;
        components?: string;
    };
}) => {
    return (
        <li className="">
            <div className="">
                <h4 className="font-semibold text-lg">{test.test}</h4>
                {test.components && (
                    <p className="font-semibold text-base text-prescriptionLightBlue">
                        {test.components}
                    </p>
                )}
            </div>
        </li>
    );
};

const Vitals = ({
    vitals,
}: {
    vitals: {
        bloodPressure?: string;
        bloodSugar?: string;
        pulseRate: string;
        temp?: string;
        spO2?: string;
    };
}) => {
    return (
        <div>
            <p>
                <strong>Blood Pressure: </strong>
                {vitals.bloodPressure}
            </p>
            <p>
                <strong>Blood Sugar: </strong>
                {vitals.bloodSugar}
            </p>
            <p>
                <strong>Pulse Rate: </strong>
                {vitals.pulseRate}
            </p>
            <p>
                <strong>Blood Sugar: </strong>
                {vitals.spO2}
            </p>
            <p>
                <strong>Blood Sugar: </strong>
                {vitals.temp}
            </p>
        </div>
    );
};

import Image from "next/image";
import { Phone } from "lucide-react";

export default function Page({
    searchParams,
}: {
    searchParams: { id: string };
}) {
    const id = searchParams.id;
    console.log(id);

    const vitals: { [key: string]: string } = {
        "Blood Pressure": "60/105 mmHg",
        "Blood Sugar": "160mg/dl",
        "Pulse Rate": "78BPM",
        Temp: "33 deg C",
        SpO2: "99%",
    };
    const patientDetails: { [key: string]: string } = {
        Name: "Subha Lomdi",
        Gender: "F",
        Age: "69",
        Date: "11.11.2024",
    };
    const purpose =
        "Porasonai mon boschena, mon kharap kharap krche, 4 br  bathroon a gcchi apatoto.";

    const symptomps = [
        "High Fever",
        "cough",
        "gay gay habvab",
        "Prerna",
        "Rumal dia dhaka takanon",
        "lab  kora",
    ];

    return (
        <div className=" w-full min-h-screen mx-auto p-4 max-w-7xl relative z-50 border-2 my-12 rounded m-2">

            <div className="bg-white h-full w-full p-4 divide-y-4  divide-blue-950 rounded">
                {/* Header Section */}
                <div className="">
                    {/* Image */}
                    <div className="relative w-full h-48 ">
                        <Image
                            className="object-cover"
                            src="/wave.svg"
                            alt="logo"
                            fill={true}
                        />
                    </div>
                    {/* Doctor */}
                    <div className="p-4 space-y-0.5">
                        <h1 className="text-5xl font-serif italic font-bold text-blue-950">
                            Dr. Subha Lomdi
                        </h1>
                        <p className="text-lg font-semibold text-blue-950">
                            MBBS, MD Medicine, Consultant Surgeon
                        </p>
                        <p className="text-sm text-slate-700 font-semibold">
                            HONULULU HOSPITAL, Address Exist Korena, Bangalore,
                            PIN - 700056
                        </p>
                        <div className="flex items-center">
                            <Phone color="blue" />
                            <p className="text-sky-800 ml-2 font-medium">
                                +91 9903668823
                            </p>
                        </div>
                    </div>
                </div>
                {/* Patient details section */}
                <div className="text-blue-950 min-h-12 flex flex-col md:flex-row justify-between items-start md:items-center p-4">

                    {Object.keys(patientDetails).map((key) => {
                        return (
                            <div className="" key={key}>
                                <p>
                                    <strong>{key} : </strong>
                                    {patientDetails[key]}
                                </p>
                            </div>
                        );
                    })}
                </div>
                {/* Main Prescription section */}
                <div className="w-full flex flex-col md:flex-row divide-y-4 md:divide-y-0 md:divide-x-4 divide-blue-950 min-h-screen">
                    {/* Left section */}
                    <div className="w-full md:w-1/3 bg-white text-blue-950 min-h-96 space-y-16 md:space-y-20 p-4 ">

                        <div>
                            <h3 className=" font-semibold text-xl my-1">
                                Vitals:{" "}
                            </h3>
                            {Object.keys(vitals).map((key) => {
                                return (
                                    <div className="" key={key}>
                                        <p>
                                            <strong>{key} : </strong>
                                            {vitals[key]}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="text-left">
                            <h3 className=" font-semibold text-xl my-1">
                                Complain:{" "}
                            </h3>
                            <p>
                                {/* <strong>Purpose: </strong> */}
                                {purpose}
                            </p>
                        </div>
                        <div className="text-left">
                            <h3 className=" font-semibold text-xl my-1">
                                Symptoms:{" "}
                            </h3>

                            <div className=" pl-4">
                                {/* <strong>Symptoms: </strong> */}
                                <ul className=" list-disc ">
                                    {symptomps.map((symptom, index) => {
                                        return <li key={index}>{symptom}</li>;
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Right section */}
                    <div className="w-full md:w-2/3 min-h-96 p-4 bg-teal-50">
                        Right
                    </div>

                </div>
                {/* Footer section */}
                <div className=" p-4 uppercase bg-blue-950 text-center align-middle h-[160px] flex items-center justify-center font-semibold text-lg text-white">
                    Prescription generated by medicript
                </div>
            </div>
        </div>
    );
}


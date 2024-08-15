import prisma from "@/db/db";
import { NextRequest, NextResponse } from "next/server";

// POST: create a doctor
export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        const {
            firstname,
            lastname,
            email,
            phone,
            degree,
            workingAddress,
            dob,
            gender,
            aadhar,
        } = data;

        console.log(data);

        console.log("Creating a doctor...");

        const newDoctor = await prisma.doctor.create({
            data: {
                firstname: firstname,
                lastname: lastname,
                email: email,
                phone: phone,
                degree: degree,
                workingAddress: workingAddress,
                dob: new Date(Date.now()),
                gender: gender,
                aadhar: aadhar,
            },
        });

        return NextResponse.json({
            message: "New Doctor created",
            body: newDoctor,
        });
    } catch (error: any) {
        return NextResponse.json({ message: `Error occurred:: ${error}` });
    }
}
// GET: fetch all doctors

export async function GET() {
    try {
        const doctors = await prisma.doctor.findMany();
        if (doctors.length === 0) {
            return NextResponse.json({ message: "No doctors found" });
        } else {
            return NextResponse.json({
                message: "Doctors fetched",
                body: doctors,
            });
        }
    } catch (error: any) {
        return NextResponse.json({ message: `Error occurred:: ${error}` });
    }
}

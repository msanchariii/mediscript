"use client";

import Image from "next/image";
import { MoreHorizontal } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const patientData = [
    {
        id: 1,
        name: "Sanchari Mandal",
        age: 20,
        gender: "Female",
    },
    {
        id: 2,
        name: "Kankan Mondal",
        age: 20,
        gender: "Female",
    },
    {
        id: 3,
        name: "Subhradeep Sardar",
        age: 21,
        gender: "Male",
    },
    {
        id: 4,
        name: "Subha Mistry",
        age: 20,
        gender: "Male",
    },
];

export const PatientRow = ({
    id,
    name,
    age,
    gender,
    dob,
    lastVisited,
}: any) => {
    return (
        <TableRow>
            <TableCell className="hidden sm:table-cell">
                <Image
                    alt="Product image"
                    className="aspect-square rounded-md object-cover"
                    height="64"
                    src="/placeholder.png"
                    width="64"
                />
            </TableCell>
            <TableCell className="font-medium ">
                <Link href={`/patient/${id}`} className="hover:underline">
                    {name}
                </Link>
            </TableCell>
            <TableCell>
                <Badge variant="outline">{gender}</Badge>
            </TableCell>
            <TableCell>{age}</TableCell>
            <TableCell className="hidden md:table-cell">22-03-2003</TableCell>
            <TableCell className="hidden md:table-cell">
                2023-07-12 10:42 AM
            </TableCell>
            <TableCell>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            aria-haspopup="true"
                            size="icon"
                            variant="ghost"
                        >
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </TableCell>
        </TableRow>
    );
};

export default function PatientTable() {
    return (
        <div className="p-12">
            <Card>
                <CardHeader>
                    <CardTitle>Patients</CardTitle>
                    <CardDescription>
                        Manage your patients and generate e-prescription.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="hidden w-[100px] sm:table-cell">
                                    <span className="sr-only">Image</span>
                                </TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Age</TableHead>
                                <TableHead>Gender</TableHead>
                                <TableHead className="hidden md:table-cell">
                                    DOB
                                </TableHead>
                                <TableHead className="hidden md:table-cell">
                                    Last Visited
                                </TableHead>
                                <TableHead>
                                    <span className="sr-only">Actions</span>
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {patientData.map((patient) => {
                                return (
                                    <PatientRow
                                        key={patient.id}
                                        id={patient.id}
                                        name={patient.name}
                                        age={patient.age}
                                        gender={patient.gender}
                                    />
                                );
                            })}
                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter>
                    <div className="text-xs text-muted-foreground">
                        Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                        products
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}

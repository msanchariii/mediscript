"use client";
import React, { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CalendarIcon } from "lucide-react";

// import { Label } from "@radix-ui/react-select";
const DatePicker = () => {
    const [dob, setDob] = useState<Date | undefined>(new Date());
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={
                        "w-[240px] pl-3 text-left font-normal text-muted-foreground"
                    }
                >
                    <span>Pick a Date</span>
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                {/* Calender */}
                <Calendar
                    mode="single"
                    selected={dob}
                    onSelect={() => {
                        setDob;
                    }}
                    // className="rounded-md border"
                    className=""
                    disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    );
};

function DoctorForm() {
    const [dob, setDob] = useState<Date | undefined>(new Date());

    const handleSave = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Saved");
    };

    return (
        <div className="p-2 w-full max-w-7xl space-y-6">
            <div className="flex justify-between">
                <h1 className="text-3xl ">Edit Profile</h1>
                {/* <Button>Save</Button> */}
            </div>
            <form className="space-y-6" onSubmit={handleSave}>
                <div className="space-y-3">
                    <Label>Name</Label>
                    <Input placeholder="Ayan Ghosh" />
                </div>
                <div className="space-y-3">
                    <Label>Address</Label>
                    <Input placeholder="72, Bakers Street, Kolkata - 56" />
                </div>
                <div>
                    <DatePicker />
                </div>
                <div className="space-y-3">
                    <Label>Degree</Label>
                    <Input placeholder="MBBS" />
                </div>
                <div className="space-y-3">
                    <Label>Degree</Label>
                    <Input placeholder="MBBS" />
                </div>
                <div className="space-y-3">
                    <Label>Degree</Label>
                    <Input placeholder="MBBS" />
                </div>
                <div className="space-y-3">
                    <Label>Degree</Label>
                    <Input placeholder="MBBS" />
                </div>
                <Button>Save</Button>
            </form>
        </div>
    );
}

export default DoctorForm;

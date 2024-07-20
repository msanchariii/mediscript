import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
    CalendarIcon,
    GroupIcon,
    MailIcon,
    PhoneIcon,
    UserIcon,
} from "lucide-react";

const PatientDetailsCard = () => {
    return (
        <Card className="overflow-hidden w-full">
            <CardHeader className="bg-muted/50 p-4">
                <div className="grid gap-1">
                    <CardTitle className="text-2xl text-primary font-medium">
                        Sanchari Mandal
                    </CardTitle>
                    <div className="flex items-center gap-2 text-base text-muted-foreground">
                        <CalendarIcon className="h-4 w-4" />
                        <p>
                            <span className="">38 years </span>
                            (June 15, 1985)
                        </p>
                    </div>
                    <div className="flex items-center gap-2 text-base text-muted-foreground">
                        <GroupIcon className="h-4 w-4" />
                        <span>Female</span>
                    </div>
                    <div className="flex items-center gap-2 text-base text-muted-foreground">
                        <UserIcon className="h-4 w-4" />
                        <span>65 KGs</span>
                    </div>
                </div>
                <div className="ml-auto flex items-center gap-2"></div>
            </CardHeader>
            <CardContent className="p-4 text-sm">
                <div className="grid gap-4">
                    <div className="grid gird-cols-1 md:grid-cols-2 gap-4">
                        {/* Contact Info */}
                        <div className="space-y-2">
                            <div className="text-primary text-lg font-bold">
                                Contact Information
                            </div>
                            <div className="text-muted-foreground">
                                <div className="text-base">
                                    <PhoneIcon className="mr-2 inline h-4 w-4" />
                                    <span className="">+91 9903668823</span>
                                </div>
                                <div className="text-base">
                                    <MailIcon className="mr-2 inline h-4 w-4" />
                                    <span className="">
                                        patient@example.com
                                    </span>
                                </div>
                                <div className="text-base">
                                    <MailIcon className="mr-2 inline h-4 w-4" />
                                    <span className="">
                                        patient-gurdian@example.com
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* Address */}
                        <div className="space-y-2">
                            <div className="text-primary font-bold text-lg">
                                Address
                            </div>
                            <div className="text-muted-foreground text-md">
                                <address className="not-italic">
                                    123 Main St.
                                    <br />
                                    Anytown, CA 12345
                                </address>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default PatientDetailsCard;

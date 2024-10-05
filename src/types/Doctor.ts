export interface Doctor {
    id: number; // Also a foreign key to User
    name: string;
    dob: string; // Date as ISO string
    address: string;
    appoint_loc: any; // JSON, could also define a more specific type if needed
    reg_no: string;
    gender: "male" | "female" | "trancegender";
    phone_no: number;
    created_at: string; // Timestamp as ISO string
    updated_at: string; // Timestamp as ISO string
}

export interface Helper {
    id: number; // Also a foreign key to User
    name: string;
    doctor_id: number; // Foreign key to Doctor
    phone_no: number;
    address: string;
    dob: string; // Date as ISO string
    gender: "male" | "female" | "trancegender";
    created_at: string; // Timestamp as ISO string
    updated_at: string; // Timestamp as ISO string
}

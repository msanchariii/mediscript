export interface Patient {
    id: number;
    name: string;
    dob: string; // Date as ISO string
    address?: string; // Optional since it may be null
    gender: "male" | "female" | "trancegender";
    phone_no?: number; // Optional since it may be null
    email?: string; // Optional since it may be null
    created_at: string; // Timestamp as ISO string
    updated_at: string; // Timestamp as ISO string
}

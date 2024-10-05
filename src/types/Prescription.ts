export interface Prescription {
    id: number;
    app_id: number; // Foreign key to Appointment
    status: "upcoming" | "cancelled" | "ended";
    concern?: string; // Optional since it might be null
    diagnosis_Summery?: string; // Optional since it might be null
    created_at: string; // Timestamp as ISO string
    updated_at: string; // Timestamp as ISO string
}

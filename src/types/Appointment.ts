export interface Appointment {
    id: number;
    date: string; // Datetime as ISO string
    doc_id: number; // Foreign key to Doctor
    patient_id: number; // Foreign key to Patient
    appoint_loc: string;
    Pres_id?: number; // Optional foreign key to Prescription
    status: "upcoming" | "cancelled" | "ended";
    Concern?: string; // Optional since it might be null
    diagnosis_Summery?: string; // Optional since it might be null
    created_at?: string; // Timestamp as ISO string
    updated_at?: string; // Timestamp as ISO string
}

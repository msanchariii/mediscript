export interface User {
    id: number;
    email: string;
    password: string;
    role: "doctor" | "helper";
    refresh_token?: string; // Optional since it might not always be present
    created_at: string; // Timestamp as ISO string
    updated_at: string; // Timestamp as ISO string
}

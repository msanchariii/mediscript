import PrescriptionForm from "@/components/Forms/PrescriptionForm";

export default function Page({ params }: { params: { id: number | string } }) {
    const appointment = {
        id: 1,
        location: "Apollo Hospital",
        date: "2022-01-01",
        patient: {
            name: "John Doe",
            age: 25,
            gender: "male",
        },
    };
    return (
        <div className="p-12">
            {/* Appointment ID: {params.id} */}
            <div>
                {/* <h1>New Prescription</h1> */}
                <PrescriptionForm appointment={appointment} />
            </div>
        </div>
    );
}

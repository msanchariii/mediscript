export default function Page({ params }: { params: { id: number | string } }) {
    return <div>Appointment ID: {params.id}</div>;
}

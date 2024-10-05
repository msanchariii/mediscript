export function formatDateString(dateString: string): string {
    if (dateString.length !== 10) {
        throw new Error("Invalid date format. Expected DDMMYYYY.");
    }

    const day = dateString.slice(0, 2);
    const month = dateString.slice(3, 5);
    const year = dateString.slice(6, 10);

    // Return the formatted string in YYYY-MM-DD format
    return `${year}-${month}-${day}`;
}

export function reverseDateString(dateString: string): string {
    // Check if the input string is 10 characters long (YYYY-MM-DD)
    if (
        dateString.length !== 10 ||
        dateString[4] !== "-" ||
        dateString[7] !== "-"
    ) {
        throw new Error("Invalid date format. Expected YYYY-MM-DD.");
    }

    const year = dateString.slice(0, 4);
    const month = dateString.slice(5, 7);
    const day = dateString.slice(8, 10);

    // Return the formatted string in DDMMYYYY format
    return `${day}${month}${year}`;
}

export const formatDateToDDMMYYYY = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
};

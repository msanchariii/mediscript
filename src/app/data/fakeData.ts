const prescription = {
    vitals: {
        bloodPressure: "60/105 mmHg",
        bloodSugar: "160mg/dl",
        pulseRate: "78BPM",
        temp: "33 deg C",
        spO2: "99%",
    },
    patientDetails: {
        name: "Subha Lomdi",
        gender: "F",
        age: "69",
        date: "11.11.2024",
    },
    purpose:
        "Porasonai mon boschena, mon kharap kharap krche, 4 br  bathroon a gcchi apatoto.",

    symptoms: [
        "High Fever",
        "cough",
        "gay gay habvab",
        "Prerna",
        "Rumal dia dhaka takanon",
        "lab  kora",
    ],

    medicines: [
        {
            drug: "Cocaine Advanced Tablet",
            drugInfo: "Paracetamol(500 mg)",
            instruction: " 1 tablet 0 - 1 tablet for 5 days",
            remarks: "Take on full stomach",
        },
        {
            drug: "Augmentin 625 Duo Tablet",
            drugInfo: " Amoxylilin (500 mg) + Calvulanic Acid (125 mg)",
            instruction: " 1 tablet 0-1 tablet for 5 days",
            remarks: "Take on empty stomach",
        },
    ],

    investigation: [
        {
            test: "Covid RT-PCR Test",
        },
        {
            test: "CBC, LFT, RFT, Urine Routine & Microscopy",
            components:
                "Complete Blood Counts, Liver Function Tests, Renal Function Tests, Urine Routine & Microscopy",
        },
        {
            test: "Gay Naki Confirm Ho",
        },
    ],

    advice: "Besi vlo kore mentor der kotha suna meye dakhbi.",
    nextVisitDate: new Date("December 17, 1995 03:24:00"),

    otDate: new Date("December 17, 1995 03:24:00"),
};

const doctor = {
    name: "Dr. Subha Lomdi",
    degree: "MBBS, MD (Medicine)",
    address: "HONULULU HOSPITAL, Address Exist Korena, Bangalore, PIN - 700056",
    phone: "+91 9903668823",
    regNo: "123456",
    contact: "1234567890",
    email: "lomdasubha@gmail.com",
};

export { prescription, doctor };

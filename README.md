Enum gender {
male
female
Trancegender
}

Enum status {
upcoming
ongoing
ended
}

Enum Role{
doctor
helper
}

Table User{
id integer [primary key]
email_id varchar
password varchar
role Role
}

Table Helper{
id integer [primary key]
name varchar
doctor_id varchar
phone_no integer
address varchar
dob datetime
gender gender
created_at timestamp
}

Table Doctor {
id integer [primary key]
Name varchar
dob date
address varchar
Reg_no varchar
gender gender
phone_no integer
created_at timestamp
}

Table Patient {
id integer [primary key]
Name varchar
babar_naam varchar
dob date
address varchar
gender gender
phone_no integer
email_id varchar
created_at timestamp
}

Table Appointment {
id integer [primary key]
date datetime
doc_id integer
patient_id integer
Pres_id integer
status status
Concern varchar
Diagnosis_Summery varchar
created_at timestamp
}
Table Prescription {
id integer [primary key]
app_id integer
Concern varchar
Diagnosis_Summery varchar
created_at timestamp
}

Ref: Doctor.id < Appointment.doc_id
Ref: Patient.id < Appointment.patient_id
Ref: Prescription.app_id - Appointment.id
Ref: Prescription.id - Appointment.Pres_id

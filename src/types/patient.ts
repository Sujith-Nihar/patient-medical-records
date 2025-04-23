
export interface Patient {
  id: string;
  name: string;
  photoUrl: string;
  profileLink: string;
  reports: PatientReport[];
}

export interface PatientReport {
  id: string;
  name: string;
  fileUrl: string;
  date: string; 
}

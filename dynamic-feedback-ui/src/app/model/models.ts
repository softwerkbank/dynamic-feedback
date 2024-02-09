export interface TeamMember {
  id: number,
  firstName: string,
  lastName: string,
  jobTitle: string,
  jobLevel: JobLevel
}

export enum JobLevel {
  JUNIOR = "Junior",
  PROFESSIONAL = "Professional",
  SENIOR = "Senior"
}

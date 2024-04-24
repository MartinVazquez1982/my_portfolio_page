export interface ResumeData{
    education: Resume[],
    experience: Resume[]
}

export interface Resume{
    date: String,
    title: String,
    institure: String,
    description: String
}
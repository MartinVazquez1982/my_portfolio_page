
// Resume Interfaces
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

// Skills Interfaces

export interface SkillsData{
    technical: TechnicalSkill[],
    softs: String[]
}

export interface TechnicalSkill{
    img: String,
    title: String
}


// Project Interfaces

export interface ProjectList{
    academy: Project[],
    others: Project[]
}

export interface Project{
    img: String,
    title: String,
    links: Link[]
}

export interface Link{
    logo: String,
    link: String,
    name: String
}
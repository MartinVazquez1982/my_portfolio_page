import { IconKey } from "./enums"

// Resume Interfaces
export interface ResumeData{
	education: Resume[],
	experience: Resume[],
	certifications: Certification[]
}

export interface Resume{
	date: String,
	title: String,
	institure: String,
	description: String
}

export interface Certification{
	img: String,
	title: String,
	link: String
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

export interface ProjectInformation{
	professional: Project[],
	personal: Project[],
	academy: Project[]
}

export interface Project{
	title: String,
	type: String,
	summary: String,
	experience?: ExperienceItem,
	tools: String[],
	links?: Link[]
}

export interface ExperienceItem {
  organization: string;  
  title: string;        
  period: string;       
}

export interface Link{
  logo: IconKey,
  link: String,
  name: String
}
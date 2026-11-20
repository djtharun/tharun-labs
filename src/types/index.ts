export interface ProjectArchitecture {
  summary: string;
  flowSteps: {
    step: string;
    label: string;
    desc: string;
  }[];
  keyDecisions: string[];
  specs: {
    label: string;
    value: string;
  }[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  highlights: string[];
  architecture: ProjectArchitecture;
  githubUrl: string;
  liveUrl?: string;
  status: string;
  metricLabel?: string;
}

export interface SkillGroup {
  category: string;
  code: string;
  description: string;
  skills: string[];
}

export interface ExplorationTopic {
  title: string;
  tag: string;
  description: string;
  focus: string;
}

export interface ProfileData {
  name: string;
  spec: string;
  location: string;
  availability: string;
  tagline: string;
  supportingDescription: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  aboutParagraphs: string[];
  explorations: ExplorationTopic[];
  systemSpecs: {
    nodeEnv: string;
    labRef: string;
    timezone: string;
    deployTarget: string;
  };
}

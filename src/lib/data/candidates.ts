export interface Candidate {
  id: string;
  name: string;
  position: string;
  status: string;
  score: number | null;
  avatar: string;
  skills?: {
    technical: number;
    communication: number;
    problemSolving: number;
    teamwork: number;
  };
}

export const candidates: Candidate[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    position: 'Senior Frontend Developer',
    status: 'Evaluated',
    score: 85,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    skills: {
      technical: 88,
      communication: 82,
      problemSolving: 90,
      teamwork: 85,
    },
  },
  {
    id: '2',
    name: 'Michael Chen',
    position: 'Backend Engineer',
    status: 'In Progress',
    score: 78,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    skills: {
      technical: 85,
      communication: 78,
      problemSolving: 88,
      teamwork: 82,
    },
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    position: 'Product Designer',
    status: 'Scheduled',
    score: null,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    skills: {
      technical: 80,
      communication: 92,
      problemSolving: 85,
      teamwork: 88,
    },
  },
];
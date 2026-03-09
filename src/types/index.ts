export interface UserStory {
  id: string;
  title: string;
  description: string;
  acceptanceCriteria: string[];
  epicId: string;
  epicName: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  status: 'draft' | 'ready' | 'in_progress' | 'done';
  storyPoints: number;
  createdAt: string;
  updatedAt: string;
}

export interface Epic {
  id: string;
  name: string;
  description: string;
  storyCount: number;
  completedStories: number;
  totalPoints: number;
  status: 'active' | 'completed' | 'archived';
  createdAt: string;
}

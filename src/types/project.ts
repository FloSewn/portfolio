export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  notebookPath?: string;
  githubUrl?: string;
}
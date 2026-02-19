export interface Topic {
  id: string;
  title: string;
  description: string;
}

export interface Module {
  id: number;
  title: string;
  description: string;
  level: string;
  topics: Topic[];
}

export interface ContentBlock {
  type: 'text' | 'code' | 'heading' | 'list' | 'note';
  content: string;
  items?: string[];
  title?: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface Breakpoints {
  tablet: string;
  desktop: string;
  wide: string;
  ultraWide: string;
}

export interface ChatCompletionChoice {
  message: {
    role: string;
    content: string;
  };
  finish_reason: string;
  index: number;
}

export interface CoachesAnawer {
  answer: string;
  trickName: string;
  type: string;
  difficulty: string;
}

export interface ConversationItem {
  answer: CoachesAnawer;
  question: string;
}

export interface ChatCompletion {
  id: string;
  object: string;
  created: number;
  model: string;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  choices: ChatCompletionChoice[];
}

export interface FirestoreRecord {
  question: string;
  answer: string;

}
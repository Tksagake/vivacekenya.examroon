export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'lecturer';
}

export interface Exam {
  id: string;
  title: string;
  duration: number;
  date: string;
  availableSlots: number;
  musicNotation: boolean;
  essayQuestions: boolean;
}

export interface ExamBooking {
  id: string;
  examId: string;
  studentId: string;
  slot: string;
  status: 'pending' | 'confirmed' | 'completed';
}

export interface ExamSubmission {
  id: string;
  examId: string;
  studentId: string;
  musicNotation: string;
  essayAnswers: Record<string, string>;
  submittedAt: string;
}
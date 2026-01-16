export interface Issue {
  id: string;
  title: string;
  location: string;
  priority: Priority;
  status: Status;
  created_at: string;
}

export enum Priority {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
}

export enum Status {
  OPEN = "OPEN",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}

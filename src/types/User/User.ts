import { BoardEvent } from "../BoardEvent/BoardEvent";

export enum EventSource {
  SocialMedia = "Social media",
  Friends = "Friends",
  FoundMyself = "Found myself",
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  dateOfBirth: string;
  events: {
    event: BoardEvent;
    eventSource: EventSource;
  }[];
}

import { BoardEvent } from "../BoardEvent/BoardEvent";

export type EventSource = "Social media" | "Friends" | "Found myself";

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

export interface RegisterUserRequest {
  eventId: string;
  userData: Pick<User, "fullName" | "email" | "dateOfBirth"> & {
    eventSource: EventSource;
  };
}

export  interface EventParticipant extends Pick<User, "id" | "fullName" | "email"> {}

export interface GetParticipantsResponse extends Array<EventParticipant> {}

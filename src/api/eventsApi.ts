import api from "./api";
import {
  GetBoardEventResponse,
  GetBoardEventsResponse,
  GetParticipantsResponse,
  RegisterUserRequest,
} from "@/types";

async function fetchEvent(eventId: string) {
  return api.get<GetBoardEventResponse>(`/events/${eventId}`);
}

async function fetchEvents(page: number) {
  return api.get<GetBoardEventsResponse>(`/events?page=${page}&limit=12`);
}

async function registerUser({ userData, eventId }: RegisterUserRequest) {
  return api.post(`/events/${eventId}/register`, userData);
}

async function fetchParticipants(eventId: string) {
  return api.get<GetParticipantsResponse>(`/events/${eventId}/participants`);
}

export default {
  fetchEvent,
  fetchEvents,
  registerUser,
  fetchParticipants,
};

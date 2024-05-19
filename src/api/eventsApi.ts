import { GetBoardEventsResponse, RegisterUserRequest } from "@/types";
import api from "./api";

async function fetchEvents(page: number) {
  return api.get<GetBoardEventsResponse>(`/events?page=${page}&limit=12`);
}

async function registerUser({ userData, eventId }: RegisterUserRequest) {
  return api.post(`/events/${eventId}/register`, userData);
}

export default {
  fetchEvents,
  registerUser,
};

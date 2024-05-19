import { GetBoardEventsResponse } from "@/types";
import api from "../api";

async function fetchEvents(page: number) {
  return api.get<GetBoardEventsResponse>(`/events?page=${page}&limit=12`);
}

export default {
  fetchEvents,
};

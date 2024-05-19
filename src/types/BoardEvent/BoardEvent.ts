export interface BoardEvent {
  id: string;
  title: string;
  description: string;
  eventDate: string;
  organizer: string;
}

export interface GetBoardEventsResponse {
  events: BoardEvent[];
  currentPage: number;
  totalPages: number;
}

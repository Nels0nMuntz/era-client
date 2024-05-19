import { BoardCard } from "@/components/board/BoardCard/BoardCard";
import { List } from "@/components/common/List/List";
import { BoardEvent } from "@/types";

const events: BoardEvent[] = [
  {
    id: "1",
    title: "Title",
    description: "description",
    eventDate: "",
    organizer: "",
  },
  {
    id: "2",
    title: "Title",
    description: "description",
    eventDate: "",
    organizer: "",
  },
  {
    id: "3",
    title: "Title",
    description: "description",
    eventDate: "",
    organizer: "",
  },
  {
    id: "4",
    title: "Title",
    description: "description",
    eventDate: "",
    organizer: "",
  },
  {
    id: "5",
    title: "Title",
    description: "description",
    eventDate: "",
    organizer: "",
  },
  {
    id: "6",
    title: "Title",
    description: "description",
    eventDate: "",
    organizer: "",
  },
];

interface Props {
  data: BoardEvent[];
}

export function BoardList({data}: Props) {
  return (
    <div className='flex-grow'>
      <List>
        {data.map((item, index) => (
          <BoardCard {...item} key={index} />
        ))}
      </List>
    </div>
  );
}

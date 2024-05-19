import { BoardCard } from "@/components/board/BoardCard/BoardCard";
import { List } from "@/components/common/List/List";
import { BoardEvent } from "@/types";

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

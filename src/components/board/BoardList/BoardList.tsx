import { BoardCard } from "@/components/board/BoardCard/BoardCard";
import { List } from "@/components/common/List/List";
import { BoardEvent } from "@/types";

interface Props {
  data: BoardEvent[];
  refer?: (element: any) => void;
}

export function BoardList({ data, refer }: Props) {
  return (
    <div className='flex-grow'>
      <List>
        {data.map((item, index) => {
          const isLast = index === data.length - 1;
          if (isLast) {
            return <BoardCard {...item} key={index} ref={refer} />;
          }
          return <BoardCard {...item} key={index} />;
        })}
      </List>
    </div>
  );
}

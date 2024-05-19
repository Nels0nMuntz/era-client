import { List } from "../../common/List/List";
import { EventParticipant } from "@/types";
import { ParticipantCard } from "../ParticipantCard/ParticipantCard";

interface Props {
  data: EventParticipant[];
}

export function ParticipantsList({data}: Props) {
  return (
    <List>
      {data.map((item) => (
        <ParticipantCard data={item} key={item.id} />
      ))}
    </List>
  );
}

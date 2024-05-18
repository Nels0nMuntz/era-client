import { List } from "@/components/common/List/List";
import { User } from "@/types";
import { ParticipantCard } from "../ParticipantCard/ParticipantCard";

const participants: User[] = [
  {
    id: "1",
    fullName: "Name",
    email: "email",
    dateOfBirth: "2024-04-30T21:00:00.000Z",
    events: [],
  },
  {
    id: "2",
    fullName: "Name",
    email: "email",
    dateOfBirth: "2024-04-30T21:00:00.000Z",
    events: [],
  },
  {
    id: "3",
    fullName: "Name",
    email: "email",
    dateOfBirth: "2024-04-30T21:00:00.000Z",
    events: [],
  },
];

export function ParticipantsList() {
  return (
    <List>
      {participants.map(({ id, fullName, email }) => (
        <ParticipantCard fullName={fullName} email={email} key={id} />
      ))}
    </List>
  );
}

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EventParticipant } from "@/types";

interface Props {
  data: EventParticipant
}

export function ParticipantCard({ data }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{data.fullName}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{data.email}</CardDescription>
      </CardContent>
    </Card>
  );
}

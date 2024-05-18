import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User } from "@/types";

interface Props extends Pick<User, "fullName" | "email"> {}

export function ParticipantCard({ fullName, email }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{fullName}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{email}</CardDescription>
      </CardContent>
    </Card>
  );
}

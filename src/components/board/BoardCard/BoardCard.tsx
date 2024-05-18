import { Link, generatePath } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { APP_PATHS } from "@/router";
import { BoardEvent } from "@/types";

interface Props extends Pick<BoardEvent, "id" | "title" | "description"> {}

export function BoardCard({ id, title, description }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className='flex w-full justify-between gap-x-2'>
        <Link to={generatePath(APP_PATHS.registration.path, { id })} className={buttonVariants({ variant: "secondary" })}>
          Register
        </Link>
        <Link to={generatePath(APP_PATHS.participants.path, { id })} className={buttonVariants({ variant: "secondary" })}>
          View
        </Link>
      </CardFooter>
    </Card>
  );
}

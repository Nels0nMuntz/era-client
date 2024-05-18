import { Layout, Typography } from "@/components";
import { ParticipantsList } from "@/components/participants/ParticipantsList/ParticipantsList";

export function Participants() {
  return (
    <Layout>
      <div className='flex flex-col gap-y-8 py-8'>
        <Typography element='h1' type='heading_2'>
          "Some Event" participants
        </Typography>
        <ParticipantsList />
      </div>
    </Layout>
  );
}

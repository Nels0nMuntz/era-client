import { useQueries, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Layout, Typography } from "@/components";
import { ParticipantsList } from "@/components/participants/ParticipantsList/ParticipantsList";
import { eventsApi } from "@/api";

export function Participants() {
  const { id: eventId } = useParams();
  const [participantQuery, eventQuery] = useQueries([
    {
      queryKey: ["event_participants", eventId],
      queryFn: () => eventsApi.fetchParticipants(eventId),
    },
    {
      queryKey: ["event_info", eventId],
      queryFn: () => eventsApi.fetchEvent(eventId),
    },
  ]);
  const {
    data: participantsData,
    isError: isErrorParticipants,
    isLoading: isLoadingParticipants,
  } = participantQuery;
  const { data: eventData, isError: isErrorEvent, isLoading: isLoadingEvent } = eventQuery;

  const isLoading = isLoadingParticipants || isLoadingEvent || !participantsData || !eventData;
  const isError = isErrorParticipants || isErrorEvent;
  const data = participantsData || [];
  const eventName = eventData?.event.title || "";

  return (
    <Layout isLoading={isLoading} isError={isError}>
      <div className='flex flex-col gap-y-8 py-8'>
        <Typography element='h1' type='heading_2'>
          {eventName} participants
        </Typography>
        <ParticipantsList data={data} />
      </div>
    </Layout>
  );
}

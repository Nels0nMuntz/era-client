import { useCallback, useEffect, useState } from "react";
import { useQueries, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import debounce from "lodash.debounce";
import { Layout, Searchbar, Typography } from "@/components";
import { ParticipantsList } from "@/components/participants/ParticipantsList/ParticipantsList";
import { eventsApi } from "@/api";
import { GetParticipantsResponse } from "@/types";

export function Participants() {
  const { id: eventId } = useParams();
  const [participants, setParticipants] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [participantQuery, eventQuery] = useQueries({
    queries: [
      {
        queryKey: ["event_participants", eventId],
        queryFn: () => eventsApi.fetchParticipants(eventId),
        refetchOnWindowFocus: false,
      },
      {
        queryKey: ["event_info", eventId],
        queryFn: () => eventsApi.fetchEvent(eventId),
      },
    ]
  });
  const {
    data: participantsData,
    isError: isErrorParticipants,
    isLoading: isLoadingParticipants,
  } = participantQuery;
  const { data: eventData, isError: isErrorEvent, isLoading: isLoadingEvent } = eventQuery;

  const { data: searchData, refetch } = useQuery({
    queryFn: () => {
      if (!searchValue) return participantsData;
      return eventsApi.fetchParticipants(eventId, searchValue);
    },
    queryKey: ["search"],
    enabled: false,
  });

  useEffect(() => {
    if(participantsData) {
      setParticipants(participantsData)
    }
  }, [participantsData])
  useEffect(() => {
    if(searchData) {
      setParticipants(searchData)
    }
  }, [searchData])

  const isLoading = isLoadingParticipants || isLoadingEvent || !eventData;
  const isError = isErrorParticipants || isErrorEvent;
  const eventName = eventData?.event.title || "";

  const request = debounce(async () => {
    refetch();
  }, 400);
  const debounceRequest = useCallback(() => {
    request();
  }, []);
  const onSearchValueChange = (value: string) => {
    setSearchValue(value);
    debounceRequest();
  };

  return (
    <Layout isLoading={isLoading} isError={isError}>
      <div className='flex flex-col gap-y-8 py-8'>
        <Typography element='h1' type='heading_2'>
          {eventName} participants
        </Typography>
        <Searchbar value={searchValue} onChange={onSearchValueChange} />
        <ParticipantsList data={participants} />
      </div>
    </Layout>
  );
}

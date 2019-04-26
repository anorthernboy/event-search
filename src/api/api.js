import axios from "axios";
import { skiddleAPI } from "./config";
const request = axios.create({
  baseURL: "https://www.skiddle.com/api/v1"
});

export const getEventsByKeyword = async keywords => {
  const events = await request.get(
    `/events/search/?api_key=${skiddleAPI}&keyword=${keywords}`
  );
  return events;
};

export const getEventById = async event_id => {
  const event = await request.get(`/events/${event_id}/?api_key=${skiddleAPI}`);
  return event;
};

export const getArtistById = async artist_id => {
  const artist = await request.get(
    `/artist/${artist_id}?api_key=${skiddleAPI}`
  );
  return artist;
};

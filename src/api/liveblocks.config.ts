import { createClient, LiveObject } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
  publicApiKey: import.meta.env.VITE_LIVE_BLOCKS_PUBLIC_KEY,
});

type Storage = {
  scientist: LiveObject<{ firstName: string; lastName: string }>;
};

type Presence = {
  cursor: { x: number; y: number } | null;
};

export const { RoomProvider } = createRoomContext<Presence, Storage>(client);

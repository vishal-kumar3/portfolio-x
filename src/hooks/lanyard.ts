import { useLanyard } from "react-use-lanyard";

export function useDiscord() {
  const userId = process.env.NEXT_PUBLIC_DISCORD_ID || '';
  const result = useLanyard({
    userId,
    socket: true,
  });
  return userId ? result : { status: null };
}

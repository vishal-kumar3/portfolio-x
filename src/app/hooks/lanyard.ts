import { useLanyard } from "react-use-lanyard";

export function useDiscord() {
  const userId = process.env.NEXT_PUBLIC_DISCORD_ID;
  if(!userId) return {status: null};
  const result = useLanyard({
    userId,
    socket: true,
  });

  console.log("result:- ", result.status);

  return {
    ...result,
  };
}

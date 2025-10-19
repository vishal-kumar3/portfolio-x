import { getUserIdStorage } from "@/utils/localstorage";

export function streamChat({
  query,
  onConnection,
  onMessage,
  onError,
  onDone,
}: {
  query: string;
  onConnection: () => void
  onMessage: (msg: { type: string, content: string, userId: string }) => void;
  onError?: (err: any) => void;
  onDone?: () => void;
}) {
  const url = new URL("http://localhost:8000/query");
  url.searchParams.set("query", query);
  const userId = getUserIdStorage()
  if (userId?.length) url.searchParams.set("userId", userId);

  let eventSource: EventSource;

  try {
    eventSource = new EventSource(url.toString());
  } catch (error) {
    onError?.(error);
    return () => {};
  }

  eventSource.onopen = () => {
    onConnection()
  }

  eventSource.onmessage = (event) => {
    const data = JSON.parse(event.data)
    if (data.type === "done") {
      onDone?.();
      eventSource.close();
      return;
    }
    onMessage(data);
  };

  let hasError = false;

  eventSource.onerror = (err) => {
    if (hasError || eventSource.readyState === 2) {
      eventSource.close();
      return;
    }

    if (eventSource.readyState !== 2) {
      hasError = true;
      onError?.(err);
      eventSource.close();
    }
  };

  return () => {
    eventSource.close();
  };
}

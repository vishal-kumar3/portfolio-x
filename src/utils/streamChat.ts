

export function streamChat({
  query,
  userId,
  onConnection,
  onMessage,
  onError,
  onDone,
}: {
  query: string;
  userId: string;
  onConnection: () => void
  onMessage: (msg: { type: string, content: string, userId: string }) => void;
  onError?: (err: Error | unknown) => void;
  onDone?: () => void;
}) {
  const url = new URL(`${process.env.NEXT_PUBLIC_BACKEND_URL}/query`);
  url.searchParams.set("query", query);
  if (userId?.length) url.searchParams.set("userId", userId);

  let eventSource: EventSource;

  try {
    eventSource = new EventSource(url.toString());
  } catch (error) {
    onError?.(error);
    return () => { };
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

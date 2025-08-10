// src/utils/cookies.ts

import { cookies, type UnsafeUnwrappedCookies } from 'next/headers'; // Next.js has built-in utilities for cookies

export function getDistinctId() {
  const cookieStore = (cookies() as unknown as UnsafeUnwrappedCookies);
  let distinctId = cookieStore.get('distinctId')?.value;

  if (!distinctId) {
    distinctId = crypto.randomUUID(); // Generate unique ID
    cookieStore.set('distinctId', distinctId, {
      httpOnly: false, // Optional: Set this to true if you want browser access too
      maxAge: 60 * 60 * 24 * 365, // Expire in one year
      path: '/',
    });
  }

  return distinctId;
}

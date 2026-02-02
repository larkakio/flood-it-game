import { NextResponse } from 'next/server';

/**
 * Farcaster Mini App webhook endpoint.
 * Receives events when users add/remove the app or change notification settings.
 * Returns 200 OK to acknowledge; this app does not use push notifications.
 */
export async function POST() {
  return NextResponse.json({ ok: true }, { status: 200 });
}

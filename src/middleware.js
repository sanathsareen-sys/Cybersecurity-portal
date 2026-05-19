import { NextResponse } from 'next/server';

export function middleware(request) {
  // Redirect HTTP to HTTPS in production environments
  try {
    const proto = request.headers.get('x-forwarded-proto') || request.nextUrl.protocol.replace(':', '');
    if (process.env.NODE_ENV === 'production' && proto && proto.toLowerCase() === 'http') {
      const url = request.nextUrl.clone();
      url.protocol = 'https';
      return NextResponse.redirect(url);
    }
  } catch (e) {
    // ignore and continue
  }

  return NextResponse.next();
}

export const config = { matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'] };

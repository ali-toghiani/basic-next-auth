import { matchesMiddleware } from 'next/dist/shared/lib/router/router';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const user = request.cookies.get('user')?.value;

  if (request.nextUrl.pathname === '/' ){
    return NextResponse.redirect(new URL('/auth', request.url));
  }

  if (request.nextUrl.pathname === '/dashboard' && !user) {
    return NextResponse.redirect(new URL('/auth', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/dashboard'],
}

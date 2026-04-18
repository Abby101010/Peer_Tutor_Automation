// Auth.js (NextAuth) configuration placeholder.
// Add OAuth providers (e.g. Google, GitHub) here when ready.
import NextAuth from 'next-auth';

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [],
});

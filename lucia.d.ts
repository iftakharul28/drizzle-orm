// lucia.d.ts
/// <reference types="lucia-auth" />
declare namespace Lucia {
  type Auth = import("@/server/auth").Auth;
  type UserAttributes = {
    name: string;
    email: string;
    role: string;
  };
}
s;

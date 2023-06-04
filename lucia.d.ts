// lucia.d.ts
/// <reference types="lucia-auth" />
declare namespace Lucia {
  type Auth = import("$lib/server/lucia.js").Auth;
  type UserAttributes = {
    name: string;
    email: string;
    password: string;
    role: string;
  };
}
s;

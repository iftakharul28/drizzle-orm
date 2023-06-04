// lucia.d.ts
/// <reference types="lucia-auth" />
declare namespace Lucia {
  type Auth = import("@/server").Auth;
  type UserAttributes = {
    name: string;
    email: string;
    role: string;
  };
}
s;

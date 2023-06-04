import { InferModel } from "drizzle-orm";
import { keySchema, sessionSchema, userSchema } from "./user.schema";
import { productSchema } from "./product.schema";
import { mediaSchema } from "./media.schema";

export const user = userSchema;
export const session = sessionSchema;
export const key = keySchema;
export const product = productSchema;
export const media = mediaSchema;
export type User = InferModel<typeof user>; // return type when queried
export type NewUser = InferModel<typeof user, "insert">;

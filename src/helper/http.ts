import baseUrl from "./baseUrl";

export const Get = async (path: string) => {
  const response = await fetch(`${baseUrl()}/api/${path}`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
    next: { revalidate: 60 },
  });
  return response;
};
export const Post = async (path: string, body?: BodyInit | null) => {
  const response = await fetch(`${baseUrl()}/api/${path}`, {
    method: "POST",
    headers: {
      Accept: "application.json",
      "Content-Type": "application/json",
      //   Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
    body: body,
  });
  return response;
};
const Http = {
  Post,
  Get,
};

export default Http;

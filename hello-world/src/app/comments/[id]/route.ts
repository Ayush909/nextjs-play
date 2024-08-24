import { redirect } from "next/navigation";
import { comments } from "../data";

export async function GET(
  _request: Request,
  {
    params,
  }: {
    params: { id: string };
  }
) {
  // redirect to /comments if ID is not present in the comments array
  // assuming the IDs are in squential order for simplicity
  if (parseInt(params.id) > comments.length) {
    redirect("/comments");
  }
  const comment = comments.find((c) => c.id === parseInt(params.id));

  return Response.json(comment);
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const { text } = body;
  const index = comments.findIndex((c) => c.id === parseInt(params.id));
  comments[index].text = text;
  return Response.json(comments[index]);
}

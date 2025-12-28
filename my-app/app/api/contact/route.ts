import clientPromise from "../../lib/mongoose";

export async function POST(req: Request) {
  const client = await clientPromise;
  const db = client.db("portfolio");

  const {name , email , phoneNumber , message} = await req.json();

  const 
  return Response.json({ success: true });
}

import { Contact } from "@/modals/contact";
import { mongooseConnection } from "@/lib/moongose";

export default async function handle(req: any, res: any) {
  const { method } = req;
  await mongooseConnection();

  if (method === "GET") {
    res.json(await Contact.find());
  }

  if (method === "POST") {
    const { name, email, message } = req.body;
    const date = new Date();
    const contactDoc = await Contact.create({
      name,
      email,
      message,
      date: date,
    });
    res.json(contactDoc);
  }
}

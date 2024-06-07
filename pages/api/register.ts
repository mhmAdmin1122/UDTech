// import { Register } from "@/modals/register";
// import { mongooseConnection } from "@/lib/moongose";
// import bcrypt from "bcrypt";

// export default async function handle(req: any, res: any) {
//   const { method } = req;
//   await mongooseConnection();

//   if (method === "GET") {
//     res.json(await Register.find());
//   }

//   if (method === "POST") {
//     const { name, lastname, email, username, password } = req.body;
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);
//     const date = new Date();
//     const contactDoc = await Register.create({
//       name,
//       lastname,
//       email,
//       username,
//       password: hashedPassword,
//       date: date,
//     });
//     res.json(contactDoc);
//   }
// }


import { Register } from "@/modals/register";
import { mongooseConnection } from "@/lib/moongose";
import bcrypt from "bcrypt";

export default async function handle(req: any, res: any) {
  const { method } = req;
  await mongooseConnection();

  if (method === "GET") {
    res.json(await Register.find());
  }

  if (method === "POST") {
    const { name, lastname, email, username, password, userType} = req.body;

    // Check if the username already exists
    const existingUser = await Register.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "username not available" });
    }

    // Check if the email already exists
    const existingEmail = await Register.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ error: "email already registered" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const date = new Date();
    const contactDoc = await Register.create({
      name,
      lastname,
      email,
      username,
      userType,
      password: hashedPassword,
      date: date,
    });
    res.json(contactDoc);
  }
}

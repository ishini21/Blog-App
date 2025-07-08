import { ConnectDB } from "@/lib/config/db";
import UserModel from "@/lib/models/UserModel";

export async function POST(req) {
  const { name, email, password, role } = await req.json();
  await ConnectDB();

  const exists = await UserModel.findOne({ email });
  if (exists) {
    return new Response(JSON.stringify({ message: 'User already exists' }), { status: 400 });
  }

  const user = new UserModel({ name, email, password, role });
  await user.save();

  return new Response(JSON.stringify({ id: user._id, name: user.name, role: user.role }), { status: 201 });
}



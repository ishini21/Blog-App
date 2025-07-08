// app/api/auth/signup/route.js
import { connectDB } from '@/lib/db';
import User from '@/models/User';

export async function POST(req) {
  const { name, email, password, role } = await req.json();
  await connectDB();

  const exists = await User.findOne({ email });
  if (exists) {
    return new Response(JSON.stringify({ message: 'User already exists' }), { status: 400 });
  }

  const user = new User({ name, email, password, role });
  await user.save();

  return new Response(JSON.stringify({ id: user._id, name: user.name, role: user.role }), { status: 201 });
}



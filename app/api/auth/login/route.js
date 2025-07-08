
import { connectDB } from '@/lib/db';
import User from '@/models/User';

export async function POST(req) {
  const { email, password } = await req.json();
  await connectDB();

  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    return new Response(JSON.stringify({ message: 'Invalid credentials' }), { status: 401 });
  }

  return new Response(JSON.stringify({ id: user._id, name: user.name, role: user.role }), { status: 200 });
}

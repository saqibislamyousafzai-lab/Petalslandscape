// import { connectDB } from "@/lib/mongodb";
// import User from "@/models/User";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     const { email, password } = await req.json();

//     await connectDB();

//     const user = await User.findOne({ email });
//     if (!user) {
//       return NextResponse.json(
//         { message: "Invalid credentials" },
//         { status: 400 }
//       );
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return NextResponse.json(
//         { message: "Invalid credentials" },
//         { status: 400 }
//       );
//     }

//     const token = jwt.sign(
//       { id: user._id },
//       process.env.JWT_SECRET as string,
//       { expiresIn: "1d" }
//     );

//     return NextResponse.json({ token }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Server error" },
//       { status: 500 }
//     );
//   }
// }
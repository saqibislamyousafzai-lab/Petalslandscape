// import { connectDB } from "@/lib/mongodb";
// import User from "@/models/User";
// import bcrypt from "bcryptjs";
// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     const { name, email, password } = await req.json();

//     await connectDB();

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return NextResponse.json(
//         { message: "User already exists" },
//         { status: 400 }
//       );
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     await User.create({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     return NextResponse.json(
//       { message: "User registered successfully" },
//       { status: 201 }
//     );
//   } catch (error: any) {
//   console.log("REGISTER ERROR:", error);
//   return NextResponse.json(
//     { message: error.message },
//     { status: 500 }
//   );
// }
// }
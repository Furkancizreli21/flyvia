import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      return NextResponse.json({ error: "Email veya şifre hatali" }, { status: 401 });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return NextResponse.json({ error: "Email veya şifre hatali" }, { status: 401 });
    }
    return NextResponse.json({ message: "Giriş basarili", userId: user.id }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Sunucu hatasi" }, { status: 500 });
  }
}

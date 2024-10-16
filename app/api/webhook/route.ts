import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log(body);
    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error("Error parsing request body:", error);
    return NextResponse.json({ message: "Invalid request" }, { status: 400 });
  }
}
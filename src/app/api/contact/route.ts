import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Simulate realistic network delay (600ms)
    await new Promise((resolve) => setTimeout(resolve, 600));

    // Return success response with confirmation ID
    const confirmationId = `DIV-${Date.now().toString(36).toUpperCase()}`;

    return NextResponse.json(
      {
        success: true,
        confirmationId,
        message: "Your inquiry has been received by Divija Enterprises. Our team will contact you shortly.",
        receivedData: {
          name,
          email,
          phone: phone || "Not provided",
          service: service || "General Inquiry",
          date: new Date().toISOString(),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}

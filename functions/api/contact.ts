export async function onRequestPost(context: { request: Request }) {
  try {
    const body = (await context.request.json()) as {
      name?: string;
      email?: string;
      phone?: string;
      service?: string;
      message?: string;
    };

    const { name, email, phone, service, message } = body;

    // Validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required." }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    const confirmationId = `DIV-${Date.now().toString(36).toUpperCase()}`;

    return new Response(
      JSON.stringify({
        success: true,
        confirmationId,
        message:
          "Your inquiry has been received by Divija Enterprises. Our team will contact you shortly.",
        receivedData: {
          name,
          email,
          phone: phone || "Not provided",
          service: service || "General Inquiry",
          date: new Date().toISOString(),
        },
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred while processing your request." }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

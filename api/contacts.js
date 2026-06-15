const limits = {
  name: 100,
  email: 254,
  subject: 200,
  message: 2000
};

function readBody(request) {
  if (!request.body) return {};
  if (typeof request.body !== "string") return request.body;

  try {
    return JSON.parse(request.body);
  } catch {
    return {};
  }
}

function clean(value, maxLength) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };

    return entities[character];
  });
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function configuration() {
  return {
    apiKey: process.env.RESEND_API_KEY,
    from: process.env.EMAIL_FROM,
    to: process.env.CONTACT_TO_EMAIL
  };
}

export default async function handler(request, response) {
  response.setHeader("Cache-Control", "no-store");

  const config = configuration();

  if (request.method === "GET") {
    return response.status(200).json({
      success: true,
      configured: Boolean(config.apiKey && config.from && config.to)
    });
  }

  if (request.method !== "POST") {
    response.setHeader("Allow", "GET, POST");
    return response.status(405).json({
      success: false,
      message: "Method not allowed."
    });
  }

  const body = readBody(request);

  // Bots commonly fill hidden fields; acknowledge the request without sending.
  if (clean(body.website, 200)) {
    return response.status(200).json({ success: true });
  }

  const name = clean(body.name, limits.name);
  const email = clean(body.email, limits.email);
  const subject = clean(body.subject, limits.subject);
  const message = clean(body.message, limits.message);

  if (!name || !email || !subject || message.length < 20 || !isValidEmail(email)) {
    return response.status(400).json({
      success: false,
      message: "Please provide a valid name, email, subject, and message."
    });
  }

  if (!config.apiKey || !config.from || !config.to) {
    return response.status(503).json({
      success: false,
      message: "The contact service is not configured yet."
    });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");
  const recipients = config.to
    .split(",")
    .map((recipient) => recipient.trim())
    .filter(Boolean);

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: config.from,
        to: recipients,
        reply_to: email,
        subject: `Portfolio contact: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
        html: `
          <h2>New portfolio contact</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Subject:</strong> ${safeSubject}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        `
      })
    });

    if (!resendResponse.ok) {
      console.error("Resend rejected a contact email:", resendResponse.status);
      return response.status(502).json({
        success: false,
        message: "Your message could not be delivered. Please try again."
      });
    }

    return response.status(200).json({
      success: true,
      message: "Your message has been sent."
    });
  } catch (error) {
    console.error("Contact email delivery failed:", error);
    return response.status(502).json({
      success: false,
      message: "Your message could not be delivered. Please try again."
    });
  }
}

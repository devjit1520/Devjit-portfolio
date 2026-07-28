import emailjs from "@emailjs/browser";

const serviceId =
  import.meta.env.VITE_EMAILJS_SERVICE_ID;

const templateId =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

const publicKey =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function validateConfiguration() {
  const missingValues = [];

  if (!serviceId) {
    missingValues.push(
      "VITE_EMAILJS_SERVICE_ID"
    );
  }

  if (!templateId) {
    missingValues.push(
      "VITE_EMAILJS_TEMPLATE_ID"
    );
  }

  if (!publicKey) {
    missingValues.push(
      "VITE_EMAILJS_PUBLIC_KEY"
    );
  }

  if (missingValues.length > 0) {
    throw new Error(
      `Missing EmailJS configuration: ${missingValues.join(
        ", "
      )}`
    );
  }
}

export async function sendContactEmail(
  formElement
) {
  validateConfiguration();

  if (!formElement) {
    throw new Error(
      "The contact form was not found."
    );
  }

  try {
    const response = await emailjs.sendForm(
      serviceId,
      templateId,
      formElement,
      {
        publicKey,
      }
    );

    return response;
  } catch (error) {
    console.error(
      "EmailJS error:",
      error
    );

    throw new Error(
      error?.text ||
        error?.message ||
        "Unable to send the message."
    );
  }
}
import { EmailTemplate } from "@/components/emails/ClientMessage";
import { resend } from "@/lib/email";
import { env } from "@/lib/env.mjs";
import { contactFormValidator } from "@/validators/contact";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

// FIX: Potential email spam :/
export async function POST(request: Request) {
  try {
    const _body = await request.json();
    const body = contactFormValidator.parse(_body);

    // TODO: uncomment before pushing
    // const data = await resend.emails.send({
    //   // TODO: fix typo
    //   from: `${body.name} <${env.CLIENT_FORM_EMAIL_ADDRESS}>`,
    //   to: [env.CLIENT_EMAIL],
    //   subject: `[${env.CLIENT_WEBSITE_DOMAIN}] ${body.name} sent you a message`,
    //   react: EmailTemplate(body),
    //   text: `${body.name} (${body.email}) sent you the following message.\n\n${body.details}`,
    // });

    const data = { error: null };

    if (data.error !== null) {
      throw data.error;
    }

    return NextResponse.json(
      {
        message: "Success",
      },
      { status: 200 }
    );
  } catch (e) {
    if (e instanceof ZodError) {
      return NextResponse.json(
        { message: "Invalid body" },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

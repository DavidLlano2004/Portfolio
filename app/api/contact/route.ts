import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json()

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "Todos los campos son requeridos" }, { status: 400 })
  }

  const { error } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: "juli.matias.2004@gmail.com",
    subject: `Portfolio: ${subject}`,
    replyTo: email,
    text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
  })

  if (error) {
    return NextResponse.json({ error: "Error al enviar el mensaje" }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}

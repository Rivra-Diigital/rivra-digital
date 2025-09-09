import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
  const formId = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID;
  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;
  const ip =
    req.headers.get("x-forwarded-for") ||
    req.headers.get("x-real-ip") ||
    "0.0.0.0";

  const payload = {
    fields: [
      { name: "nome", value: body.nome },
      { name: "empresa", value: body.empresa },
      { name: "email", value: body.email },
      { name: "whatsapp", value: body.whatsapp },
      { name: "mensagem", value: body.mensagem },
    ],
    context: {
      hutk: body.hutk,
      pageUri: "https://rivra-digital-staging.up.railway.app/",
      pageName: "Rivra Digital",
      ipAddress: ip,
    },
  };

  try {
    const hubspotRes = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!hubspotRes.ok) {
      const error = await hubspotRes.text();
      console.error("Erro da HubSpot:", error);
      return NextResponse.json({ success: false, error }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro ao enviar para HubSpot:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}

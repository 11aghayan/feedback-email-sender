import { NextResponse } from "next/server";
import { SMTPClient } from 'emailjs';

const client = new SMTPClient({
	user: process.env.user,
	password: process.env.password, 
	host: process.env.host,
	ssl: true
});

export const POST = async (req: Request) => { 
  try {
    const body: any = await req.json();

    let textMessage = '';

    for (const field in body) {
      if (typeof body[field] === 'object') {
        textMessage += `${field}: ${body[field].join(', ')}\n\n`;
      } else {
        textMessage += field + ': ' + body[field];
      }
    }

    await client.sendAsync({
      text: textMessage,
      from: `noreply <${process.env.user}>`,
      to: process.env.receiver!,
      subject: 'testing subject',
    });

    return NextResponse.json(true, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({msg: error.message}, {status: 500});
  }

}


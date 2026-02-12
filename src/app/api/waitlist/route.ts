import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// /tmp is writable on Vercel; locally uses data/ folder
const DATA_FILE = process.env.VERCEL
  ? "/tmp/waitlist.json"
  : path.join(process.cwd(), "data", "waitlist.json");

async function readEmails(): Promise<string[]> {
  try {
    const data = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeEmails(emails: string[]): Promise<void> {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(emails, null, 2));
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }

    const emails = await readEmails();

    if (emails.includes(email.toLowerCase())) {
      return NextResponse.json({
        message: "Você já está na lista!",
        count: emails.length,
      });
    }

    emails.push(email.toLowerCase());
    await writeEmails(emails);

    return NextResponse.json({
      message: "Cadastrado com sucesso!",
      count: emails.length,
    });
  } catch {
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 },
    );
  }
}

export async function GET() {
  const emails = await readEmails();
  return NextResponse.json({ count: emails.length });
}

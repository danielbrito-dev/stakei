import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }

    const supabase = getSupabase();
    const normalizedEmail = email.toLowerCase();

    // Check if already registered
    const { data: existing } = await supabase
      .from("waitlist")
      .select("id")
      .eq("email", normalizedEmail)
      .single();

    if (existing) {
      const { count } = await supabase
        .from("waitlist")
        .select("*", { count: "exact", head: true });

      return NextResponse.json({
        message: "Você já está na lista!",
        count: count ?? 0,
      });
    }

    // Insert new email
    const { error } = await supabase
      .from("waitlist")
      .insert({ email: normalizedEmail });

    if (error) throw error;

    const { count } = await supabase
      .from("waitlist")
      .select("*", { count: "exact", head: true });

    return NextResponse.json({
      message: "Cadastrado com sucesso!",
      count: count ?? 0,
    });
  } catch {
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const supabase = getSupabase();
    const { count } = await supabase
      .from("waitlist")
      .select("*", { count: "exact", head: true });

    return NextResponse.json({ count: count ?? 0 });
  } catch {
    return NextResponse.json({ count: 0 });
  }
}

import { z } from "zod";

/** Validação de email */
export const emailSchema = z
  .string()
  .email("Email inválido")
  .transform((e) => e.toLowerCase().trim());

/** Validação para criação de banca */
export const createBankrollSchema = z.object({
  name: z.string().min(1, "Nome obrigatório").max(100),
  houseName: z.string().min(1, "Casa obrigatória").max(100),
  initialBalance: z.number().nonnegative("Saldo deve ser positivo"),
  currency: z.enum(["BRL", "USD", "EUR"]).default("BRL"),
});

/** Validação para registro de aposta */
export const createBetSchema = z.object({
  bankrollId: z.string().uuid(),
  type: z.enum(["single", "parlay"]),
  stake: z.number().positive("Valor da aposta deve ser positivo"),
  potentialReturn: z.number().positive().optional(),
  oddsTotal: z.number().positive(),
  legs: z
    .array(
      z.object({
        eventName: z.string().min(1),
        sport: z.string().min(1),
        league: z.string().optional(),
        market: z.string().min(1),
        selection: z.string().min(1),
        odds: z.number().positive(),
      }),
    )
    .min(1, "Aposta precisa de pelo menos 1 evento"),
});

/** Validação para transação (depósito/saque) */
export const createTransactionSchema = z.object({
  bankrollId: z.string().uuid(),
  type: z.enum(["deposit", "withdraw"]),
  amount: z.number().positive("Valor deve ser positivo"),
  notes: z.string().max(500).optional(),
});

/** Tipos inferidos dos schemas */
export type CreateBankrollInput = z.infer<typeof createBankrollSchema>;
export type CreateBetInput = z.infer<typeof createBetSchema>;
export type CreateTransactionInput = z.infer<typeof createTransactionSchema>;

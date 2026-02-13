/** Status de uma aposta */
export type BetStatus = "pending" | "won" | "lost" | "void" | "cashout";

/** Status de uma leg individual */
export type BetLegStatus = "pending" | "won" | "lost" | "void";

/** Tipo de aposta */
export type BetType = "single" | "parlay";

/** Tipo de transação */
export type TransactionType = "deposit" | "withdraw";

/** Moedas suportadas */
export type Currency = "BRL" | "USD" | "EUR";

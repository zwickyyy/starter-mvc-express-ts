import { z } from "zod";

const envVariables = z.object({
  PORT: z
    .custom<number>()
    .refine((value) => Number.isFinite(Number(value)), "Invalid PORT")
    .transform((value) => Number(value)),
});

envVariables.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}

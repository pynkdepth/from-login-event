import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(1, "Nama wajib diisi"),
  email: z.string().email("Email tidak valid"),
  password: z.string().min(8, "Minimal 8 karakter"),
  event: z.string().min(1, "Pilih event"),
  bio: z.string().optional(),
});

export type RegisterFormData = z.infer<typeof registerSchema>;
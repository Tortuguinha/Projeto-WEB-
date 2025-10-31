const { z } = require("zod")

const emails = ["@lanhouse.com"];

const authSchema = z.object({
    email: z.string()
        .min(1, { message: "Preencha o campo" })
        .email("Não é um email válido")
        .refine((email) => {
            return emails.some((domain) => email.endsWith(domain))
        }, "Email inválido"),
    password: z.string().min(6).max(32)
})

module.exports = { authSchema }
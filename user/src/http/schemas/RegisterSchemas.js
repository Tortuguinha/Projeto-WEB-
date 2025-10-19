const { z, email } = require("zod");
const emails = ['@lanhouse.com'];
const cpfRegex = /^\d{3}.\d{3}.\d{3}-\d{2}$/;

const registerSchema = z.object({
    name: z.string(). min(3).max(30),
    cpf: z.string().length(11).refine((val) => cpfRegex.test(val), {
        message: "Invalid CPF format. Expected format: XXX.XXX.XXX-XX",
    }),
    email: z.email().min(1, {message: "Preencha o campo"}).refine((email =>{
        return emails.some(domain => email.endsWith(domain));
    }, "Email must be from lanhouse.com domain")),
    password: z.string(). min(6).max(20),
    confirmPassword: z.string(). min(6).max(20),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

module.exports = {
    registerSchema,
};
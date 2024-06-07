import { LoginForm } from "@/types/types";
import { z } from "zod";

export const loginSchema = z.object({
    email : z.string({message : 'Email must be string!'}).email({message : 'Email must be valid!'}),
    password : z.string().min(5, 'Password Min 5 Character')
}) satisfies z.Schema<LoginForm>
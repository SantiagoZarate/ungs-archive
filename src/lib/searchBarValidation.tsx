import * as z from 'zod'

export const formSchema = z.object({
  username: z.string().min(2, {
    message: "ingresar al menor 2 caracteres."
  })
})
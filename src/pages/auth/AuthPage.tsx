import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { UNGSIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2),
});

type FormPropsType = z.infer<typeof formSchema>;

export function AuthPage() {
  const cardsRef = useRef<HTMLElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const handleMouse = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (cardsRef.current !== null) {
      const rect = cardsRef.current.getBoundingClientRect();
      const x = event.clientX - rect.x;
      const y = event.clientY - rect.y;
      setCursor({ x, y });
    }
  };

  const form = useForm<FormPropsType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = () => {
    console.log("Hola");
  };

  return (
    <section
      className="bg-neutral-950 grid grid-cols-2 min-h-screen w-full"
      ref={cardsRef}
      onMouseMove={(e) => handleMouse(e)}
    >
      <div className="flex items-center justify-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 min-w-96"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="******" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
      <div className="flex items-center flex-col justify-center">
        <article className="flex">
          <UNGSIcon cursor={cursor} cardRef={cardsRef} />
        </article>
        <footer>
          <h2 className="font-bold text-2xl">UNGS Archive</h2>
        </footer>
      </div>
    </section>
  );
}

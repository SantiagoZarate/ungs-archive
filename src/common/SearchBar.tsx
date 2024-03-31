import { GlassIcon, XIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "@/lib/searchBarValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

export function SearchBar() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  function clearInput() {
    form.resetField("username");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative group rounded-full flex items-center bg-zinc-900 border-t border-t-zinc-800"
      >
        <Button
          className="bg-transparent px-2 hover:text-zinc-400 hover:bg-transparent text-zinc-600"
          type="submit"
        >
          <GlassIcon />
        </Button>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="bg-inherit border-none px-0 focus-visible:ring-offset-0 focus-visible:ring-0"
                  autoComplete="off"
                  placeholder="Buscar..."
                  {...field}
                />
              </FormControl>
              <FormMessage className="absolute rounded-full shadow-md bg-zinc-700 text-zinc-200 left-0 text-center text-xs w-full p-2" />
            </FormItem>
          )}
        />
        <Button
          onClick={clearInput}
          className="bg-transparent opacity-0 group-hover:opacity-100 hover:scale-105 hover:text-primary text-border absolute right-0 clickable-item hover:bg-transparent"
        >
          <XIcon />
        </Button>
      </form>
    </Form>
  );
}

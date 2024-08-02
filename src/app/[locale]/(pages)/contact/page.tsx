"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  detailsValidator,
  emailValidator,
  nameValidator,
} from "@/validators/contact";
import { FieldApi, useForm } from "@tanstack/react-form";
import { Sparkle } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function FieldInfo({
  field,
}: {
  field: FieldApi<any, any, any, any>;
}) {
  return (
    <>
      {field.state.meta.touchedErrors ? (
        <span className='text-red-500 text-sm'>
          {field.state.meta.touchedErrors}
        </span>
      ) : null}
    </>
  );
}

export default function Page() {
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      email: "",
      name: "",
      details: "",
    },
    onSubmit: async ({ value }) => {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(value),
      });
      if (res.status !== 200) {
        const error = await res.json();
        if (!error.message || typeof error.message !== "string") {
          toast.error("Something went wrong");
          return;
        }
        toast.error(error.message);
        return;
      }
      toast.success("Email sent successfully!");
      router.push("/");
    },
  });

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-2xl pt-serif-regular'>Contact me!</h1>
      <form
        className='flex flex-col w-[40%]'
        onSubmit={e => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}>
        <form.Field
          name='email'
          validators={{
            onSubmit: ({ value }) => {
              const validator = emailValidator;
              const res = validator.safeParse(value);
              if (res.success) {
                return undefined;
              } else {
                const errMsg = res.error.formErrors.formErrors[0];
                return errMsg;
              }
            },
          }}
          children={field => {
            // Avoid hasty abstractions. Render props are great!
            return (
              <>
                <Label
                  htmlFor={field.name}
                  className='py-2 flex flex-row'>
                  Email
                  <Sparkle className='w-[10px] h-[10px] mx-1' />
                </Label>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={e => field.handleChange(e.target.value)}
                  placeholder='your@email.com'
                  className='bg-goldenish border border-goldenisher drop-shadow-md'
                  autoFocus
                />
                <FieldInfo field={field} />
              </>
            );
          }}
        />
        <form.Field
          name='name'
          validators={{
            onSubmit: ({ value }) => {
              const validator = nameValidator;
              const res = validator.safeParse(value);
              if (res.success) {
                return undefined;
              } else {
                const errMsg = res.error.formErrors.formErrors[0];
                return errMsg;
              }
            },
          }}
          children={field => {
            // Avoid hasty abstractions. Render props are great!
            return (
              <>
                <Label
                  htmlFor={field.name}
                  className='py-2 flex flex-row'>
                  Name
                  <Sparkle className='w-[10px] h-[10px] mx-1' />
                </Label>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={e => field.handleChange(e.target.value)}
                  placeholder='Your Name'
                  className='bg-goldenish border border-goldenisher drop-shadow-md'
                />
                <FieldInfo field={field} />
              </>
            );
          }}
        />
        <form.Field
          name='details'
          validators={{
            onSubmit: ({ value }) => {
              const validator = detailsValidator;
              const res = validator.safeParse(value);
              if (res.success) {
                return undefined;
              } else {
                const errMsg = res.error.formErrors.formErrors[0];
                return errMsg;
              }
            },
          }}
          children={field => {
            const value = field.getValue();
            const length = value.length;
            // Avoid hasty abstractions. Render props are great!
            return (
              <>
                <div className='flex flex-row justify-between items-center'>
                  <Label
                    htmlFor={field.name}
                    className='py-2 flex flex-row'>
                    Details
                    <Sparkle className='w-[10px] h-[10px] mx-1' />
                  </Label>
                  <span
                    className={cn("text-sm invisible", {
                      "text-red-500": length > 2000,
                      visible: length > 0,
                    })}>
                    {length}/2000
                  </span>
                </div>
                <Textarea
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={e => field.handleChange(e.target.value)}
                  placeholder='Some details about what you want'
                  className='bg-goldenish border border-goldenisher drop-shadow-md'
                />
                <span className='text-sm py-1 text-gray-800'>
                  Please include what you need, times you&apos;re available
                  for pre-shoot meeting, and your budget.
                </span>
                <FieldInfo field={field} />
              </>
            );
          }}
        />
        <Button className='bg-goldenish border border-goldenisher rounded-md text-black py-2 hover:bg-goldenisher'>
          Submit!
        </Button>
        <span className='flex flex-row text-sm text-gray-800 py-2'>
          <Sparkle className='w-[10px] h-[10px] mx-1' />
          Required
        </span>
      </form>
    </div>
  );
}

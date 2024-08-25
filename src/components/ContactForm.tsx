"use client";

import { cn } from "@/lib/utils";
import {
  detailsValidator,
  emailValidator,
  nameValidator,
} from "@/validators/contact";
import { FieldApi, useForm } from "@tanstack/react-form";
import { useRouter } from "next/navigation";
import { MutableRefObject, useRef } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

type ContactFormProps = {
  t: Record<string, string>;
};

export function ContactForm({ t }: ContactFormProps) {
  const dialogOpenRef = useRef<HTMLButtonElement>();
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
          toast.error(t["Something went wrong"]);
          return;
        }
        toast.error(error.message);
        return;
      }
      if (dialogOpenRef.current) {
        dialogOpenRef.current.click();
      }
    },
  });

  return (
    <>
      <form
        className='flex flex-col w-full gap-y-3'
        onSubmit={event => {
          event.preventDefault();
          event.stopPropagation();
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
                const errMsg = t[res.error.formErrors.formErrors[0]];
                return errMsg;
              }
            },
          }}
          children={field => {
            // Avoid hasty abstractions. Render props are great!
            return (
              <div className='flex flex-col gap-y-1'>
                <Label
                  htmlFor={field.name}
                  className='py-2 flex flex-row font-babas-neue uppercase text-2xl'>
                  {t["Email"]}
                </Label>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={e => field.handleChange(e.target.value)}
                  placeholder={t["your@email.com"]}
                  className='border border-goldenisher bg-offwhite drop-shadow-md'
                  autoFocus
                />
                <FieldInfo field={field} />
              </div>
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
                const errMsg = t[res.error.formErrors.formErrors[0]];
                return errMsg;
              }
            },
          }}
          children={field => {
            // Avoid hasty abstractions. Render props are great!
            return (
              <div className='flex flex-col gap-y-1'>
                <Label
                  htmlFor={field.name}
                  className='py-2 flex flex-row font-babas-neue uppercase text-2xl'>
                  {t["Name"]}
                </Label>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={e => field.handleChange(e.target.value)}
                  placeholder={t["Your Name"]}
                  className='border border-goldenisher bg-offwhite drop-shadow-md'
                />
                <FieldInfo field={field} />
              </div>
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
                const errMsg = t[res.error.formErrors.formErrors[0]];
                return errMsg;
              }
            },
          }}
          children={field => {
            const value = field.getValue();
            const length = value.length;
            // Avoid hasty abstractions. Render props are great!
            return (
              <div className='flex flex-col gap-y-2'>
                <div className='flex flex-row justify-between items-center'>
                  <Label
                    htmlFor={field.name}
                    className='flex flex-row font-babas-neue uppercase text-2xl'>
                    {t["Message"]}
                  </Label>
                  <span
                    className={cn("text-sm invisible", {
                      "text-red-500": length > 2000,
                      visible: length > 0,
                    })}>
                    {length}/2000
                  </span>
                </div>
                <span className='text-sm text-gray-800'>
                  {t["MessageInspo"]}
                </span>
                <Textarea
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={e => field.handleChange(e.target.value)}
                  placeholder={t["Some details about what you want"]}
                  className='border-goldenisher bg-offwhite drop-shadow-md'
                />
                <FieldInfo field={field} />
              </div>
            );
          }}
        />
        <form.Subscribe
          selector={state => [state.canSubmit, state.isSubmitting]}
          children={props => {
            const [canSubmit, isSubmitting] = props;
            return (
              <Button
                variant='call-to-action'
                className='w-[40%]'
                disabled={!canSubmit}>
                {isSubmitting ? t["Sending..."] : t["Send!"]}
              </Button>
            );
          }}
        />
      </form>
      <SuccessDialog
        email={form.getFieldValue("email")}
        reference={dialogOpenRef}
        t={t}
      />
    </>
  );
}

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

function SuccessDialog({
  email,
  reference,
  t,
}: {
  email: string;
  reference: MutableRefObject<HTMLButtonElement | undefined>;
  t: Record<string, string>;
}) {
  const router = useRouter();
  return (
    <Dialog
      onOpenChange={open => {
        // when dialog is closed, redirect to home page
        if (!open) {
          router.push("/");
        }
      }}>
      <DialogTrigger asChild>
        <button
          ref={
            reference as MutableRefObject<HTMLButtonElement>
          }></button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-md p-10 gap-y-5 border border-goldenisher'>
        <DialogHeader>
          <DialogTitle className='font-babas-neue text-5xl tracking-wide'>
            {t["Success!"]}
          </DialogTitle>
          <DialogDescription className='font-ibarra text-2xl text-[#454545]'>
            {t["I'll get back"].replace("{{email}}", email)}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant='call-to-action' className='capitalize'>
              {t["close"]}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

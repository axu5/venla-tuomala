"use client";

import { LocaleParam } from "@/app/i18n";
import { SubTitle } from "@/components/SubTitle";
import { Title } from "@/components/Title";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { MutableRefObject, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
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

const ConfettiPiece = ({ x, y }: { x: number; y: number }) => {
  const angle = ((Math.random() * 1) / 2) * Math.PI;
  const distance = (Math.random() - 0.5) * 300;
  return (
    <motion.div
      className='w-2 h-2 bg-goldenisher absolute'
      initial={{ opacity: 1, scale: 1, x: x + "px", y: "0px" }}
      animate={{
        opacity: 0,
        scale: 0.5,
        x: x + (Math.random() - 0.5) * 200,
        y: 200 + (Math.random() - 0.5) * 200,
      }}
      transition={{ duration: 1, ease: "easeOut" }}
    />
  );
};

// TODO: make form a separate client component
export default function Page({ params: { locale } }: LocaleParam) {
  const { t } = useTranslation("contact", { lng: locale });
  const [confetti, setConfetti] = useState<
    { id: number; x: number; y: number }[]
  >([]);
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
          toast.error(t("Something went wrong"));
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
    <div className='flex flex-col'>
      <div className='flex flex-col pt-20 pb-5'>
        <Title className='pb-0 text-5xl'>
          {t("Let’s start the conversation!")}
        </Title>
        <SubTitle className='text-3xl font-babas-neue'>
          {t("Get in touch to discuss your vision")}
        </SubTitle>
      </div>
      <form
        className='flex flex-col w-full gap-y-3'
        onSubmit={event => {
          event.preventDefault();
          event.stopPropagation();
          const rect = event.currentTarget.getBoundingClientRect();
          // const tmp = new Array(10).fill(0).map(() => ({
          //   id: Math.random(),
          //   x: event.currentTarget.clientX - rect.left,
          //   y: event.currentTarget.clientY - rect.top,
          // }));
          setConfetti(oldConfetti => [
            ...oldConfetti,
            { id: Math.random(), x: Math.random(), y: 0 },
          ]);
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
                const errMsg = t(res.error.formErrors.formErrors[0]);
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
                  {t("Email")}
                </Label>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={e => field.handleChange(e.target.value)}
                  placeholder={t("your@email.com")}
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
                const errMsg = t(res.error.formErrors.formErrors[0]);
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
                  {t("Name")}
                </Label>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={e => field.handleChange(e.target.value)}
                  placeholder={t("Your Name")}
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
                const errMsg = t(res.error.formErrors.formErrors[0]);
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
                    {t("Message")}
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
                  {t("MessageInspo")}
                </span>
                <Textarea
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={e => field.handleChange(e.target.value)}
                  placeholder={t("Some details about what you want")}
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
                {isSubmitting ? t("Sending...") : t("Send!")}
              </Button>
            );
          }}
        />
      </form>
      <SuccessDialog
        email={form.getFieldValue("email")}
        reference={dialogOpenRef}
      />
    </div>
  );
}

function SuccessDialog({
  email,
  reference,
}: {
  email: string;
  reference: MutableRefObject<HTMLButtonElement | undefined>;
}) {
  const { t } = useTranslation("contact");
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
            {t("Success!")}
          </DialogTitle>
          <DialogDescription className='font-ibarra text-2xl text-[#454545]'>
            {t("I'll get back", { email })}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant='call-to-action' className='capitalize'>
              {t("close")}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

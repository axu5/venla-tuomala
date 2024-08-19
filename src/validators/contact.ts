import { z } from "zod";

// TODO: add validation translations
export const emailValidator = z.string().email("ValidEmailError");

export const nameValidator = z
  .string()
  .min(1, "NameMustNotBeEmptyError");

export const detailsValidator = z
  .string()
  .min(1, "DetailsMustNotBeEmptyError")
  .max(2000, "DetailsMustNotExceedError");

export const contactFormValidator = z.object({
  email: emailValidator,
  name: nameValidator,
  details: detailsValidator,
});

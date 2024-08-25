import { z } from "zod";

// TODO: add validation translations
export const emailValidator = z
  .string()
  .max(512, "ValidEmailError")
  .email("ValidEmailError");

export const nameValidator = z
  .string()
  .min(1, "NameMustNotBeEmptyError")
  .max(120, "NameMustNotExceedError");

export const detailsValidator = z
  .string()
  .min(1, "DetailsMustNotBeEmptyError")
  .max(2000, "DetailsMustNotExceedError");

export const contactFormValidator = z.object({
  email: emailValidator,
  name: nameValidator,
  details: detailsValidator,
});

import { z } from "zod";

export const emailValidator = z
  .string()
  .email("Please enter a valid email address");

export const nameValidator = z
  .string()
  .min(3, "Your name must be at least 3 characters")
  .max(50, "Your name cannot be longer than 50 characters");

export const detailsValidator = z
  .string()
  .min(1, "Details must be at least 1 character")
  .max(2000, "Details cannot be longer than 2000 characters");

export const contactFormValidator = z.object({
  email: emailValidator,
  name: nameValidator,
  details: detailsValidator,
});

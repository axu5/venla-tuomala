import { LocaleParam } from "@/app/i18n";

export default function SubLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
}> &
  LocaleParam) {
  return (
    <main className='max-w-4xl px-10 md:mx-auto'>{children}</main>
  );
}

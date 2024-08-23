import { LocaleParam } from "@/app/i18n";

export default function SubLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
}> &
  LocaleParam) {
  return (
    <main className='max-w-[calc(100vw-80px)] md:max-w-5xl mx-auto'>
      {children}
    </main>
  );
}

import initTranslations, { LocaleParam } from "@/app/i18n";
import { SubTitle } from "@/components/SubTitle";
import { TypingText } from "@/components/TypingText";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BACKGROUND } from "@/icons/background";
import { MapPin } from "lucide-react";
import Image from "next/image";

// FIX: namespace
const i18nNamespaces = ["home", "common"];

export default async function AboutPage({
  params: { locale },
}: LocaleParam) {
  const { t } = await initTranslations(locale, i18nNamespaces);
  return (
    <main className='flex flex-col max-w-5xl mx-auto'>
      {/* Accordion */}
      <SubTitle id='about'>{t("About")}</SubTitle>
      <div className='relative h-[calc(min(1024px,100vw)/1.618)]'>
        <div className='flex flex-col mx-auto justify-center items-center'></div>
        <div className='absolute grid top-0 left-0 w-full p-[3px] h-full grid-cols-[61.80%_38.20%]'>
          <div className=''>
            <h1 className='text-5xl p-10 uppercase font-semibold'>
              Venla Tuomala
            </h1>
            <span className='p-10 text-3xl font-semibold overflow-y-hidden max-h-[150px]'>
              I AM <TypingText />
            </span>
            <div className='flex flex-row text-2xl px-10 pt-10 items-center'>
              <MapPin className='w-6 h-6 mr-2' /> Mikkeli, Finland
            </div>
            <div className='flex flex-row text-2xl px-10 items-center'>
              Open to travel anywhere!
            </div>
          </div>
          <div className='flex flex-col justify-end w-full h-full'>
            <Image
              src='/images/venla2.png'
              alt='Pic of me'
              width={6969}
              height={0}
            />
          </div>
        </div>
        <BACKGROUND.GOLDEN_RATIO className='w-full h-full' />
      </div>
      <div>
        <div className='mx-auto text-3xl'>Some yadda yadda</div>
        <SubTitle>Connect with me</SubTitle>
        <form className='bg-gray-200 max-w-2xl flex flex-col justify-center items-center mx-auto'>
          <Input
            className='rounded-none bg-transparent border border-goldenisher px-5 py-5'
            placeholder='Your email...'
            type='email'
          />
          <Input
            className='rounded-none bg-transparent border border-goldenisher px-5 py-5'
            placeholder='A little message...'
          />
          <Button className='w-full rounded-none bg-[#35685C] hover:bg-[#274F45] border-goldenisher py-5'>
            let&apos;s connect!
          </Button>
        </form>
      </div>
    </main>
  );
}

import initTranslations, { LocaleParam } from "@/app/i18n";
import { ContactForm } from "@/components/ContactForm";
import { SubTitle } from "@/components/SubTitle";
import { Title } from "@/components/Title";

export default async function ContactPage({
  params: { locale },
}: LocaleParam) {
  const { t, i18n } = await initTranslations(locale, ["contact"]);
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
      <ContactForm t={i18n.getResourceBundle(locale, "contact")} />
    </div>
  );
}

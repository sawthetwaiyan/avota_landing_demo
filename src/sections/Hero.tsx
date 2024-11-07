import { Element, Link as Linkscroll } from "react-scroll";
import { useTranslation } from "react-i18next";
import Button from "../components/Button";
const Hero = () => {
  const { t } = useTranslation("global");
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container flex flex-row">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
              {t("hero.caption")}
            </div>
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              {t("hero.title")}
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              {t("hero.description")}
            </p>
            <Linkscroll to="features" offset={-100} spy smooth>
              <Button icon="/images/zap.svg">{t("hero.buttonText")}</Button>
            </Linkscroll>
          </div>
          {/* <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
            <img
              src="/images/contract2.svg"
              alt="Hero"
              className="size-1230 max-lg:h-auto"
            />
          </div> */}
        </div>
      </Element>
    </section>
  );
};

export default Hero;

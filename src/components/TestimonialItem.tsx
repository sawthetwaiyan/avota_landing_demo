import clsx from "clsx";
import { Testimonial } from "../types";
import { useTranslation } from "react-i18next";
interface TestimonialItemProps {
  item: Testimonial;
  containerClassName: string;
}
const TestimonialItem = ({
  item,
  containerClassName,
}: TestimonialItemProps) => {
  const { t } = useTranslation("global");
  return (
    <div
      className={clsx(
        "relative px-14 pb-14 pt-11 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-screen after:bg-s2 after:content-[''] max-md:px-0 max-md:pt-11 after:max-md:-right-4",
        containerClassName,
      )}
    >
      <blockquote className="h6 mb-8 text-p4">
        {t(`${item.comment}`)}
      </blockquote>

      <div className="flex items-center max-xl:-mr-8">
        <div className="mr-4 size-20 shrink-0 rounded-half border-2 border-s2 p-1.5">
          <img
            src={item.avatarUrl}
            alt={item.name}
            className="size-full object-cover"
          />
        </div>
        <div>
          <h4 className="body-2 mb-0.5 text-p1">{t(`${item.name}`)}</h4>
          <p className="small-compact uppercase text-s3">{t(`${item.role}`)}</p>
        </div>
      </div>
    </div>
  );
};
export default TestimonialItem;

import { STRAPI_BASE_URL } from "@/lib/strapi";

function HeroSection({
  data,
}: {
  readonly data: {
    title: string;
    description: string;
    button: string;
    buttonHref: string;
    backgroundImage: { url: string };
    heroImage: { url: string };
  };
}) {
  const { title, description, button, buttonHref, backgroundImage, heroImage } =
    data;

  const getImageURL = (url: string) =>
    url.startsWith("http") ? url : `${STRAPI_BASE_URL}${url}`;

  const backgroundImageURL = backgroundImage
    ? getImageURL(backgroundImage.url)
    : "";
  const heroImageURL = heroImage ? getImageURL(heroImage.url) : "";

  return (
    <>
      <div
        className="hero bg-base-200 min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImageURL})`,
        }}
      >
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={heroImageURL}
            className="max-w-sm rounded-lg shadow-2xl"
            alt={title}
          />
          <div>
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6">{description}</p>
            <a href={buttonHref} className="btn btn-primary">
              {button}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default HeroSection;

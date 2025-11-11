import { STRAPI_BASE_URL } from "@/lib/strapi";

function Card({
  data,
}: {
  readonly data: {
    title: string;
    description: string;
    image: { url: string };
  };
}) {
  const { title, description } = data;
  const imageURL = data.image.url.startsWith("http")
    ? data.image.url
    : `${STRAPI_BASE_URL}${data.image.url}`;

  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={imageURL} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;

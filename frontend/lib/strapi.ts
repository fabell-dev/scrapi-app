import qs from "qs";

export const STRAPI_BASE_URL =
  process.env.STRAPI_BASE_URL || "http://localhost:1337";

const QString = {
  populate: {
    backgroundImage: {
      fields: ["url", "formats"],
    },
    heroImage: {
      fields: ["url", "formats"],
    },
    sections: {
      on: {
        "season.card": {
          populate: {
            image: {
              fields: ["url"],
            },
          },
        },
        "season.cardchild": {
          populate: {
            image: {
              fields: ["url"],
            },
          },
        },
      },
    },
  },
};

export async function GetHomePage() {
  const query = qs.stringify(QString);
  const response = await GetStrapiData(`/api/hero-section?${query}`);
  return response.data;
}

async function GetStrapiData(url: string) {
  try {
    const response = await fetch(`${STRAPI_BASE_URL}${url}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

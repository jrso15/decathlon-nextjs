import Head from "next/head";

const Header = ({ title }) => {
  const url = process.env.SITE_URL;
  const og_image = "./logo.svg";
  const keywords = "Sports";
  const description =
    "Decathlon offers affordable sportswear, shoes & gear for over 70 sports. Decathlon Philippines | Online Sports Store For Filipinos. 2-year warranty-all items. 1 year return & exchange. Free return and exchange. Cash on delivery. Types: Hiking, Bikes.";

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      <link rel="icon" href={og_image} />
      <link rel="apple-touch-icon" href={og_image} />

      {/*OPEN GRAPH META DATA*/}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={og_image} />
      <meta property="og:image:alt" content={title} />

      {/* TWITTER CARDS */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={og_image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@decathlon" />
    </Head>
  );
};

export default Header;

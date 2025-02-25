import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/images/wisemencoffeecup.png" />
    </Head>
  );
};

Meta.defaultProps = {
  title: "Wisemen Coffee Co.",
  keywords: "NextJS Coffee Shop",
  description: "NextJS Coffee Shop",
};

export default Meta;

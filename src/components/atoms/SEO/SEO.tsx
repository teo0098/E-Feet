import Head from 'next/head';

type SeoProps = {
  mainTitle?: string;
  subTitle?: string;
  titlseSeparator?: string;
  description?: string;
};

const SEO: React.VFC<SeoProps> = ({
  mainTitle = 'E-Feet',
  subTitle = 'Home',
  titlseSeparator = '|',
  description = 'Purchase astonishing shoes in one place with great prices!',
}) => (
  <Head>
    <title>
      {mainTitle} {titlseSeparator} {subTitle}
    </title>
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Head>
);

export default SEO;

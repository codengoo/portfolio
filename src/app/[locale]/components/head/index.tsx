import Head from "next/head";

export default function IndexPage() {
  return (
    <Head>
      {/* For crawler*/}
      <title></title>
      <meta
        name="description"
        content=""
      />
      <meta
        name="image"
        content="https://avatars.githubusercontent.com/u/69780921?v=4"
      />

      {/* For open graph */}
      <meta property="og:title" content="Tuan Nghia - an enthusiasm coder" />
      <meta
        property="og:description"
        content="Tuan Nghia is Web Developer passionate about creating efficient and user-friendly websites."
      />
      <meta
        property="og:image"
        content="https://avatars.githubusercontent.com/u/69780921?v=4"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://nghiacangao.io.vn" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Tuan Nghia" />

      {/* For twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Tuan Nghia - an enthusiasm coder" />
      <meta
        name="twitter:description"
        content="Tuan Nghia is Web Developer passionate about creating efficient and user-friendly websites."
      />
      <meta
        name="twitter:image"
        content="https://avatars.githubusercontent.com/u/69780921?v=4"
      />
      <meta name="twitter:url" content="http://nghiacangao.io.vn" />
      <meta name="twitter:creator" content="@nacana22" />
    </Head>
  );
}

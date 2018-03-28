import Head from 'next/head';

export default function ({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="apple-mobile-web-app-capable" content="no" />
      <meta name="format-detection" content="telephone=no" />
      <meta HTTP-EQUIV="pragma" CONTENT="no-cache" />
      <meta HTTP-EQUIV="Cache-Control" CONTENT="no-cache, no-store, must-revalidate" />
      <meta HTTP-EQUIV="expires" CONTENT="Wed, 26 Feb 1999 08:21:57 GMT" />
      <meta HTTP-EQUIV="expires" CONTENT="0" />
      <link rel="stylesheet" type="text/css" href="/static/reset.css" />
      <script type="text/javascript" src="/static/flex.js" />
    </Head>
  );
}

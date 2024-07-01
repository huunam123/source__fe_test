"use strict";

/* Package System */
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&display=swap"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
            type="text/css"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
          />

          {typeof process.env.GG_GTAG_ID !== "undefined" &&
            process.env.GG_GTAG_ID != "" && (
              <script
                dangerouslySetInnerHTML={{
                  __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${process.env.GG_GTAG_ID}')`,
                }}
              />
            )}
          {typeof process.env.GG_ADS_ID !== "undefined" &&
            process.env.GG_ADS_ID != "" && (
              <script
                async
                src={
                  "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" +
                  process.env.GG_ADS_ID
                }
                crossOrigin="anonymous"
              ></script>
            )}
          <script
            type="text/javascript"
            src="https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js"
          />
          <script
            src={`https://www.google.com/recaptcha/api.js?render=${process.env.RECAPTCHA_SITE_KEY}`}
          ></script>
          <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
        </Head>
        <body>
          {typeof process.env.GG_GTAG_ID !== "undefined" &&
            process.env.GG_GTAG_ID != "" && (
              <noscript
                dangerouslySetInnerHTML={{
                  __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.GG_GTAG_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                }}
              />
            )}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// import App from "next/app"

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <style jsx global>{`
        @font-face {
          font-family: "Roboto Mono";
          src: url("/fonts/RobotoMono-Regular.ttf");
        }
        @font-face {
          font-family: "CircularStd";
          src: url("/fonts/CircularStd-Book.ttf");
        }
      `}</style>
    </div>
  )
}

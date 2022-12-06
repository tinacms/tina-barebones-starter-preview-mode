import React from "react";

const App = ({ Component, pageProps }) => {
  const slug = typeof window !== "undefined" ? window.location.pathname : "/";
  return (
    <>
      {pageProps.preview && (
        <div>
          You are in preview mode{" "}
          <a
            className="font-bold text-blue-500 underline"
            // This will logout of the CMS and then exit preview mode
            href={`/admin/index.html#/logout?slug=/api/preview/exit?slug=${slug}`}
          >
            Click here
          </a>{" "}
          to exit
        </div>
      )}

      <Component {...pageProps} />
    </>
  );
};

export default App;

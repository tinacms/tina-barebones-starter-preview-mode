import React from "react";

const App = ({ Component, pageProps }) => {
  return (
    <>
      {pageProps.preview && (
        <div>
          You are in preview mode{" "}
          <a
            className="font-bold text-blue-500 underline"
            href={`/api/preview/exit?slug=${
              (typeof location !== "undefined" && location?.pathname) || "/"
            }`}
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

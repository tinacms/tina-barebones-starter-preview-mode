import { isAuthorized } from "@tinacms/auth";

const handler = async (req, res) => {
  if (
    process.env.IS_LOCAL === "true" ||
    (await isAuthorized({
      query: { clientID: process.env.NEXT_PUBLIC_TINA_CLIENT_ID },
      headers: { authorization: `Bearer ${req.query.token}` },
    }))
  ) {
    // if (req.query.secret !== "MY_SECRET_TOKEN" || !req.query.slug) {
    //   return res.status(401).json({ message: "Invalid token" });
    // }
    res.setPreviewData({});
    return res.redirect(req.query.slug);
    // } else {
    // return res.status(401).json({ message: "Invalid token" });
  }
};

export default handler;

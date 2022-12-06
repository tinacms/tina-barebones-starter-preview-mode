const handler = (req, res) => {
  console.log("Exiting preview mode");

  res.clearPreviewData();
  res.redirect(req.query?.slug || "/");
};

export default handler;

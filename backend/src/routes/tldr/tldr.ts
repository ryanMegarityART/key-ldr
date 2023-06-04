import express from "express";

export const tldr = express.Router();

tldr.get("/fetch", (_, res) => {
  res.json({
    msg: "Fetch all TLDRs",
  });
});

import arcjet, { tokenBucket, shield, detectBot } from "@arcjet/node";
import "dotenv/config";

export const aj = arcjet({
  key: process.env.ARCJET_KEY,
  characteristics: ["ip.src"],
  rules: [
    // Shield protects your app
    shield({ mode: process.env.NODE_ENV === "production" ? "LIVE" : "DRY_RUN" }),

    // Bot detection
    detectBot({
      mode: process.env.NODE_ENV === "production" ? "LIVE" : "DRY_RUN",
      allow: ["CATEGORY:SEARCH_ENGINE"],
    }),

    // Rate limiting
    tokenBucket({
      mode: process.env.NODE_ENV === "production" ? "LIVE" : "DRY_RUN",
      refillRate: 30,
      interval: 5,
      capacity: 20,
    }),
  ],
});
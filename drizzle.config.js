/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./schema.ts",
    dialect: 'postgresql',
    dbCredentials: {
      url: "postgresql://carconnect_owner:OmDR2fzFLTv0@ep-dawn-truth-a5em5i2k.us-east-2.aws.neon.tech/carconnect?sslmode=require",
    }
  };
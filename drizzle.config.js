/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: "YOUR_DRIZZLE_ORM_KEY_HERE",
    }
  };

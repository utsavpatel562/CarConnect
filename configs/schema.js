import { integer, json, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const CarListing = pgTable('carListing', {
    id: serial('id').primaryKey(),
    listingTitle: varchar('listingTitle').notNull(),
    tagline: varchar('tagline'),
    originalPrice: varchar('originalPrice'),
    category: varchar('category').notNull(),
    condition: varchar('condition').notNull(),
    type: varchar('type').notNull(),
    make: varchar('make').notNull(),
    model: varchar('model').notNull(),
    year: varchar('year').notNull(),
    driveType: varchar('driveType').notNull(),
    transmission: varchar('transmission').notNull(),
    fuelType: varchar('fuelType').notNull(),
    mileage: varchar('mileage').notNull(),
    engineSize: varchar('engineSize').notNull(),
    cyliner: varchar('cyliner'),
    color: varchar('color').notNull(),
    door: varchar('door').notNull(),
    vin: varchar('vin'),
    offerType: varchar('offerType'),
    listingDescription: varchar('listingDescription').notNull(),
    features: json('features'),
    createdBy: varchar('createdBy').notNull(),
    userName: varchar('userName').notNull().default('UtsavPatel_01'),
    userImageUrl:varchar('userImageUrl').default("https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffree-png-vectors%2Fuser&psig=AOvVaw2n-TZbKkfTzPP75m2scB6T&ust=1728154801435000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLD177q09YgDFQAAAAAdAAAAABAE"),
    postedOn: varchar('postedOn')
})
export const CarImages = pgTable('carImages', {
    id: serial('id').primaryKey(),
    imageUrl: varchar('imageUrl').notNull(),
    carListingId: integer('carListingId').notNull().references(()=>CarListing.id)
})
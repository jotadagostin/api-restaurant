import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("products").del();

  await knex("products").insert([
    { name: "Four-cheese gnocchi", price: 45 },
    { name: "Chicken strips", price: 60 },
    { name: "Tilapia with capers", price: 100 },
    { name: "Beef stew", price: 75 },
    { name: "Portion of fries", price: 65 },
    { name: "Executive grilled chicken", price: 40 },
    { name: "Executive grilled tilapia", price: 39 },
    { name: "Heart of palm broth", price: 30 },
    { name: "350ml soft drink", price: 7.5 },
    { name: "440ml orange juice", price: 10 },
  ]);
}

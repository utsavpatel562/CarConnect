import { faker } from "@faker-js/faker";
function createRandowCarList() {
  return {
    name: faker.vehicle.vehicle(),
    fuelType: faker.vehicle.fuel(),
    model: faker.vehicle.model(),
    type: faker.vehicle.type(),
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9JZHWUfUOdBC9127nbz1687KS6GaxKXdLA&s",
    miles: 1000,
    gearType: "Automatic",
    price: faker.finance.amount({ min: 4000, max: 20000 }),
  };
}

const carList = faker.helpers.multiple(createRandowCarList, {
  count: 7,
});
export default { carList };

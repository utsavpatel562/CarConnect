import { faker } from "@faker-js/faker";
function createRandowCarList() {
  return {
    name: faker.vehicle.vehicle(),
    fuelType: faker.vehicle.fuel(),
    model: faker.vehicle.model(),
    type: faker.vehicle.type(),
    image:
      "https://motorshow.com.br/wp-content/uploads/sites/2/2023/03/12-bmw-ix3-m-sport.jpg",
    miles: 1000,
    gearType: "Automatic",
    price: faker.finance.amount({ min: 4000, max: 20000 }),
  };
}

const carList = faker.helpers.multiple(createRandowCarList, {
  count: 7,
});
export default carList;

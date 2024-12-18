import { carRenderTemplate } from "./carTemplate.js";

const data = {
  Lamborghini: {
    id: "Lamborghini",
    imageUrl: "/images/car-8.jpg",
    title: "Lamborghini Aventador",
    price: "500000$",
    make: "Lamborghini",
    year: "2019",
    mileage: "5000 km",
    engineType: "V8",
    transmission: "Automatic",
    hp: "700 hp",
    fuelType: "Hybrid",
  },
  Lexus: {
    id: "Lexus",
    imageUrl: "/images/car-1.jpg",
    title: "Lexus ",
    price: "500000$",
    make: "Lexus",
    year: "2019",
    mileage: "5000 km",
    engineType: "V8",
    transmission: "Automatic",
    hp: "700 hp",
    fuelType: "Hybrid",
  },
  Hyundai: {
    id: "Hyundai",
    imageUrl: "/images/car-4.jpg",
    title: "Hyundai Santa Fe ",
    price: "20000$",
    make: "Hyundai",
    year: "2020",
    mileage: "150000 km",
    engineType: "I4",
    transmission: "Automatic",
    hp: "150 hp",
    fuelType: "Gasoline",
  },
  Porshe: {
    id: "Porshe",
    imageUrl: "/images/car-10.jpg",
    title: "Porshe 911 Turbo ",
    price: "350000$",
    make: "Porshe",
    year: "2018",
    mileage: "5000 km",
    engineType: "V6",
    transmission: "Automatic",
    hp: "550 hp",
    fuelType: "Gasoline",
  },
};

const filterButton = document.getElementById("button");
const parent = document.querySelector(".card-container");

filterButton.addEventListener("click", () => {
  parent.innerHTML = '<p id="CardTitle">Featured Cars</p>';

  const checkedCheckboxes = document.querySelectorAll(
    "input[type=checkbox]:checked"
  );
  if (checkedCheckboxes.length == 0) {
    window.top.location = window.top.location;
  } else {
    checkedCheckboxes.forEach((checkbox) => {
      parent.innerHTML += carRenderTemplate(data[checkbox.id]);
    });
  }
});

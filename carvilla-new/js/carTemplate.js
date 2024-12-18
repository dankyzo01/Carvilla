export const carRenderTemplate = ({
  id,
  imageUrl,
  title,
  price,
  make,
  year,
  mileage,
  engineType,
  transmission,
  hp,
  fuelType,
}) => {
  return `
  <div class="card mb-3" id="${id}" style="max-width: 700px">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          src="${imageUrl}"
          class="img-fluid rounded-start h-100"
          alt="${title}"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <a href=""><h5 class="card-title">${title}</h5></a>
          <div class="card-text-body">
            <p class="card-text">Price: ${price}</p>
            <p class="card-text">Make: ${make}</p>
            <p class="card-text">Year: ${year}</p>
            <p class="card-text">Mileage: ${mileage}</p>
            <p class="card-text">Engine Type: ${engineType}</p>
            <p class="card-text">Transmission: ${transmission}</p>
            <p class="card-text">Horsepower: ${hp}</p>
            <p class="card-text">Fuel Type: ${fuelType}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
};

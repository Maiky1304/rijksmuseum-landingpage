/* created by maiky perlee */

const form = document.getElementById("navigation-form");
const locationInput = document.getElementById("location");

const image = document.getElementById("image");
const imageCaption = document.getElementById("imageCaption");

const north = document.getElementById("north");
const east = document.getElementById("east");
const south = document.getElementById("south");
const west = document.getElementById("west");

const directions = {
  north,
  east,
  south,
  west,
};

const images = [
  {
    title: "Voorhal",
    image: "images/interactieveroute/1.jpg",
    directions: {
      north: 2,
      east: 6,
    },
  },
  {
    title: "Ere Gallerij",
    image: "images/interactieveroute/2.jpg",
    directions: {
      north: 3,
      south: 1,
    },
  },
  {
    title: "Nachtwacht",
    image: "images/interactieveroute/3.jpg",
    directions: {
      north: 4,
      south: 2,
    },
  },
  {
    title: "Beelden Gallerij",
    image: "images/interactieveroute/4.jpg",
    directions: {
      south: 3,
    },
  },
  {
    title: "Bibliotheek",
    image: "images/interactieveroute/5.jpg",
    directions: {
      south: 6,
    },
  },
  {
    title: "Poppenhuis",
    image: "images/interactieveroute/6.jpg",
    directions: {
      north: 5,
      west: 1,
    },
  },
];

let current = images[0];
updateDirections(current);

function resetDirections() {
  Object.values(directions).forEach((el) => {
    el.style.display = "none";
  });
}

function updateDirections(data) {
  resetDirections();
  Object.keys(directions)
    .filter((key) => Object.keys(data.directions).includes(key))
    .map((key) => directions[key])
    .forEach((el) => {
      el.style.display = "block";
    });
}

[north, east, south, west].forEach((el) => {
  el.addEventListener("click", () => {
    if (!Object.keys(current.directions).includes(el.id)) return;

    const target = current.directions[el.id];
    switchRoom(target.toString());
  });
});

function switchRoom(target) {
  const index = Number.parseInt(target);
  const data = images[index - 1];
  image.src = data.image;
  image.alt = data.title;
  imageCaption.innerText = `(${index}) ${data.title}`;
  locationInput.value = "";

  current = data;
  updateDirections(current);
}

form.addEventListener("submit", (form) => {
  form.preventDefault();

  const { value } = locationInput;
  switchRoom(value);
});

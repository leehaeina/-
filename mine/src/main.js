let clothes = [
  {
    gender: "male",
    size: "small",
    object: "pants",
    src: "img/blue_p.png",
    color: "blue",
  },
  {
    gender: "female",
    size: "small",
    object: "pants",
    src: "img/blue_p.png",
    color: "blue",
  },
  {
    gender: "male",
    size: "large",
    object: "pants",
    src: "img/blue_p.png",
    color: "blue",
  },
  {
    gender: "female",
    size: "small",
    object: "skirts",
    src: "img/blue_s.png",
    color: "blue",
  },
  {
    gender: "male",
    size: "small",
    object: "tshirts",
    src: "img/blue_t.png",
    color: "blue",
  },
  {
    gender: "female",
    size: "small",
    object: "tshirts",
    src: "img/blue_t.png",
    color: "blue",
  },
  {
    gender: "male",
    size: "small",
    object: "pants",
    src: "img/yellow_p.png",
    color: "yellow",
  },
  {
    gender: "female",
    size: "small",
    object: "pants",
    src: "img/yellow_p.png",
    color: "yellow",
  },
  {
    gender: "male",
    size: "large",
    object: "pants",
    src: "img/yellow_p.png",
    color: "yellow",
  },
  {
    gender: "female",
    size: "small",
    object: "skirts",
    src: "img/yellow_s.png",
    color: "yellow",
  },
  {
    gender: "male",
    size: "small",
    object: "tshirts",
    src: "img/yellow_t.png",
    color: "yellow",
  },
  {
    gender: "female",
    size: "small",
    object: "tshirts",
    src: "img/yellow_t.png",
    color: "yellow",
  },
  {
    gender: "male",
    size: "small",
    object: "pants",
    src: "img/pink_p.png",
    color: "pink",
  },
  {
    gender: "female",
    size: "small",
    object: "pants",
    src: "img/pink_p.png",
    color: "pink",
  },
  {
    gender: "male",
    size: "large",
    object: "pants",
    src: "img/pink_p.png",
    color: "pink",
  },
  {
    gender: "female",
    size: "small",
    object: "skirts",
    src: "img/pink_s.png",
    color: "pink",
  },
  {
    gender: "male",
    size: "small",
    object: "tshirts",
    src: "img/pink_t.png",
    color: "pink",
  },
  {
    gender: "female",
    size: "small",
    object: "tshirts",
    src: "img/pink_t.png",
    color: "pink",
  },
];

const selector = [
  {
    selector: "pants",
    src: "img/blue_p.png",
  },
  {
    selector: "skirts",
    src: "img/blue_s.png",
  },
  {
    selector: "tshirts",
    src: "img/blue_t.png",
  },
  {
    selector: "blue",
    src: "img/blue_t.png",
  },
  {
    selector: "yellow",
    src: "img/yellow_t.png",
  },
  {
    selector: "pink",
    src: "img/pink_t.png",
  },
];

let nav = document.getElementById("nav");
nav.onclick = function (e) {
  let selector = e.target.id;
  const filtered = clothes.filter(
    (v) => v.object === selector || v.color === selector
  );
  console.log(filtered);
  clothesForm(filtered);
};
selector.reduce((_, cur) => {
  let navChild = document.createElement("img");
  navChild.setAttribute("src", cur.src);
  navChild.setAttribute("id", cur.selector);
  navChild.setAttribute("display", "flex");
  nav.appendChild(navChild);
  console.log();
}, "");
let section = document.getElementById("section");

function clothesForm(clothes) {
  section.innerHTML = "";
  clothes.reduce((_, cur) => {
    let oneClothe = `<figure class="cloth" >
            <img  class="clothImage" src=${cur.src}>
            <div class = "gender"> ${cur.gender} , ${cur.size} </div>
                </figure>`;

    section.innerHTML += oneClothe;
  }, "");
}
clothesForm(clothes);

console.log(clothes, selector);

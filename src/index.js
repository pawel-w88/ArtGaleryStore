import { bilderData } from "./data.js";

const dataObj = JSON.parse(bilderData);

Object.entries(dataObj).forEach((fotosCard) => {
  const section = [
    document.querySelector("#fotografie"),
    document.querySelector("#kunst"),
    document.querySelector("#graffiti"),
  ];
  fotosCard[1].map((card) => {
    section.forEach((section) => {
      if (card.type === section.id) {
        let bildInfo = `
            <div class ='card m-3'>
            <img src = ${card.image} class='card-img-top' alt= ${card.title} height= 200px
 />
            <div>
            <h3>${card.title}</h3>
            <h4>${card.author}</h4>
            <h4>${card.size}</h4>
            </div>
            </div>
            `;
        section.insertAdjacentHTML("afterbegin", bildInfo);
      }
    });
  });
});

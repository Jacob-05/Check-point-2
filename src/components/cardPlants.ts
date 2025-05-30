import { Plant } from '../flux/Store';

class PlantCard extends HTMLElement {
  plant!: Plant;

  connectedCallback() {
    this.render();
  }

  set data(plant: Plant) {
    this.plant = plant;
    this.render();
  }

  render() {
    if (!this.plant) return;

    this.innerHTML = `
      <style>
        .card {
          border: 1px solid #ccc;
          border-radius: 12px;
          padding: 16px;
          width: 200px;
          background: white;
          box-shadow: 2px 2px 6px rgba(0,0,0,0.1);
        }
        img {
          width: 100%;
          border-radius: 8px;
        }
        h3 {
          margin: 8px 0 4px;
        }
        p {
          margin: 0;
          color: #555;
        }
      </style>
      <div class="card">
        <img src="${this.plant.image}" alt="${this.plant.commonName}">
        <h3>${this.plant.commonName}</h3>
        <p><em>${this.plant.scientificName}</em></p>
      </div>
    `;
  }
}

customElements.define('plant-card', PlantCard);

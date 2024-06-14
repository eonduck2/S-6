import resources from "./resources.js";

const basicUrl = `https://jsonplaceholder.typicode.com/`;

export default () => {
  const xhr = new XMLHttpRequest();
  xhr.open(`GET`, `${basicUrl}${resources.albums}`, true);
  xhr.addEventListener(`load`, () => {
    if (xhr.status === 200) {
      const result = JSON.parse(xhr.responseText);

      const pokemon = result.results;

      const root = document.getElementById(`root`);
      const ul = document.createElement(`ul`);
      pokemon.forEach((pokemon) => {
        const li = document.createElement(`li`);
        li.textContent = pokemon.name;
        ul.appendChild(li);
      });
      root.appendChild(ul);
    }
  });

  xhr.send();
};

getPokemonAJAX();

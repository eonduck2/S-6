import resources from "./modules/AJAX/resources.js";
import xhr from "./modules/AJAX/ajax.js";
import title from "./modules/components/title.js";
import button from "./modules/components/button.js";
import assembling from "./modules/assembling.js";
import renderer from "./modules/renderer.js";
import component from "./modules/components/component.js";

window.onload = () => {
  const root = document.getElementById(`root`);
  renderer(root, button());
  const contentButton = document.querySelector(`button`);

  contentButton.onclick = async () => {
    const contents = await xhr(resources.albums);
    const contentsArr = contents.map((obj) => {
      return title(component(`li`, obj.title));
    });
    renderer(root, contentsArr.join(""));
  };
};

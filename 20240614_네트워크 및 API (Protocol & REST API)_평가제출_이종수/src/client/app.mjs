import resources from "./modules/AJAX/resources.js";
import xhr from "./modules/AJAX/ajax.js";

window.onload = async () => {
  await xhr(resources.albums);
};

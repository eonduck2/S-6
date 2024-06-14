import resources from "./modules/AJAX/resources.js";
import xhr from "./modules/AJAX/ajax.js";
import title from "./modules/components/title.js";

window.onload = async () => {
  const test = await xhr(resources.albums);
  const elTitle = title(`li`);
  console.log(elTitle);
};

import resources from "./modules/AJAX/resources.js";
import xhr from "./modules/AJAX/ajax.js";

console.log(
  xhr(resources.albums).then((res) => {
    if (res.ok) {
      console.log(res);
      return res.json();
    }
  })
);

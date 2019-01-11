import 'babel-polyfill';
import axios from 'axios';

async function init() {
  const { data } = await axios.get('src/config.json');
  const loadedComponents = await loadComponents(data.componentsToLoad);
  const instances = loadedComponents.map(loadedComponent => new loadedComponent());
  console.log('instances', instances);
}

async function loadComponents(componentsToLoad) {
  componentsToLoad = componentsToLoad.map(component => import(/* webpackChunkName: "components/[request]" */ `./components/${component}`));
  const modules = await Promise.all(componentsToLoad);
  return modules.map(module => module.default);
}

init();
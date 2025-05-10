import './pages/HomePage.ts';
import './pages/ModifyGardenPage.ts';
import './pages/AdminPage.ts';
import { appStore } from '../flux/Store';

const root = document.getElementById('app')!;

function render() {
  const state = appStore.getState();
  root.innerHTML = '';

  switch (state.currentPage) {
    case 'home':
      root.appendChild(document.createElement('home-page'));
      break;
    case 'modifyGarden':
      root.appendChild(document.createElement('modify-garden-page'));
      break;
    case 'admin':
      root.appendChild(document.createElement('admin-page'));
      break;
  }
}

appStore.subscribe(render);
render();
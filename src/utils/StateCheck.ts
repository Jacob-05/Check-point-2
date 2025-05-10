import { T } from "../flux/Store";
import { appStore } from '../flux/Store';


const goToAdmin = () => {
  appStore.setState({ currentPage: 'admin' });
};

export function isStateValid(state: T): boolean {
    // TODO: cambia algo aqui
    return false
}

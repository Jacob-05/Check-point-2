import { AppDispatcher, Action } from './Dispatcher';

export type state = {};

type Listener = (state: state) => void;

class Store<T> {
  private state: T;
  private listeners: Listener[] = [];

  constructor(initialState: T) {
    this.state = initialState;
  }

  getState(): T {
    return this.state;
  }

  setState(newState: Partial<T>) {
    this.state = { ...this.state, ...newState };
    this.listeners.forEach((l) => l());
  }

  subscribe(listener: Listener) {
    this.listeners.push(listener);
    return () => this.listeners = this.listeners.filter(l => l !== listener);
  }
}

export const appStore = new Store({
  currentPage: "home", 
  plants: [],         
  garden: {
    name: "Mi jardín",
    plantIds: [],
  }
});

export const store = new Store();
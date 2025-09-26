import { EventBus } from './event-bus.engine';

let eventBus: EventBus;

export const getEventBus = () => {
  if (!eventBus) {
    eventBus = new EventBus();
  }
  return eventBus;
};

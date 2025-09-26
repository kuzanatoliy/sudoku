import { beforeEach, describe, expect, it, vi } from 'vitest';

import { EventBus } from './event-bus.engine';

describe('EventBus', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('Should create event bus', () => {
    const eventBus = new EventBus();
    expect(eventBus.subscribe).toBeDefined();
    expect(eventBus.unsubscribe).toBeDefined();
    expect(eventBus.trigger).toBeDefined();
  });

  it('Should validate workflow', () => {
    const eventBus = new EventBus();
    const eventSpy = vi.fn();
    eventBus.subscribe('test event', eventSpy);
    expect(eventSpy).not.toBeCalled();
    eventBus.trigger('test event');
    expect(eventSpy).toBeCalled();
    eventSpy.mockClear();
    eventBus.unsubscribe('test event', eventSpy);
    expect(eventSpy).not.toBeCalled();
    eventBus.trigger('test event');
    expect(eventSpy).not.toBeCalled();
  });

  it('Should validate workflow with data', () => {
    const eventBus = new EventBus();
    const eventSpy = vi.fn();
    eventBus.subscribe('test event', eventSpy);
    expect(eventSpy).not.toBeCalled();
    eventBus.trigger('test event', 'test1', 'test2');
    expect(eventSpy).toBeCalledWith('test1', 'test2');
    eventSpy.mockClear();
    eventBus.unsubscribe('test event', eventSpy);
    expect(eventSpy).not.toBeCalled();
    eventBus.trigger('test event', 'test1', 'test2');
    expect(eventSpy).not.toBeCalled();
  });

  it('Should unsubscribe not existed event', () => {
    const eventBus = new EventBus();
    let error = null;
    try {
      eventBus.unsubscribe('test event', () => {});
    } catch (error_) {
      error = error_;
    }
    expect(error).toBeNull();
  });

  it('Should trigger not existed event', () => {
    const eventBus = new EventBus();
    let error = null;
    try {
      eventBus.trigger('test event');
    } catch (error_) {
      error = error_;
    }
    expect(error).toBeNull();
  });
});

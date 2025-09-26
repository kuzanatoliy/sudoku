import { beforeEach, describe, expect, it, vi } from 'vitest';

import { getEventBus } from './event-bus';

describe('eventBus', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('Should get the same event bus object', () => {
    const eventBus1 = getEventBus();
    expect(eventBus1.subscribe).toBeDefined();
    expect(eventBus1.unsubscribe).toBeDefined();
    expect(eventBus1.trigger).toBeDefined();
    const eventBus2 = getEventBus();
    expect(eventBus2).toBe(eventBus1);
  });
});

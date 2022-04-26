// RENDER A CALENDAR

import { Heap } from "collections/heap";
// Figure 14.1: A set of nine events. The earliest starting event begins at time 1;
// the latest ending event ends at time 17.
// The maximum number of concurrent events is 3, e.g., (E1, E5, E8) as well as others.

export class Event {
  start: number;
  finish: number;

  constructor(start: number, finish: number) {
    this.start = start;
    this.finish = finish;
  }
}

export function findMaxSimultaneousEvents(events: Event[]) {
  events.sort((a, b) => (b.start = a.start));

  const minHeapBasedFinish = new Heap(
    [],
    null,
    (a: Event, b: Event) => b.finish - a.finish
  );

  minHeapBasedFinish.add(events[0]);

  let max = 1;

  events.forEach((event, idx) => {
    if (idx === 0) return;

    minHeapBasedFinish.add(event);

    while (
      minHeapBasedFinish.length > 0 &&
      minHeapBasedFinish.peek().finish <= event.start
    ) {
      minHeapBasedFinish.pop();
    }

    max = Math.max(max, minHeapBasedFinish.length);
  });

  return max;
}

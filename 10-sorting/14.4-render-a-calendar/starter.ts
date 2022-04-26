// RENDER A CALENDAR

// Figure 14.1: A set of nine events. The earliest starting event begins at time 1;
// the latest ending event ends at time 17.
// The maximum number of concurrent events is 3, e.g., (El, E5, E8) as well as others.

export class Event {
  start: number;
  finish: number;

  constructor(start: number, finish: number) {
    this.start = start;
    this.finish = finish;
  }
}

export function findMaxSimultaneousEvents(A: Event[]) {}

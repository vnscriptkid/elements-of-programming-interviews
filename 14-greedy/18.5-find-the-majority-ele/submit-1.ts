// FIND THE MAJORITY ELEMENT

// Several applications require identification of elements in a sequence which occur
// more than a specified fraction of the total number of elements in the sequence.
// For example, we may want to identify the users using excessive network bandwidth
// or IP addresses originating the most Hypertext Transfer Protocol (HTTP) requests.
// Here we consider a simplified version of this problem.

// You are reading a sequence of strings. You know a priori that
// more than half the strings are repetitions of a single string (the "majority element")
// but the positions where the majority element occurs are unknown.
// Write a program that makes a single pass over the sequence and identifies the majority element.
// For example, if the input is (b,a,c,a,a,b,a,a,c,a),
// then a is the majority element (it appears in 6 out of the 10 places).

export function majoritySearch(sequence: number[]): number {
  let candidate = sequence[0];
  let count = 1;

  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] === candidate) {
      count++;
    } else if (count > 0) count--;
    else {
      count = 1;
      candidate = sequence[i];
    }
  }

  return candidate;
}

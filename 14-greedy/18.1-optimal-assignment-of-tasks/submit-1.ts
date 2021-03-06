// COMPUTE AN OPTIMUM ASSIGNMENT OF TASKS

// We consider the problem of assigning tasks to workers.
// Each worker must be assigned exactly two tasks.
// Each task takes a fixed amount of time. Tasks are independent,
// i.e., there are no constraints of the form "Task 4 cannot start before Task 3 is completed." Any task can be assigned to any worker.
// We want to assign tasks to workers so as to minimize how long it takes before all tasks are completed.

// For example, if there are 6 tasks whose durations are 5, 2, 1, 6, 4, 4 hours,
// then an optimum assignment is to give the first two tasks (i.e., the tasks with duration 5 and 2) to one worker, the next two (1 and 6) to another worker, and the last two tasks (4 and 4) to the last worker. For this assignment, all tasks will finish after max(5 + 2, 1 + 6, 4 + 4) = 8 hours.

// Design an algorithm that takes as input a set of tasks and returns an optimum assignment.

// For example, if the durations are 5, 2, 1, 6, 4, 4, then on sorting we get 1, 2, 4, 4, 5, 6, and the pairings are (1,6), (2,5), and (4,4).

export function optimumTaskAssignment(taskDurations: number[]) {
  taskDurations.sort();

  const pairs: any = [];

  for (
    let start = 0, end = taskDurations.length - 1;
    start < end;
    start++, end--
  ) {
    pairs.push([taskDurations[start], taskDurations[end]]);
  }

  return pairs;
}

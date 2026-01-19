var merge = function (intervals) {
  // Handle edge case: empty array
  if (intervals.length <= 1) {
    return intervals;
  }

  // Step 1: Sort intervals by start time
  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [];
  let prev = intervals[0]; // Current merged interval

  // Step 2: Iterate through intervals
  for (let i = 1; i < intervals.length; i++) {
    let curr = intervals[i];

    // Step 3: Check for overlap
    if (curr[0] <= prev[1]) {
      // Overlap: extend current interval
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      // No overlap: save previous and start new
      merged.push(prev);
      prev = curr;
    }
  }

  // Step 4: Add final interval
  merged.push(prev);
  return merged;
};

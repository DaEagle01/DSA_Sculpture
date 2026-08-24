# Glossary

Terms worth having a fixed definition for, added as they come up.

- **Time complexity.** How the number of operations grows as input size grows. Measured in operation count, not wall-clock time, since a faster computer doesn't make an algorithm better.
- **Space complexity.** How much extra memory an algorithm needs as input size grows, on top of the input itself.
- **Amortized complexity.** Average cost per operation across a sequence, even though some operations are expensive. A dynamic array's append is amortized O(1) even though it occasionally resizes at O(n).
- **In-place.** An algorithm that modifies the input using O(1) extra space instead of allocating a new structure.
- **Stable sort.** A sort that preserves the relative order of equal elements.
- **Hashable.** An object with a fixed hash value for its lifetime, so it can be used as a dict key or set member. In Python that means immutable types like tuples, not lists.
- **Memoization.** Caching the results of expensive function calls, usually recursive ones, so repeated calls with the same input return instantly.
- **Invariant.** A condition that stays true throughout an algorithm's execution, used to reason about correctness. "The left part of the array is always sorted" is a typical invariant.
- **Greedy.** Making the locally optimal choice at each step. Only valid when that choice provably leads to a globally optimal result.
- **Backtracking.** Trying a choice, recursing, then undoing the choice if it doesn't lead to a solution.
- **Divide and conquer.** Splitting a problem into independent subproblems, solving each, then combining the results.
- **Two's complement.** How signed integers are represented in binary. Comes up in bit manipulation problems.

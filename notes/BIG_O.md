# Big O reference

## Best, average, worst case

Three Greek-letter names cover the three cases, and Big O specifically means worst case:

- Omega (Ω) = best case
- Theta (Θ) = average case
- Omicron / Big O = worst case

There's no such thing as "the best-case Big O". If someone asks for that, they mean Omega.

## Complexity classes, best to worst

| Notation | Name | Example |
|---|---|---|
| O(1) | constant | array index access |
| O(log n) | logarithmic | binary search |
| O(n) | linear | single loop |
| O(n log n) | linearithmic | merge sort, heap sort |
| O(n^2) | quadratic | nested loop over same input |
| O(2^n) | exponential | naive recursive fibonacci, subsets |
| O(n!) | factorial | permutations |

## Python built-ins

| Structure | Operation | Complexity |
|---|---|---|
| `list` | index, append, pop (end) | O(1) |
| `list` | pop(0), insert(0, x) | O(n) |
| `list` | `x in list` | O(n) |
| `dict` / `set` | get, set, `in` | O(1) average |
| `collections.deque` | append/pop either end | O(1) |
| `heapq` | push, pop | O(log n) |
| `sorted()` / `list.sort()` | | O(n log n) |
| `bisect.bisect_left` | | O(log n) |

Append/pop at the end is O(1) because nothing else in the list has to move. Insert/pop anywhere else is O(n) because every following item has to be re-indexed (shifted one slot).

## JavaScript built-ins

| Structure | Operation | Complexity |
|---|---|---|
| `Array` | index, push, pop | O(1) |
| `Array` | shift, unshift, splice(middle) | O(n) |
| `Array` | `includes`, `indexOf` | O(n) |
| `Map` / `Set` | get, set, has | O(1) average |
| `Array.sort()` | | O(n log n) |

## Rules of thumb

- Drop constants: two sequential O(n) loops are O(2n), which simplifies to O(n). It doesn't matter if the constant is 2, 10, or 100.
- Drop non-dominant terms: O(n^2 + n) simplifies to O(n^2). Once n is large, the n^2 term dwarfs the standalone n, so the lower-order term is dropped.
- Nested loops over the same input multiply: O(n) inside O(n) is O(n^2).
- Loops in sequence add, not multiply: O(n) then O(m) is O(n + m), not O(n * m).
- Different parameters don't collapse into one variable: a loop of length `a` followed by a loop of length `b` is O(a + b), not O(n). Nested, they're O(a * b). You can only simplify to O(n) when both loops run over the same input.
- A hash map trades O(n) extra space for turning O(n) lookups into O(1).
- Recursion's time complexity is branches^depth unless memoized.

See also: [bigocheatsheet.com](https://www.bigocheatsheet.com/) for a fuller reference on data structure and sorting algorithm complexities.

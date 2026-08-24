# Code templates

Written in Python for readability. Same shape applies in JS.

## Two pointers (opposite ends)

```python
left, right = 0, len(arr) - 1
while left < right:
    if condition(arr[left], arr[right]):
        left += 1
    else:
        right -= 1
```

## Sliding window (variable size)

```python
left = 0
window_state = {}
for right, value in enumerate(arr):
    # expand: add value to window_state
    while window_is_invalid(window_state):
        # shrink: remove arr[left] from window_state
        left += 1
    # window [left, right] is valid here
```

## Fast & slow pointers

```python
slow = fast = head
while fast and fast.next:
    slow = slow.next
    fast = fast.next.next
    if slow is fast:
        return True  # cycle found
```

## Binary search on answer

```python
lo, hi = min_possible, max_possible
while lo < hi:
    mid = (lo + hi) // 2
    if feasible(mid):
        hi = mid
    else:
        lo = mid + 1
return lo
```

## BFS (grid or graph)

```python
from collections import deque

queue = deque([start])
visited = {start}
steps = 0
while queue:
    for _ in range(len(queue)):
        node = queue.popleft()
        if node == target:
            return steps
        for neighbor in get_neighbors(node):
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
    steps += 1
```

## DFS / backtracking

```python
def backtrack(path, choices):
    if is_solution(path):
        results.append(path[:])
        return
    for choice in choices:
        path.append(choice)
        backtrack(path, remaining_choices(choices, choice))
        path.pop()
```

## Dynamic programming (bottom-up, 1D)

```python
dp = [base_case] * (n + 1)
for i in range(1, n + 1):
    dp[i] = transition(dp[i - 1], ...)
return dp[n]
```

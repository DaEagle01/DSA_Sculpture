# Gotchas

| Topic | Gotcha | Why |
|---|---|---|
| Big O | A function with two independent parameters, say `a` and `b`, each looped over once, is O(a + b), not O(n) | You can only collapse two loops into one variable when they run over the same input. `a` and `b` are unrelated sizes, there's nothing to combine them into. Nested instead of sequential, it's O(a * b), not O(n^2). See [BIG_O.md](./BIG_O.md#rules-of-thumb). |
| Big O | There's no "best-case Big O" | Big O means worst case by definition. Best case is Omega, average case is Theta. See [BIG_O.md](./BIG_O.md#best-average-worst-case). |
| BST | "Bigger right, smaller left" doesn't say what to do with duplicates | Equal-value handling is a convention you pick (reject, or always go one direction), not derivable from the comparison rule. `insert` and `contains` must agree on it or lookups can silently fail. See [src/python/tree/binary_search_tree.py](../src/python/tree/binary_search_tree.py). |

# Gotchas

| Topic | Gotcha | Why |
|---|---|---|
| Big O | A function with two independent parameters, say `a` and `b`, each looped over once, is O(a + b), not O(n) | You can only collapse two loops into one variable when they run over the same input. `a` and `b` are unrelated sizes, there's nothing to combine them into. Nested instead of sequential, it's O(a * b), not O(n^2). See [BIG_O.md](./BIG_O.md#rules-of-thumb). |
| Big O | There's no "best-case Big O" | Big O means worst case by definition. Best case is Omega, average case is Theta. See [BIG_O.md](./BIG_O.md#best-average-worst-case). |

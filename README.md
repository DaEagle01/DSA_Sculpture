# DSA_Sculpture

Data structures and algorithms practice, split by language: JavaScript/TypeScript and Python. Mostly LeetCode problems, plus a few from-scratch implementations (linked lists, sorting, etc).

## Structure

```
src/
  javascript-typescript/   own package.json, tsconfig.json, node_modules
    src/                   JS/TS implementations + LeetCode solutions
  python/                  Python implementations + LeetCode solutions
```

Each language folder is self-contained. Its dependency manifest and config live inside it, not at the repo root.

## Running code

### JavaScript/TypeScript

From `src/javascript-typescript/`:

```
npm install
npx ts-node "src/path/to/file.ts"
node "src/path/to/file.js"
```

### Python

From the repo root, or wherever the file lives:

```
python "src/python/path/to/file.py"
```

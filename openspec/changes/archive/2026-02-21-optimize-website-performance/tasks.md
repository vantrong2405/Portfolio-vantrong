## 1. Setup & Discovery

- [x] 1.1 Use React DevTools Profiler to measure the rendering time of the Showcase list and `ProjectCard` components.
- [x] 1.2 Identify specific props that are causing `ProjectCard` to unnecessarily re-render on scroll or hover.

## 2. Component Optimization

- [x] 2.1 Refactor `ProjectCard.tsx` to use `React.memo` to prevent re-renders when props have not changed.
- [x] 2.2 In the parent component rendering the grid, wrap any inline callback functions (e.g., event handlers) passed to `ProjectCard` with `useCallback`.
- [x] 2.3 Use `useMemo` for derived data or expensive calculations within the render loop of the list or `ProjectCard`.

## 3. Asset Loading & Rendering

- [x] 3.1 Verify that the `Image` or `img` tags within `ProjectCard` use lazy loading where appropriate.
- [x] 3.2 Ensure the mapping of project cards uses a stable and unique `key` prop, avoiding array indices.
- [x] 3.3 Verify using the Profiler that the excessive re-renders have been eliminated and 60fps scroll is maintained.

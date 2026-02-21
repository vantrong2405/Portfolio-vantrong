## Why

The current website is experiencing performance issues and feels "laggy" to the user. This degrades the user experience and can negatively impact engagement. Optimizing the frontend is necessary to ensure a smooth, responsive experience, especially given its interactive nature.

## What Changes

- Identify and resolve performance bottlenecks in the React application.
- Implement React performance best practices (memoization, lazy loading, code splitting).
- Optimize assets (images, fonts, heavy dependencies).
- Review and optimize animations or heavy UI rendering (e.g. Three.js scenes, framer-motion).

## Capabilities

### New Capabilities
- `performance-monitoring`: Implement basic tools or configurations to keep track of site performance.

### Modified Capabilities
- `showcase`: Optimize the showcase/projects section (specifically list rendering and ProjectCard components).

## Impact

- Improved page load speed and interactivity (Core Web Vitals).
- Changes to components (adding `React.memo`, `useMemo`, `useCallback` where necessary).
- Reduced bundle size through code splitting.

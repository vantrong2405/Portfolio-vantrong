## Context

The current iteration of the portfolio website is experiencing performance degradation, specifically highlighted by "laggy" interactions. The user was inspecting `ProjectCard.tsx`, suggesting that the showcase components might be a primary source of this lag. It is common for React single-page applications to suffer from performance issues due to widespread unnecessary re-renders, especially when rendering lists of complex components without proper memoization.

## Goals / Non-Goals

**Goals:**
- Identify and eliminate unnecessary React re-renders, particularly within the Showcase feature and `ProjectCard` component.
- Implement React optimization hooks (`useMemo`, `useCallback`) to stabilize references.
- Utilize `React.memo` to prevent re-rendering of pure components.
- Analyze and optimize asset loading if it contributes to the lag.

**Non-Goals:**
- Changing the visual design or user experience of the application.
- Rewriting the application or migrating to another library/framework.
- Modifying the underlying data structure of the projects shown.

## Decisions

- **Selective Memoization**: We will strategically apply `React.memo` to the `ProjectCard` component because it is rendered linearly in a list, making it highly susceptible to parent-triggered re-renders. 
- **Stable Event Handlers**: If the parent component passes down any functions (e.g., `onClick`, `onHover`), they must be wrapped in `useCallback` to prevent breaking the `ProjectCard`'s memoization.
- **State isolation**: We will ensure that rapidly updating states (like scroll positions or hover coordinates) are either localized to the components that need them or optimized to avoid cascading re-renders across the entire layout.

## Risks / Trade-offs

- **Risk**: Introducing bugs due to stale closures if dependency arrays in `useMemo` or `useCallback` are incorrectly specified.
- **Mitigation**: Rely strictly on React hook linting rules and carefully review dependency arrays.
- **Risk**: The performance gain from memoization is offset by the cost of reference equality checks.
- **Mitigation**: We will avoid wrapping extremely simple, fast-rendering components or primitives, focusing strictly on complex sub-trees like cards with hover effects or images.

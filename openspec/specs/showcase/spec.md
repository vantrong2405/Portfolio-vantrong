## ADDED Requirements

### Requirement: Product Showcase Grid
A responsive grid of project cards showcasing technical competence through specific projects like "Neko Cinema" or "Shopee Clone".

#### Scenario: Project Card Interactions
- **WHEN** a user hovers over a project card
- **THEN** the image should scale slightly, and the border color should brighten to Ruby Red.

#### Scenario: Technical Metadata
- **WHEN** a project card is displayed
- **THEN** it must include a title, a short technical description (monospace font), a "Tech Matrix" of tags, and action buttons for "Live Demo" and "View Source".

#### Scenario: Visual Branding
- **WHEN** the showcase is active
- **THEN** it should include a "System Progress" indicator (e.g., "NEARLY 1 YEAR Experience") as a highlighted block.

### Requirement: High Performance Showcase Grid
The showcase grid and its child components MUST render efficiently to avoid UI lag during scrolling and interaction.

#### Scenario: Scroll Performance
- **WHEN** a user scrolls through the list of project cards
- **THEN** the system MUST maintain high frame rates without noticeable jank or delayed rendering.

#### Scenario: Memoized Renders
- **WHEN** parent components update their state (e.g., scroll position, global context)
- **THEN** individual project cards MUST NOT re-render indiscriminately unless their specific inputs (props) have changed.

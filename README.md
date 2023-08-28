# CarMaster

## Tech Stack

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Typescript](https://www.typescriptlang.org/) - TypeScript is JavaScript with syntax for types.
- [Redux Toolkit](https://redux-toolkit.js.org/) - Redux Toolkit is a set of tools that helps simplify Redux
  development.
- [SCSS](https://sass-lang.com/) [(BEM)](https://en.bem.info/methodology/) - Sass is the most mature, stable, and
  powerful professional grade CSS extension language in the world.
- [Stroybook](https://storybook.js.org/) - Storybook is a frontend workshop for building UI components and pages in
  isolation.
- [Loki](https://loki.js.org/) - Loki makes it easy to test your Storybook project for visual regressions.
- [Jest](https://jestjs.io/) - Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - The React Testing Library is
  a very light-weight solution for testing React components
- [Webpack](https://webpack.js.org/) - Webpack is a free and open-source module bundler for JavaScript. It is made
  primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images if the corresponding
  loaders are included.
- [Eslint](https://eslint.org/) - ESLint statically analyzes your code to quickly find problems.
- [Prettier](https://prettier.io/) - An opinionated code formatter
- [Stylelint](https://stylelint.io/) - A mighty CSS linter that helps you avoid errors and enforce conventions.

## Installation

**To run the project you need the following tools:**

- **NodeJs** version 16+
- You must have **yarn** installed ( development is done using yarn, not npm )
- **Docker** ( to run **Loki** )

## Run Locally

1. Clone the project
2. Go to the project directory

    ```bash
    cd carmaster-fe
    ```

3. In case you don't have **yarn** installed, run the next command ( If you have yarn installed you can go to the next
   step ):
    ```bash
    npm install --global yarn 
    ```

4. Run the following command in the terminal to install the dependencies from package.json:

    ```bash
    yarn
    ```

5. Start the server

    ```bash
    yarn start
    ```

## Running Tests

### [Jest README](./config/jest/JEST.md)

### [Storybook README](./config/storybook/STORYBOOK.md)

### [Loki README](./.loki/LOKI.md)

## Feature-Sliced Design Architecture

Feature-Sliced Design is an architectural approach for structuring front-end projects, focused on organizing code around
features rather than following traditional structural patterns. This approach allows for better maintainability,
scalability, and modularity within a project. The following sections will provide information on each layer of the
Feature-Sliced Design architecture, including their purpose, the levels they may use, and the components they should
contain.

### Layers

#### 1. App Layer

The App layer is the top-level layer of the application and is responsible for managing the global configuration,
routing, and initial rendering of the application. It usually contains:

* Main application entry point
* Global configuration settings
* Route definitions
* High-level application layout

Inside this layer the following layers can be used: **pages**, **widgets**, **features**, **entities**, **shared**.

#### 2. Pages Layer

The Pages layer is responsible for composing features and entities into cohesive user interfaces. Pages act as the
primary entry points for users interacting with the application. Each page typically includes:

* Page-specific components
* Page-specific layouts
* Composition of features and entities

Inside this layer the following layers can be used: **widgets**, **features**, **entities**, **shared**.

### 3. Widgets Layer

The Widgets layer is dedicated to smaller, self-contained components that can be embedded within features or pages.
Widgets often encapsulate complex functionality or integrations, providing a simplified interface for consumption.
Examples of widgets may include:

* Interactive visualizations
* Third-party integrations (e.g., maps, social media feeds)
* Self-contained UI components (e.g., date pickers, autocomplete inputs)

Inside this layer the following layers can be used: **features**, **entities**, **shared**.

#### 4. Features Layer

The Features layer consists of self-contained units of functionality that can be combined to create the overall
application experience. Each feature is organized around a specific domain or user-facing functionality. Features may
include:

* Local state management
* Feature-specific components and layouts
* Feature-specific logic and data handling
* Feature-specific API integrations

Inside this layer the following layers can be used: **entities**, **shared**.

#### 5. Entities Layer

The Entities layer is responsible for managing the application's data structures and business logic. This includes:

* Data models and schemas (e.g., Car, User)
* API integrations
* Business logic (e.g., validation, transformations)
* Services (e.g., data fetching, state management)

Inside this layer the following layers can be used: **entities**, **shared**.

#### 6. Shared Layer

The Shared layer contains reusable components, utilities, and configurations that are used across multiple features or
other layers of the application. This layer may include:

* UI components (e.g., buttons, form elements)
* Utility functions and libraries
* Shared configuration settings
* Shared services (e.g., authentication, localization)

Inside this layer the following layers can be used: **shared**,

## Color Reference

| Color             | Hex                                                                |
|-------------------|--------------------------------------------------------------------|
| white             | ![#fff](https://via.placeholder.com/10/ffffff?text=+) `#fff`       |
| aqua              | ![#64ccc9](https://via.placeholder.com/10/64ccc9?text=+) `#64ccc9` |
| turquoise-blue    | ![#00a9ce](https://via.placeholder.com/10/00a9ce?text=+) `#00a9ce` |
| sf-brand-blue     | ![#0b5cab](https://via.placeholder.com/10/0b5cab?text=+) `#0b5cab` |
| char-fourth-col   | ![#dee1e2](https://via.placeholder.com/10/dee1e2?text=+) `#dee1e2` |
| grey-1            | ![#999](https://via.placeholder.com/10/999?text=+) `#999`          |
| grey-2            | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) `#f8f8f8` |
| grey-3            | ![#f4f2f2](https://via.placeholder.com/10/f4f2f2?text=+) `#f4f2f2` |
| grey-4            | ![#eaeaea](https://via.placeholder.com/10/eaeaea?text=+) `#eaeaea` |
| pinkish-grey      | ![#ccc](https://via.placeholder.com/10/ccc?text=+) `#ccc`          |
| pinkish-grey-two  | ![#bfbfbf](https://via.placeholder.com/10/bfbfbf?text=+) `#bfbfbf` |
| grey              | ![#5c6770](https://via.placeholder.com/10/5c6770?text=+) `#5c6770` |
| dark-blue-grey    | ![#49535c](https://via.placeholder.com/10/49535c?text=+) `#49535c` |
| input-text-colour | ![#999](https://via.placeholder.com/10/999?text=+) `#999`          |
| silver            | ![#bec2c6](https://via.placeholder.com/10/bec2c6?text=+) `#bec2c6` |
| sick-green        | ![#b8c62a](https://via.placeholder.com/10/b8c62a?text=+) `#b8c62a` |
| green             | ![#c2d210](https://via.placeholder.com/10/c2d210?text=+) `#c2d210` |
| sun-yellow        | ![#ffc72e](https://via.placeholder.com/10/ffc72e?text=+) `#ffc72e` |
| orange            | ![#dd8340](https://via.placeholder.com/10/dd8340?text=+) `#dd8340` |
| green             | ![#2e844a](https://via.placeholder.com/10/2e844a?text=+) `#2e844a` |
| jungle-green      | ![#04844b](https://via.placeholder.com/10/04844b?text=+) `#04844b` |
| magenta           | ![#b4458d](https://via.placeholder.com/10/b4458d?text=+) `#b4458d` |
| lighter-red       | ![#f8485e](https://via.placeholder.com/10/f8485e?text=+) `#f8485e` |
| red               | ![#eb0c28](https://via.placeholder.com/10/eb0c28?text=+) `#eb0c28` |
| black             | ![#000](https://via.placeholder.com/10/000?text=+) `#000`          |

## Screenshots

![App Screenshot](.loki/reference.png)

## Documentation

todo
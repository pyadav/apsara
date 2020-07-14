# Apsara
**A Design System for Testimonial project**

This project contains a combination of:
* [Storybook](https://storybook.js.org) - The UI environment for developing React components
* [Jest](https://jestjs.io/) and [React Testing Library](https://github.com/testing-library/react-testing-library) enabling testing of the components
* [Rollup](https://rollupjs.org) - Module bundler that bundles and transpile the components.
* [TypeScript](https://www.typescriptlang.org/) - Used to transpile code into javascript

### What does it do?
* It lets you develop your React components in isolation
* It serves as documentation of your components for designers and other developers
* It bundles all your components developed with Storybook into one single portable dependency that you can inject into your app.
* It will publish as an internal (or external) NPM registry as a single package

### Usage
#### Storybook
1. Run `npm install`
2. Run `npm run storybook` in order to run Storybook, visit localhost:6006

You can also build a static version of Storybook (that could be deployed to some shared location) by running `npm run storybook:export`

#### Rollup - building package
* `npm run build:dev` - builds a package in development mode (i.e. no minifying and uglyfying)(yet to implemente)
* `npm run build:dev:watch` - same as above, but is watching changes and rebuilds immediately after one is found (yet to implemente)
* `npm run build` - builds a production package, which can be found in `/build` folder of your app

#### Testing
* `npm run test` - Run the test locally
* `npm run test:watch` - Re-run test whenever a file is changed


### Generating New Components

I've included a handy NodeJS util file under `util` called `create-component.js`. Instead of copy pasting components to create a new component, you can instead run this command to generate all the files you need to start building out a new component. To use it:

```
npm run generate YourComponentName
```

This will generate:

```
/src
  /YourComponentName
    YourComponentName.tsx
    YourComponentName.stories.tsx
    YourComponentName.test.tsx
    YourComponentName.types.ts
    YourComponentName.Styles.ts
```

The default templates for each file can be modified under `util/templates`.

Don't forget to add the component to your `index.ts` exports if you want the library to export the component!


### Storybook and Rollup configuration
Storybook is awesome tool. And Rollup is an awesome bundler. But combined together they are twice as awesome!

Storybook itself is easily configurable and can be adjusted to your needs with a bunch of plugins and configuration files.
The instance of Storybook housed in this project is additionally preconfigured with the most useful addons. This includes:
* Better UX (elements positioning, library version displaying, better elements hierarchy handling)
* `info` plugin - every component gets automatically created documentation page with props info etc. You can also include your own README
* `knobs` plugin - lets you easily configure the component before injecting it into your application
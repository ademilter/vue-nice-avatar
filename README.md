# vue-nice-avatar

[![Version](http://img.shields.io/npm/v/vue-nice-avatar.svg)](https://www.npmjs.org/package/vue-nice-avatar)
[![npm download][download-image]][download-url]

[download-image]: https://img.shields.io/npm/dm/vue-nice-avatar.svg?style=flat-square
[download-url]: https://npmjs.org/package/vue-nice-avatar

## Online editor / preview

- https://vue-nice-avatar.vercel.app/

## Assets

- Designer / Figma files: [Avatar Illustration System](https://www.figma.com/community/file/829741575478342595)

## Installation

```sh
yarn add vue-nice-avatar
```

## Usage

1. Import the component

   ```js
   import NiceAvatar from "vue-nice-avatar";
   ```

2. Render the component with props
   ```jsx
   <NiceAvatar />
   ```

## Options

The options can be passed into genConfig or as React props

| key          | type             | default | accept                                                                      |
| ------------ | ---------------- | ------- | --------------------------------------------------------------------------- |
| `size`       | string or number | 120     |                                                                             |
| `bgColor`    | string           | random  |                                                                             |
| `faceColor`  | string           | random  |                                                                             |
| `eye`        | string           | random  | circle, oval, smile, shadow                                                 |
| `eyeBrow`    | string           | random  | none, eyebrows-up, eyebrows-down, eyelashes-down, eyelashes-up              |
| `ear`        | string           | random  | small, big                                                                  |
| `earring`    | string           | random  | none, stud, hoop                                                            |
| `mouth`      | string           | random  | frown, laughing, nervous, pucker, sad, smile, smirk, suprised               |
| `hair`       | string           | random  | none, danny-phantom, doug-funny, fonza, full, mr-clean, mr-t, pixie, turban |
| `hairColor`  | string           | random  |                                                                             |
| `nose`       | string           | random  | curve, pointed, round                                                       |
| `glasses`    | string           | random  | none, round, square                                                         |
| `beard`      | string           | random  | none, hipster, scruff                                                       |
| `beardColor` | string           | random  |                                                                             |
| `shirt`      | string           | random  | collared, crew, open                                                        |
| `shirtColor` | string           | random  |                                                                             |

## Development

1. Clone the repo
   ```sh
   git clone git@github.com:ademilter/vue-nice-avatar.git
   ```
2. Clone the repo
   ```sh
   cd vue-nice-avatar
   ```
3. Install dependencies
   ```sh
   yarn
   ```
4. Start the server for the demo
   ```sh
   yarn dev
   ```
5. Open the browser to reivew the demo
   ```sh
   open http://localhost:3000
   ```
6. Edit the files inside `src/components/NiceAvatar`.

## License

Released under [MIT](/LICENSE) by [@ademilter](https://github.com/ademilter).

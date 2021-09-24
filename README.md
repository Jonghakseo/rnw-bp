# React-Native-Web boilerplate

![Intro](https://raw.githubusercontent.com/Jonghakseo/rnw-bp/main/github/img/intro.png)

### Featuring

- [ iOS, Android, Web ]
- Typescript
- Redux, Redux-saga, Redux-toolkit
- Axios
- Storybook
- husky, lint-staged
- Jest
- Eslint, Prettier


### Install dependencies

```sh
brew install node
brew install watchman
sudo gem install cocoapods
npm i -g yarn
```

### Install code

```sh
yarn install
cd ios
pod install
```

### Set Husky
```sh
yarn remove husky
yarn add -D husky@4.0.0
yarn add -D husky
```

### Run

```sh
yarn start
yarn ios
yarn android
yarn web
```
### Storybook
```sh
yarn storybook
```
### Env change
```sh
yarn env:dev
yarn env:staging
yarn env:pro
```

### SourceTree with Husky
> install sourcetree cli and...
```sh
stree
```

### Test

```sh
yarn test
yarn test:watch
yarn test:update
```

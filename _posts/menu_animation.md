---
title: "How I created animated hamburger"
excerpt: "This is basically toggling between hamburger menu and a close icon"
coverImage: "/blog/burger.png"
date: "2021-10-11T11:15:50.644Z"
ogImage:
  url: "/blog/burger.png"
tags:
  - css
  - js
  - html
  - menu
  - animation
  - hamburger
---

## Introduction

I started out by using [react-svg-morph](https://www.npmjs.com/package/react-svg-morph) in my personal website, to animate my icon, specifically menu icon. Unfortunately, [react-svg-morph](https://www.npmjs.com/package/react-svg-morph) is not maintained (5 years and counting) meaning it still uses some outdated peer dependencies and more importantly, it's not worth its size in kb (since I'm only using it for one thing!).

So I decided to create a my own hamburger menu icon and the answer is not animating svg, in fact, my approach could not be further from [react-svg-morph](https://www.npmjs.com/package/react-svg-morph).

## Contents

- [Introduction](#introduction)
- [Contents](#contents)
- [TLDR](#tldr)
  - [HTML](#html)
  - [CSS](#css)
  - [Javascript](#javascript)
- [Details](#details)
- [Credits](#credits)

## TLDR

> Don't have time to read the full article and just want to see the full code, here it is

### HTML

```html
<body>
  <main id="main">
    <div></div>
    <div></div>
    <div></div>
  </main>
</body>
```

### CSS

```css
main {
  cursor: pointer;
}

div {
  height: 4px;
  width: 40px;
  background-color: white;
  border-radius: 4px;
  margin: 8px 0;
  transition: 0.75s linear;
}

.on > div:nth-child(2) {
  opacity: 0;
  transform: rotate(360deg) scale(0.2);
}

.on > div:first-child {
  transform: rotate(45deg) translate(8px, 9px);
}

.on > div:last-child {
  transform: rotate(-45deg) translate(8px, -9px);
}

body {
  background-color: hsl(180deg 100% 25%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

### Javascript

```js
const main = document.getElementById("main");

const toggleClass = () => {
  main.classList.toggle("on");
};

main.addEventListener("click", toggleClass);
```

The final product is being used on this website, and the code is available on [codepen](https://codepen.io/Diorla/full/XWqemGB)

## Details

```html
<main id="main">
  <div></div>
  <div></div>
  <div></div>
</main>
```

Here, I need 3 divs, each representing one stroke in the hamburger.

All that is left is too manipulate those divs (or hamburger menu strokes).

```css
div {
  height: 4px;
  width: 40px;
  background-color: white;
  border-radius: 4px;
  margin: 8px 0;
  transition: 0.75s linear;
}
```

To create 3 strokes, I have to define the height, width and contrasting background color.

I also needed top/bottom margin between the 3 strokes and finally transition to show how the hamburger sign transforms into close sign

```js
const main = document.getElementById("main");

const toggleClass = () => {
  main.classList.toggle("on");
};

main.addEventListener("click", toggleClass);
```

Remember, all our strokes (divs) are nested inside `main#main`. So we can use it to let us

- Know when the icon is clicked
- Know the current state
- Change the current state

We will be representing the two states with the class "on", with its presence or absence. `classList.toggle` is a nifty way of adding or removing a class from an element. This allows us to toggle between two states `main#main` and `main#main.on` (with or without the `on` class).

Now, we just have to show how we want the second state to look like, that is create a new style for the second state.

```css
.on > div:nth-child(2) {
  opacity: 0;
  transform: rotate(360deg) scale(0.2);
}
```

Since, we had 3 divs for hamburger menu but only need two to indicate cross, I hide only one of the divs using `opacity: 0` for the second/middle element.
Secondly I added some rotation and scaling to make it appears like it's going away from the screen until we can see it anymore (cause it's too small) and vice versa, becoming bigger until it forms the menu again.

```css
.on > div:first-child {
  transform: rotate(45deg) translate(8px, 9px);
}

.on > div:last-child {
  transform: rotate(-45deg) translate(8px, -9px);
}
```

Now we will rotate the other two by 45 degrees (clockwise and anti-clockwise). Unfortunately, just rotating won't work because the two strokes won't align in the center, so accounting for margin and some try and error, I have to reposition the strokes by pushing it along x and y axis 8 by 9 pixels.

## Credits

Image by [Alanyadk](https://pixabay.com/users/alanyadk-1919646/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1396646) from [Pixabay](https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1396646)

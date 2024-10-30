# Make It Real - Profile Card

This is a solution to the Profile Card project of the Make It Real course.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View a centered profile card on the screen with a responsive design.
- See a background with a gradient effect and decorative patterns at the top and bottom.
- View profile details including name, location, age, and statistics (followers, likes, photos).

### Screenshot

![](./screenshot.jpg)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- React

### What I learned

This project helped me reinforce my skills in responsive design and component structuring in React. It was particularly useful to work on centering content both vertically and horizontally, applying gradient backgrounds, and positioning decorative elements.

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, hsl(185, 75%, 39%), hsl(185, 58%, 57%));
}
```

```js
const ProfileCard = () => {
  return (
    <div className="card-container">
      <img
        src="/assets/bg-pattern-top.svg"
        alt="Pattern Top"
        className="bg-pattern-top"
      />
      <img
        src="/assets/bg-pattern-bottom.svg"
        alt="Pattern Bottom"
        className="bg-pattern-bottom"
      />
      <div className="card">{/* Card Content */}</div>
    </div>
  );
};
```

### Continued development

In future projects, I’d like to further explore advanced CSS positioning techniques, as well as improving accessibility by focusing on semantic HTML and ARIA attributes. Additionally, experimenting with more complex animations and transitions would be beneficial.

### Useful resources

- **CSS Tricks - Flexbox Guide**:
  This guide was instrumental in ensuring the card is centered on the page using Flexbox properties. [Link to Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

- **React Documentation**:
  Always a valuable resource for refreshing React basics and improving component structuring. [Link to React Documentation](https://reactjs.org/docs/getting-started.html)

## Author

- Victor Ramirez - [@Victormrl17](https://github.com/Victormrl17)

## Acknowledgments

A special thanks to Make it Real, especially [@khriztianmoreno](https://github.com/khriztianmoreno) for the valuable feedback during daily meetings and demos, and to [@nayruthCalla](https://github.com/nayruthCalla) for the support and review.

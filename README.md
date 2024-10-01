# Calm Headphones Landing Page

## Design Prototype/Concept

### Desktop
![](design-concept-desktop.png?raw=true)

### Mobile
![](design-concept-mobile.png?raw=true)

## Content

### Header
- Logo: assets/images/calm-logo.png
- Navigation:
  - Blog: "#blog"
  - Calm Playlist: "#playlist"
  - Join Calm: "#join"

### Main
- Heading 1: Be Focus and Productive
- Paragraph: Not just an ordinary headphones. It's designed for meditation.
- Button: Learn More
- Hero Image: assets/images/calm-hero.png


## Color Pallete
- black: #000000
- white: #ffffff
- dark: #141E16
- accent: #3B855B

## Font Type and Size
- Font Type:
  - Type: Inter
  - Link: [Inter Google Font](https://fonts.google.com/specimen/Inter?preview.text=This%20is%20a%20great%20font%20to%20use%3F&preview.text_type=custom)
- Font Size:
  - Navigation: 16px
  - Heading 1: 64px desktop, 48px mobile
  - Paragraph: 18px
  - Button: 18px

## Cheat Sheet
Emmet: [Cheat Sheet](https://docs.emmet.io/cheat-sheet/)

> **Example 1:** header>(div.brand-name>img)+(nav#main-nav>ul>li*3>a)+(button#drawer-button.drawer-button)

Result:
```html
<header>
  <div class="brand-name"><img src="" alt=""></div>
  <nav id="main-nav">
    <ul>
      <li><a href=""></a></li>
      <li><a href=""></a></li>
      <li><a href=""></a></li>
    </ul>
  </nav>
  <button id="drawer-button" class="drawer-button"></button>
</header>
```

> **Example 2:** main>(section.content>h2+p+button)+(section.hero-image>img)

Result:
```html
<main>
  <section class="content">
    <h2></h2>
    <p></p>
    <button></button>
  </section>
  <section class="hero-image"><img src="" alt=""></section>
</main>
```

> **Example 3:** section#brand>h2+div.brand-container
Result:
```html
<section id="brand">
  <h2></h2>
  <div class="brand-container"></div>
</section>
```

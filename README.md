# Persian-UI

**Persian-UI** is a powerful Tailwind CSS plugin designed specifically for building modern Persian (Farsi) web interfaces with ease. It provides a set of utilities and components that are optimized for RTL layouts and Persian typography, making it easier to create beautiful and consistent designs.

[//]: # (![Persian-UI Logo]&#40;path/to/logo.png&#41;)

## 🚀 Features

- **RTL Support**: Built-in support for right-to-left (RTL) layouts, perfect for Persian language websites.
- **Custom Typography**: Tailored Persian fonts and typography settings to give your site a beautiful and unique look.
- **Pre-designed Components**: A set of responsive, customizable components like buttons, cards, and forms that match Persian design aesthetics.
- **Color Palettes**: Special Persian-inspired color schemes that fit perfectly with your projects.

## 📦 Installation

Install the `persian-ui` package via NPM:

```bash
npm install persian-ui --save-dev
```

## 🔧 Setup

Add `persian-ui` to your Tailwind configuration:

```javascript
// tailwind.config.js
module.exports = {  
    plugins: [
        require("persian-ui")
        // other plugins...
    ],
}

```

Then, make sure to include the Tailwind CSS directives in your main stylesheet:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

You can customize your application theme:

```javascript
// tailwind.config.js
module.exports = {
    plugins: [require("persian-ui")],
    "persian-ui": {
        themes: {
            light: {
                "brand": "#1685C5",
                "brand--hover": "#0255A6",
                "brand--active": "#02417E",
                "brand-light": "#E9EEF5",
                "brand-light--hover": "#DEE5F0",
                "brand-light--active": "#DEE5F0",
            },
            dark: {
                "brand": "#092C44",
                "brand--hover": "#0C3B5A",
                "brand--active": "#0C3B5A",
                "brand-light": "#1685C5",
                "brand-light--hover": "#147CB8",
                "brand-light--active": "#147CB8",
            }
        }
    }
}
```


## 🧩 Usage
Start building your Persian interfaces using our utility classes and components:

```html
<h1 class="text-h1 underline">
    سلام، این یک متن نمونه است!
</h1>

```

## 📘 Documentation
Check out the **[full documentation](https://github.com/prhmhoseyni/persian-ui)** for detailed information on all the available utilities, components, and customization options.

## 🤝 Contribution
We welcome contributions! If you want to help improve Persian-UI, please check out our Contributing Guide to get started.

## 📄 License
Persian-UI is open-source software licensed under the MIT License.
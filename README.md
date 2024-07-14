# project-03-tailwindcss-starter
 Learning Tailwindcss from scratch

**Introduction**

Tailwind CSS is a utility-first CSS framework designed to make it easy to build custom user interfaces quickly and efficiently. Here’s a simple breakdown of how it works:
Key Concepts:
- Utility Classes: Tailwind CSS provides small, single-purpose classes (utilities) that apply specific styles directly to HTML elements. For example, text-center centers text, bg-blue-500 sets a blue background color, and p-4 adds padding. Instead of writing custom CSS for each element, you use these pre-defined classes to style your elements.
- Customization: Tailwind is highly customizable. You can configure it to suit your design system by modifying the configuration file (tailwind.config.js). You can extend the default theme, add new utilities, or override existing ones.
- No Custom CSS: The idea is to avoid writing custom CSS. Instead, you compose your design using the provided utility classes, which can lead to more consistent and maintainable code.

**2024.07.13**
Installation steps
1. Create `package.json` file: VS code > Terminal > Open new terminal > (insert) npm init -y
2. Installing tailwindcss in the file: Terminal > (insert) npm install tailwindcss
    - In the context of a Tailwind CSS project, dependencies refer to the packages that your project needs in order to function correctly. These packages are listed in the package.json file under the dependencies section. When you install Tailwind CSS using npm, it is added to this section as a required package for your project.
3. Creat source folder & public folder adding the following to src/style.css:
    - @tailwind base;@tailwind components;@tailwind utilities;
4. package.json > replace "scripts" : {
    "build-css": "tailwindcss build src/style.css -o public/style.css"
}
5. terminal run > npm run build-css (it will create a folder within public folder)
6. Create HTML basic structure in public index.html

**2024.07.14**
- Error occured `No utility classes were detected in your source files check content` turns out in `tailwind.config.js` `module.exports = {
  content: ["./public/**/*.{html,js,css}"],}` due to the content has to address to the public(correct) folder location.
- Learned changing size, color & text font. OMG I can similar control css with prebuild syntax via HTML class group!!!
- Learned how to add border, margin & padding
- Learned how tail wind config terminal enter `npx tailwindcss init --full` if `tailwind.config.js` already then delete the file and re-enter the module.export>contnet from above again.
- Too add extra config, we can open a default config npx tailwincss (with out --full), and under extend put the content under same format as the one in full config.
- Learned how to add custom font obtain font embed code from google font @import copy the <style> code within. Then past that code in src/style.css and use the name of the font from google as the name already assinged within the @import code.
- Leanred how ot use flexbox, with flex- & justify- class. 
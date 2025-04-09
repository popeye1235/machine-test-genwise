# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



This is a problem that I encountered during the interview process with Genwise.

Problem statement: 
The app component is heavy. One button is there. Show the count of button clicks. The app component controls the button's click, but it(app comp) does not rerender every time the button is clicked. 

hint: use React.useRef();


Another questions faced in this interview: 

1.Write a JS code to find the first nonrepetitive element from this string ‘AABCCD. ’
2.Do this using hasMap as well
3.Controlled and uncontrolled component in react
4.useCallback vs useMemo
5.Local storage vs session storage vs redux
6.Why use redux over local storage
7.Useimperative in react
8.Make a polyfills for map
9.Right shift operator



answer for DSA question: 

 function firstNonRepeatingElement(str) {
  const charCount = {}
  for(let i = 0; i < str.length; i++) {
  const char = str[i]
  charCount[char] = (charCount[char] || 0) + 1;
  }
  console.log(charCount, "charcount")
  for(let i = 0; i < str.length; i++) {
  console.log(charCount[str[i]], "ssssss")
  if(charCount[str[i]] === 1) {
    return str[i]
    }
  }
  
  return null;
}

const input = 'AABCCD';
const result = firstNonRepeatingElement(input);
console.log(result);



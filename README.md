# Tutorial From Dev Ed

URL : [React State Management Tutorial | Context Api | React Tutorial For Beginners](https://www.youtube.com/watch?v=35lXWvCuM8o)

## Notes From Tania

URL : [Using Context API in React (Hooks and Classes)](https://www.taniarascia.com/using-context-api-in-react/)
Imagine I have some information I want to be available anywhere or everywhere throughout a React app. A theme might be implemented using Context - for example, on this site I have Context serving three themes: dark mode, light mode, and MS-DOS mode (on the 404 page).In this simple example, I'll use a logged in user.

I'll create Context, and call it UserContext. This will also give me UserContext.Provider and UserContext.Consumer. What these two components do is straightforward:

    Provider - The component that provides the value
    Consumer - A component that is consuming the value

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# useCallback

Chúng ta dùng `useCallback` khi chúng ta không muốn function của chúng ta được khởi tạo lại mỗi lần component chúng ta re-render

```jsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

Cách sử dụng tương tự như `useMemo`, ngoài ra thì chúng ta cũng có thể dùng `useMemo` thay thế cho `useCallback` cũng được

```jsx
const memoizedCallback = useMemo(() => {
  return () => doSomething(a, b);
}, [a, b]);
```

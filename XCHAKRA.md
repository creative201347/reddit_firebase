

## ChakraProvider
```ts
<ChakraProvider theme={theme}>
    <Layout>
        <Component {...pageProps} />
    </Layout>
</ChakraProvider>
```

## Theme
```ts
export const theme = extendTheme({
  colors: {brand: {100: "#FF3C00"}},
  fonts: {body: "Open Sans, sans-serif"},
  styles: {
    global: () => ({
      body: {bg: "gray.200"}}),
    },
  components: {Button},
});
```

## Customizing
```ts
export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "60px",
    fontSize: "10pt",
    fontWeight: 700,
    _focus: {
      boxShadow: "none",
    },
  },
  sizes: {
    sm: {fontSize: "8pt"},
    md: {fontSize: "10pt"},
  },
  variants: {
    solid: {
      color: "white",
      bg: "blue.500",
      _hover: {
        bg: "blue.400",
      },
    },
    ...
   }
};
```

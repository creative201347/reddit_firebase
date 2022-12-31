

## Recoil Root
```ts
<RecoilRoot>
    <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </ChakraProvider>
</RecoilRoot>
```

## Atom
```ts
import { atom } from "recoil";

export interface AuthModalState {
  open: boolean;
  view: ModalView;
}

export type ModalView = "login" | "signup" | "resetPassword";

const defaultModalState: AuthModalState = {
  open: false,
  view: "login",
};

export const authModalState = atom<AuthModalState>({
  key: "authModalState",
  default: defaultModalState,
});
```

## Getting and Manipulating 
`useRecoilValue` 
`useRecoilState`
`useSetRecoilState`
```ts
const modalState = useRecoilValue(authModalState);

const [modelState, setModalState] = useRecoilState(authModalState);

const handleClose = () => {
    setModalState((prev) => ({
      ...prev,
      open: false,
    }));
};

const setAuthModelState = useSetRecoilState(authModalState);
<Button onClick={() => {
    setAuthModelState({ open: true, view: "login" });
}} />
<Button onClick={() => {
    setAuthModelState({ open: true, view: "signup" });
}} />
```
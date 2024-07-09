import type { AppProps } from "next/app";
import '/src/styles/reset.sass'
import '/src/styles/wrapper.sass'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

import { Provider } from "react-redux";
import store from "@/components/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
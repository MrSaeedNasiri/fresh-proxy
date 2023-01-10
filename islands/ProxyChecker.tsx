import { useState } from "preact/hooks";
// import { Button } from "../components/Button.tsx";
// import { Handlers, PageProps } from "$fresh/server.ts";

// https://www.google.com/humans.txt
// https://www.gstatic.com/generate_204
// export const handler: Handlers<number | null> = {
//   async GET(_, ctx) {
//     const { proxies } = ctx.params;
//     console.log(proxies);
//     const client = Deno.createHttpClient({
//       proxy: { url: "http://host:port/" },
//     });
//     const a = Date.now();
//     const resp = await fetch("https://www.gstatic.com/generate_204", {
//       client,
//     });
//     const b = Date.now();
//     if (resp.status !== 204) {
//       if (resp.status !== 200) {
//         return ctx.render(null);
//       }
//     }
//     const performance = b - a;
//     return ctx.render(performance);
//   },
// };

interface IProps {
  res: number | null;
}

import { Handlers, PageProps } from "$fresh/server.ts";
import InputProxy from "../components/InputProxy.tsx";
// import { useState } from "preact/hooks";

// export const handler: Handlers<number | null> = {
//   async GET(_, ctx) {
//     const { proxies } = ctx.params;
//     // console.log(Deno.createHttpClient);
//     console.log("Current Deno version", Deno.version.deno);
//     console.log("Current TypeScript version", Deno.version.typescript);
//     console.log("Current V8 version", Deno.version.v8);
//     const client = Deno.createHttpClient({
//       proxy: { url: "http://178.63.237.147:8080/" },
//     });
//     const a = Date.now();
//     const resp = await fetch("https://www.gstatic.com/generate_204", {
//       client,
//     }).catch((err) => ctx.render(null));
//     const b = Date.now();
//     if (resp.status !== 204) {
//       if (resp.status !== 200) {
//         return ctx.render(null);
//       }
//     }
//     const performance = b - a;
//     console.log(performance);
//     return ctx.render(performance);
//   },
// };

export default function ProxyChecker() {
  const [proxies, setProxies] = useState([]);
  //   async function checkProxy(proxy: any) {
  //     await fetch("https://www.gstatic.com/generate_204", {});
  //   }
  return (
    <>
      <InputProxy setProxies={setProxies} />
      <p>proxies</p>
      {proxies.map((e) => <p>{e}</p>)}
    </>
  );
}

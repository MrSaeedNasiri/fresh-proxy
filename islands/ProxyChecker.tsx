import { useState } from "preact/hooks";
// import { Button } from "../components/Button.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";

// https://www.google.com/humans.txt
// https://www.gstatic.com/generate_204
export const handler: Handlers<number | null> = {
  async GET(_, ctx) {
    const { proxies } = ctx.params;
    console.log(proxies);
    const client = Deno.createHttpClient({
      proxy: { url: "http://host:port/" },
    });
    const a = Date.now();
    const resp = await fetch("https://www.gstatic.com/generate_204", {
      client,
    });
    const b = Date.now();
    if (resp.status !== 204) {
      if (resp.status !== 200) {
        return ctx.render(null);
      }
    }
    const performance = b - a;
    return ctx.render(performance);
  },
};

interface IProps {
  res: number | null;
}

export default function ProxyChecker(props: IProps) {
  const [proxies, setProxies] = useState<string>();
  //   async function checkProxy(proxy: any) {
  //     await fetch("https://www.gstatic.com/generate_204", {});
  //   }
  return (
    <>
      <h1>{props.res}</h1>
      <textarea
        class="w-8/12 bg-gray-300"
        name=""
        id=""
        cols={30}
        rows={10}
        onInput={(e) => {
          setProxies(e.currentTarget.value);
        }}
      >
      </textarea>
      <button class="bg-blue-500 text-gray-100 w-24 h-8 rounded">
        Check
      </button>
    </>
  );
}

import Counter from "../islands/Counter.tsx";
import ProxyChecker from "../islands/ProxyChecker.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers<number | null> = {
  async GET(_, ctx) {
    const { proxies } = ctx.params;
    // console.log(Deno.createHttpClient);
    console.log("Current Deno version", Deno.version.deno);
    console.log("Current TypeScript version", Deno.version.typescript);
    console.log("Current V8 version", Deno.version.v8);
    const client = Deno.createHttpClient({
      proxy: { url: "http://178.63.237.147:8080/" },
    });
    const a = Date.now();
    const resp = await fetch("https://www.gstatic.com/generate_204", {
      client,
    }).catch((err) => ctx.render(null));
    const b = Date.now();
    if (resp.status !== 204) {
      if (resp.status !== 200) {
        return ctx.render(null);
      }
    }
    const performance = b - a;
    console.log(performance);
    return ctx.render(performance);
  },
};

export default function Home({ data }: PageProps<number | null>) {
  return (
    <div class="w-screen h-screen bg-gray-200 flex flex-col justify-center items-center">
      <ProxyChecker res={data} />
    </div>
  );
}

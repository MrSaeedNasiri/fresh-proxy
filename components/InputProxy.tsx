import { StateUpdater } from "https://esm.sh/v95/preact@10.11.0/hooks/src/index";

interface IProps {
  setProxies: StateUpdater<string[]> | StateUpdater<never[]>;
}
export default function InputProxy({ setProxies }: IProps) {
  // const [proxies, setProxies] = useState<string>();
  //   async function checkProxy(proxy: any) {
  //     await fetch("https://www.gstatic.com/generate_204", {});
  //   }
  return (
    <>
      <h1 class="text-3xl font-bold bg-gray-400 w-8/12 p-2 text-center text-gray-900">
        Input Proxy List
      </h1>
      <textarea
        class="w-8/12 bg-gray-300"
        name=""
        id=""
        cols={30}
        rows={10}
        onInput={(e) => {
          console.log(e.currentTarget.value);
          setProxies(e.currentTarget.value.split("\n"));
        }}
      >
      </textarea>
      <button class="bg-blue-500 text-gray-100 w-24 h-8 rounded">
        Check
      </button>
    </>
  );
}

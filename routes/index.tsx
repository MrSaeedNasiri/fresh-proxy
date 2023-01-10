import Counter from "../islands/Counter.tsx";
import ProxyChecker from "../islands/ProxyChecker.tsx";

export default function Home() {
  // const [proxies, setProxies] = useState<string>();
  return (
    <div class="w-screen h-screen bg-gray-200 flex flex-col justify-center items-center">
      <ProxyChecker />
    </div>
  );
}

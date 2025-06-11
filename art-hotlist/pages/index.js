import { useEffect, useState } from "react";

export default function Home() {
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    fetch("/api/ranking.json")
      .then((res) => res.json())
      .then((data) => setRanking(data));
  }, []);

  return (
    <main className="p-10 text-center">
      <h1 className="text-2xl font-bold mb-6">中国当代艺术机构热度排行榜</h1>
      <ul className="text-left mx-auto max-w-md">
        {ranking.map((item, index) => (
          <li key={item.name} className="mb-2">
            {index + 1}. {item.name} - 热度: {item.hot_score}
          </li>
        ))}
      </ul>
    </main>
  );
}

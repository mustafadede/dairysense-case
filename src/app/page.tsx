"use client";
import SampleChart from "@/components/SampleChart";
import Navbar from "../components/Navbar";

const cardDatas = [
  {
    title: "Son 24 Saat Süt",
    value: 7.262,
    increase: 11.0,
    bgColor: "#EDEEFB",
  },
  {
    title: "Dün Toplam Süt",
    value: 3.671,
    decrease: 0.3,
    bgColor: "#E6F0FD",
  },
  {
    title: "Sağılan İnek Sayısı",
    value: 156,
    increase: 15.03,
    bgColor: "#EDEEFB",
  },
  {
    title: "Ortalama Süt",
    value: 2.138,
    increase: 6.08,
    bgColor: "#E6F0FD",
  },
];

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <div className="flex flex-col h-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Overview</h1>
          <details className="dropdown">
            <summary className="btn btn-ghost m-1">
              Bugün
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </summary>

            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </details>
        </div>
        <div className="flex flex-col lg:flex-row w-full flex-wrap gap-10 mb-5 md:mb-10">
          {cardDatas.map((card, index) => (
            <div
              key={index}
              className="stats flex flex-wrap flex-1 w-full overflow-hidden flex-col p-6 rounded-2xl"
              style={{ backgroundColor: card.bgColor }}
            >
              <div className="stat-title !text-start">{card.title}</div>
              <div className="flex gap-4">
                <div className="stat-value text-black">
                  {card.value.toLocaleString()}
                </div>
                {card.increase ? (
                  <div className="flex items-center gap-2 text-black">
                    <div className="stat-desc text-black">
                      +{card.increase}%
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                      />
                    </svg>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-black">
                    <div className="stat-desc text-black">
                      -{card.decrease}%
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/2 md:p-7 rounded-2xl bg-[#F9F9F9]">
          <SampleChart />
        </div>
      </div>
    </div>
  );
}

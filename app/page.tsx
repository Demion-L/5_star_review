"use client";

import ExpertCard from "@/components/ExpertCard";
import { useEffect, useState } from "react";

const expertsData = [
  {
    name: "Luke Skywalker",
    image:
      "https://images6.fanpop.com/image/photos/44800000/Luke-Skywalker-luke-skywalker-44821683-300-591.jpg",
    description:
      "A young farm boy who discovers his Force powers and becomes a Jedi Knight.",
  },
  {
    name: "Darth Vader",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F24smi.org%2Fpublic%2Fmedia%2Fresize%2F660x-%2Fperson%2F2017%2F10%2F24%2FNW7DvksI5zwM_dart-veider.jpg&f=1&nofb=1&ipt=bad77eb140cb7dc192f6bd7eac525b7386089c25c12f806121502a113cc0b065&ipo=images",
    description:
      "A former Jedi Knight turned Sith Lord, seeking revenge against his former master.",
  },
  {
    name: "Princess Leia Organa",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fdisneyprincess%2Fimages%2Fd%2Fdb%2FLeia_Organa.jpg%2Frevision%2Flatest%3Fcb%3D20210311164902&f=1&nofb=1&ipt=e4bad2b94709f8cddec9453dbcf740d165c1f3043646a5a42da0d5d1a80c5bbe&ipo=images",
    description: "A princess who becomes a leader of the Rebel Alliance.",
  },
  {
    name: "Han Solo",
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2F1%2F2%2Fc%2F1380970-han-solo-wallpaper-3000x1981-large-resolution.jpg&f=1&nofb=1&ipt=91217eb7fe7208e6d43b9c0d06903969f54c1b6471e7ca5507701527181f98dd&ipo=images",
    description:
      "A smuggler and bounty hunter who becomes a key member of the Rebel Alliance.",
  },
  {
    name: "Chewbacca",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fstarwars%2Fimages%2F4%2F48%2FChewbacca_TLJ.png%2Frevision%2Flatest%3Fcb%3D20171231005834&f=1&nofb=1&ipt=df0bdf9559942b713561498d371724ea5490661163180786b71fcec40c1feeda&ipo=images",
    description: "A Wookiee warrior and Han Solo's loyal friend.",
  },
  {
    name: "C-3PO",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fstarwars%2Fimages%2F7%2F7e%2FThreepioTFA-Fathead.png%2Frevision%2Flatest%3Fcb%3D20150913051455%26path-prefix%3Dko&f=1&nofb=1&ipt=e9fe8dce9b75b595dc24aeb1a0de9d52ffbbe8624f386fd5dce3ed578893f2e0&ipo=images",
    description: "A golden humanoid protocol droid.",
  },
];

export default function Home() {
  const [experts, setExperts] = useState(expertsData);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedExperts = await fetch("/api/experts").then((response) =>
        response.json()
      );
      setExperts(fetchedExperts);
      console.log("New experts fetched from DB");
    };

    fetchData();
  }, []);

  return (
    <div className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
      <h1 className='text-4xl font-bold text-center sm:text-left'>
        Our Experts
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {experts.map((expert, index) => (
          <ExpertCard
            key={index}
            name={expert.name}
            image={expert.image}
            description={expert.description}
          />
        ))}
      </div>
    </div>
  );
}

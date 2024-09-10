"use client"
import { DotPatternDemo } from "@/components/DotPattern";
import { Loading } from "@/components/Loading";
import { MarqueeDemo } from "@/components/MarqueeDemo";
import { MyGlobe } from "@/components/MyGlobe";
import { fetchStrapiData } from "@/helpers/fetchData";
import { useEffect, useState } from "react";

export default function Home() {
  const [data,setData] = useState<any[]>([])
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
        try {
            const data = await fetchStrapiData('/api/homepages?populate=*');
            setData(data.data[0].attributes.components)
            console.log(data)
            setLoading(false)
            
        } catch (error) {
            console.error('Error fetching blog data:', error);
            setError(true)
        }
    };
    fetchData();
}, []);



const BlockRenderer = (block:any) => {
  console.log("heading",block)
  switch (block.__component) {
    case "component.hero-section":
      return <MyGlobe key={block.id} {...block} />;
    case "component.marquee":
      return <MarqueeDemo {...block}/>
    case "component.footer":
      return <DotPatternDemo {...block}/>
    default:
      return null;
  }
}

  return (
   <main>
    {
      loading?<Loading/>:
      <div>
        {data ? data?.map((block: any) => BlockRenderer(block)) : null}
      </div>
    }
   </main>
  );
}
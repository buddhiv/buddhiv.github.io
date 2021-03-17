import Link from "next/link";

// import Analytics from "@/components/metrics/Analytics";
// import Buttondown from "@/components/metrics/Buttondown";
import Container from "@/components/Container";
import GitHub from "@/components/metrics/Github";
import Followers from "@/components/metrics/Followers";
import Repositories from "@/components/metrics/Repositories";
import TopTracks from "@/components/TopTracks";
import NowPlaying from "@/components/NowPlaying";
// import TopTracks from "@/components/TopTracks";
// Have one for twitter

export default function Dashboard() {
  return (
    <Container
      title="Dashboard – Lee Robinson"
      description="My personal dashboard, built with Next.js API routes deployed as serverless functions."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Dashboard
        </h1>
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This dashboard is created with NextJS _api routes converted to
            serverless functions. I use this dashboard to track various metrics
            across platforms like GitHub, Twitter and more.
          </p>
        </div>
        {/* <div className="flex flex-col w-full">
          <Unsplash />
          <YouTube />
        </div> */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
          {/* <Analytics /> */}
          <GitHub />
          <Followers />
          <Repositories />
        </div>
        {/* <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
          <Gumroad />
          <Buttondown />
        </div> */}
        <NowPlaying />

        <h2 className="font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          Top Tracks
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Curious what I'm currently jamming to? Here's my top tracks on Spotify
          updated daily.
        </p>
        <TopTracks />
      </div>
    </Container>
  );
}
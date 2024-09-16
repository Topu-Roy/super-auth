import { api, HydrateClient } from "@/trpc/server";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth()

  if (!session) {
    return <div>Not authenticated</div>
  }

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        {JSON.stringify(session)}
      </main>
    </HydrateClient>
  );
}

import HomeContainer from "../components/containers/Home";
import { getIssues } from "../actions/issues";

export default async function Home() {
  const issuesList = await getIssues();

  return (
    <main className="flex min-h-screen bg-[#D4D4D4] w-full flex-col items-center">
      <section className="container px-4 sm:px-0 mb-8">
        <HomeContainer initialIssues={issuesList} />
      </section>
    </main>
  );
}

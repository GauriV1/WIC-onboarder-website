import { Layout } from "@/components/Layout/Layout";

export default function Events() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 px-4 geometric-bg animate-geometric">
        <div className="relative container max-w-4xl mx-auto text-center">
          <h1 className="mb-6">Events & Calendar</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Stay updated with WIC announcements and important dates.
          </p>
        </div>
      </section>

      {/* Content placeholder */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">
            Calendar information will be updated soon.
          </p>
        </div>
      </section>
    </Layout>
  );
}
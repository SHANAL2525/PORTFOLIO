export async function GET() {
  const username = "SHANAL2525";

  const res = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=100`,
    {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    return new Response(JSON.stringify({ error: "Failed to fetch repos" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const repos = await res.json();

  const cleaned = repos
    .filter((r: any) => !r.fork)
    .map((r: any) => ({
      name: r.name,
      description: r.description,
      url: r.html_url,
      stars: r.stargazers_count,
      language: r.language,
      updated_at: r.updated_at,
    }))
    .sort((a: any, b: any) => b.stars - a.stars);

  return new Response(JSON.stringify(cleaned), {
    headers: { "Content-Type": "application/json" },
  });
}

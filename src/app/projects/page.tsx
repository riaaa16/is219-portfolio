"use client"
import React, { useState, Suspense } from "react";
import Footer from "@/components/Footer";
import DataVisualization from "@/components/eggs-main/DataVisualization";
import AiChat from "@/components/ai-chat/AiChat";
import Game2048 from "@/components/2048/Game2048";
import GithubButton from "@/components/ui/GithubButton";
import { useSearchParams, useRouter } from "next/navigation";

export default function ProjectsPageWrapper() {
  return (
    <Suspense>
      <ProjectsPage />
    </Suspense>
  );
}

function ProjectsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const option = searchParams.get("option");
  const [selected, setSelected] = useState(option || "");

  // Keep dropdown and query param in sync
  React.useEffect(() => {
    if (option && option !== selected) setSelected(option);
  }, [option]);

  // Optionally update the URL when dropdown changes
  const handleSelect = (val: string) => {
    setSelected(val);
    if (val) router.replace(`/projects?option=${val}`);
    else router.replace(`/projects`);
  };

  const githubLinks: Record<string, string | null> = {
    "data-visualization": "https://github.com/riaaa16/eggs/tree/main",
    "ai-chat": "https://github.com/riaaa16/js-rag-demo/tree/chat",
    "2048": "https://github.com/riaaa16/2048",
    // Add more as needed
  };

  const projectComponents: Record<string, React.ReactNode> = {
    "data-visualization": <DataVisualization />,
    "ai-chat": <AiChat/>,
    "2048": <Game2048/>,
    // Add more projects here as needed
  };

  const projectComponent = projectComponents[selected] || null;

  return (
    <>
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <div style={{
          maxWidth: 700,
          margin: "1rem auto 1rem auto",
          padding: "1rem",
          textAlign: "center"
        }}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 16, marginBottom: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <select
                className="font-pixel"
                id="project-select"
                value={selected}
                onChange={e => handleSelect(e.target.value)}
                style={{ fontSize: "1rem", padding: "0.5em 1em", borderRadius: 4, border: "2px solid #1976d2" }}
              >
                <option value="">select a project</option>
                <option value="data-visualization">data visualization</option>
                <option value="ai-chat">ai chat</option>
                <option value="2048">2048</option>
              </select>
              {githubLinks[selected] && (
                <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
                  <GithubButton link={githubLinks[selected]!} style={{ borderWidth: 2 }} />
                </div>
              )}
            </div>
          </div>
          {selected === "" && (
            <div style={{ color: "#607d8b", fontSize: "1.05rem", marginTop: 8, marginBottom: 24 }}>
              Select a project from the dropdown to view its details.
            </div>
          )}
        </div>
        <div style={{ flex: 1 }}>
          {selected === "data-visualization" && <DataVisualization />}
          {selected === "ai-chat" && <AiChat />}
          {selected === "2048" && <Game2048 />}
        </div>
        <Footer />
      </div>
    </>
  );
}
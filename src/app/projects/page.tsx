"use client"
import React, { useState } from "react";
import Footer from "@/components/Footer";
import DataVisualization from "@/components/eggs-main/DataVisualization";
import AiChat from "@/components/ai-chat/AiChat";
import Game2048 from "@/components/2048/Game2048";
import GithubButton from "@/components/ui/GithubButton";

export default function ProjectsPage() {
  const [selected, setSelected] = useState("");

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
                onChange={e => setSelected(e.target.value)}
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
          {projectComponent}
        </div>
        <Footer />
      </div>
    </>
  );
}
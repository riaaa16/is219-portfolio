/*
D3 Stacked Bar Chart Source Code: https://observablehq.com/@d3/stacked-bar-chart/2
*/

import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const StackedBarChart = ({filepath, title, subtitle, unit = ""}) => {
    const svgRef = useRef();
    const [data, setData] = useState(null);
    useEffect(() => {
        d3.csv(filepath)
            .then((loadedData) => {
                const categories = loadedData.columns.slice(1);
                const filteredData = loadedData.map((d) => {
                    const row = { year: +d.Year };
                    for (let category of categories) {
                        row[category] = +d[category];
                    }
                    return row;
                });
                setData(filteredData);
            })
            .catch((error) => {console.error(`Error loading CSV: ${error}`)});
    }, [filepath]);
    useEffect( () => {
        if (!data) return;
        const keysList = Object.keys(data[0]);
        const categories = keysList.slice(1);
        const width = 928;
        const height = 500;
        const margin = {top : 20, right : 10, bottom : 30, left : 40};
        const svg = d3.select(svgRef.current)
        svg.selectAll("*").remove();
        svg.append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height])
        .append("g")
        .attr("style", "max-width: 100%; height: auto;");
        const groups = data.map(d => (d.year));
        const x = d3.scaleBand()
            .domain(groups)
            .range([margin.left, width - margin.right])
            .padding(0.2);
        svg.append("g")
            .attr("transform", `translate(0, ${height - margin.bottom})`)
            .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0));
        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d3.sum(categories, key => +d[key]))])
            .rangeRound([height - margin.bottom, margin.top]);
        svg.append("g")
            .attr("transform", `translate(${margin.left},0)`)
                  .call(d3.axisLeft(y))
                  .call((g) => g.select(".domain").remove())
                  .call((g) =>
                    g
                      .selectAll(".tick line")
                      .clone()
                      .attr("x2", width - margin.left - margin.right)
                      .attr("stroke-opacity", 0.1)
                  )
                  .call((g) =>
                    g
                      .append("text")
                      .attr("x", -margin.left)
                      .attr("y", 10)
                      .attr("fill", "currentColor")
                      .attr("text-anchor", "start")
                      .text("↑ Value ($)")
                  );
        const color = d3.scaleOrdinal()
            .domain(categories)
            .range(d3.schemeCategory10);
        const stackedData = d3.stack()
            .keys(categories)
            (data);
        const tooltip = d3.select("body").selectAll(".tooltip").data([0])
            .join("div")
            .attr("class", "tooltip")
            .style("position", "absolute")
            .style("pointer-events", "none")
            .style("background", "#fff")
            .style("border", "1px solid #ccc")
            .style("border-radius", "4px")
            .style("padding", "8px")
            .style("box-shadow", "0 2px 4px rgba(0,0,0,0.1)")
            .style("font-size", "12px")
            .style("opacity", 0);
        const f =  d3.format(".2f");
        svg.append("g")
            .selectAll("g")
            .data(stackedData)
            .join("g")
            .attr("class", d => {
                const className = String(d.key).trim().replace(/\s+/g, "_");
                return className;
            })
            .attr("fill", d => color(d.key))
            .selectAll("rect")
            .data(d => d)
            .join("rect")
                .attr("x", d => x(d.data.year))
                .attr("y", d => y(d[1]))
                .attr("height", d => y(d[0]) - y(d[1]))
                .attr("width",x.bandwidth())
                .attr("class", d => {
                        return "rectangle";
                })
            .on("mouseover", function (event, d) {
                const catName = d3.select(this.parentNode).datum().key;
                const keyName = catName.replace(/\s+/g, "_");
                const value = Math.abs(d[1] - d[0]);
                d3.selectAll(".rectangle").style("opacity", 0.2);
                d3.selectAll(`.${keyName}`).selectAll(".rectangle").style("opacity",1);
                tooltip
                    .style("opacity", 0.9)
                    .html(`<strong>${catName}</strong><br/>$${f(value)}${unit}`)
                    .style("left", (event.pageX + 10) + "px")
                    .style("top", (event.pageY - 28) + "px");
            })
            .on("mousemove", function(event) {
                tooltip
                    .style("left", (event.pageX + 10) + "px")
                    .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseleave", function (event, d) {
                d3.selectAll(".rectangle").style("opacity", 1);
                tooltip.style("opacity", 0);
            });
    });
    return (
        <div>
            <h2 className="chart-title">{title}</h2>
            {subtitle && <div className="chart-subtitle">{subtitle}</div>}
            {data ? (
                <svg
                    ref={svgRef}
                    width={928}
                    height={500}
                    style={{ border: "1px solid #ccc", background: "#fafafa" }}
                />
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    );
};

export default StackedBarChart;

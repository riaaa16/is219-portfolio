/*
D3 Diverging Stacked Bar Chart Source Code: https://observablehq.com/@d3/diverging-stacked-bar-chart/2
*/

import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const DivergingStackedBarChart = ({filepath, title, subtitle}) => {
    const svgRef = useRef();
    const [data, setData] = useState(null);
    useEffect(() => {
        d3.csv(filepath)
            .then((loadedData) => {
                const filteredData = loadedData.map(
                    (d) => ({
                        name: String(d.Name).trim(),
                        category: String(d.Category).trim(),
                        value: +d.Value,
                }));
                Object.assign(filteredData, {
                    negative: "← Negative",
                    positive: "Positive →",
                    negatives: ["Contribution Margin"],
                    positives:[
                        "Customer Paid",
                        "Delivery Fees",
                        "Gross Margin",
                        "Platform Commission",
                        "Driver Tip",
                        "Cost of Goods Sold",
                        "Labor",
                        "Occupancy"
                    ]
                });
                setData(filteredData);
            })
            .catch((error) => {console.error("Error loading CSV: ", error)});
    }, [filepath]);
    useEffect(() => {
        if (!data) return;
        const signs = new Map([].concat(
            data.negatives.map(d => [d, -1]),
            data.positives.map(d => [d, +1])
        ));
        const bias = d3.sort(
            d3.rollup(data, v => d3.sum(v, d => d.value * Math.min(0, signs.get(d.category))), d => d.name),
            ([, a]) => a
        );
        const width = 928;
        const margin = {top : 0, right : 30, bottom : 0, left : 130};
        const height = bias.length * 33 + margin.top + margin.bottom;
        const series = d3.stack()
            .keys([].concat(data.negatives.slice().reverse(), data.positives))
            .value(([, value], category) => signs.get(category) * (value.get(category) || 0))
            .offset(d3.stackOffsetDiverging)
        (d3.rollup(data, data => d3.rollup(data, ([d]) => d.value, d => d.category), d => d.name));
        const x = d3.scaleLinear()
            .domain(d3.extent(series.flat(2)))
            .rangeRound([margin.left, width - margin.right])
        const y = d3.scaleBand()
            .domain(bias.map(([name]) => name))
            .rangeRound([margin.top, height - margin.bottom])
            .padding(0.2)
        const color = d3.scaleOrdinal(d3.schemeCategory10)
            .domain([].concat(data.negatives, data.positives))
            .range(d3.schemeSpectral[data.negatives.length + data.positives.length])
        const formatValue = ((format) => (x) => format(Math.abs(x)))(d3.format(".2f"));
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();
        svg.attr("viewBox", [0, 0, width, height])
            .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif;");
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
        svg.append("g")
            .selectAll("g")
            .data(series)
            .join("g")
            .attr("fill", d => color(d.key))
            .attr("class", d => {return "category"})
            .selectAll("rect")
            .data(d => d.map(v => Object.assign(v, {key: d.key})))
            .join("rect")
            .attr("x", d => x(d[0]))
            .attr("y", ({data: [name]}) => y(name))
            .attr("width", d => x(d[1]) - x(d[0]))
            .attr("height", y.bandwidth())
            .attr("class", d => {
                return String(d.key).replace(/\s+/g, "_");
            })
            .on("mouseover", function (event, d) {
                const catName = String(d3.select(this.parentNode).datum().key);
                const keyName = catName.replace(/\s+/g, "_");
                const name = d.data[0];
                const value = Math.abs(d[1] - d[0]);
                d3.selectAll(".category")
                    .selectChildren()
                    .filter((d,i) => i !== catName)
                    .style("opacity", 0.2);
                d3.selectAll(`.${keyName}`).style("opacity", 1);
                tooltip
                    .style("opacity", 0.9)
                    .html(`<strong>${name}</strong><br/>Category: ${catName}<br/>$${formatValue(value)}`)
                    .style("left", (event.pageX + 10) + "px")
                    .style("top", (event.pageY - 28) + "px");
            })
            .on("mousemove", function(event) {
                tooltip
                    .style("left", (event.pageX + 10) + "px")
                    .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseleave", function (event, d) {
                d3.selectAll(".category").selectChildren().style("opacity", 1);
                tooltip.style("opacity", 0);
            });
        svg.append("g")
            .attr("transform", `translate(0,${margin.top})`)
            .call(d3.axisTop(x)
                .ticks(width / 80)
                .tickFormat(formatValue)
                .tickSizeOuter(0))
            .call(g => g.select(".domain").remove())
            .call(g => g.append("text")
                .attr("x", x(0) + 20)
                .attr("y", -24)
                .attr("fill", "currentColor")
                .attr("text-anchor", "start")
                .text(data.positive))
            .call(g => g.append("text")
                .attr("x", x(0) - 20)
                .attr("y", -24)
                .attr("fill", "currentColor")
                .attr("text-anchor", "end")
                .text(data.negative));
        svg.append("g")
            .call(d3.axisLeft(y).tickSizeOuter(0))
            .call(g => g.selectAll(".tick").data(bias).attr("transform", ([name, min]) => `translate(${x(min)},${y(name) + y.bandwidth() / 2})`))
            .call(g => g.select(".domain").attr("transform", `translate(${x(0)},0)`));
    }, [data]);
    return (
        <div>
            <h2 className="chart-title">{title}</h2>
            {subtitle && <div className="chart-subtitle">{subtitle}</div>}
            {data ? (
                <svg
                    ref={svgRef}
                    width={928}
                    height={200}
                    style={{ border: "1px solid #ccc", background: "#fafafa" }}
                />
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    );
};

export default DivergingStackedBarChart;

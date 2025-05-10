import React, { useState, useEffect } from "react";
import LineChart from "./charts/line.jsx";
import BarChart from "./charts/bar.jsx";

const BUTTONS_HEIGHT = 50;

const inactiveButton = { // Styling nor inactive buttons
    border: "1.5px solid #9e0142",
    borderRadius: "3px",
    padding: "4px 8px",
    margin: "10px 2px",
    fontSize: 14,
    color: "#9e0142",
};

const activeButton = { // Styling for active buttons
    ...inactiveButton,
    backgroundColor: "#9e0142",
    color: "white",
    fontWeight: "bold"
}

const TransitionButtons = ({ type, buttons, monthly, title}) => {
    // Convert all button objects to use 'filepath' for consistency
    const normalizedButtons = buttons.map(b => ({
        ...b,
        filepath: b.filepath || b.path // prefer filepath, fallback to path
    }));
    const firstChart = normalizedButtons[0];

    // Initialize state to first chart's data
    const [filepath, setFilepath] = useState(firstChart.filepath);
    const [subtitle, setSubtitle] = useState(firstChart.subtitle);
    const [active, setActive] = useState(firstChart.label);

    useEffect(() => {
        setFilepath(firstChart.filepath);
        setSubtitle(firstChart.subtitle);
        setActive(firstChart.label);
    }, [firstChart.filepath, firstChart.subtitle, firstChart.label]);

    let chart = null;
    if (type === 'line') {
        chart = <LineChart filepath={filepath} monthly={monthly} title={title} subtitle={subtitle} />;
    } else if (type === 'bar') {
        chart = <BarChart filepath={filepath} title={title} subtitle={subtitle} />;
    }

    return (
        <div>
            {chart}
            <div style={{ height: BUTTONS_HEIGHT }}>
                {normalizedButtons.map(({ label, filepath, subtitle }) => (
                    <button
                        key={label}
                        style={active === label ? activeButton : inactiveButton}
                        onClick={() => {
                            setFilepath(filepath);
                            setSubtitle(subtitle);
                            setActive(label);
                        }}
                    >{label}</button>
                ))}
            </div>
        </div>
    );
};

export default TransitionButtons;

import React, { useState, useEffect } from "react";
import LineChart from "./charts/line.jsx";
import BarChart from "./charts/bar.jsx";

const BUTTONS_HEIGHT = 50;

const baseButton = {
    fontFamily: "inherit",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "1.5px solid #1976d2",
    background: "#fff",
    color: "#1976d2",
    padding: "0.4em 1.1em",
    margin: "0.3em 0.2em",
    cursor: "pointer",
    transition: "background 0.2s, color 0.2s"
};

const activeButton = {
    ...baseButton,
    background: "#1976d2",
    color: "#fff"
};

const inactiveButton = {
    ...baseButton
};

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
                        onMouseOver={e => e.currentTarget.style.background = '#1976d2'}
                        onMouseOut={e => active !== label && (e.currentTarget.style.background = '#fff')}
                        onFocus={e => e.currentTarget.style.background = '#1976d2'}
                        onBlur={e => active !== label && (e.currentTarget.style.background = '#fff')}
                    >{label}</button>
                ))}
            </div>
        </div>
    );
};

export default TransitionButtons;

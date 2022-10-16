// eslint-disable-next-line no-unused-vars
import React from "react";
import { createRoot } from "react-dom/client";

// eslint-disable-next-line no-unused-vars
function Popup() {
    return (
        <div>
            <header>
                <h1 style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                Code snippet saver
                </h1>
            </header>
        </div>
    );
}

const container = document.getElementById("react-target");
const root = createRoot(container);
root.render(<Popup />);
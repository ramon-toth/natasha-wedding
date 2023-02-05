import React from 'react';
import Card from "../shared/Card";

function Accommodations(props) {
    return (
        <div className="min-w-screen flex justify-center m-10">
            <Card styles="min-w-full bg-opacity-90">
            {{
                content: <p className="text-xl">Blurb goes here</p>
            }}
        </Card>
        </div>
    );
}

export default Accommodations;
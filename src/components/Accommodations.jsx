import React from 'react';
import Card from "../shared/Card";

function Accommodations(props) {
    return (
        <div className="min-w-screen flex justify-center m-10">
            <Card styles="min-w-full bg-opacity-90">
            {{
                content: <>
                    <p className="text-xl">
                    When you are ready to book your accommodations at Emerald Lake Lodge, please call 1-250-343-6321 and mention the “Aelicks/Ingham Wedding” to take advantage of the group discount.
                </p>
                    <p className="text-xl">
                        You can also visit the website for more information about the rooms by &nbsp;
                        <a
                            href="https://crmr.com/resorts/emerald-lake/accommodations/"
                            rel="noreferrer"
                            target="_blank"
                            className="font-bold"
                        >
                            clicking here.
                        </a>
                    </p>
                    </>

            }}
        </Card>
        </div>
    );
}

export default Accommodations;
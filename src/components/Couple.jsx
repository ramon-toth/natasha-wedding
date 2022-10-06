import React from 'react';
import HeartCard from "./HeartCard";

function Couple(props) {
    return (
        <section>
            <div className="container flex justify-around gap-x-10 bg-primary min-w-full px-10 py-10">
             <HeartCard></HeartCard>
             <HeartCard></HeartCard>
            </div>
        </section>
    );
}

export default Couple;
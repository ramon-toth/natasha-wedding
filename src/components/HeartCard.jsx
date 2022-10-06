import React from 'react';

function HeartCard(props) {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className="mask mask-heart mx-5" src="https://placeimg.com/400/400/arch" alt=""/></figure>
            <div className="card-body">
                <h2 className="card-title">Bride/Groom</h2>
                <p>A blurb about me</p>
                {/*<div className="card-actions justify-end">*/}
                {/*    <button className="btn btn-primary">Listen</button>*/}
                {/*</div>*/}
            </div>
        </div>    );
}

export default HeartCard;
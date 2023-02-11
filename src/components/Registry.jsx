import Card from "../shared/Card";

function Registry() {
    return (
        <div className="min-w-screen flex justify-center my-10 mx-10">
            <Card styles="min-w-full bg-opacity-90 text-2xl">
                {{
                    content: (
                        <p className="text-xl">
                            Natasha and Rhys need for nothing and will not be doing a wedding registry. We would like to thank everyone for making the trip to come and join them for their special day. A thoughtful card and contribution to their honeymoon fund would be appreciated but is by no means necessary.
                        </p>
                    ),
                }}
            </Card>
        </div>
    );
}

export default Registry;

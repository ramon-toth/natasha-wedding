import React from "react";
import HeartCard from "./HeartCard";

function Couple(props) {
  return (
    <section className="mt-10">
      <div className="container flex flex-col md:flex-row justify-between gap-10 min-w-full px-10 py-10">
        <HeartCard>
          {{
            title: "Bride",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque\n" +
              "delectus deleniti et libero quis? Accusamus atque autem commodi\n" +
              "doloremque eaque harum iste laborum libero numquam porro reiciendis\n" +
              "saepe, vel voluptate.",
            image: "https://placeimg.com/400/400/arch",
          }}
        </HeartCard>
        <HeartCard>
          {{
            title: "Groom",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque\n" +
              "delectus deleniti et libero quis? Accusamus atque autem commodi\n" +
              "doloremque eaque harum iste laborum libero numquam porro reiciendis\n" +
              "saepe, vel voluptate.",
            image: "https://placeimg.com/400/400/arch",
          }}
        </HeartCard>
      </div>
    </section>
  );
}

export default Couple;

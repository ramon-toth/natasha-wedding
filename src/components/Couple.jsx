import HeartCard from "../shared/HeartCard";
import bride from "../assets/bride.jpeg";
import groom from "../assets/groom.jpeg";

function Couple() {
  return (
    <section>
      <div className="container flex flex-col md:flex-row justify-between gap-10 min-w-full px-10 py-10">
        <HeartCard>
          {{
            title: <span className="text-2xl cursive">Natasha Aelicks</span>,
            content:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque\n" +
              "delectus deleniti et libero quis? Accusamus atque autem commodi\n" +
              "doloremque eaque harum iste laborum libero numquam porro reiciendis\n" +
              "saepe, vel voluptate.",
            image: bride,
          }}
        </HeartCard>
        <HeartCard>
          {{
            title: <span className="text-2xl cursive">Rhys Ingham</span>,
            content:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque\n" +
              "delectus deleniti et libero quis? Accusamus atque autem commodi\n" +
              "doloremque eaque harum iste laborum libero numquam porro reiciendis\n" +
              "saepe, vel voluptate.",
            image: groom,
          }}
        </HeartCard>
      </div>
    </section>
  );
}

export default Couple;

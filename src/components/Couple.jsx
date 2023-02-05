import HeartCard from "../shared/HeartCard";
import bride from "../assets/bride.jpeg";
import groom from "../assets/groom.jpeg";
import fishing from "../assets/fishing.jpeg";

function Couple() {
  const coupleIntro = (
    <>
      <p>
        Natasha and Rhys were first officially introduced August 2017. Rhys had
        a small gathering of people at his house and Natasha had tagged along
        with some friends. Rhys and his buddies had been ripping around the
        neighbourhood on a Moped scooter, and of course, when Natasha was
        offered to take it for a spin, there was no second guessing… she was in!
        However, her friends knew her too well and suggested that it might be a
        better idea if he took her for a ride, as she was likely to damage the
        scooter, herself, or both on her own. It was only about a week after
        that fateful day that they went on their first official date, and the
        rest was history.
      </p>
      <p>
        Although they still enjoy their separate hobbies and activities, they
        cherish the most the things that they do together. From road tripping
        and camping around BC with their little dog Pazoo, to jet setting trips
        to places like Dubai and South Africa, with these two, there is never a
        dull moment. Their mutual appreciation for adventure is one of the
        fundamental building blocks of their relationship.
      </p>
    </>
  );

  return (
    <>
      <section>
        <div className="container  min-w-full px-10 py-10 ">
          <div className="card lg:card-side bg-base-100 shadow-xl bg-opacity-90">
            <figure className="">
              <img src={fishing} className="rounded-lg w-3/4 max-h-[180rem] mb-5"  alt="" />
            </figure>
            <div className="card-body text-xl">
                {coupleIntro}
            </div>
          </div>{" "}
        </div>
      </section>
      <section>
        <div className="container flex flex-col md:flex-row justify-between gap-10 min-w-full px-10 py-10">
          <HeartCard>
            {{
              title: <span className="text-2xl cursive">Natasha Aelicks</span>,
              content: (
                <>
                  <p>
                    Natasha grew up a Vancouverite and made the move to
                    Castlegar in 2015. From a very young age she had a love for
                    animals, sparked by her first pet fuzzy bear the guinea pig.
                    From there, was the instigator of the Aelicks family
                    acquiring many more pets throughout her childhood. From dogs
                    and cats to mice, geckos, fish and even frogs she loved them
                    all. It is not surprising that she perused a carrier in
                    Veterinary Medicine.
                  </p>
                  <p>
                    Natasha has always been outgoing, funny and game for just
                    about anything. If there was an opportunity to join a sport
                    or club, she was in (regardless of the early morning swim
                    practices or late-night ice times. With a start in Figure
                    skating, field hockey, ice hockey so it is no surprise that
                    she has found her way to roller derby in Castlegar.
                  </p>
                  <p>
                    Now you can find natasha out in the back country hunting and
                    fishing, or screaming her heart out on the track, coaching
                    the Dam City rollers. Because Natasha is so outgoing she
                    makes friends easily and if you are her friend you are her
                    friend for life, just ask her best friend and Maid of Honor,
                    they’ve been friends since preschool.
                  </p>
                  <p className="text-right">
                    – Kim Aelicks, Mother or the Bride
                  </p>
                </>
              ),
              image: bride,
            }}
          </HeartCard>
          <HeartCard>
            {{
              title: <span className="text-2xl cursive">Rhys Ingham</span>,
              content: (
                <>
                  <p>
                    Rhys came into this world with a huge smile and infectious
                    dimples, after the long, arduous labour he put his mother
                    through........those dimples went on to win him a calendar
                    page in the Pharmasave Baby calendar at the age of 6
                    months....at a very early age, Rhys had an inquisitive mind
                    and photographic memory....he immediately showed a strong
                    interest in engines and motors...he was always tinkering and
                    fixing up motorized "things" to get them working again...
                  </p>
                  <p>
                    Rhys was put into every imaginable sport/activity there
                    was-he excelled at every sport he did....the farm Rhys grew
                    up on was the perfect place to hone his mechanical
                    skills...everything from small engines , motorbikes,
                    chainsaw, snowmobiles and vehicles....
                  </p>
                  <p>
                    Rhys would gladly engage in yet another "project"...then the
                    racing bug bit him and got him started off on his racing
                    career....it started from a dirt track at Northport WA,
                    which eventually lent itself to him buying himself a NHRA
                    drag car...he spent many years racing and engaging in a love
                    of his life....this also led MORE AND BIGGER snowmobiles,
                    boats, quads and side by siding ....he did manage to find
                    the time to fit in an education for himself....he became a
                    millwright/welder/fabricator and planner and began his
                    career at Teck in Trail where he continues to this day.....
                  </p>
                  <p>
                    Rhys has always been a adventurer and explorer...he loves
                    all outdoor activities and has an endless list of projects
                    to keep himself occupied...mechanizing, fishing, racing,
                    snowmobiling, fixing/rebuilding chainsaws, caving, hiking,
                    boating, camping, diving and the list goes on........he
                    always needs to be busy and with a full stomach....then he
                    got introduced to Natasha Aelicks, the love of his life and
                    we all know to where this has lead him.
                  </p>
                  <p className="text-right">
                    {" "}
                    - Alexis Ingham, Mother of the groom
                  </p>
                </>
              ),

              image: groom,
            }}
          </HeartCard>
        </div>
      </section>
    </>
  );
}

export default Couple;

import achievements from "../assets/achievements.png";

const Achievements = () => {
  return (
    <section className="main-container">
      <h1>Achievements</h1>
      <p>
        We are a new group but with working together and reaching out to people
        we have achieved a lot.
      </p>
      <p>
        One of our members, Agnes Toth organised an online, silent auction to
        raise funds in support of Migration Aid, a small charitable organisation
        based in Hungary. They are small, fully volunteer-run organisation that
        is not accepting government funding to be able to be completely
        impartial and independent from Hungarian politics. Migration Aid has
        been coordinating free accommodation and transport for Ukrainian
        refugees in Hungary since the beginning of the war; they set up 2
        hostels for refugees where they can host and feed hundreds of people
        every day. And gosh, they are busy!
      </p>
      <p>
        The auction launched on 18th March and closed on Mothering Sunday 27th
        March. 49 people placed 67 bids on items and services donated by
        generous individuals and businesses in and around Cambridge. We
        auctioned hair stylist appointments, mini breaks, coaching sessions,
        artwork and more!
      </p>
      <p>
        All the money raised through the auction will go towards supporting
        Ukrainian refugees through Migration Aid. People and businesses in
        Cambridge are incredibly generous and we are very grateful for all the
        amazing support from everyone! This would not have been possible without
        you.
      </p>
      <p>
        <b>
          Helping to find accommodation to the first Ukrainian family arriving
          in Cambridgeshire an extended family of 10 people and 2 dogs and
          highlighting support for Ukraine in the media
        </b>
      </p>
      <p>
        Rend Platings, one of our founders, connected a four-generation family
        of 10 who fled the war-torn Ukrainian city of Kharkiv with generous
        local businessman Mick Swinhoe. Mick donated a family house for their
        use in Caldecote, eight miles west of Cambridge. Mick got in touch with
        Rend on Facebook who connected him with the family.
      </p>
      <p>
        The family was able to move into their new home on Wednesday 23rd March.
      </p>
      <p>
        {" "}
        Read more in:
        <a
          href="https://www.express.co.uk/news/uk/1585669/ukraine-russia-orphans-uk-refugee-family-hero"
          target="_blank"
        >
          {" "}
          Express
        </a>{" "}
        and{" "}
        <a
          href="https://www.dailymail.co.uk/news/article-10643071/Ukrainian-family-10-new-home-Cambridgeshire.html"
          target="_blank"
        >
          {" "}
          Daily Mail
        </a>
      </p>

      <p>
        Rend has also highlighted support for Ukraine in the media by having her
        house painted in Ukrainian flag colours
      </p>
      <p>
        Read more in
        <a
          href="https://www.thesun.co.uk/news/uknews/17805562/couple-paint-house-ukraine-colours-cambridge/"
          target="_blank"
        >
          {" "}
          The Sun
        </a>
      </p>
      <p>
        <b>Sending a lorry full of medical and humanitarian aid to Ukraine</b>
      </p>
      <div className="pic-container">
        <img src={achievements} alt={"lorry of humanitarian aid"} />
      </div>
      <p>
        Through our networking efforts we connected an organisation that had
        some medical aids ready to be delivered to Ukraine, but sadly could not
        fill up the whole lorry, with Buffaload who had plenty of humanitarian
        aid items at their warehouse in Pymoor. On 24th March a truck got loaded
        for Ukraine to go to Vinnitsa and Kyiv and the driver happened to be
        Ukrainian!
      </p>
    </section>
  );
};

export default Achievements;

import React from "react"
import Post from "../../components/Post"
import Seo from "../../components/Seo"
import { posts } from "../../data/posts"
import * as styles from "./building-is-cheap-distribution-is-the-moat.module.css"

const meta = posts.find(p => p.slug === "building-is-cheap-distribution-is-the-moat")

const Cite = ({ n }) => (
  <sup className={styles.footnote}>
    <a href={`#ref-${n}`} id={`cite-${n}`}>
      [{n}]
    </a>
  </sup>
)

const ExternalLink = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
)

const LoopDiagram = () => (
  <figure className={styles.figure}>
    <svg
      className={styles.diagram}
      viewBox="0 0 640 300"
      role="img"
      aria-labelledby="loop-diagram-title"
    >
      <title id="loop-diagram-title">
        A growth loop: a new user gets value, produces something other people
        can see, someone new discovers it and signs up, and the cycle repeats
      </title>
      <defs>
        <marker
          id="loop-arrowhead"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="4"
          orient="auto"
        >
          <path d="M0,0 L8,4 L0,8 z" className={styles.labelMuted} />
        </marker>
      </defs>

      <rect x="16" y="24" width="220" height="72" rx="10" className={styles.boxAccent} />
      <text x="126" y="54" textAnchor="middle" className={styles.label} fontSize="14" fontWeight="600">
        New user signs up
      </text>
      <text x="126" y="76" textAnchor="middle" className={styles.labelMuted} fontSize="12">
        the input
      </text>

      <rect x="404" y="24" width="220" height="72" rx="10" className={styles.box} />
      <text x="514" y="54" textAnchor="middle" className={styles.label} fontSize="14" fontWeight="600">
        Gets real value
      </text>
      <text x="514" y="76" textAnchor="middle" className={styles.labelMuted} fontSize="12">
        the &ldquo;aha&rdquo; moment
      </text>

      <rect x="404" y="204" width="220" height="72" rx="10" className={styles.box} />
      <text x="514" y="234" textAnchor="middle" className={styles.label} fontSize="14" fontWeight="600">
        Makes something visible
      </text>
      <text x="514" y="256" textAnchor="middle" className={styles.labelMuted} fontSize="12">
        invite, share, post, review, revenue
      </text>

      <rect x="16" y="204" width="220" height="72" rx="10" className={styles.box} />
      <text x="126" y="234" textAnchor="middle" className={styles.label} fontSize="14" fontWeight="600">
        Someone new finds it
      </text>
      <text x="126" y="256" textAnchor="middle" className={styles.labelMuted} fontSize="12">
        link, search result, feed, ad
      </text>

      <path d="M236,60 L404,60" className={styles.arrow} markerEnd="url(#loop-arrowhead)" />
      <path d="M514,96 L514,204" className={styles.arrow} markerEnd="url(#loop-arrowhead)" />
      <path d="M404,240 L236,240" className={styles.arrow} markerEnd="url(#loop-arrowhead)" />
      <path d="M126,204 L126,96" className={styles.arrow} markerEnd="url(#loop-arrowhead)" />

      <text x="320" y="146" textAnchor="middle" className={styles.labelMuted} fontSize="12">
        the output of one cycle
      </text>
      <text x="320" y="164" textAnchor="middle" className={styles.labelMuted} fontSize="12">
        is the input of the next
      </text>
    </svg>
    <figcaption className={styles.caption}>
      A funnel ends at &ldquo;converted.&rdquo; A loop keeps going: each user
      leaves behind something that brings in the next one.
    </figcaption>
  </figure>
)

const BuildingIsCheap = () => {
  return (
    <Post title={meta.title} date={meta.date}>
      <p>
        A few years ago, the hard part of starting a software product was
        building it. You needed a team, months of runway, and a lot of
        patience. That isn&apos;t true anymore. In early 2025, Y Combinator
        said that for about a quarter of its Winter batch, 95% of the code
        was written by AI<Cite n={1} />. I can get a working app with auth,
        payments and a decent UI running over a weekend now, and so can
        everyone else.
      </p>
      <p>
        That last part is the problem. If I can build it in a weekend, so can
        the fifty other people who had the same idea this month. The product
        itself has stopped being the scarce thing. What&apos;s scarce is
        attention: getting the right people to find the product, try it, and
        keep using it. Distribution is the moat now.
      </p>
      <p>
        This post is my attempt to turn that idea into a plan I can actually
        follow for a consumer (B2C) product, going from zero users to
        something that makes money. I&apos;ve tried to back every step with
        evidence instead of vibes, and the sources are at the end.
      </p>

      <h2>Why the product was never the whole game</h2>
      <p>
        Peter Thiel made this point in <em>Zero to One</em> long before AI
        coding tools existed<Cite n={2} />:
      </p>
      <blockquote>
        Most businesses get zero distribution channels to work: poor sales
        rather than bad product is the most common cause of failure. If you
        can get just one distribution channel to work, you have a great
        business.
      </blockquote>
      <p>
        The failure data agrees. CB Insights looked at 431 VC-backed startups
        that shut down since 2023. 70% ran out of capital, but they treat that
        as the final cause, not the root one. Underneath it, 43% had poor
        product-market fit and 19% had unit economics that didn&apos;t
        work<Cite n={3} />. In other words, people didn&apos;t want the
        product enough, or getting each customer cost more than that customer
        was worth. Both of those are distribution problems as much as product
        problems.
      </p>
      <p>
        So the order of work matters. The plan below runs in stages, and
        each stage has a gate you should pass before you spend real money on
        the next one.
      </p>

      <h2>Stage 0: Pick a person, not a market</h2>
      <p>
        Before any marketing, write one sentence that names who the product
        is for and the moment they need it. &ldquo;People who want to be
        healthier&rdquo; is a market. &ldquo;Someone in their late twenties
        who just started lifting and doesn&apos;t know what to eat after a
        workout&rdquo; is a person. You can find the second one. You know
        which subreddits, Discord servers, TikTok hashtags, YouTube creators
        and search queries they already use.
      </p>
      <p>
        That list of places is your first distribution plan. If you
        can&apos;t write it, you don&apos;t know your customer well enough
        yet, and no channel will fix that.
      </p>
      <p>
        <strong>Gate:</strong> you can name five specific places online
        where your person already spends time.
      </p>

      <h2>Stage 1: The first 100 users, by hand</h2>
      <p>
        Paul Graham&apos;s essay <em>Do Things That Don&apos;t Scale</em> is
        still the best advice for this stage: &ldquo;The most common
        unscalable thing founders have to do at the start is to recruit users
        manually.&rdquo; The Airbnb founders went door to door in New York,
        signing up hosts and helping them improve their listings. The
        Collison brothers didn&apos;t send Stripe beta links; when someone
        said yes, they said &ldquo;give me your laptop&rdquo; and set them up
        on the spot<Cite n={4} />.
      </p>
      <p>For a consumer app, the equivalent looks like this:</p>
      <ul>
        <li>
          Post useful, non-promotional answers in the places from Stage 0,
          and mention the product only when it actually solves the question.
        </li>
        <li>
          DM people who describe the exact problem you solve, and offer to
          set them up personally.
        </li>
        <li>
          Get on a call or chat with every early user. Watch where they get
          confused. Fix it the same day.
        </li>
        <li>
          Post what you&apos;re building, with real numbers and real
          screenshots, wherever your users hang out. This gets you users and
          content at the same time.
        </li>
      </ul>
      <p>
        Then measure whether they actually care. The cleanest test I know is
        Sean Ellis&apos;s survey question, which Superhuman turned into a
        repeatable process: ask users &ldquo;How would you feel if you could
        no longer use this product?&rdquo; If at least 40% answer &ldquo;very
        disappointed,&rdquo; you&apos;re close to product-market fit.
        Superhuman started at 22%. They focused on the users who loved it,
        spent half of their roadmap on what those users loved and half on
        what stopped the &ldquo;somewhat disappointed&rdquo; group, and got
        to 58%<Cite n={5} />.
      </p>
      <p>
        <strong>Gate:</strong> 40% or more of active users say &ldquo;very
        disappointed.&rdquo; Until then, every hour spent on marketing is
        better spent on the product.
      </p>

      <h2>Stage 2: Retention before acquisition</h2>
      <p>
        Pouring users into a product that doesn&apos;t keep them is like
        filling a leaky bucket. Before scaling anything, plot a retention
        curve: of the people who signed up in a given week, what percentage
        are still active after 1, 2, 4, 8 and 12 weeks? You want the curve to
        flatten out. A curve that keeps sliding toward zero means no amount
        of marketing will save you.
      </p>
      <p>
        Lenny Rachitsky collected benchmarks from operators for six-month
        user retention<Cite n={6} />. For consumer products:
      </p>
      <ul>
        <li>Consumer social: about 25% is good, 45% is great.</li>
        <li>Consumer transactional: about 30% is good, 50% is great.</li>
        <li>Consumer subscription: about 40% is good, 70% is great.</li>
      </ul>
      <p>
        He also points out that if you can get users very cheaply, through
        SEO, word of mouth or virality, you can afford to lose more of them.
        That trade-off between retention and acquisition cost is the whole
        game from here on.
      </p>
      <p>
        <strong>Gate:</strong> the retention curve flattens, ideally near the
        &ldquo;good&rdquo; line for your category.
      </p>

      <h2>Stage 3: Charge money early, and do the math</h2>
      <p>
        Your business model decides which channels you can afford, so pick
        it before picking channels. For subscription apps, RevenueCat&apos;s
        2025 report has the most useful data I&apos;ve found<Cite n={7} />:
      </p>
      <ul>
        <li>
          Apps with a hard paywall (pay or trial before using the product)
          had a median download-to-paid conversion of 12.1%. Freemium apps
          had 2.2%.
        </li>
        <li>
          82% of trial starts happen on the same day the app is installed.
          Your onboarding is your sales pitch.
        </li>
        <li>
          About 44% of annual subscribers renewed after the first year,
          against 17% for monthly plans.
        </li>
      </ul>
      <p>
        Hard paywalls aren&apos;t free; the same report shows higher refund
        rates (5.8% against 3.4%). But the difference in conversion is too
        big to ignore, and it changes what you can afford to spend.
      </p>
      <p>
        Here&apos;s the back-of-the-envelope version. Say the app sells a $40
        annual plan. With Apple&apos;s Small Business Program, the store takes
        15% instead of 30% while you earn under $1M a year<Cite n={8} />,
        so you keep $34. Then:
      </p>
      <ul>
        <li>
          <strong>Hard paywall:</strong> 12% of installs pay, so each install
          is worth about $4.08 in year one.
        </li>
        <li>
          <strong>Freemium:</strong> 2.2% of installs pay, so each install is
          worth about $0.75 in year one.
        </li>
      </ul>
      <p>
        That number, revenue per install, is the most you can pay to get an
        install and still break even in year one. At $0.75, paid ads are
        almost impossible and you are living on free channels. At $4, paid
        acquisition becomes something you can test. Run this calculation
        with your own price and conversion rate, and redo it every month.
      </p>
      <p>
        <strong>Gate:</strong> you know your revenue per install, and you
        know the maximum you can spend to acquire one.
      </p>

      <h2>Stage 4: Find the one channel that works</h2>
      <p>
        Gabriel Weinberg and Justin Mares list 19 traction channels in{" "}
        <em>Traction</em>, from SEO and content to PR, paid ads, affiliates
        and existing platforms. Their Bullseye framework says that one of
        them will usually dominate your growth, and you can&apos;t predict
        which one in advance<Cite n={9} />. So you test:
      </p>
      <ol className={styles.checklist}>
        <li>Brainstorm one realistic idea for every channel.</li>
        <li>Rank them by how likely they are to reach your person cheaply.</li>
        <li>Pick the top three.</li>
        <li>
          Run a small, cheap test on each in parallel: a few weeks and a few
          hundred dollars at most, with a cost-per-user target decided before
          you start.
        </li>
        <li>Put all your effort into the winner and drop the rest.</li>
      </ol>
      <p>
        Two constraints narrow the list fast. Brian Balfour&apos;s
        &ldquo;Four Fits&rdquo; framework says that &ldquo;products are built
        to fit with channels. Channels do not mold to products,&rdquo; and
        that your channels are determined by your business model, and the
        other way around<Cite n={10} />. For a low-priced consumer app,
        that rules out anything expensive per user (sales calls, trade shows)
        and leaves a short list of channels that can work:
      </p>
      <ul>
        <li>
          <strong>Short-form video</strong> (TikTok, Reels, Shorts). Works
          when the product is visual or the result is easy to show in 15
          seconds. Build in a share button that creates a good-looking clip.
        </li>
        <li>
          <strong>Search and SEO.</strong> Works when people already search
          for the problem. Pages that answer specific long-tail questions
          compound for years.
        </li>
        <li>
          <strong>Creators and UGC.</strong> Pay small creators in your niche
          to make honest videos, then reuse the best ones as ad creative.
        </li>
        <li>
          <strong>Communities.</strong> Reddit, Discord and niche forums.
          Slow, but free, and the feedback is brutally honest.
        </li>
        <li>
          <strong>Paid ads</strong> (Meta, Apple Search Ads, Google). Only
          once your revenue per install from Stage 3 is clearly above the
          cost per install you measure in a test.
        </li>
        <li>
          <strong>Referrals.</strong> Only works if the product is already
          good enough that people want to share it. See the next section.
        </li>
      </ul>
      <p>
        <strong>Gate:</strong> one channel brings in users at a cost below
        your revenue per install, and it keeps doing that as you put more
        money or time into it.
      </p>

      <h2>Stage 5: Turn the channel into a loop</h2>
      <p>
        A funnel is a straight line: someone sees an ad, installs, pays, and
        that&apos;s the end. Balfour, Casey Winters, Kevin Kwok and Andrew
        Chen argued that the fastest-growing products grow through loops
        instead, where each new user produces something that brings in the
        next user<Cite n={11} />.
      </p>
      <LoopDiagram />
      <p>
        Dropbox is the classic example. In 2010 they gave both the referrer
        and the new user extra free storage. Drew Houston said the program
        permanently increased signups by 60%, and 35% of daily signups came
        through it<Cite n={12} />. The reward was the product itself, so
        every referral also made the product more useful.
      </p>
      <p>Common loops for consumer products:</p>
      <ul>
        <li>
          <strong>Referral loop:</strong> users invite friends for a reward
          that is part of the product (more storage, more credits, a free
          month).
        </li>
        <li>
          <strong>Content loop:</strong> users create things that are public
          by default and searchable or shareable (Pinterest boards,
          TripAdvisor reviews, a Strava run, a Spotify Wrapped card).
        </li>
        <li>
          <strong>Paid loop:</strong> revenue from new users funds the ads
          that bring the next ones. This only works when the Stage 3 math is
          positive.
        </li>
      </ul>
      <p>
        Pick the one loop that matches your product, design the product so
        the &ldquo;visible output&rdquo; step happens naturally, and measure
        how many new users each existing user brings in.
      </p>

      <h2>Expect every channel to wear out</h2>
      <p>
        Andrew Chen calls this the Law of Shitty Clickthroughs: &ldquo;over
        time, all marketing strategies result in shitty clickthrough
        rates.&rdquo; The first banner ad, on HotWired in 1994, had a 78%
        clickthrough rate. By 2011, Facebook ads were around
        0.05%<Cite n={13} />. Every new channel works well until everyone
        copies it.
      </p>
      <p>
        So the job never finishes. Weinberg ran the Bullseye process six or
        seven times at DuckDuckGo, moving on as each channel plateaued<Cite n={9} />.
        Keep a small amount of time and budget going toward testing the next
        channel, even while the current one is still working.
      </p>

      <h2>The plan, as a checklist</h2>
      <ol className={styles.checklist}>
        <li>
          Write one sentence describing the person and the moment they need
          the product. List five places they already spend time online.
        </li>
        <li>
          Recruit the first 100 users by hand. Talk to every one of them.
        </li>
        <li>
          Run the &ldquo;very disappointed&rdquo; survey. Don&apos;t move on
          until it hits 40%.
        </li>
        <li>
          Plot weekly retention curves. Don&apos;t move on until they
          flatten.
        </li>
        <li>
          Charge from day one, test a hard paywall, push the annual plan, and
          calculate revenue per install.
        </li>
        <li>
          Run cheap parallel tests on your top three channels. Keep the one
          that brings in users below your revenue per install.
        </li>
        <li>Build a loop into the product around that channel.</li>
        <li>
          Spend most of your effort scaling it, and keep testing the next
          channel before this one wears out.
        </li>
      </ol>
      <p>
        None of this is glamorous, and almost none of it is code. That&apos;s
        the point. Building got cheap, so the thing that separates a
        product that makes money from one that doesn&apos;t is everything
        that happens after the deploy.
      </p>

      <h2>Sources</h2>
      <ol className={styles.references}>
        <li id="ref-1">
          CNBC,{" "}
          <ExternalLink href="https://www.cnbc.com/2025/03/15/y-combinator-startups-are-fastest-growing-in-fund-history-because-of-ai.html">
            &ldquo;Y Combinator startups are fastest growing, most profitable
            in fund history because of AI&rdquo;
          </ExternalLink>
          , March 2025.
        </li>
        <li id="ref-2">
          Peter Thiel with Blake Masters, <em>Zero to One</em>, chapter 11,
          &ldquo;If You Build It, Will They Come?&rdquo;, 2014.
        </li>
        <li id="ref-3">
          CB Insights,{" "}
          <ExternalLink href="https://www.cbinsights.com/research/report/startup-failure-reasons-top/">
            &ldquo;Top reasons startups fail&rdquo;
          </ExternalLink>
          , March 2026.
        </li>
        <li id="ref-4">
          Paul Graham,{" "}
          <ExternalLink href="https://paulgraham.com/ds.html">
            &ldquo;Do Things that Don&apos;t Scale&rdquo;
          </ExternalLink>
          , 2013.
        </li>
        <li id="ref-5">
          Rahul Vohra, First Round Review,{" "}
          <ExternalLink href="https://review.firstround.com/how-superhuman-built-an-engine-to-find-product-market-fit/">
            &ldquo;How Superhuman Built an Engine to Find Product/Market
            Fit&rdquo;
          </ExternalLink>
          .
        </li>
        <li id="ref-6">
          Lenny Rachitsky,{" "}
          <ExternalLink href="https://www.lennysnewsletter.com/p/what-is-good-retention-issue-29">
            &ldquo;What is good retention&rdquo;
          </ExternalLink>
          , Lenny&apos;s Newsletter.
        </li>
        <li id="ref-7">
          RevenueCat,{" "}
          <ExternalLink href="https://www.revenuecat.com/state-of-subscription-apps-2025">
            &ldquo;State of Subscription Apps 2025&rdquo;
          </ExternalLink>
          .
        </li>
        <li id="ref-8">
          Apple,{" "}
          <ExternalLink href="https://developer.apple.com/app-store/small-business-program/">
            &ldquo;App Store Small Business Program&rdquo;
          </ExternalLink>
          .
        </li>
        <li id="ref-9">
          Gabriel Weinberg and Justin Mares,{" "}
          <em>Traction: How Any Startup Can Achieve Explosive Customer
          Growth</em>, 2015; and Weinberg on{" "}
          <ExternalLink href="https://saasclub.io/podcast/gabriel-weinberg-duckduckgo-2/">
            the SaaS Club podcast
          </ExternalLink>
          .
        </li>
        <li id="ref-10">
          Brian Balfour,{" "}
          <ExternalLink href="https://brianbalfour.com/four-fits-growth-framework">
            &ldquo;Four Fits For $100M+ Growth&rdquo;
          </ExternalLink>
          .
        </li>
        <li id="ref-11">
          Brian Balfour, Casey Winters, Kevin Kwok and Andrew Chen, Reforge,{" "}
          <ExternalLink href="https://www.reforge.com/blog/growth-loops">
            &ldquo;Growth Loops are the New Funnels&rdquo;
          </ExternalLink>
          , 2018.
        </li>
        <li id="ref-12">
          Drew Houston,{" "}
          <ExternalLink href="https://www.slideshare.net/slideshow/dropbox-startup-lessons-learned-3836587/3836587">
            &ldquo;Dropbox: Startup Lessons Learned&rdquo;
          </ExternalLink>
          , 2010.
        </li>
        <li id="ref-13">
          Andrew Chen,{" "}
          <ExternalLink href="https://andrewchen.com/the-law-of-shitty-clickthroughs/">
            &ldquo;The Law of Shitty Clickthroughs&rdquo;
          </ExternalLink>
          .
        </li>
      </ol>
    </Post>
  )
}

export default BuildingIsCheap

export const Head = () => (
  <Seo
    title={meta.title}
    description={meta.excerpt}
    pathname={`/blog/${meta.slug}`}
  />
)

import React from "react"
import { Link } from "gatsby"
import Post from "../../components/Post"
import Seo from "../../components/Seo"
import { posts } from "../../data/posts"
import * as styles from "./building-is-cheap-distribution-is-the-moat.module.css"

const meta = posts.find(p => p.slug === "building-is-cheap-distribution-is-the-moat")

const ExternalLink = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
)

const TagLoopDiagram = () => (
  <figure className={styles.figure}>
    <svg
      className={styles.diagram}
      viewBox="0 0 640 300"
      role="img"
      aria-labelledby="tag-loop-title"
    >
      <title id="tag-loop-title">
        fram.d's growth loop: someone saves a memory, tags the friends who
        were there, those friends hear it through a private link, add their
        own voice, and then start saving and tagging memories of their own
      </title>
      <defs>
        <marker
          id="tag-loop-arrowhead"
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
        I save a memory
      </text>
      <text x="126" y="76" textAnchor="middle" className={styles.labelMuted} fontSize="12">
        photo + my voice note
      </text>

      <rect x="404" y="24" width="220" height="72" rx="10" className={styles.box} />
      <text x="514" y="54" textAnchor="middle" className={styles.label} fontSize="14" fontWeight="600">
        I tag who was there
      </text>
      <text x="514" y="76" textAnchor="middle" className={styles.labelMuted} fontSize="12">
        the people in the frame
      </text>

      <rect x="404" y="204" width="220" height="72" rx="10" className={styles.box} />
      <text x="514" y="234" textAnchor="middle" className={styles.label} fontSize="14" fontWeight="600">
        They hear it
      </text>
      <text x="514" y="256" textAnchor="middle" className={styles.labelMuted} fontSize="12">
        private link, then the app
      </text>

      <rect x="16" y="204" width="220" height="72" rx="10" className={styles.box} />
      <text x="126" y="234" textAnchor="middle" className={styles.label} fontSize="14" fontWeight="600">
        They add their voice
      </text>
      <text x="126" y="256" textAnchor="middle" className={styles.labelMuted} fontSize="12">
        and save their own memories
      </text>

      <path d="M236,60 L404,60" className={styles.arrow} markerEnd="url(#tag-loop-arrowhead)" />
      <path d="M514,96 L514,204" className={styles.arrow} markerEnd="url(#tag-loop-arrowhead)" />
      <path d="M404,240 L236,240" className={styles.arrow} markerEnd="url(#tag-loop-arrowhead)" />
      <path d="M126,204 L126,96" className={styles.arrow} markerEnd="url(#tag-loop-arrowhead)" />

      <text x="320" y="146" textAnchor="middle" className={styles.labelMuted} fontSize="12">
        every new user arrives
      </text>
      <text x="320" y="164" textAnchor="middle" className={styles.labelMuted} fontSize="12">
        already inside a memory
      </text>
    </svg>
    <figcaption className={styles.caption}>
      There&apos;s no public feed to be discovered in, so the tag is the
      only way a stranger to the app ever meets it.
    </figcaption>
  </figure>
)

const BuildingIsCheap = () => {
  return (
    <Post title={meta.title} date={meta.date}>
      <p>
        I recently shipped{" "}
        <ExternalLink href="https://useframd.app">fram.d</ExternalLink>, an
        iOS and Android app for shared memories. You save a photo, record a
        voice note about it, and tag the friends who were there. They can
        add their own voice notes to the same photo, so a memory ends up
        with everyone&apos;s side of the story in their own voice. There&apos;s
        no public feed, no likes and no followers, and the photos and audio
        are end-to-end encrypted (I wrote about how that works in{" "}
        <Link to="/blog/encrypting-photos-your-engineers-cant-see">
          an earlier post
        </Link>
        ).
      </p>
      <p>
        Building it was the easy part. With the AI tools we have now, one
        person can get a polished app with auth, encryption and two app
        store releases out the door in a fraction of the time it used to
        take. But the same is true for everyone else, so &ldquo;I built a
        good app&rdquo; is no longer an advantage on its own. The hard part
        is getting the right people to find it, use it, and keep using it.
        Distribution is the moat now, and I&apos;m starting from zero.
      </p>
      <p>
        This post is my marketing plan for fram.d, written down so I can
        hold myself to it and come back later with what actually happened.
      </p>

      <h2>The problem with marketing a private app</h2>
      <p>
        Most social apps grow because their content is public. Someone
        posts, a stranger sees it in a feed or a search result, and that
        stranger signs up. fram.d deliberately has none of that. Every
        memory is visible only to the people tagged in it, and that&apos;s
        the whole point of the product.
      </p>
      <p>
        So I can&apos;t rely on the app marketing itself through public
        content. That leaves me with two jobs: get the first groups of
        friends using it myself, and make sure that every time someone
        uses it, it pulls in the other people who were there.
      </p>

      <h2>Who it&apos;s for</h2>
      <p>
        &ldquo;People who want to save memories&rdquo; is everyone, which
        means it&apos;s no one. The person I&apos;m actually going after is
        more specific: <em>a group of friends who just got back from a trip,
        with a few hundred photos sitting in a group chat that nobody will
        scroll back to.</em>
      </p>
      <p>
        That moment, right after a trip, a wedding, a graduation or a
        birthday, is when people care most about holding on to what
        happened and still remember the stories behind each photo. It&apos;s
        also when the whole group is already talking to each other. That
        makes it the best time to show them fram.d.
      </p>
      <p>
        One thing this changes: my unit of growth isn&apos;t a user,
        it&apos;s a group. One person alone on fram.d gets a photo journal
        with voice notes. A group gets the actual product.
      </p>

      <h2>Step 1: Get the first groups in by hand</h2>
      <p>
        The first users won&apos;t come from ads or a launch post. They come
        from me, one group at a time.
      </p>
      <ul>
        <li>
          <strong>My own friend groups first.</strong> Every trip, dinner or
          get-together I&apos;m part of becomes a fram.d memory, and I tag
          everyone who was there. If my own friends don&apos;t come back to
          it, strangers won&apos;t either.
        </li>
        <li>
          <strong>Friends of friends with an upcoming event.</strong> Anyone
          I know who has a trip, wedding or reunion coming up, I offer to
          help set up the group and seed the first few memories myself.
        </li>
        <li>
          <strong>Sit next to people while they use it.</strong> I watch
          where they get confused, especially the first voice note and the
          first tag, and I fix it the same week.
        </li>
      </ul>
      <p>
        None of this scales, and that&apos;s fine. The point is to learn
        what makes a group stick before I spend any money bringing in
        groups I&apos;ve never met.
      </p>

      <h2>Step 2: Make the tag the marketing</h2>
      <p>
        Since there&apos;s no feed, the tag is fram.d&apos;s growth loop.
        Every memory someone saves can bring in everyone else who was in
        the photo.
      </p>
      <TagLoopDiagram />
      <p>
        That means the most important screen in the whole app, from a
        marketing point of view, is the one a person sees when they get
        tagged and don&apos;t have fram.d yet. Here&apos;s what I&apos;m
        focusing on there:
      </p>
      <ul>
        <li>
          <strong>Let them hear it before they install.</strong> The
          expiring private link should play the photo and the voice note
          right away. Hearing your friend talk about a night you were both
          at is the hook. An app store page isn&apos;t.
        </li>
        <li>
          <strong>Ask them to add their side.</strong> The call to action
          isn&apos;t &ldquo;download the app.&rdquo; It&apos;s &ldquo;add
          your voice to this memory,&rdquo; and the install is just the way
          to do that.
        </li>
        <li>
          <strong>Nudge the tagging.</strong> After someone saves a memory,
          the app should make it obvious and easy to tag who was there. A
          memory with nobody tagged is a dead end for growth.
        </li>
      </ul>

      <h2>Step 3: Show it, don&apos;t explain it</h2>
      <p>
        &ldquo;A shared memory app with voice notes&rdquo; sounds like a
        feature list. Watching a photo play with three friends&apos; voices
        telling the same story sounds like a feeling. So the content I make
        is mostly short videos that show that moment:
      </p>
      <ul>
        <li>
          Short clips for TikTok, Reels and Shorts showing a real memory
          (mine, or one shared with permission) playing with several
          voices on it.
        </li>
        <li>
          The privacy angle, said plainly: no feed, no likes, no audience,
          just the people who were there. Plenty of people are tired of
          performing for an audience on social media, and that&apos;s a
          message I can stand behind.
        </li>
        <li>
          Building in public. I&apos;m an engineer, and posts like the one
          on encryption reach people who care how their data is handled.
          That isn&apos;t my main audience, but it&apos;s an honest way to
          build trust and get early feedback.
        </li>
      </ul>
      <p>
        I&apos;m also going to try being genuinely helpful in communities
        where people plan trips and events, and only mention fram.d where
        it actually answers what someone is asking about.
      </p>

      <h2>Step 4: Watch the right numbers</h2>
      <p>
        Downloads are easy to celebrate and don&apos;t mean much on their
        own. These are the numbers I&apos;m tracking instead:
      </p>
      <ul>
        <li>
          <strong>Tags per memory:</strong> are people actually bringing
          others in?
        </li>
        <li>
          <strong>Tagged-to-installed:</strong> out of the people who get
          tagged and don&apos;t have the app, how many install it?
        </li>
        <li>
          <strong>Voices per memory:</strong> do tagged friends add their
          own voice notes, or just listen?
        </li>
        <li>
          <strong>Groups that come back:</strong> after a group&apos;s first
          event, do they save memories from the next one too?
        </li>
      </ul>
      <p>
        If tagged-to-installed is low, the problem is the link and the
        first screen. If groups don&apos;t come back, the problem is the
        product, and no amount of marketing will fix that.
      </p>

      <h2>Step 5: Money, once the loop works</h2>
      <p>
        fram.d is free with no ads right now, and I want to keep the core
        free, because a group only works if everyone in it can join without
        paying. The place money makes sense is the stuff that costs me real
        storage and bandwidth: video memories, which are coming soon, and
        larger libraries for groups that use it a lot.
      </p>
      <p>
        I&apos;m not going to spend on paid ads until two things are true:
        groups come back after their first event, and I know roughly what
        a paying group is worth. Until then, every dollar on ads would just
        be buying installs that leak out.
      </p>

      <h2>What I&apos;m not doing yet</h2>
      <ul>
        <li>
          No paid ads, for the reason above.
        </li>
        <li>
          No big launch day. A launch brings in a spike of people who
          don&apos;t know each other, and fram.d is useless to someone
          alone. I&apos;d rather add ten groups than a thousand
          individuals.
        </li>
        <li>
          No chasing every channel at once. I&apos;d rather find one way of
          reaching new groups that works, do it well, and only then try
          the next one.
        </li>
      </ul>

      <h2>Next</h2>
      <p>
        That&apos;s the plan. I&apos;ll write a follow-up with the real
        numbers: what worked, what didn&apos;t, and what I changed. If you
        and your friends have a trip or an event coming up, try{" "}
        <ExternalLink href="https://useframd.app">fram.d</ExternalLink> and
        tell me what you think. You&apos;d be one of those first groups.
      </p>
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

import React from "react"
import Post from "../../components/Post"
import { posts } from "../../data/posts"

const meta = posts.find(p => p.slug === "factory-floor-to-terminal")

const FactoryFloorToTerminal = () => {
  return (
    <Post title={meta.title} date={meta.date}>
      <p>
        Before I wrote any code professionally, I worked as a manufacturing
        engineer. A lot of that job was about process: understanding why a
        line was underperforming, tracing a defect back to its root cause,
        and tightening a system one small change at a time.
      </p>
      <p>
        It turns out that instinct transfers surprisingly well to software.
        Debugging is root-cause analysis. A codebase is a process with
        inputs and outputs, just like a production line. The tools changed
        completely — I traded calipers and spec sheets for React and
        Node — but the way I approach a problem hasn&apos;t changed nearly as
        much as I expected it to.
      </p>
      <p>
        The switch wasn&apos;t instant or painless, but it&apos;s the best
        professional decision I&apos;ve made so far. I&apos;m still learning
        new corners of the stack, and I&apos;ll probably write more about
        specific things I run into here.
      </p>
    </Post>
  )
}

export default FactoryFloorToTerminal

export const Head = () => <title>{meta.title} · Anchit Dhar</title>

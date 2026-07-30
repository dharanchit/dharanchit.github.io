import React from "react"
import Post from "../../components/Post"
import { posts } from "../../data/posts"

const meta = posts.find(p => p.slug === "rebuilding-this-site")

const RebuildingThisSite = () => {
  return (
    <Post title={meta.title} date={meta.date}>
      <p>
        A while back I built this site with Gatsby, deployed it, and moved
        on. Recently I went looking for the source to make some changes and
        found that the last commit to this repo had quietly replaced the
        actual Gatsby project — <code>src/</code>, <code>package.json</code>,
        the works — with the compiled output of a build. The source itself
        was gone from the working tree, though thankfully still recoverable
        from an earlier commit in the git history.
      </p>
      <p>
        Rather than just restore things as they were, I used it as an excuse
        to clean the place up: removed the build artifacts that never
        belonged in version control in the first place, dropped a heavier
        component library in favor of plain CSS, and rewrote the design to
        be quieter and easier to read.
      </p>
      <p>
        The lesson, as usual, is a boring one — commit the source, gitignore
        the build.
      </p>
    </Post>
  )
}

export default RebuildingThisSite

export const Head = () => <title>{meta.title} · Anchit Dhar</title>

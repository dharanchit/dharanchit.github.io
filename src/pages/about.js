import React from "react"
import Layout from "../components/Layout"
import { experience, education } from "../data/experience"
import { skills } from "../data/skills"
import * as styles from "./about.module.css"

const About = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p className={styles.location}>Bengaluru, India</p>

      <p className={styles.intro}>
        I&apos;m a senior software engineer with 5+ years of experience
        building high-throughput fintech systems and AI-driven platforms at
        JPMorgan Chase, Fyers, and Tifin. I started out as a manufacturing
        engineer before making the switch into software, and these days
        I&apos;m mostly heads-down on LLM orchestration, multi-agent systems,
        and event-driven microservices in Go.
      </p>

      <h2>Experience</h2>
      <div className={styles.timeline}>
        {experience.map(job => (
          <div className={styles.entry} key={`${job.company}-${job.start}`}>
            <div className={styles.entryHeader}>
              <div>
                <div className={styles.role}>{job.role}</div>
                <div className={styles.company}>{job.company}</div>
              </div>
              <div className={styles.dates}>
                {job.start} &ndash; {job.end}
              </div>
            </div>
            <ul className={styles.bullets}>
              {job.bullets.map(bullet => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2>Skills</h2>
      <div className={styles.skillGroups}>
        {skills.map(group => (
          <div className={styles.skillGroup} key={group.label}>
            <span className={styles.skillLabel}>{group.label}</span>
            <span className={styles.tags}>
              {group.items.map(item => (
                <span className={styles.tag} key={item}>
                  {item}
                </span>
              ))}
            </span>
          </div>
        ))}
      </div>

      <h2>Education</h2>
      <div className={styles.education} style={{ marginBottom: "var(--space-4)" }}>
        <div className={styles.role}>{education.degree}</div>
        <div className={styles.company}>{education.school}</div>
        <div className={styles.dates}>
          {education.start} &ndash; {education.end}
        </div>
      </div>

      <h2>Outside of work</h2>
      <p>
        When I&apos;m not at a keyboard, I&apos;m usually playing basketball,
        tinkering with side projects, or working through coding problems for
        fun.
      </p>
    </Layout>
  )
}

export default About

export const Head = () => <title>About · Anchit Dhar</title>

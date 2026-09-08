import React from "react"
import Post from "../../components/Post"
import Seo from "../../components/Seo"
import { posts } from "../../data/posts"
import * as styles from "./encrypting-photos-your-engineers-cant-see.module.css"

const meta = posts.find(p => p.slug === "encrypting-photos-your-engineers-cant-see")

const Cite = ({ n }) => (
  <sup className={styles.footnote}>
    <a href={`#ref-${n}`} id={`cite-${n}`}>
      [{n}]
    </a>
  </sup>
)

const UploadDiagram = () => (
  <figure className={styles.figure}>
    <svg
      className={styles.diagram}
      viewBox="0 0 640 300"
      role="img"
      aria-labelledby="upload-diagram-title"
    >
      <title id="upload-diagram-title">
        Uploading a photo: the device encrypts it and wraps the file key
        before either one leaves the device
      </title>
      <defs>
        <marker
          id="arrowhead"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="4"
          orient="auto"
        >
          <path d="M0,0 L8,4 L0,8 z" className={styles.labelMuted} />
        </marker>
      </defs>

      <rect x="16" y="70" width="190" height="120" rx="10" className={styles.boxAccent} />
      <text x="111" y="94" textAnchor="middle" className={styles.label} fontSize="14" fontWeight="600">
        Your device
      </text>
      <text x="32" y="118" className={styles.labelMuted} fontSize="12">
        1. make a random file key
      </text>
      <text x="32" y="138" className={styles.labelMuted} fontSize="12">
        2. encrypt the photo with it
      </text>
      <text x="32" y="158" className={styles.labelMuted} fontSize="12">
        3. wrap the file key with your
      </text>
      <text x="32" y="174" className={styles.labelMuted} fontSize="12">
        account key
      </text>

      <rect x="460" y="24" width="164" height="64" rx="10" className={styles.box} />
      <text x="542" y="50" textAnchor="middle" className={styles.label} fontSize="13" fontWeight="600">
        Object storage
      </text>
      <text x="542" y="68" textAnchor="middle" className={styles.labelMuted} fontSize="12">
        stores ciphertext only
      </text>

      <rect x="460" y="212" width="164" height="64" rx="10" className={styles.box} />
      <text x="542" y="238" textAnchor="middle" className={styles.label} fontSize="13" fontWeight="600">
        Key metadata store
      </text>
      <text x="542" y="256" textAnchor="middle" className={styles.labelMuted} fontSize="12">
        stores wrapped key only
      </text>

      <path
        d="M206,100 C 340,100 340,56 460,56"
        className={styles.arrow}
        markerEnd="url(#arrowhead)"
      />
      <text x="320" y="86" textAnchor="middle" className={styles.labelMuted} fontSize="11">
        encrypted photo
      </text>

      <path
        d="M206,160 C 340,160 340,244 460,244"
        className={styles.arrow}
        markerEnd="url(#arrowhead)"
      />
      <text x="320" y="204" textAnchor="middle" className={styles.labelMuted} fontSize="11">
        wrapped file key
      </text>

      <rect x="220" y="230" width="360" height="52" rx="8" className={styles.box} strokeDasharray="4 3" />
      <text x="400" y="250" textAnchor="middle" className={`${styles.labelMuted} ${styles.mono}`} fontSize="11">
        an engineer with read access to both sees:
      </text>
      <text x="400" y="268" textAnchor="middle" className={`${styles.label} ${styles.mono}`} fontSize="11">
        8f3a91d1c4... (bytes) + e2a0ff77b3... (wrapped key)
      </text>
    </svg>
    <figcaption className={styles.caption}>
      Uploading: the plaintext photo and the raw file key both stay on the
      device. Only ciphertext and a wrapped key ever reach the servers.
    </figcaption>
  </figure>
)

const ViewDiagram = () => (
  <figure className={styles.figure}>
    <svg
      className={styles.diagram}
      viewBox="0 0 640 300"
      role="img"
      aria-labelledby="view-diagram-title"
    >
      <title id="view-diagram-title">
        Viewing a photo later: the device fetches ciphertext and a wrapped
        key, then unwraps and decrypts locally
      </title>
      <defs>
        <marker
          id="arrowhead2"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="4"
          orient="auto"
        >
          <path d="M0,0 L8,4 L0,8 z" className={styles.labelMuted} />
        </marker>
      </defs>

      <rect x="460" y="24" width="164" height="64" rx="10" className={styles.box} />
      <text x="542" y="50" textAnchor="middle" className={styles.label} fontSize="13" fontWeight="600">
        Object storage
      </text>
      <text x="542" y="68" textAnchor="middle" className={styles.labelMuted} fontSize="12">
        serves ciphertext
      </text>

      <rect x="460" y="212" width="164" height="64" rx="10" className={styles.box} />
      <text x="542" y="238" textAnchor="middle" className={styles.label} fontSize="13" fontWeight="600">
        Key metadata store
      </text>
      <text x="542" y="256" textAnchor="middle" className={styles.labelMuted} fontSize="12">
        serves wrapped key
      </text>

      <rect x="16" y="70" width="190" height="120" rx="10" className={styles.boxAccent} />
      <text x="111" y="94" textAnchor="middle" className={styles.label} fontSize="14" fontWeight="600">
        Your device
      </text>
      <text x="32" y="118" className={styles.labelMuted} fontSize="12">
        4. unwrap the file key with
      </text>
      <text x="32" y="134" className={styles.labelMuted} fontSize="12">
        your account key (derived
      </text>
      <text x="32" y="150" className={styles.labelMuted} fontSize="12">
        from your password, locally)
      </text>
      <text x="32" y="172" className={styles.labelMuted} fontSize="12">
        5. decrypt and render
      </text>

      <path
        d="M460,56 C 340,56 340,100 206,100"
        className={styles.arrow}
        markerEnd="url(#arrowhead2)"
      />
      <text x="320" y="86" textAnchor="middle" className={styles.labelMuted} fontSize="11">
        ciphertext
      </text>

      <path
        d="M460,244 C 340,244 340,160 206,160"
        className={styles.arrow}
        markerEnd="url(#arrowhead2)"
      />
      <text x="320" y="204" textAnchor="middle" className={styles.labelMuted} fontSize="11">
        wrapped file key
      </text>
    </svg>
    <figcaption className={styles.caption}>
      Viewing: the two halves are fetched from two different services, but
      they only turn back into a photo once they meet the account key that
      lives on your device.
    </figcaption>
  </figure>
)

const EncryptingPhotos = () => {
  return (
    <Post title={meta.title} date={meta.date}>
      <p>
        Say you upload a photo on an app like Instagram. Somewhere there is a
        bucket that photo lands in, and somewhere there is an engineer with
        read access to that bucket &mdash; on-call, debugging a pipeline,
        whatever the reason. Could they open the file and look at it?
      </p>
      <p>
        For most apps, yes. The photo is encrypted in transit (TLS) and
        usually at rest (SSE-S3, SSE-KMS, disk encryption), but the key used
        for at-rest encryption is one the platform holds and can produce on
        demand. Encryption at rest mostly protects against a stolen disk, not
        against someone who already has legitimate access to the systems
        that manage the key. If the IAM role that reads the bucket also
        implies decrypt access &mdash; and it usually does, because they are
        managed by the same team &mdash; then &ldquo;encrypted at rest&rdquo;
        and &ldquo;readable by staff&rdquo; are not in tension at all.
      </p>
      <p>
        Making that untrue takes moving the encryption to the one place the
        company&apos;s infrastructure never touches: the user&apos;s device.
      </p>

      <h2>Envelope encryption, not one big key</h2>
      <p>
        The building block is <em>envelope encryption</em>
        <Cite n={1} />. Instead of
        encrypting every photo with one key that unlocks everything, each
        file gets its own randomly generated symmetric key &mdash; a{" "}
        <em>data encryption key</em>, or DEK &mdash; used once, with
        AES-256-GCM<Cite n={2} />.
        That key is then itself encrypted (&ldquo;wrapped&rdquo;) with a
        second key, the account&apos;s <em>key-encryption key</em> (KEK). The
        wrapped DEK is small, so it travels with the file&apos;s metadata
        instead of the file itself.
      </p>
      <p>
        This split is what lets the two halves live in different places with
        different access patterns: the bucket only ever holds ciphertext,
        and the metadata store only ever holds wrapped keys. Neither one is
        useful without the other, and neither one is useful without the KEK.
      </p>
      <UploadDiagram />

      <h2>Where the account key actually lives</h2>
      <p>
        The KEK is the load-bearing piece, and it has to never exist on a
        server in usable form. In practice it&apos;s derived on-device from
        something the user has &mdash; a password run through Argon2 or
        PBKDF2, or a keypair generated on first login and stored in the
        platform keychain (Keychain on iOS, Keystore on Android). Signal and
        WhatsApp both do a version of this for multi-device sync: a new
        device proves it belongs to the account, then receives the wrapped
        keys it needs re-wrapped for its own local key, without the server
        ever holding a usable copy in between<Cite n={3} />.
      </p>
      <p>
        Backups complicate this, because &ldquo;forgot your password, lost
        your key, lost your photos forever&rdquo; is not a product most
        companies will ship. WhatsApp&apos;s answer for chat backups is a
        64-digit recovery key (or a password) stored in a hardware security
        module they say is deliberately built so that not even WhatsApp can
        extract keys from it in bulk &mdash; it only ever answers &ldquo;does
        this guess unlock this one backup,&rdquo; and locks itself after a
        handful of wrong tries<Cite n={4} />. That last mile &mdash; account recovery
        without a plaintext escape hatch &mdash; is the hardest part of this
        whole design, harder than the AES-GCM call.
      </p>

      <h2>Reading it back</h2>
      <p>
        Viewing the photo later runs the same trip in reverse. The device
        authenticates, asks the metadata store for the wrapped key and the
        bucket for the ciphertext, unwraps the key locally with the KEK it
        derives from the password, and decrypts. The server&apos;s job the
        whole time is just to check &ldquo;is this account allowed to read
        this file id,&rdquo; a question it can answer without ever seeing
        what&apos;s inside it.
      </p>
      <ViewDiagram />

      <h2>What this buys you, and what it doesn&apos;t</h2>
      <p>
        This scheme genuinely stops the scenario at the top: an engineer, a
        compromised bucket credential, or a subpoena served on the storage
        provider alone all get back the same thing &mdash; opaque bytes and
        an opaque wrapped key, with the key that would open them sitting on
        a device the company never has access to.
      </p>
      <p>
        It does not stop a compromised client, a malicious build the company
        itself ships to your device, or someone who gets you to unlock your
        own device. End-to-end encryption moves the trust boundary; it
        doesn&apos;t remove it.
      </p>
      <p>
        And it costs you the server. Thumbnails, feed ranking, face
        grouping, content moderation classifiers &mdash; all of that
        currently runs on plaintext, server-side, at upload time. None of
        it can run there anymore if the server never has the plaintext.
        Real products handle this in one of a few ways: they don&apos;t
        apply full end-to-end encryption to the public feed at all (only to
        DMs or backups, where the audience is small and the server was
        never supposed to see the content anyway); they push the processing
        onto the device, encrypting the derived thumbnail alongside the
        original; or, for the one case regulators actually push on &mdash;
        CSAM detection &mdash; they attempt on-device perceptual hashing
        against a known-bad set before encryption, which is exactly the
        approach Apple proposed in 2021<Cite n={5} /> and then shelved after
        enough people pointed out what a general-purpose on-device scanner
        could be repurposed into<Cite n={6} />.
      </p>
      <p>
        None of this is exotic cryptography. It&apos;s AES-GCM and a key
        hierarchy, the same primitives every KMS uses internally. What
        changes is a single design decision: where the unwrap happens. Move
        it off the server, and you&apos;ve changed who has to trust whom.
      </p>

      <h2>Sources</h2>
      <ol className={styles.references}>
        <li id="ref-1">
          AWS,{" "}
          <a
            href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#enveloping"
            target="_blank"
            rel="noopener noreferrer"
          >
            &ldquo;Envelope encryption&rdquo;, AWS Key Management Service
            Developer Guide
          </a>
          .
        </li>
        <li id="ref-2">
          NIST,{" "}
          <a
            href="https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            SP 800-38D: Recommendation for Block Cipher Modes of Operation:
            Galois/Counter Mode (GCM) and GMAC
          </a>
          .
        </li>
        <li id="ref-3">
          Signal,{" "}
          <a
            href="https://signal.org/docs/specifications/sesame/"
            target="_blank"
            rel="noopener noreferrer"
          >
            &ldquo;The Sesame Algorithm: Session Management for Asynchronous
            Message Encryption&rdquo;
          </a>
          .
        </li>
        <li id="ref-4">
          WhatsApp,{" "}
          <a
            href="https://www.whatsapp.com/security/WhatsApp_Security_Encrypted_Backups_Whitepaper.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            &ldquo;WhatsApp End-to-End Encrypted Backups&rdquo; (whitepaper)
          </a>
          .
        </li>
        <li id="ref-5">
          Apple,{" "}
          <a
            href="https://www.apple.com/child-safety/pdf/CSAM_Detection_Technical_Summary.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            &ldquo;CSAM Detection &mdash; Technical Summary&rdquo;
          </a>
          .
        </li>
        <li id="ref-6">
          EFF,{" "}
          <a
            href="https://www.eff.org/deeplinks/2021/08/apples-plan-think-different-about-encryption-opens-backdoor-your-private-life"
            target="_blank"
            rel="noopener noreferrer"
          >
            &ldquo;Apple&apos;s Plan to &lsquo;Think Different&rsquo; About
            Encryption Opens a Backdoor to Your Private Life&rdquo;
          </a>
          .
        </li>
      </ol>
    </Post>
  )
}

export default EncryptingPhotos

export const Head = () => (
  <Seo
    title={meta.title}
    description={meta.excerpt}
    pathname={`/blog/${meta.slug}`}
  />
)

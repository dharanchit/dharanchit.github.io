import React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="cloudflare-web-analytics"
      type="module"
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon='{"token": "16739558851044f68686b1466cfdd4c0"}'
    />,
  ])
}
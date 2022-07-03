import React from "react"

export const IndexShow: React.FC<{}> = props => {
    return (
        <html>
            <head>
                <meta charSet="UTF-8" />
                {
                 // <link rel="stylesheet" href="/wp-content/themes/sanime/show.css" />
               } <link rel="preload" type="script" href="/wp-content/themes/sanime/index.js" />
            </head>
            <body>
                <div id="app" />
                <script src="/wp-content/themes/sanime/index.js" />
            </body>
        </html>
    )
}

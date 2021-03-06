import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
      <html lang="en">
        <Head>
       
          <script dangerouslySetInnerHTML={{__html: ` (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-143002242-1', 'auto');
        ga('send', 'pageview');`}} />

          <link href="https://fonts.googleapis.com/css?family=Montserrat:900&display=swap" rel="stylesheet" />
          <script src="https://kit.fontawesome.com/9fe7550898.js"></script>

          <link rel="apple-touch-icon" sizes="57x57" href="../static/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="../static/apple-icon-60x60.png"/>
          <link rel="apple-touch-icon" sizes="72x72" href="../static/apple-icon-72x72.png"/>
          <link rel="apple-touch-icon" sizes="76x76" href="../static/apple-icon-76x76.png"/>
          <link rel="apple-touch-icon" sizes="114x114" href="../static/apple-icon-114x114.png"/>
          <link rel="apple-touch-icon" sizes="120x120" href="../static/apple-icon-120x120.png"/>
          <link rel="apple-touch-icon" sizes="144x144" href="../static/apple-icon-144x144.png"/>
          <link rel="apple-touch-icon" sizes="152x152" href="../static/apple-icon-152x152.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="../static/apple-icon-180x180.png"/>
          <link rel="icon" type="image/png" sizes="192x192"  href="../static/android-icon-192x192.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="../static/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="96x96" href="../static/favicon-96x96.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="../static/favicon-16x16.png"/>
          <meta name="msapplication-TileColor" content="#ffffff"/>
          <meta name="msapplication-TileImage" content="../static/ms-icon-144x144.png"/>
        
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

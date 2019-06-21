import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Montserrat:900&display=swap" rel="stylesheet" />
          <script src="https://kit.fontawesome.com/9fe7550898.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

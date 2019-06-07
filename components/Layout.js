import Link from 'next/link'
import Head from 'next/head'

// import '../pages/styles.css'
import '../pages/styles.scss'

export default class Layout extends React.Component {
    componentDidMount() {
      console.log('mount');
    }
    componentWillUnmount() {
      console.log('unmount');
    }
    render() {
      const { children, title = 'This is the default title' } = this.props;
      return (
        <div>
            <Head>
                <title>{ title }</title>
                <meta charSet='utf-8' />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
               
            </Head>

          { children }
  
        </div>
      );
    }
  }
import Layout from '../components/Layout';
import CardBox from '../components/CardBox';


class Home extends React.Component {
  state = {
    u1: {
      title: "Free Speech Breakdown",
      content: "The Free Speech Controversy breakdown page has been created.  All positions are complete.",
      date: "6/15/2020",
      path: '/persistentcontroversies/freespeech'
    },
    u2: {
      title: "Abortion Controversy Update",
      content: "The Abortion Controversy breakdown page has been created.  Late-Term Abortion position is complete",
      date: "6/17/2020",
      path: '/persistentcontroversies/abortion'
    },
    u3: {
      title: "Abortion Controversy Update and more",
      content: "The conception argument has been created.  Extended summary reduced from ~290 words to ~200 words.  Favicon uploaded.  Google AdSense submitted.",
      date: "6/19/2020",
      path: '/persistentcontroversies/abortion'
    },
    u4: {
      title: "Antifa Organization Controversy Created",
      content: "The page created with both for and against whether Antifa is an organization. ",
      date: "6/24/2020",
      path: '/currentcontroversies/antifa'
    },
    u5: {
      title: "Antifa Organization Controversy Edited",
      content: "The Antifa is Not an Organization position has been edited",
      date: "6/25/2020",
      path: '/currentcontroversies/antifa'
    },

  }
  render() {
    return (

      <Layout>

        <div className="container">
          <div className="jumbotron">
            <h1 className="display-3">The Opinion Bowl</h1>
            <p className="lead">Our goal is to help people see things from another point of view</p>
            <hr />
          </div>

          <CardBox title={this.state.u5.title} content={this.state.u5.content} date={this.state.u5.date} path={this.state.u5.path} />
          <CardBox title={this.state.u4.title} content={this.state.u4.content} date={this.state.u4.date} path={this.state.u4.path} />
          <CardBox title={this.state.u3.title} content={this.state.u3.content} date={this.state.u3.date} path={this.state.u3.path} />
          <CardBox title={this.state.u2.title} content={this.state.u2.content} date={this.state.u2.date} path={this.state.u2.path} />
          <CardBox title={this.state.u1.title} content={this.state.u1.content} date={this.state.u1.date} path={this.state.u1.path} />

        </div>
      </Layout>
    );
  }
}

export default Home;
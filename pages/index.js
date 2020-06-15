import Layout from '../components/Layout';
import CardBox from '../components/CardBox';

class Home extends React.Component {
  state = { 
    u1: {
      title: "Covid-19 Controversy Breakdown",
      content: "The Covid-19 Controversy breakdown page has been created.",
      date: "6/4/2020"
  },
  u2: {
      title: "Abortion Controversy Breakdown",
      content: "The Abortion Controversy breakdown page has been created.",
      date: "6/4/2020"
  },
  u3: {
      title: "American Gun Controversy Breakdown",
      content: "The Abortion Controversy breakdown page has been created.",
      date: "6/5/2020"
  }
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
         <CardBox title={this.state.u3.title} content={this.state.u3.content} date={this.state.u3.date}/>
         <CardBox title={this.state.u2.title} content={this.state.u2.content} date={this.state.u2.date}/>
         <CardBox title={this.state.u1.title} content={this.state.u1.content} date={this.state.u1.date}/>
         {/* <CardBox title={this.state.title} content={this.state.content}/>  */}
     </div>
</Layout>
     );
  }
}
 
export default Home;
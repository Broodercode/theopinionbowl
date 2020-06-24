import Link from 'next/link';
import Layout from '../components/Layout';

const CurrentControversies = () => {
    return ( 
        <Layout>
            <div>
                <br/>
                <h1>Current Controversies</h1>
                <p className="lead">This page contains controversies which either come and go or revolve around current events</p>
            </div>
            <div className="list-group">
                <Link href="/currentcontroversies/antifa"><a className="list-group-item list-group-item-action">Antifa</a></Link>
                <Link href="/persistentcontroversies/abortion"><a className="list-group-item list-group-item-action">Abortion</a></Link>
                {/* <Link href="/persistentcontroversies/guncontrol"><a className="list-group-item list-group-item-action">Gun Control</a></Link> */}
            
            </div>
        </Layout>
       
     );
}
 
export default CurrentControversies;
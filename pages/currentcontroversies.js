import Link from 'next/link';
import Layout from '../components/Layout';

const CurrentControversies = () => {
    return ( 
        <Layout>
 <div className ="list-group">
            <Link href="/currentcontroversies/covid19"><a className="list-group-item list-group-item-action">Covid-19</a></Link>
        </div>
        </Layout>
       
     );
}
 
export default CurrentControversies;
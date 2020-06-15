import Link from 'next/link';
import Layout from '../components/Layout';

const PersistentControversies = () => {
    return (
        <Layout>
            <div>
                <br/>
                <h1>Persistent Controversies</h1>
                <p className="lead">This page contains controversies which have been active for long durations of time with little change</p>
            </div>
            <div className="list-group">
                <Link href="/persistentcontroversies/freespeech"><a className="list-group-item list-group-item-action">Free Speech</a></Link>
                {/* <Link href="/persistentcontroversies/abortion"><a className="list-group-item list-group-item-action">Abortion</a></Link>
                <Link href="/persistentcontroversies/guncontrol"><a className="list-group-item list-group-item-action">Gun Control</a></Link> */}

            </div>
        </Layout>

    );
}

export default PersistentControversies;
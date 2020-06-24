import DebateBox from '../../components/DebateBox';
import Layout from '../../components/Layout';

class Antifa extends React.Component {
    state = {
        header: "",
        pos01: {
            pos: "Position 1",
            title: "Antifa is not an organization",
            summary: "Summary: People who take this position believe that Antifa is not an organization because they are comprised of sects",
            p1: 'Antifa is not an organization, you can’t join it, or become a member of it.  It is not someone you are, it is something you do. There is no organized structure which is why Antifascists tend to focus on local issues not national or global issues. Calling an employer to let them know their employee is a white supremacist is an antifascist action.  Going to a protest to help drown out the opposition is an antifascist action.  Even using violence to prevent someone from spreading a fascist message is antifascism.   None of these actions require group or organizational affiliation.   Just because many people perform the same action does not mean they are affiliated. ',
            p2: 'There are many ideologies and sects that can be antifascists and they exist independently of each other.  They have different strategies and tactics.  White supremacy is not the only type of fascism antifascists target, colonialism, a type of EuroAmerican fascism is actively targeted by many indigenous groups.  One antifascist group may be primarily full of anarchists who may be actively creating instability during protests, another may consist of indigenous people fighting colonialism through legal channels.  These groups can be wholly independent of one another which is exactly what Antifa cannot be an organization.'
        },
        pos02: {
            pos: "Position 2",
            title: "Antifa is a terrorist organization",
            summary: "Summary: Antifa is an organization because they are organized, international, and share a common ideology",
            p1: 'Antifa is an organization because they are organized and the title of “Antifascist” is delusory.  Antifa has clear, public, mission statements.  Organizations don’t need a leader to function, and even if they did, that a leader or central leadership being obscured does not mean it is non-existent. Antifa has rules for member, even though they claim they don’t have members.  Organizing groups of people to participate in events in order to communicate a shared message does not happen spontaneously.  Members are expected adhere to central messaging points and going against group messaging can result in expulsion from the group. Much like terrorist organizations, there is incentive to work in cells and obscure hierarchy because it makes it significantly more difficult to dismantle. ',
            p2: 'Antifa has an incentive to misrepresent themselves.  They have been deemed a terrorist organization by the American government, it is natural that Antifa members and leadership would push back on this as a matter of self-preservation.   Their label of “Antifascists” itself is a false flag.  Anyone who becomes a target of Antifa is labelled a fascist, regardless of their beliefs.  Their members almost unanimously espouse anti-capitalist sentiments and their tactics often include harassment of individuals, spreading of false information and physical disruption of public trafficways and events.'
        }
    }

    render() {
        return (
            <Layout>
                <div className="container">
                    <div className="jumbotron">
                        <h2>{this.state.header}</h2>
                        <DebateBox 
                        pos={this.state.pos01.pos} 
                        title={this.state.pos01.title} 
                        summary={this.state.pos01.summary} 
                        p1={this.state.pos01.p1} 
                        p2={this.state.pos01.p2} 
                        p3={this.state.pos01.p3} 
                        />
                        <DebateBox 
                        pos={this.state.pos02.pos} 
                        title={this.state.pos02.title} 
                        summary={this.state.pos02.summary} 
                        p1={this.state.pos02.p1} 
                        p2={this.state.pos02.p2} 
                        p3={this.state.pos02.p3} 
                        />
                      
                    </div>
                </div>
            </Layout>

        );
    }
}

export default Antifa;
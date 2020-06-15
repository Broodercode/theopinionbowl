import DebateBox from '../../components/DebateBox';
import Layout from '../../components/Layout';

class Abortion extends React.Component {
    state = {
        header: "Abortion",
        pos01: {
            pos: "Position 1",
            title: "Conception",
            summary: "People who take this position believe life begins at conception and that distinctions past that are mainly semantic.",
            content: 'People who take the position that life begins at conception tend either use a purely logical approach in the "lock and key" mechanism of egg fertilization.  As they believe this is a life, any form of abortion is immoral.  This position also holds a mixture of people who believe in total abstainance and those who believe that contraceptive is what should be used.'
        },
        pos02: {
            pos: "Position 2",
            title: "Heart Beat (~8 weeks)",
            summary: "Summary: People who take this position generally believe that a heart beat is what determines life.",
            content: 'People who take the position that abortion after 8 weeks is immoral do so because they believe a heart beat is what determines life.  They support this position in the belief that most miscarriages happen before this point.  They are okay with contraception and "the morning after pill"'
        },
        pos03: {
            pos: "Position 3",
            title: "Abnormality Scan (~12 weeks)",
            summary: "Summary: People who take this position generally believe that the formation of the brain is what determines life.",
            content: 'People who take the position that abortion after 12 weeks is immoral do so for different reasons.  For some in the group, the brain beginning to function is where they draw the line, for others they are waiting for the 12 week scan to determine if there are any genetic defects.  This group is not persuaded by the 8 week argument because they perceive the heart beat to be irrelevant and they do not agree with the 24 week argument because they feel like too much development has happened.'
        },
        pos04: {
            pos: "Position 4",
            title: "Pre-viability (~24 weeks)",
            summary: "Summary: People who take this position believe that a fetus' viability and survival outside the womb is what determines life",
            content: 'People who take the position that abortion after 24 weeks is immoral typically do for a combination of reasons.  They believe that the fetus being viable outside the womb is a factor.  They also believe that this is more than ample time for any decision making to have happened and that a person is well into pregnancy and should have committed to a decision.'
        },
        pos05: {
            pos: "Position 5",
            title: "Post-viability ( < 24 weeks)",
            summary: "Summary: People who take this position believe that a woman should have entire control over her body at all times",
            content: 'People who take this position believe a woman should have complete autonomy over her body and that a fetus does not have rights. They believe that women very rarely have late term abortions without good reason and they are under no obligation to share that reason with anyone.'
        },

    }
    render() {
        return (
            <Layout>
                <div className="container">
                    <div className="jumbotron">
                        <h2>{this.state.header}</h2>
                        <DebateBox pos={this.state.pos01.pos} title={this.state.pos01.title} summary={this.state.pos01.summary} content={this.state.pos01.content} />
                        <DebateBox pos={this.state.pos02.pos} title={this.state.pos02.title} summary={this.state.pos02.summary} content={this.state.pos02.content} />
                        <DebateBox pos={this.state.pos03.pos} title={this.state.pos03.title} summary={this.state.pos03.summary} content={this.state.pos03.content} />
                        <DebateBox pos={this.state.pos04.pos} title={this.state.pos04.title} summary={this.state.pos04.summary} content={this.state.pos04.content} />
                        <DebateBox pos={this.state.pos05.pos} title={this.state.pos05.title} summary={this.state.pos05.summary} content={this.state.pos05.content} />
                    </div>
                </div>
            </Layout>

        );
    }
}

export default Abortion;
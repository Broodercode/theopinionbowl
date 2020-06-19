import DebateBox from '../../components/DebateBox';
import Layout from '../../components/Layout';

class Abortion extends React.Component {
    state = {
        header: "Abortion",
        pos01: {
            pos: "Position 1",
            title: "Life begins at Conception",
            summary: "Summary: People who take this position believe life begins at conception and that distinctions semantic.",
            p1: 'People who support life beginning at conception do so because they believe when an egg is fertilized, a human life has already begun.  The scientific community agrees that a fertilized embryo is alive, it has its own genetic code, it is distinct from its mother, and it is a human being.  Our skin cells are human and can be alive but unlike a fertilized embryo they are not whole in themselves.   When an embryo is fertilized it combines the genetics from its parents to becomes a whole, genetically distinct human.',
            p2: 'Developmental stage is completely irrelevant for determining life.   It doesn’t matter if a fetus is viable outside of the womb because that is related to the state of technology and is the same as saying a fetus is alive in one place but not alive in another.  The heartbeat is also an arbitrary position to determine that life begins because we know that a fertilized embryo alive.  We would not kill a person in a vegetative state if we knew with reasonable certainty that they would survive and recover 9 months later.  A fertilized embryo is no different than this, their state of development is irrelevant because we know that in a few months they will be a fully developed human.',
            p3: ''
        },
        pos02: {
            pos: "Position 2",
            title: " TBD -- Heart Beat (~8 weeks)",
            summary: "Summary: TBD -- People who take this position generally believe that a heart beat is what determines life.",
            p1: 'TBD',
            p2: 'TBD',
            p3: 'TBD'
        },
        pos03: {
            pos: "Position 3",
            title: "TBD -- Abnormality Scan (~12 weeks)",
            summary: "Summary: TBD --People who take this position generally believe that the formation of the brain is what determines life.",
            p1: 'TBD',
            p2: 'TBD',
            p3: 'TBD'
        },
        pos04: {
            pos: "Position 4",
            title: "TBD -- Pre-viability (~24 weeks)",
            summary: "Summary: TBD -- People who take this position believe that a fetus' viability and survival outside the womb is what determines life",
            p1: 'TBD',
            p2: 'TBD',
            p3: 'TBD'
        },
        pos05: {
            pos: "Position 5",
            title: "Late-Term Abortion ( < 24 weeks)",
            summary: "Summary: People who take this position believe that a woman should have entire control over her body at all times",
            p1: 'People who support this position do so because they believe a woman has a right to her body under all circumstances.  There should always be an option because the lack of having an option can create situations which are much worse, such as finding dangerous alternatives such as underground abortion clinics, unsafe drugs, even harming or killing the infant after it has been born.  These are all much less safe than if an abortion is handled by medical professionals. Risking a late term abortion in a non-medical facility can result in the death of both the mother and the fetus, and the possibility of complication is almost certain.  Nobody should be required to endanger their life against their will.  Everyone has the right to their own body; women are no different.',
            p2: 'Nobody is pro-abortion.  Late term abortions are extremely rare and usually done out of desperation.  Abuse and fear of abuse account for an enormous amount of the reported reasons women have late term abortions.  Pressure to continue into late-term pregnancy can come from anywhere though such as parents, a person’s religious community, through psychological abuse, and the reasons continue infinitely.  Additionally, in almost all cases late term abortions are done by medical doctors who consult the patient as to the benefits and disadvantages of having a late term abortion.',
            p3: 'Having a late term abortion is not an easy decision or process.  Having a late term abortion is just as involved as giving birth and carries its own risks.  People don’t wait until the most complicated stage of pregnancy to change their mind without a good reason.  Nobody should be made to doubt important decisions which they have come to thoughtfully and it is very unlikely that a decision this late into pregnancy was made without thought.'

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
                        <DebateBox 
                        pos={this.state.pos03.pos} 
                        title={this.state.pos03.title} 
                        summary={this.state.pos03.summary} 
                        p1={this.state.pos03.p1} 
                        p2={this.state.pos03.p2} 
                        p3={this.state.pos03.p3} 
                        />
                        <DebateBox 
                        pos={this.state.pos04.pos} 
                        title={this.state.pos04.title} 
                        summary={this.state.pos04.summary} 
                        p1={this.state.pos04.p1} 
                        p2={this.state.pos04.p2} 
                        p3={this.state.pos04.p3} 
                        />
                        <DebateBox 
                        pos={this.state.pos05.pos} 
                        title={this.state.pos05.title} 
                        summary={this.state.pos05.summary} 
                        p1={this.state.pos05.p1} 
                        p2={this.state.pos05.p2} 
                        p3={this.state.pos05.p3} 
                        />
                      
                    </div>
                </div>
            </Layout>

        );
    }
}

export default Abortion;
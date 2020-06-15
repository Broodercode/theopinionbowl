import DebateBox from '../../components/DebateBox';
import Layout from '../../components/Layout';

class Abortion extends React.Component {
    state = {
        header: "Abortion",
        pos01: {
            pos: "Position 1",
            title: "Complete Free Speech",
            summary: 'Summary: People who take this position believe that free speech is fundamental to freedom in general',
            p1: 'People who believe that there ought to be complete free speech do so because they believe speech is fundamental to the human experience and that it is protecting society.  Giving control to anybody to determine what you can and cannot say under the threat of violence is antithetical to free speech.  The purpose of allowing people to speak freely, even offensively, is to avoid violence.   Using the threat of violence through criminal charges by the government when offensive speech is used is contradictory to the fundamental rationale as to why free speech was created.  The difficulty in determining where the lines are, who is or is not “protected”, and when and who to enforce the laws upon creates enormous vulnerability for abuse.',
            p2: 'We provide hateful speech legitimacy when we prohibit it.  In telling society the ideas behind hate speech are dangerous we are also saying that some may be valid.  Allowing offensive ideas to be exposed opens those ideas up to being ridiculed and destroyed.   Preventing hate speech does not make hate go away, it only makes it harder to detect.  While hidden, hate grows and corrupts those around it because the ideas are never challenged.   It is better for us to face offensive ideas so we can destroy them completely rather than allow them to grow and fester behind closed doors.',
            p3: 'It is important to separate freedom of speech from calls to action.  Freedom of speech is the permission to write or speak freely, even if the content is offensive.  Calling for direct harm to someone is antithetical to free speech because the purpose of free speech is to avoid violence.  Similarly, shouting “fire” in a crowded area is a call to action which could cause injury, so when used untruthfully people are not protected by free speech.'
        },
        pos02: {
            pos: "Position 2",
            title: "Hate Speech Is Not Free Speech",
            summary: "Summary: People who take this position believe that Hate Speech is not included in free speech",
            p1: 'People who believe hate speech is not included in free speech do so because they believe hate speech only serves to divide us.  The purpose of free speech is the ability to avoid violence by using dialogue as an alternative to violence, however hate does nothing but degrade dialogue and create divides.  Allowing hateful content to be spread is insulting, degrading, and frightening for those who are targeted.  Nobody should have to live in fear or shame for simply being who they are and by restricting speech which is already unnecessary we can help protect people and create a more welcoming society.  ',
            p2: 'A welcome side effect of prohibiting hate speech is that people who preach hate have no platform to stand.  Without the ability to spread their discriminatory messages it will become more difficult to recruit followers.  Those who do find a way to speak publicly will be punished, demonstrating to would be followers that this is not something society will accept.  Society would also see less hate crime as a result of restricting hate speech.  Hate speech emboldens people who would discriminate, but in punishing those who would utter hate publicly we can create a chilling effect for not only people who speak hate, but people who also perform hate crimes as well. ',
            p3: 'Very rarely is there a prohibition that does so little harm but affects a group in such a positive way.  By disallowing hateful speech, we are cutting off the problem at the source.  Hateful groups can’t grow, they can’t spread, and it becomes much harder to organize with intent to harm people.   Free speech is improved because everyone can speak without fear.  People who aren’t afraid speak more freely which is why prohibiting hate speech results in not only better but more free speech. '
        },
        pos03: {
            pos: "Position 3",
            title: "Partial Censorship Leads to a Better Society",
            summary: "Summary: People who take this position believe that by censoring offensive content we can create a better society",
            p1: 'People who support the prohibition of content such as videogames, pornography, violence in music and television because they believe they result in a net negative benefit for society.  When we allow people to participate in crude, debasing, and violent forms of entertainment it reflects our society as a whole.  We see mental illness and mass violence increasing and it is a result of what we allow our kids and the less desirables in society to consume.',
            p2: 'A significant amount of the problems we have in society could be resolved if we reduced the negative influences and themes present in much of today’s media.  Sex and violence are prolific in advertising and entertainment media.  When we appeal to people’s base instincts we should not be surprised when those instincts lead them to ruin.  Mass shooters glorify violent video games and music.  Pornography destroys marriages and sex workers are often abused.  Not only do these things act negatively on the psyche, they are also very addictive.  How many fathers ignore their families to play video games?  How many mothers have to degrade themselves to feed their kids?  How much of our society is plagued by anxiety and fear simply because we are exposed to violence every day on the television?',
            p3: 'Censoring violent and addictive media is the only way to help society because people don’t have enough self-control on their own to restrain themselves.  An enormous amount of the troubles we face today in modern society would be relieved.  Instead of sitting in front of a screen all day, ruining their body and mind, they could be living their lives.  If we want to save society the only way to do it is to help people stop doing the things which are destroying their lives.'
        },
        pos04: {
            pos: "Position 4",
            title: "Censorship of Undesirable Speech",
            summary: "Summary: People who take this position believe that people should not be burdened with politics",
            p1: 'People who support the censoring of undesirable materials do so typically for reasons of keeping unity or keeping the peace.  Their belief is that there is speech which can weaken the bonds of society and that we ought to disallow that speech to keep our communities strong and united.   Most of the speech that is perceived as harmful is speech which is damaging to groups, rather than individuals.  Criticizing individuals is not only permissible, but encouraged. If one doctor is corrupt that does not mean all the other doctors in the hospital are corrupt or that the hospital itself is corrupt. It is unfair criticize the group as a whole or the direction the group is taking is unfair because it undermines all the good people in the group. ',
            p2: 'There are other ways for information to cause disharmony, such as information which is difficult to understand, events which may be construed in negative ways, and writing or speech which is purely provocative in nature.  When information is confusing or upsetting, it makes people unhappy and encourages them to spread misinformation.  It is much more difficult to stop rumors after it has started than to prevent a rumor before it happens by being conscientious about what is published.  Those who spread misinformation should be corrected or punished if doing so knowingly.',
            p3: 'Censoring undesirable materials results in the population being more content and more cooperative.  People are not inundated with problems and concerns for which they have no power to affect.  People can come together more quickly when there is a single message.  It gives people the freedom to better enjoy their lives and creates a more harmonious community by always putting a priority on what is best for everyone, not just what is best for one.    '
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
                    </div>
                </div>
            </Layout>

        );
    }
}

export default Abortion;
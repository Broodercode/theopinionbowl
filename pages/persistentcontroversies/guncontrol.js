import React, { Component } from 'react';
import DebateBox from '../../components/DebateBox';

class GunControl extends Component {
    state = { 
        header: "Gun Control",
        pos01: {
            pos: "Position 1",
            title: "Complete Ban",
            summary: "People who take this opinion believe that a complete ban on guns would result in fewer gun deaths.",
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat vel magna a dignissim. Morbi at scelerisque ex. Vestibulum eget lectus efficitur, porttitor nulla quis, sodales nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra lacinia sem, eu imperdiet ligula aliquet quis. Ut quis interdum tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam interdum lacinia sollicitudin. Vivamus augue mi, pretium a luctus vitae, placerat quis diam. Sed cursus sollicitudin neque aliquet faucibus. Vestibulum id lacus nec ante dignissim porta non eget diam. Ut gravida sodales lorem, non pulvinar eros fringilla convallis. Vivamus fringilla pulvinar sodales. Curabitur ac sollicitudin justo, sed auctor eros. <br /> Nam lobortis sodales porta. Proin scelerisque viverra cursus. Aenean mollis nulla vitae odio sodales rutrum. Sed magna elit, egestas vel gravida quis, bibendum id odio. Etiam dictum vestibulum dolor, suscipit euismod metus dignissim vel. Maecenas fringilla orci nec lacus mollis vestibulum. Aliquam metus risus, lacinia sit amet tortor at, fringilla pretium diam. Maecenas fermentum mauris ac magna mollis eleifend. Praesent ornare malesuada justo, et pretium ex semper non. Morbi in lorem orci. Sed porta ligula quis nulla tristique, sagittis tristique ligula fringilla. Cras molestie malesuada diam, in sollicitudin sapien fermentum a. Donec pharetra massa quis nibh vehicula ornare. Nam enim augue, rhoncus in justo vitae, rhoncus eleifend diam. Etiam vestibulum enim eu odio tempor, sit amet euismod libero dapibus. <br /> Sed a elementum felis. Donec sodales, nulla in dapibus vulputate, massa metus congue ex, sit amet auctor dui diam at justo. Donec erat magna, vulputate eu mauris nec, semper molestie justo. Duis ullamcorper ipsum odio, eget facilisis nisl egestas in. Duis semper bibendum feugiat. Vestibulum condimentum neque ac consequat dignissim. Nam posuere, ex nec tincidunt bibendum, risus risus porta felis.'
        },
        pos02: {
            pos: "Position 2",
            title: "No Handguns or Assault Weapons",
            summary: "Summary: People who take this opinion believe that rifles are fine for sport or hunting, but not killing.",
            content: 'People who take the opinion that we should restrict access to handguns and/or assault weapons do so not because they have a problem with guns, but because they have a problem with gun violence.  They believe that weapons designed for killing humans should not be permitted. They tend to be against large magazines as well.  They deem "assault weapons" to be weapons that may have a what they determine to be too much power, has too high of an ammunition capacity, or falls into certain styles.'
        },
        pos03: {
            pos: "Position 3",
            title: "No Automatic Weapons or Explosives",
            summary: "Summary: People who take this opinion believe that gun access should be largely unrestricted.",
            content: 'People who take the opinion that gun control should be largely unrestricted believe that all but the most dangerous weapons should be available.  They tend to prefer medium to low barriers of entry and think most people should own guns as a matter of self defense and for sport.  They believe that it is better for people to be armed than to be helpless.  Many are hobbiest shooters and collectors.  They do not believe restricting gun access further will make any difference in violent crime.'
        },
        pos04: {
            pos: "Position 4",
            title: "Complete right to bear arms",
            summary: "Summary: People who take this opinion believe that people should have unfettered access to weaponry and firearms",
            content: 'People who take the opinion that gun control should be unfettered do so generally because they have a strong belief in the right to bear arms. They believe the government should not be trusted to have a monopoly on power. A majority of people who take this opinion do so because they support the second ammendment.'
        },


     }
    render() { 
        return ( 
            <div className="container">
                <div className="jumbotron">
                <h2>{this.state.header}</h2>
                <DebateBox pos = {this.state.pos01.pos} title={this.state.pos01.title} summary={this.state.pos01.summary} content={this.state.pos01.content}/>
                <DebateBox pos = {this.state.pos02.pos} title={this.state.pos02.title} summary={this.state.pos02.summary} content={this.state.pos02.content}/>
                <DebateBox pos = {this.state.pos03.pos} title={this.state.pos03.title} summary={this.state.pos03.summary} content={this.state.pos03.content}/>
                <DebateBox pos = {this.state.pos04.pos} title={this.state.pos04.title} summary={this.state.pos04.summary} content={this.state.pos04.content}/>


                </div>
        
            </div>
         );
    }
}
 
export default GunControl;
class Accordion {
    constructor(member){
        this.member = member;
        this.tab = this.member.querySelector('.member-top');
        this.content = this.member.querySelector('.member-cont');
        console.log(this.content);

        this.tab.addEventListener('click', () => this.toggle());
    }

    toggle(){
        console.log('I was clicked!');
    }

}


const members = document.querySelectorAll('.member');
members.forEach(member => new Accordion(member))
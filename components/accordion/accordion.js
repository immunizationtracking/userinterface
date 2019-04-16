class Accordion {
    constructor(member){
        this.member = member;
        this.tab = this.member.querySelector('.member-top');
        this.img = this.tab.querySelector('img');
        this.content = this.member.querySelector('.member-cont');
        // console.log(this.img);

        this.tab.addEventListener('click', () => this.toggle());
    }

    toggle(){
        this.content.classList.toggle('hide');
        if(this.img !== null){
            this.img.classList.toggle('hide');
        }
        console.log('I was clicked!');
    }

}


const members = document.querySelectorAll('.member');
members.forEach(member => new Accordion(member))
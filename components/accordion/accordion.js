class Accordion {
    constructor(member){
        this.member = member;
        this.tab = this.member.querySelector('.member-top'); // grabs top tab
        this.img = this.tab.querySelector('img'); // grabs an image if there is one
        this.imgs = document.querySelectorAll('.member-top img');
        this.content = this.member.querySelector('.member-cont'); // grabs the member content
        this.items = document.querySelectorAll('.member-cont'); // looks for all the member content

        // event listener that looks for a click and runs the toggle function below

        this.tab.addEventListener('click', () => this.toggle());
    }

    toggle(){
        this.items.forEach(function(member){
            member.classList.add('hide'); // forEach loop adds the hide class to all images
        })
        this.imgs.forEach(function(img){
            img.classList.add('hide');    // applies hide to all images 
        })
        this.content.classList.toggle('hide'); // un-toggle hide class on content
        this.img.classList.toggle('hide');  // toggles the hide class on the img clicked
    }

}


const members = document.querySelectorAll('.member'); // grabs each member
members.forEach(member => new Accordion(member)); // runs each member through the class constructor
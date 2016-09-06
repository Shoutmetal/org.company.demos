export class ServiceEventListener
{
    constructor() {
        this.handleBodyClick = e => {
            console.log(e.target);
        };
    }

    attached() {
        document.addEventListener('click', this.handleBodyClick);
    }

    detached() {
        document.removeEventListener('click', this.handleBodyClick);
    }   

}
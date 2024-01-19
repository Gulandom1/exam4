const dataUrl ='http://localhost:8000/';

const root = (event)=>{
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href );
};



window.root =root;
                     

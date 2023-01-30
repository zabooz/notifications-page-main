const notifications = document.querySelectorAll('.notification');
const markAsRead   = document.querySelector('button');
const unread = document.querySelectorAll('.unread');
const dots = document.querySelectorAll('.dot')
const notesCounter = document.querySelector('.unread-count');

notesCounter.textContent = unread.length; 
let counter = notesCounter.textContent;

markAsRead.addEventListener('click', e =>{
    for(let i= 0; i < notifications.length;i++){
        const element = notifications[i];
        const dot = dots[i];
        element.classList.remove('unread');
        if(counter > 0){
            counter--;
            dot.remove()
        }
    }
    notesCounter.textContent = counter;
})
unread.forEach(item =>{
    item.addEventListener('click', e =>{
        
        if(counter > 0 && item.childNodes[5]){
        item.classList.remove('unread');
        item.childNodes[5].classList.add('remove-dots');
            counter--
            console.log('hellow orld')
            item.childNodes[5].remove()
        }else{
            
        }
        notesCounter.textContent = counter;

    })
})


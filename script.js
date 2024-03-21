const container=document.querySelector('.container')
let size=16
let flag=0;
for(let i=0;i<size;i++){
    const row=document.createElement('div')
    row.style.display="flex"
    row.style.width="100%"
    let height=100/size;
    row.style.height=`${height}%`

    for(let j=0;j<size;j++){
        const col=document.createElement('div')
        col.style.height="100%"
        col.style.width=`${height}%`
        
        col.style.backgroundColor="beige"
        col.addEventListener('mouseenter',(e)=>{
            e.preventDefault();
            if(flag==1){
            col.style.backgroundColor="blue"
        }
        })
        row.appendChild(col);
    }
    container.append(row)
}
const btn=document.querySelector('button');

container.addEventListener('mousedown',(e)=>{
    e.preventDefault();
    flag=1;
})
container.addEventListener('mouseup',(e)=>{
    e.preventDefault();
    flag=0;
})
const creator=document.querySelector('#btn')
const size_input=document.querySelector("#size")
creator.addEventListener("click",()=>{
    
    size=size_input.value ;
    if(size>100){
        size_input.value='';
        size_input.setAttribute('placeholder','enter smaller size')
        return;
    }
    container.innerHTML='';
    for(let i=0;i<size;i++){
        const row=document.createElement('div')
        row.style.display="flex"
        row.style.width="100%"
        let height=100/size;
        row.style.height=`${height}%`
    
        for(let j=0;j<size;j++){
            const col=document.createElement('div')
            col.style.height="100%"
            col.style.width=`${height}%`
            
            col.style.backgroundColor="beige"
            col.addEventListener('mouseenter',()=>{
                if(flag==1){
                col.style.backgroundColor="blue"
            }
            })
            row.appendChild(col);
        }
        container.append(row)
    }
})

btn.addEventListener('click',()=>{
    let rows=container.childNodes
    rows.forEach((r)=>{
        r.childNodes.forEach((c)=>{
            c.style.backgroundColor="beige";
        })
    })
})
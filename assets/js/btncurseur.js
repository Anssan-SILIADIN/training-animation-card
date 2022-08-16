const cursor = document.querySelector('.cursor'); 

document.addEventListener('mousemove', e => {
cursor.setAttribute('style', 'top:' +(e.pageY -20)+"px; left:" +(e.pageX -20)+"px;")
// e.pageY -20 parceque on une hauteur et une largeur de 40px pour le cercle du bouton(curseur) donc ondivise par 2
// ce qui nous donne 20 donc on met -20 pour pageX et Y chacun pour que 
//le curseur se place bien au mileu du bouton même s'il disparaît.
// si on dépasse l'élément le curseur apparaît trop vite donc pour y remédier, 
//on va dépalcer dans la page css cursor:none dans le body et le placer juste apès background.

})

document.addEventListener('click', () =>{//dès on va cliquer sur le document 
    //on envie que le cursor.classlist.add expand 
    cursor.classList.add('expand');
//avec setTimeout on fixe un certain temps pour qu'il l'enlève à partir de 500 milli seconds
    setTimeout(()=>{
        cursor.classList.remove("expand");
    }, 500);
})
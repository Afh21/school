$().ready(()=>{
    
    // Checkbox
    $('.ui.checkbox').checkbox();

    // Dropdown
    $('.search.dropdown').dropdown();
    
    // Abrir el modal
    $('#openModalCreateUser').click( () =>{
        $('.ui.modal').modal('show')        
    });

    $('#closeModalCreateUser').click( ()=> {    
        $('.ui.modal').modal('hide')        
    })
})
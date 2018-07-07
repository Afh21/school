$().ready(()=>{
    
    // Checkbox
    $('.ui.checkbox').checkbox();

    // Dropdown
    $('.search.dropdown').dropdown();
    
    // Abrir el modal
    $('#openModalCreateUser').click( () =>{
        $('#createUserModal').modal('show')        
    });

    $('#openModalUpdateUser').click( () =>{
        $('#updateUserModal').modal('show')        
    });

    $('#closeModalCreateUser').click( ()=> {    
        $('.ui.modal').modal('hide')        
    })
    
})
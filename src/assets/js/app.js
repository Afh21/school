$().ready(()=>{
    
    // Checkbox
    $('.ui.checkbox').checkbox();

    // Dropdown
    $('.search.dropdown').dropdown();
    
<<<<<<< HEAD

=======
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
    
>>>>>>> f891e9a6694d9cbc303db54d3bd55bf702a722b5
})
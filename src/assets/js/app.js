$().ready(()=>{
    
    // Checkbox
    $('.ui.checkbox').checkbox();

    // Dropdown
    $('.search.dropdown').dropdown();
    
    // Abrir el modal
    $('#openModalCreateUser').click( () =>{
<<<<<<< HEAD
        $('.ui.modal').modal('show')        
    });

    $('#closeModalCreateUser').click( ()=> {    
        $('.ui.modal').modal('hide')        
    })
=======
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
$(document).on('click','.submit-button', function (){
    var fname   = $('#fname').val();
    var email   = $('#email').val();
    var ref     = $('#book_ref').val();
    var msg     = $('#message').val();

    if(fname == null || fname == '') {
        alert("Please Enter the first name")
    } else if(email == null  || email == '') {
        alert("Please Enter the email")
    } else if(ref == null || ref == '') {
        alert("Please Enter the Booking Refernce ID")
    } else if(msg == null || msg == '') {
        alert("Please Enter the Message")
    } else {
        $('.modal').modal('show');
        $('#fname').val('');
        $('#email').val('');
        $('#book_ref').val('');
        $('#message').val('');
    }
    
    //
});

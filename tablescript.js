$(document).ready( function () {
    $('#weibo').DataTable(
    {
    
    "columnDefs": [
    { className: "date", "targets": [ 2 ] },
    { className: "category", "targets": [ 3 ] }
  ],

    }
    );
} );
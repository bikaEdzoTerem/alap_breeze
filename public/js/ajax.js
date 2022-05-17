class MyAjax {
    constructor() {}
    
    adatbeolvas(faljnev, tomb, myCallback) {
     tomb=[];
      $.ajax({
        url: faljnev,
        type: "GET",
        success: function (result) {
          result.forEach((value) => {
            tomb.push(value);
          });
          myCallback(tomb);
        },
      });
    }
    
  }
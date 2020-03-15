var menuLists=function getMenuList(isAdmin) {
    var menuList={};
    if(isAdmin==="user"){
        menuList = {
            "headerMenu": [
                {"name": "Product", "path":"/product" },
                {"name": "Blogs", "path":"/blogs"},
                {"name": "makebooking", "path": "/makebooking"}
            ]
        };
    }else if (isAdmin ==="admin") {
        menuList = {
            "headerMenu": [
                {"name": "Product", "path": "/product"},
                {"name": "Login", "path":"/login"},
                {"name": "Sign Up", "path":"/register"},
                {"name": "Booking History", "path":"/bookingHistory"}
            ]
        };
    }else{
        menuList = {
            "headerMenu": [
                {"name": "Product", "path": "/product"},
                {"name": "Login", "path":"/login"},
                {"name": "Sign Up", "path":"/register"},
                {"name": "Blogs", "path":"/blogs"}
            ]
        };
    }

    return menuList

};

export default menuLists

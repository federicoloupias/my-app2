import React from 'react';

class NavBar extends React.Component{
    render(){
        return <div>
        <!-- Nav menu with user information -->
<nav class="navbar navbar-expand-xl navbar-dark bg-dark pmd-navbar pmd-z-depth fixed-top">
    <a class="navbar-brand" href="#">Navbar</a>
    <div class="dropdown pmd-dropdown pmd-user-info ml-auto">
        <a href="javascript:void(0);" class="btn-user dropdown-toggle media align-items-center" data-toggle="dropdown" data-sidebar="true" aria-expanded="false">
            <img class="mr-2" src="https://pro.propeller.in/assets/images/avatar-icon-40x40.png" width="40" height="40" alt="avatar">
            <div class="media-body">
                User
            </div>
            <i class="material-icons md-light ml-2 pmd-sm">more_vert</i>
        </a>
        <ul class="dropdown-menu dropdown-menu-right" role="menu">
            <a class="dropdown-item" href="javascript:void(0);">Edit Profile</a>
            <a class="dropdown-item" href="javascript:void(0);">Logout</a>
        </ul>
    </div>
</nav>
        
        </div>;
    }
}

export default NavBar;
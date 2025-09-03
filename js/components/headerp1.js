document.getElementById("headerp1").innerHTML = `
<nav class="navbar navbar-expand-lg navbar-#FFF5E1">
            <div class="container-fluid ">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent"></div>
                <!-- Menú izquierda -->
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Categorias
                        </a>

                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Tortas Cuadradas </a></li>
                            <li><a class="dropdown-item" href="#">Tortas Circulares </a></li>
                            <li><a class="dropdown-item" href="#">Postres Individuales </a></li>
                            <li><a class="dropdown-item" href="#">Productos Sin Azucar </a></li>
                            <li><a class="dropdown-item" href="#">Pasteleria Tradicional </a></li>
                            <li><a class="dropdown-item" href="#">Productos Sin Gluten </a></li>
                            <li><a class="dropdown-item" href="#">Productos Veganas </a></li>
                            <li><a class="dropdown-item" href="#">Tortas Especiales </a></li>
                        </ul>
                    </li>
                </ul>

                <!-- Menú derecha -->
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex flex-row">

                    <li class="nav-item">
                        <a class="nav-link" href="#">Sucursales</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Nosotros
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Nuestra Historia</a></li>
                            <li><a class="dropdown-item" href="#">Equipo </a></li>
                            <li><a class="dropdown-item" href="#">Procesos </a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contacto</a>
                    </li>

                </ul>

                <!-- LOGO centrado que sobresale -->
                <div class="logo-container"
                    style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); background-color:#F9C8D2; border-radius:50%; padding:10px;">
                    <img src="assets/img/logoPNG.png" alt="Logo" style="height:100px; width:auto;">
                </div>

            </div>
                 <!-- Login / Registro debajo o en la esquina -->
        <div id="container1" class="nav-item ">
            <a class="nav-link" href="login.html">Login</a>
            <a class="nav-link" href="#">Registrarse</a>
        </div>
        </nav>
    
 `;
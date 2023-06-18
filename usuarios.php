<?php
//conexion a la base de datos con un archivo .env con las variables de la configuracion ya que hay dos clases php que utilizan esa misma configuración
//y evitamos errores lexicos de esta manera
$config = parse_ini_file('.env');
$servername = $config['HOST'];
$username = $config['USER'];
$password =$config['PASSWORD'];
$dbname = $config['NAME'];

$connection = new mysqli($servername, $username, $password, $dbname);

if($connection -> connect_error){
    die ("Connection failed:" . $connection-> connect_error);
}

// Obtener usuarios registrados
$sql = "SELECT * FROM usuarios";
$result = mysqli_query($connection, $sql);

//Creacion de la tabla que va a mostrar a los usuarios
if (mysqli_num_rows($result) > 0) {
    echo '<table class="table  mt-4">';
    echo '<thead><tr><th>Id</th><th>Nombre</th><th>Nombre usuario</th><th>Email</th></tr></thead>';
    echo '<tbody>';
    while ($row = mysqli_fetch_assoc($result)) {
        echo '<tr><td>'.$row["ID"].'</td><td>'.$row["NOMBRE"].'</td><td>'.$row["LOGIN"].'</td><td>'.$row["EMAIL"].'</td></tr>';
    }
    echo '</tbody>';
    echo '</table>';
} else { //mensaje en caso de error
    echo '<script type="text/javascript">
        alert("No hay usuarios registrados");
        history.back();
         </script>';
}

//Cierre de conexion con la BBDD
mysqli_close($connection);
?>
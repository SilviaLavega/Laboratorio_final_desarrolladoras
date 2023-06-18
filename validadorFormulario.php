<?php
// Recoge los datos del formulario 
if ($_POST) {
    $nombre = $_POST['name'];
    $apellido = $_POST['surname'];
    $segundoApellido = $_POST['secondSurname'];
    $nombreUsuario = $_POST['accountName'];
    $email = $_POST['email'];
    $userpassword = $_POST['password'];
}

//conexion a la base de datos con un archivo .env con las variables de la configuracion ya que hay dos clases php que utilizan esa misma configuración y evitamos errores lexicos de esta manera
$config = parse_ini_file('.env');
$servername = $config['HOST'];
$username = $config['USER'];
$password = $config['PASSWORD'];
$dbname = $config['NAME'];
$connection = new mysqli($servername, $username, $password, $dbname);
if ($connection->connect_error) {
    die("Connection failed:" . $connection->connect_error);
}
// Comprueba que no exista un usuario con el mismo email que el introducido
$sql = "SELECT * FROM usuarios WHERE EMAIL='$email'";
$result = mysqli_query($connection, $sql);
if (mysqli_num_rows($result) > 0) {
    echo '<script type="text/javascript">
    alert("Email ya esta registado");
    history.back();
     </script>';
} else {
    // Comprueba que no exista un usuario con el mismo login que el introducido
    $sql = "SELECT * FROM usuarios WHERE LOGIN='$nombreUsuario'";
    $result = mysqli_query($connection, $sql);
    if (mysqli_num_rows($result) > 0) {
        echo '<script type="text/javascript">
    alert("El nombre de usuario ya está registrado");
    history.back();
     </script>';
    } else {
        //Consulta para insertar un nuevo usuario a la tabla usuarios
        $insert = "INSERT INTO usuarios (LOGIN, NOMBRE, APELLIDO1, APELLIDO2, EMAIL, PASSWORD) VALUES ('$nombreUsuario','$nombre','$apellido','$segundoApellido','$email','$userpassword')";
        mysqli_query($connection, $insert);
        //Mensaje de que todo ha salido bien
        echo '<script type="text/javascript">
    alert("Usuario registrado correctamente");
    history.back();
     </script>';
     
    }
}
//Cierre de la conexion con la base de datos
mysqli_close($connection);




?>
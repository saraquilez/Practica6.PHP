<!-- SARA QUÍLEZ -->

<!DOCTYPE HTML>
<html>

    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Práctica 6. PHP</title>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>

    <body>

        <?php

            if($_POST){
                
                $servername = "localhost";
                $username = "root";
                $password = "";
                $dbname = "cursosql";

                // Create connection
                $conn = new mysqli($servername, $username, $password, $dbname);

                // Check connection
                if ($conn->connect_error) {
                    die("Conexión fallida. " . $conn->connect_error);
                }

                // Get data from form
                $nombre = $_POST['nombre'];
                $apellido = $_POST['apellido'];
                $email = $_POST['email'];

                // Insert data into DB
                $sql_insert = "INSERT INTO USUARIO (NOMBRE, APELLIDO, EMAIL) 
                               VALUES ('$nombre', '$apellido', '$email')";

                if ($conn->query($sql_insert) === TRUE) {
                    echo '<ul>';
                    echo "La suscripción se ha registrado correctamente. \n";
                    echo '<ul>';
                    echo "<li>Nombre: " . $nombre . "</li>";
                    echo "<li>Apellido: " . $apellido . "</li>";
                    echo "<li>Email: " . $email . "</li>";
                    echo '</ul>';
                } else {
                    echo '<div class="registration-error">';
                    echo "No se han podido registrar la suscripción de " . $nombre . " " . $apellido . ". ";
                    header("refresh:5;url=index.html" );
                }

                $conn->close();
            }

        ?>
    </body>

</html>




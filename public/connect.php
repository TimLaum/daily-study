<!DOCTYPE html>
<html>
   <head>
       <meta charset="utf-8">
       <title>Formulaire HTML</title>
       <link rel="stylesheet" href="style.css">
   </head>
   <body>
       <form method="GET" action="target.php">
           <h1>Formulaire de test</h1>
           <p>
               <label for="firstName_input">Prénom : </label>
               <input id="firstName_input" type="text" name="firstName" size=16 required>
           </p>
           <p>
               <label for="lastName_input">Nom : </label>
               <input id="lastName_input" type="text" name="lastName" size=16 required>
           </p>
           <p>
               <label for="age_input">Age : </label>
               <input id="age_input" type="number" name="age" size=16 required>
           </p>
           <p>
               <label for="class_input">Classe : </label>
               <select id="class_input" name="class">
                   <option value="T01">T01</option>
                   <option value="T02">T02</option>
               </select>
           </p>
           <p>
               <input type="submit" value="Valider">
           </p>
       </form>
   </body>
</html>
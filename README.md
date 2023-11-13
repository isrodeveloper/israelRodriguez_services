# israelRodriguez_services

# La siguiente aplicación consta de las siguientes funcionalidades:
consutar ticket por id
consutar todos los tickets
crear ticket

# tecnologias/patrones usados
Nestjs
Repository
Graphql

#Se puede levantar todo el proyecto ejecutando el archivo docker-compose.yml que se encuenta en: https://github.com/isrodeveloper/israelRodriguez_services.git
dentro de dicho archivo se encuentran las imagenes del proyecto realizado y las imagen de la base de datos.

# clonar el proyecto
git clone https://github.com/isrodeveloper/israelRodriguez_services.git

ingresar a la carpeta donde se clono el repositorio y ejecutar el siguiente comando
# docker-compose up -d
![image](https://github.com/isrodeveloper/israelRodriguez_services/assets/43244714/c79226bc-18e7-4daa-811a-60efe442575b)

# docker 
![image](https://github.com/isrodeveloper/israelRodriguez_services/assets/43244714/235c9f9c-0ab6-49e8-9631-7dac2552949d)

# npm start run
![image](https://github.com/isrodeveloper/israelRodriguez_services/assets/43244714/cc18bfbe-5e86-47c0-b0a9-5f5ffefe6215)


# Imagenes del proyecto

# Crear ticket
http://localhost:3000/create-tickets/

 {
    "tittle": "no funciona mouse",
    "description": "esta en mal estado",
    "priority": "high",
    "category": "incident",
    "status": "pending"
}

![image](https://github.com/isrodeveloper/israelRodriguez_services/assets/43244714/62e48870-9307-4685-8b80-32427a02e6b1)

# Consulta de tickes

http://localhost:3000/create-tickets
![image](https://github.com/isrodeveloper/israelRodriguez_services/assets/43244714/f8685074-ca5f-4032-9289-437e3c0e9a1a)


# Consulta de ticket por id

http://localhost:3000/create-tickets/2
![image](https://github.com/isrodeveloper/israelRodriguez_services/assets/43244714/851db6b0-d044-4f2d-84ef-46ad0ea4de7c)



  


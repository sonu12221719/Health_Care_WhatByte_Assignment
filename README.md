# Health_Care_WhatByte_Assignment

## 1. Setup instructions

Step 1. ```npm init -y```

Step 2. ```npm install express bcryptjs dotenv jsonwebtoken pg sequelize uuid```

Step 3. Create File Structure

        Health_Care_WhatByte_Assignment/
        │
        ├── config/
        │   └── db.js
        │
        ├── models/
        │   ├── Doctor.model.js
        │   ├── Mapping.model.js
        │   ├── Patient.model.js
        │   └── User.model.js
        │
        ├── routes/
        │   ├── auth.route.js
        │   ├── doctor.route.js
        │   ├── mapping.route.js
        │   └── patient.route.js
        │
        ├── controllers/
        |   ├── auth/
        |   |   ├── login.controller.js
        |   |   └── register.controller.js
        │   ├── doctor.controller.js
        │   ├── mapping.controller.js
        │   └── patient.controller.js
        │
        ├── middlewares/
        │   └── auth.middleware.js
        │
        └── uploads/
        │
        │── .env
        │── .gitignore
        │── package.json
        ├── server.js

Step 4. Make Changes in package.json

        - Change ```"main":"index.js" to "main": "server.js"```
        - Added ```"type": "module"```
        - Add npm scripts to package.json

                "scripts":
                {
                    "start": "node server.js",
                    "dev": "nodemon server.js"
                }

Step 5. Setup Environment Variables

        PORT=5000
        DB_NAME=health_care
        DB_USER=postgres
        DB_PASS=*****
        DB_HOST=localhost
        JWT_SECRET=enter_your_jwt_secret_key
    
Step 6. Run Command ```npm run dev``` Or ```npm start```



## 2. API documentation

**1. Authentication**

- 1.1 User Registration

  - **POST** /api/auth/register
  - **Request Body**

        {
                "name":"Sonu Kumar",
                "email": "sonu@gmail.com",
                "password": "12345"
        }
  - **Response Body**
  
        {
            "message": "User registered successfully",
            "user": {
                "id": "c14c7d43-1e58-4f53-bbd3-f2b1e562f791",
                "name": "Sonu Kumar",
                "email": "sonu@gmail.com",
                "password": "$2b$10$iNaFk355IHHacO0cpWnoOOOnfzwdcIlcvtiMzieikBXVa0Wv0NHGS",
                "updatedAt": "2025-09-06T13:32:20.911Z",
                "createdAt": "2025-09-06T13:32:20.911Z"
            }
        }
   - **Screenshot:**
   ![App Screenshot](Photo/Register_New_User.png)

- 1.2 User Login

  - **POST** /api/auth/login
  - **Request Body**

        {
                "email":"sonu@gmail.com",
                "password":"12345"
        }

  - **Response Body**

        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImMxNGM3ZDQzLTFlNTgtNGY1My1iYmQzLWYyYjFlNTYyZjc5MSIsImlhdCI6MTc1NzE2NTgzOCwiZXhwIjoxNzU3MTY5NDM4fQ.yWzYzcJilmbEcwYbg-1jkAQ4WTiCsA2UxjxzMAuVVPg",
            "user": {
                "id": "c14c7d43-1e58-4f53-bbd3-f2b1e562f791",
                "name": "Sonu Kumar",
                "email": "sonu@gmail.com"
            }
        }
   - **Screenshot:**
   ![App Screenshot](Photo/Login_User.png)


**2. For Doctor**

- 2.1 Create a Doctor
  - **POST** api/doctors
  - **Headers:**

        Authorization: Bearer <token>
  - **Request Body**

        {
            "name":"aman",
            "age":"31",
            "specialty":"cardiologist",
            "experience":3
        }

  - **Response:**

        {
            "message": "Doctor profile created successfully",
            "doctor": {
                "id": "54fefbbf-d766-4d3b-a502-433ac168f344",
                "name": "aman",
                "age": 31,
                "specialty": "cardiologist",
                "experience": 3,
                "updatedAt": "2025-09-06T14:01:50.928Z",
                "createdAt": "2025-09-06T14:01:50.928Z"
            }
        }

  - **Screenshot:**
  ![App Screenshot](Photo/Creation_of_doctor.png)

- 2.2 Get All Doctors List
   - **GET** /api/doctors/:id
   - **Headers:**

        Authorization: Bearer <token>

  - **Response**

    ```[
        {
            "id": "54fefbbf-d766-4d3b-a502-433ac168f344",
            "name": "aman",
            "age": 31,
            "specialty": "cardiologist",
            "experience": 3,
            "createdAt": "2025-09-06T14:01:50.928Z",
            "updatedAt": "2025-09-06T14:01:50.928Z"
        },
        {
            "id": "9b377a9a-e7d4-4904-b452-f01059c061bc",
            "name": "Raju",
            "age": 45,
            "specialty": "xyz",
            "experience": 15,
            "createdAt": "2025-09-06T10:38:21.557Z",
            "updatedAt": "2025-09-06T14:13:17.533Z"
        }
    ]

   - **Screenshots**
   ![App Screenshot](Photo/Get_all_doctors.png)

- 2.3 Get specific Doctor by Id
   - **GET** /api/doctors/:id
   - **Headers:**
        Authorization: Bearer <token>

  - **Response**

    ```
    {
        "id": "54fefbbf-d766-4d3b-a502-433ac168f344",
        "name": "aman",
        "age": 31,
        "specialty": "cardiologist",
        "experience": 3,
        "createdAt": "2025-09-06T14:01:50.928Z",
        "updatedAt": "2025-09-06T14:01:50.928Z"
    }

   - **Screenshots**
   ![App Screenshot](Photo/Get_doctor_by_id.png)


- 2.4 Update Doctor details
   - **PUT** /api/doctors/:id
   - **Headers:**
        Authorization: Bearer <token>

  - **Request Body**

    ```
    {
        "name":"Raju",
        "age":45,
        "experience":15
    }

  - **Response**

  ```
    {
        "message": "Doctor details updated successfully",
        "doctor": {
            "id": "9b377a9a-e7d4-4904-b452-f01059c061bc",
            "name": "Raju",
            "age": 45,
            "specialty": "xyz",
            "experience": 15,
            "createdAt": "2025-09-06T10:38:21.557Z",
            "updatedAt": "2025-09-06T14:13:17.533Z"
        }
    }
    ```
        
   - **Screenshot:**
   ![App Screenshot](Photo/Update_doctor_details.png)


- 2.5 Delete Specific Doctor by Id
   - **DELETE** /api/doctors/:id
   - **Headers:**
        Authorization: Bearer <token>

   - **Response:**
        
        ```
        {
            "message": "Doctor deleted"
        }
        ```

   - **Screenshot:**
   ![App Screenshot](Photo/Delete_doctor_by_id.png)
   

**3. For Patient**

- 3.1 Create a Patient
  - **POST** api/patients
  - **Headers:**

        Authorization: Bearer <token>
  - **Request Body**

        {
            "name": "Rampal Singh",
            "date_of_birth": "1990-05-15",
            "gender": "male",
            "contact_number": "+919876543210",
            "medicalHistory": "Patient has a history of mild asthma and seasonal allergies."
        }


  - **Response:**

        {
            "id": "bffdc0fd-0959-4faa-a7bf-1ccf627d94b3",
            "name": "Rampal Singh",
            "date_of_birth": "1990-05-15",
            "gender": "male",
            "contact_number": "+919876543210",
            "medicalHistory": "Patient has a history of mild asthma and seasonal allergies.",
            "updatedAt": "2025-09-06T15:13:52.975Z",
            "createdAt": "2025-09-06T15:13:52.975Z"
        }

  - **Screenshot:**
  ![App Screenshot](Photo/Creation_of_patient.png)

- 3.2 Get All Patients List
   - **GET** /api/patients/:id
   - **Headers:**

        Authorization: Bearer <token>

  - **Response**

    ```[
        {
            "id": "8e2df63b-c691-4e2b-98e5-39544f7949d5",
            "name": "Raju",
            "date_of_birth": "1990-05-15",
            "gender": "male",
            "contact_number": "+919876543210",
            "medicalHistory": "Patient has a history of mild asthma and seasonal allergies.",
            "createdAt": "2025-09-06T10:37:12.877Z",
            "updatedAt": "2025-09-06T10:37:12.877Z"
        },
        {
            "id": "bffdc0fd-0959-4faa-a7bf-1ccf627d94b3",
            "name": "Rampal Singh",
            "date_of_birth": "1990-05-15",
            "gender": "male",
            "contact_number": "+919876543210",
            "medicalHistory": "Patient has a history of mild asthma and seasonal allergies.",
            "createdAt": "2025-09-06T15:13:52.975Z",
            "updatedAt": "2025-09-06T15:13:52.975Z"
        }
    ]

   - **Screenshots**
   ![App Screenshot](Photo/Get_all_patients.png)

- 3.3 Get specific Patient by Id
   - **GET** /api/patients/:id
   - **Headers:**
        Authorization: Bearer <token>

  - **Response**

    ```
    {
        "id": "bffdc0fd-0959-4faa-a7bf-1ccf627d94b3",
        "name": "Rampal Singh",
        "date_of_birth": "1990-05-15",
        "gender": "male",
        "contact_number": "+919876543210",
        "medicalHistory": "Patient has a history of mild asthma and seasonal allergies.",
        "createdAt": "2025-09-06T15:13:52.975Z",
        "updatedAt": "2025-09-06T15:13:52.975Z"
    }

   - **Screenshots**
   ![App Screenshot](Photo/Get_patient_by_id.png)


- 3.4 Update Patient details
   - **PUT** /api/patients/:id
   - **Headers:**
        Authorization: Bearer <token>

  - **Request Body**

    ```
    {
        "name":"Rampal singh saini",
        "date_of_birth": "1985-05-15"
    }


  - **Response**

  ```
    {
        "id": "bffdc0fd-0959-4faa-a7bf-1ccf627d94b3",
        "name": "Rampal singh saini",
        "date_of_birth": "1985-05-15",
        "gender": "male",
        "contact_number": "+919876543210",
        "medicalHistory": "Patient has a history of mild asthma and seasonal allergies.",
        "createdAt": "2025-09-06T15:13:52.975Z",
        "updatedAt": "2025-09-06T15:21:18.137Z"
    }
    ```
        
   - **Screenshot:**
   ![App Screenshot](Photo/Update_patient_details.png)


- 3.5 Delete Specific Doctor by Id
   - **DELETE** /api/doctors/:id
   - **Headers:**
        Authorization: Bearer <token>

   - **Response:**
        
        ```
        {
            "message": "Doctor deleted"
        }
        ```

   - **Screenshot:**
   ![App Screenshot](Photo/Delete_patient_by_id.png)
   

**4. For Mapping**

- 4.1 Create a Mapping
  - **POST** api/mappings
  - **Headers:**

        Authorization: Bearer <token>
  - **Request Body**

        {
            "patientId":"bffdc0fd-0959-4faa-a7bf-1ccf627d94b3",
            "doctorId":"9b377a9a-e7d4-4904-b452-f01059c061bc"
        }


  - **Response:**

        {
            "id": "c7ba2acb-8d89-4cee-b3b7-acebb00027b7",
            "patientId": "bffdc0fd-0959-4faa-a7bf-1ccf627d94b3",
            "doctorId": "9b377a9a-e7d4-4904-b452-f01059c061bc",
            "updatedAt": "2025-09-06T15:26:49.389Z",
            "createdAt": "2025-09-06T15:26:49.389Z"
        }

  - **Screenshot:**
  ![App Screenshot](Photo/Creation_of_mapping.png)

- 4.2 Get mapping List
   - **GET** /api/mappings/
   - **Headers:**

        Authorization: Bearer <token>

  - **Response**

    ```[
            {
                "id": "c7ba2acb-8d89-4cee-b3b7-acebb00027b7",
                "createdAt": "2025-09-06T15:26:49.389Z",
                "updatedAt": "2025-09-06T15:26:49.389Z",
                "doctorId": "9b377a9a-e7d4-4904-b452-f01059c061bc",
                "patientId": "bffdc0fd-0959-4faa-a7bf-1ccf627d94b3"
            }
        ]

   - **Screenshots**
   ![App Screenshot](Photo/Get_mappings_list.png)

- 4.3 Get specific Patient's with mapping with Doctors
   - **GET** /api/patients/:id
   - **Headers:**
        Authorization: Bearer <token>

  - **Response**

    ```
    [
        {
            "id": "9b377a9a-e7d4-4904-b452-f01059c061bc",
            "name": "Raju",
            "age": 45,
            "specialty": "xyz",
            "experience": 15,
            "createdAt": "2025-09-06T10:38:21.557Z",
            "updatedAt": "2025-09-06T14:13:17.533Z"
        }
    ]

   - **Screenshots**
   ![App Screenshot](Photo/Get_patient_mapped_with_doctors.png)

- 4.4 Delete Specific mapping by Id
   - **DELETE** /api/mappings/:id
   - **Headers:**
        Authorization: Bearer <token>

   - **Response:**
        
        ```
        {
            "message": "Mapping removed"
        }
        ```

   - **Screenshot:**
   ![App Screenshot](Photo/Delete_mapping_by_id.png)
   
## 3. Flow Diagram

[Figma Link](https://www.figma.com/board/BwyJ5fonUcVXOdA8Roz5UG/Untitled?node-id=1-357&t=ucUtY5ZVssCqUJHo-0)

- **Screenshot:**
  ![App Screenshot](Photo/Flow_diagram.png)


---------------------------------------------------------------------------------------------------

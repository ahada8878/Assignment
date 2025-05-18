pipeline {
    agent any

    environment {
        COMPOSE_PROJECT_NAME = 'new_project_name'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/ahada8878/Assignment.git'
'
            }
        }

        stage('Build with Docker Compose') {
            steps {
                script {
                    sh "docker-compose -p ${env.COMPOSE_PROJECT_NAME} -f docker-compose.yml up -d --build"
                }
            }
        }
    }
}

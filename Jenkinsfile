pipeline {
    agent any

    environment {
        COMPOSE_PROJECT_NAME = 'new_project_name'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/ahada8878/Assignment.git'
            }
        }

        stage('Build with Docker Compose') {
            steps {
                script {
                    // Stop any running containers for clean build
                    sh "docker-compose -p ${env.COMPOSE_PROJECT_NAME} -f docker-compose.yml down || true"
                    // Build and start containers
                    sh "docker-compose -p ${env.COMPOSE_PROJECT_NAME} -f docker-compose.yml up -d --build"
                }
            }
        }
    }

    post {
        failure {
            echo 'Build failed. Check Docker containers and ports.'
        }
    }
}

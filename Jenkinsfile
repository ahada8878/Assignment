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

        stage('Clean Up Docker') {
            steps {
                script {
                    // Stop any containers that are using port 8081
                    sh '''
                    CONTAINERS=$(docker ps -q --filter "publish=8081")
                    if [ -n "$CONTAINERS" ]; then
                      docker rm -f $CONTAINERS
                    fi
                    '''
                }
            }
        }

        stage('Build with Docker Compose') {
            steps {
                script {
                    sh "docker-compose -p ${env.COMPOSE_PROJECT_NAME} -f docker-compose.yml down || true"
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

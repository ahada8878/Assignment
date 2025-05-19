pipeline {
    agent any

    environment {
        CONTAINER_NAME = 'myapp_container'
        IMAGE_NAME = 'myapp_image'
        APP_PORT = '8081' // both internal and external
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/ahada8878/Assignment.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build the image with latest code
                    sh "docker build -t ${IMAGE_NAME} ."
                }
            }
        }

        stage('Stop Existing Container') {
            steps {
                script {
                    // Stop and remove old container if it exists
                    sh """
                    if [ \$(docker ps -aq -f name=${CONTAINER_NAME}) ]; then
                        docker rm -f ${CONTAINER_NAME}
                    fi
                    """
                }
            }
        }

        stage('Run Updated Container') {
            steps {
                script {
                    // Start new container with same name and port
                    sh """
                    docker run -d \
                        --name ${CONTAINER_NAME} \
                        -p ${APP_PORT}:${APP_PORT} \
                        ${IMAGE_NAME}
                    """
                }
            }
        }
    }

    post {
        failure {
            echo '❌ Build failed. Check Docker image or container issues.'
        }
        success {
            echo '✅ App successfully rebuilt and running on port 8081.'
        }
    }
}

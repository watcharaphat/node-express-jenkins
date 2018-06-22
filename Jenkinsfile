pipeline {
    agent {
        docker {
            image 'node:8.9-alpine'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true' 
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') { 
            steps {
                sh 'npm test'
            }
        }
        stage('Deployment') {
            stages {
                sh './scripts/deploy.sh'
            }
        }
    }
    post {
        success {
            slackSend color: "good", message: "Job: ${env.JOB_NAME} with buildnumber ${env.BUILD_NUMBER} was SUCCESSFUL"
        }
        failure {
            slackSend color: "danger", message: "Job: ${env.JOB_NAME} with buildnumber ${env.BUILD_NUMBER} was FAILED"
        }
        always {
            slackSend color: "#4FC3F7", message: "http://ci.watcharaphat.com/blue/organizations/jenkins/${env.JOB_NAME}/detail/${env.JOB_NAME}/${env.BUILD_NUMBER}/pipeline"
        }
    }
}
pipeline {
    agent any
parameters{
     choice(name:'BRANCH_NAME',
      choices:'master\ndevelopment\nstaging',
      description:'choose the branch to build and deploy')
   }
    stages {
        stage('Installing dependecies') {
            steps {
                echo 'Installing dependecies..'
                sh'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                echo 'npm lint'
            }
        }
        stage('Deploying') {
            steps {
                echo 'Deploying..'
                sh 'npm start'
                echo 'deployed'
            }
        }
    }
}
pipeline {
    agent any
    
    tools {
      nodejs 'node18'
    }

    environment {
      DOCKER_IMAGE_VERSION = '0.1.4'
      EC2_TEST_PUBLIC_IP = '44.201.209.103'
      EC2_PUBLIC_IP = '44.201.134.176'
    }

    stages {
        stage('Prepare') {
            steps {
                sh 'npm install'
            }
        }

        stage('Check Format') {
            steps {
                sh 'npm run check-format'
            }
        }

        stage('Static Code Analysis') {
            steps {
                sh 'npm run sca'
            }
        }

        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Prepare Image') {
            steps {
                sh 'docker build -t jsoneditor:${DOCKER_IMAGE_VERSION} .'
            }
        }

        stage('Push Image') {
            steps {
                withCredentials([
                  usernamePassword(credentialsId: 'dockerHub', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')
                ]) {
                  sh 'docker login -u ${dockerHubUser} -p ${dockerHubPassword}'
                  sh 'docker image tag jsoneditor:${DOCKER_IMAGE_VERSION} ${dockerHubUser}/jsoneditor:${DOCKER_IMAGE_VERSION}'
                  sh 'docker push ${dockerHubUser}/jsoneditor:${DOCKER_IMAGE_VERSION}'
                }
            }
        }

        stage('Deploy Test') {
          steps {
            script {
              def remote = [:]
              remote.allowAnyHosts = true
              remote.name = 'jsoneditor-ec2-test'
              remote.host = EC2_TEST_PUBLIC_IP
              
              withCredentials([
                sshUserPrivateKey(credentialsId: 'sshEC2Test', keyFileVariable: 'identity', passphraseVariable: '', usernameVariable: 'userName'),
                usernamePassword(credentialsId: 'dockerHub', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')
              ]) {
                  remote.user = userName
                  remote.identityFile = identity
                  
                  sshCommand remote: remote, command: 'docker stop $(docker ps -a -q)'
                  sshCommand remote: remote, command: "docker pull ${dockerHubUser}/jsoneditor:${DOCKER_IMAGE_VERSION}"
                  sshCommand remote: remote, command: "docker run -d -p 80:80 ${dockerHubUser}/jsoneditor:${DOCKER_IMAGE_VERSION}"
              }
            }
          }
        }

        stage('Promote to production?') {
            steps {
                script {
                    try {
                        timeout(time: 5, unit: 'MINUTES') {
                            deployToProd = input(
                                    message: 'Promote the build to prod?',
                                    parameters: [
                                            [$class      : 'BooleanParameterDefinition',
                                             defaultValue: false,
                                             description : 'Ticking this box will do a prod deployment',
                                             name        : 'Prod Deploy']
                                    ])
                        }
                    } catch (ignored) { // timeout reached or input Aborted
                        deployToProd = false
                    }
                }
            }
        }

        stage('Deploy Prod') {
          when {
              expression {
                  deployToProd as boolean
              }
          }
          steps {
            script {
              def remote = [:]
              remote.allowAnyHosts = true
              remote.name = 'jsoneditor-ec2'
              remote.host = EC2_PUBLIC_IP
              
              withCredentials([
                sshUserPrivateKey(credentialsId: 'sshEC2', keyFileVariable: 'identity', passphraseVariable: '', usernameVariable: 'userName'),
                usernamePassword(credentialsId: 'dockerHub', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')
              ]) {
                  remote.user = userName
                  remote.identityFile = identity
                  
                  sshCommand remote: remote, command: 'docker stop $(docker ps -a -q)'
                  sshCommand remote: remote, command: "docker pull ${dockerHubUser}/jsoneditor:${DOCKER_IMAGE_VERSION}"
                  sshCommand remote: remote, command: "docker run -d -p 80:80 ${dockerHubUser}/jsoneditor:${DOCKER_IMAGE_VERSION}"
              }
            }
          }
        }
    }
}

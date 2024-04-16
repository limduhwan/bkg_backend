pipeline {
  agent any

  stages {
    stage('01. Hello') {
      steps {
        echo 'Hello Jenkins'
      }
    }

    stage('02. Githup 소스 가져오기')
      steps {
        script {
            git credentialsId: 'github_accesstoken', url: 'https://github.com/limduhwan/bkg_backend.git'
        }
      }
    }
}

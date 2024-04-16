pipeline {
  environment {
    registry = "ismile2u/bkg_msa"
    DOCKER_CREDENTIAL = 'docker_accesstoken'
    DOCKER_IMAGE      = ''
    DOCKER_USERNAME   = 'limduhwan@gmail.com'
    DOCKER_PASSWORD   = 'yesseancan0!'
  }

  agent any
  tools {nodejs "nodejs"}

  stages {
    stage('01. Hello') {
      steps {
        echo 'Hello Jenkins'
      }
    }

    stage('02. Githup 소스 가져오기') {
      steps {
        git credentialsId: 'github_accesstoken', url: 'https://github.com/limduhwan/bkg_backend.git'
      }

    stage('03. 소스코드 컴파일') {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }

    stage('04. 소스코드를 이미지로 빌드') {
      steps {
        sh "docker -v"
      }
    }



  }
}

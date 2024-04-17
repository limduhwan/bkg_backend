pipeline {
  environment {
    registry = "ismile2u/bkg_msa"
    PROJECT_NAME      = 'bkg-backend'
    // Jenkins Crendential 매니저에 저장된 도커 허브 접속용 액세스키
    DOCKER_CREDENTIAL = 'docker_accesstoken'

    // 평문저장! 도커 허브 접속 정보
    DOCKER_USERNAME   = 'ismile2u'
    DOCKER_PASSWORD   = 'yesseancan0!'

    // AWS 이미지 저장소 위치와 액세스키
    AWS_ECR_REGISTRY = '992382447222.dkr.ecr.ap-northeast-2.amazonaws.com/bkg_backend'
    AWS_ECR_CREDENTIAL = 'aws_accesstoken'

    IMAGE_NAME      = ''
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

        script {
          withCredentials([usernamePassword(credentialsId: "${DOCKER_CREDENTIAL}", usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
            DOCKER_USERNAME = "${DOCKER_USERNAME}"
            DOCKER_PASSWORD = "${DOCKER_PASSWORD}"
            IMAGE_NAME = "${PROJECT_NAME}:${BUILD_NUMBER}"
          }

          sh "docker build -t ${IMAGE_NAME} -f ./Dockerfile ."
          sh "docker inspect ${IMAGE_NAME}"
        }
      }
    }

    stage('05. AWS 이미지 저장소(ECR)로 밀어 넣기'){
      steps {
        script{
          docker.withRegistry("https://" + AWS_ECR_REGISTRY, "ecr:ap-northeast-2:" + AWS_ECR_CREDENTIAL) {

          echo 'IMAGE_NAME ==============='
          echo "${IMAGE_NAME}"
          echo 'IMAGE_NAME ==============='

          docker.image("${IMAGE_NAME}:${BUILD_NUMBER}").push()
          docker.image("${IMAGE_NAME}:latest").push()
          }
        }
      }
    }




  }
}

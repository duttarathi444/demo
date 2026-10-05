pipeline{
  agent {label 'node16'}
  triggers{
    pollSCM('* * * * *')
  }
  stages{
    stage("GIT"){
      steps{
        git branch: 'master',
            url: 'https://github.com/duttarathi444/demo.git'
      }
    }
    stage("BUILD"){
      steps{
        sh 'npm install'
        sh 'npm run build'
      }
      post{
        always{
          zip zipFile: './public.zip',
              archive: true,
        }
        cleanup{
          sh 'rm -rf ./public.zip'
          sh 'rm -rf ./node_modules'
        }
      }
    }
  }
}
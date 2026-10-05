pipeline{
  agent {label 'node16'}
  stages{
    stage("GIT"){
      steps{
        git branch: 'master',
            url: 'https://github.com/duttarathi444/demo.git'
      }
    }
    stage("BUILD"){
      steps{
        sh 'npm install',
        sh 'npm run build'
      }
      post{
        always{
          zipFile: './dist',
          archive: true,
          dir: './public'
        }
        cleanup{
          sh 'rm -rf ./dist'
          sh 'rm -rf ./node_modules'
        }
      }
    }
  }
}
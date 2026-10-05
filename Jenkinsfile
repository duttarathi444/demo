pipeline{
  agent {label 'node16'}
  tools {
    nodejs 'node18'
  }
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
        sh '''
            # Source NVM if Node was installed via NVM
            export NVM_DIR="$HOME/.nvm"
            [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
            
            # Fallback: Add standard binary paths to PATH
            export PATH="/usr/local/bin:/usr/bin:/bin:$PATH"
            
            npm install
            npm run build
        '''
      }
      post{
        always{
          zip zipFile: './public.zip',
              archive: true,
              dir: './public'
        }
        cleanup{
          sh 'rm -rf ./public.zip'
          sh 'rm -rf ./node_modules'
        }
      }
    }
  }
}
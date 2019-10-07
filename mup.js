module.exports = {
  servers: {
    one: {
      // TODO: set host address, username, and authentication method
      host: '3.18.245.213',
      username: 'ubuntu',
      pem: '~/.ssh/snapsim.pem'
      // password: 'server-password'
      // or neither for authenticate from ssh-agent
    }
  },

  app: {
    // TODO: change app name and path
    name: 'snapsim',
    path: '../',
    deployCheckPort: 80,
    // deployCheckPort:  443,

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
      //debug: true,
    },

    env: {
      // TODO: Change to your app's url
      // If you are using ssl, it needs to start with https://
      NODE_ENV: 'development',
      ROOT_URL: 'http://3.18.245.213',
      MONGO_URL: 'mongodb://mongodb/meteor',
      MONGO_OPLOG_URL: 'mongodb://mongodb/local',
    },

    docker: {
      // change to 'abernix/meteord:base' if your app is using Meteor 1.4 - 1.5
      //image: 'abernix/meteord:node-8.4.0-base',
      image: 'zodern/meteor:root',
    },

    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: true
  },

  mongo: {
    version: '3.4.1',
    servers: {
      one: {}
    }
  },

  // (Optional)
  // Use the proxy to setup ssl or to route requests to the correct
  // app when there are several apps
  //
/*  proxy: {
    domains: 'snapsim.net,www.snapsim.net',
    ssl: {
      // Enable Let's Encrypt
      letsEncryptEmail: 'admin@snapsim.net',
      forceSSL: true,
    }
  }*/
  plugins: ['mup-disk'],
};



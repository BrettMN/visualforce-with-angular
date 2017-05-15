var Visualforce = {
  remoting: {
    Manager: {
      invokeAction: (name, ...rest) => {
        mockRemotes[name](...rest)
      }
    }
  }
}
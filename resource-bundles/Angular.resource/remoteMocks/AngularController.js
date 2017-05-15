var mockRemotes = mockRemotes || {};

mockRemotes['AngularController.GetContacts'] = function (callback) {

        let resultsText = `[{"statusCode":200,"status":true,"type":"rpc","tid":2,"ref":false,"action":"TryAngularController","method":"GetContacts","result":[{"Id":"003j0000008CVYmAAO","Name":"Pat Stumuller"},{"Id":"003j0000008CVYnAAO","Name":"Andy Young"},{"Id":"003j0000008CVYoAAO","Name":"Tim Barr"},{"Id":"003j0000008CVYjAAO","Name":"Rose Gonzalez"},{"Id":"003j0000008CVYkAAO","Name":"Sean Forbes"},{"Id":"003j0000008CVYlAAO","Name":"Jack Rogers"},{"Id":"003j0000008CVYrAAO","Name":"Lauren Boyle"},{"Id":"003j0000008CVYpAAO","Name":"John Bond"},{"Id":"003j0000008CVYqAAO","Name":"Stella Pavlova"},{"Id":"003j0000008CVYsAAO","Name":"Babara Levy"},{"Id":"003j0000008CVYtAAO","Name":"Josh Davis"},{"Id":"003j0000008CVYuAAO","Name":"Jane Grey"},{"Id":"003j0000008CVYvAAO","Name":"Arthur Song"},{"Id":"003j0000008CVYwAAO","Name":"Ashley James"},{"Id":"003j0000008CVYxAAO","Name":"Tom Ripley"},{"Id":"003j0000008CVYyAAO","Name":"Liz D'Cruz"},{"Id":"003j0000008CVYzAAO","Name":"Edna Frank"},{"Id":"003j0000008CVZ0AAO","Name":"Avi Green"},{"Id":"003j0000008CVZ1AAO","Name":"Siddartha Nedaerk"},{"Id":"003j0000008CVZ2AAO","Name":"Jake Llorrac"}]}]`
        let event = JSON.parse(resultsText);
        callback(event[0].result, event[0])

};
mockRemotes['AngularController.GetContact'] = function (id, callback) {

        let resultsText = `[{"statusCode":200,"status":true,"type":"rpc","tid":3,"ref":false,"action":"TryAngularController","method":"GetContact","result":{"Id":"003j0000008CVYmAAO","Name":"Pat Stumuller","Email":"patstumuller@pyramid.net"}}]`

        let event = JSON.parse(resultsText);
        callback(event[0].result, event[0])

};

